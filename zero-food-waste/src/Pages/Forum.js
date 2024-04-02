import React, { useState } from 'react';
import image1 from '../images/image1.jpg';
import CommentIcon from '@mui/icons-material/Comment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import '../CSS/Forum.css';

const Forum = () => {
  const [postText, setPostText] = useState('');
  const [image, setImage] = useState(null);
  const [titleOfYourThought, setTitleOfYourThought] = useState('');
  const [description, setDescription] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [items, setItems] = useState([]);

  const user = {
    name: 'Talha',
    profilePic: image1,
  };

  const toggleForm = () => setShowForm(!showForm);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      userName: user.name,
      titleOfYourThought, // Corrected variable name
      description,
      imageUrl: URL.createObjectURL(image),
    };
    setItems([...items, newItem]);
    
    setTitleOfYourThought('');
    setDescription('');
    setImage(null);
    setShowForm(false);
  };

  return (
    <div>
      <div className="post-container">
        <div className="user-info">
          <img src={user.profilePic} alt={user.name} className="profile-pic" />
          <p className="user-name">{user.name}</p>
        </div>
        <div className="post-prompt">
          <p>What do like to share today?</p>
        </div>
        <div className="add-prompt" onClick={toggleForm}>
          <p>Click here to add</p>
        </div>
      </div>

      {showForm && (
        <article className="donation-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title of your Thought"
              value={titleOfYourThought}
              onChange={(e) =>setTitleOfYourThought (e.target.value)}
              required
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <input
              type="file"
              onChange={handleImageChange}
              required
            />
            <button type="submit">Upload</button>
          </form>
        </article>
      )}

      <section className="feed">
        {items.map((item, index) => (
          <article key={index} className="feed-item">
            <div className="feed-item-image">
              <img src={item.imageUrl} alt={item.productName} />
            </div>
            <div className="feed-item-info">
              <h2>{item.userName}</h2>
              <h3>{item.titleOfYourThought}</h3>
              <p>{item.description }</p>
              <div className="feed-item-actions">
              <button>< FavoriteBorderIcon className="action-icon" />Love</button>
              <button>< MessageIcon className="action-icon" />Message</button>
              <button><CommentIcon className="action-icon" />Comments</button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Forum;
