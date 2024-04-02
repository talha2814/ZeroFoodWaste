import React, { useState, useEffect } from 'react';
import axios from 'axios';
import imagePlaceholder from '../images/image1.jpg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import '../CSS/Home.css';

const Home = () => {
  const [image, setImage] = useState(null);
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [items, setItems] = useState([]);
  const [unit, setUnit] = useState('');
  const [category, setCategory] = useState('');
  const [user, setUser] = useState({ name: '', profilePic: imagePlaceholder });


  useEffect(() => {
    const fetchUserDataAndItems = async () => {
      try {
        const token = localStorage.getItem('token');
        const userResponse = await axios.get('/api/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser({
          ...user,
          name: userResponse.data.name,
          profilePic: userResponse.data.profilePic || imagePlaceholder,
        });

        const itemsResponse = await axios.get('/api/items', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setItems(itemsResponse.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUserDataAndItems();
  }, []);

  const toggleForm = () => setShowForm(!showForm);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('userName', user.name);
    formData.append('productName', productName);
    formData.append('description', description);
    formData.append('quantity', quantity);
    formData.append('unit', unit);
    formData.append('category', category);
    formData.append('image', image);

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/api/items', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      setItems([...items, response.data]);
    } catch (error) {
      console.error('Error submitting the item:', error);
    }

    setProductName('');
    setDescription('');
    setQuantity('');
    setUnit('');
    setCategory('');
    setImage(null);
    setShowForm(false);
  };

  const deletePost = async (postId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`/api/items/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setItems(items.filter(item => item._id !== postId));
    } catch (error) {
      console.error('Error deleting the post:', error);
    }
  };

  return (
    <div>
      <div className="post-container">
        <div className="user-info">
          <img src={user.profilePic} alt={user.name} className="profile-pic" />
          <p className="user-name">{user.name}</p>
        </div>
        <div className="post-prompt">
          <p>What do you want to donate?</p>
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
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
             <input
              type="number"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              required
            >
              <option value="">Select Unit</option>
              <option value="kg">Kg</option>
              <option value="pcs">Pieces</option>
              <option value="ml">Ml</option>
             
            </select>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select Category</option>
              <option value="vegan">Vegan</option>
              <option value="meat">Meat</option>
              <option value="halal">Halal</option>
              <option value="Vegetable">Vegetable</option>
              <option value="Fruits">Fruits</option>
              <option value="Dairy">Dairy</option>
            </select>
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
              <h1>User: {item.userName}</h1>
              <h3 className="color">Prdouct Name: {item.productName}</h3>
              <p>Description: {item.description}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Unit: {item.unit}</p>
              <p>Category: {item.category}</p>
              <div className="feed-item-actions">
                <button><FavoriteBorderIcon className="action-icon" />Love</button>
                <button><MessageIcon className="action-icon" />Message</button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Home;
