import React, { useState, useEffect } from 'react';
import profilePicPlaceholder from '../images/image1.jpg';
import '../CSS/Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    phone: '',
    profilePic: profilePicPlaceholder,
  });
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/user/profile');
        if (!response.ok) {
          console.error('Error fetching profile data: Status Code', response.status);
          throw new Error(`Network response was not ok, status ${response.status}`);
        }
        const data = await response.json();
        setProfile(prevProfile => ({ ...prevProfile, ...data }));
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);


  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/user/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile), // Assuming 'profile' is your state containing the form data
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Profile saved successfully:', data.message);
        // Here you could set some state to display the success message on the UI.
      } else {
        console.error('Error saving profile:', data.message);
        // Here you could set some state to display the error message on the UI.
      }
    } catch (error) {
      console.error('Network error:', error);
      // Handle network error, potentially set state to show error on UI.
    }
  };



  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const fileReader = new FileReader();
      fileReader.onload = function (e) {
        setProfile({ ...profile, profilePic: e.target.result });
      };
      fileReader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <article className="profile-container">
      <header className="profile-header">
        <img src={profile.profilePic} alt="Profile" className="profile-picture" />
        <input
          id="profile-picture-upload"
          type="file"
          onChange={handleImageChange}
          style={{ display: 'none' }}
          accept="image/*"
        />
        <label htmlFor="profile-picture-upload" className="edit-picture-button">
          Edit Profile Picture
        </label>
      </header>
      <div className="profile-info">
        <label htmlFor="firstname">First Name</label>
        <input
          id="firstname"
          name="firstname"
          value={profile.firstname}
          onChange={handleChange}
        />
        <label htmlFor="lastname">Last Name</label>
        <input
          id="lastname"
          name="lastname"
          value={profile.lastname}
          onChange={handleChange}
        />
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
        />
        <label htmlFor="address">Address</label>
        <input
          id="address"
          name="address"
          value={profile.address}
          onChange={handleChange}
        />
        <label htmlFor="phone">Phone No</label>
        <input
          id="phone"
          name="phone"
          value={profile.phone}
          onChange={handleChange}
        />
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      </div>
    </article>
  );
};

export default Profile;