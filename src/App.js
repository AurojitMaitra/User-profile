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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidName(name)) {
      alert('Damn, Your parents must hate you for giving you a name like that.');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Did you really forget your own email address? Thats literally the most important thing you have.');
      return;
    }

    if (!isValidPhoneNumber(phone)) {
      alert('How did you forget your own phone number?');
      return;
    }

    const newProfile = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      hobbies: hobbies.trim(),
    };

    setSubmittedProfiles([...submittedProfiles, newProfile]);
    setName('');
    setEmail('');
    setPhone('');
    setHobbies('');
  };

  const handleDeleteProfile = (index) => {
    const confirmation = window.confirm('Do you really want to delete the profile?');
    if (confirmation) {
      const reallyConfirmation = window.confirm('Think again!! Do you really really want to delete the profile?');
      if (reallyConfirmation) {
        const reallyreallyConfirmation = window.confirm('Last chance!! Do you really really really want to delete the profile?');
        if (reallyreallyConfirmation){
           const newProfiles = submittedProfiles.filter((item,id) => id !== index);
          setSubmittedProfiles(newProfiles);
          alert('Congratulations for inserting a data that was not needed after all');
        }
        
      }
    }
  };

  return (
    <div className="container">
      <h2>User Profile Form</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
          <label>
            Hobbies:
            <textarea
              value={hobbies}
              onChange={(e) => setHobbies(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>

        <div className="submitted-profiles">
          <h2>Submitted Profiles:</h2>
          {submittedProfiles.map((profile, index) => (
            <div key={index} className="profile-card">
              <h3>Profile {index + 1}:</h3>
              <div><strong>Name:</strong> {profile.name}</div>
              <div><strong>Email:</strong> {profile.email}</div>
              <div><strong>Phone:</strong> {profile.phone}</div>
              <div><strong>Hobbies:</strong> {profile.hobbies}</div>
              <button onClick={() => handleDeleteProfile(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfileForm;
