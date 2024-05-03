import React, { useState } from 'react';
import './UserProfileForm.css';

const UserProfileForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [submittedProfiles, setSubmittedProfiles] = useState([]);

  const isValidPhoneNumber = (phoneNumber) => {
    const phonePattern = /^[7-9][0-9]{9}$/; 
    return phonePattern.test(phoneNumber);
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailPattern.test(email);
  };

  const isValidName = (name) => {
    const namePattern = /^[a-zA-Z]+$/;
    return namePattern.test(name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValidName(name)) {
      alert('Alphabets and numbers are not allowed in names');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Please provide a valid email');
      return;
    }

    if (!isValidPhoneNumber(phone)) {
      alert('Please check your phone number. Only Indian and Pakistan phone numbers are expected');
      return;
    }
    const newProfile = {
      name: name,
      email: email,
      phone: phone,
      hobbies: hobbies,
    };

    setSubmittedProfiles([...submittedProfiles, newProfile]);
    setName('');
    setEmail('');
    setPhone('');
    setHobbies('');
  };

  const handleDeleteProfile = (index) => {
      const newProfiles = submittedProfiles.filter((item, id) => id !== index);
      setSubmittedProfiles(newProfiles);
      alert('Data Deleted');
    
  };

  return (
    <div className="container">
      <h2>User Profile Form</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <strong>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </strong>
          <strong>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </strong>
          <strong>
            Phone Number:
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </strong>
          <strong>
            Hobbies:
            <input value={hobbies} onChange={(e) => setHobbies(e.target.value)} />
          </strong>
          <button type="submit">Submit</button>
        </form>

        <div className="list">
          <h2>Submitted Profiles:</h2>
          {submittedProfiles.map((item, id) => (
            <div key={id} className="profile-card">
              <div><strong>Name:</strong> {item.name}</div>
              <div><strong>Email:</strong> {item.email}</div>
              <div><strong>Phone:</strong> {item.phone}</div>
              <div><strong>Hobbies:</strong> {item.hobbies}</div>
              <button onClick={() => handleDeleteProfile(id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfileForm;
