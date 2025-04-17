// src/ContactList.js
import React, { useState, useEffect } from "react";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    setContacts(savedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = () => {
    if (!name.trim() || !phone.trim()) {
      alert("Please enter both name and phone number.");
      return;
    }
    if (contacts.some((contact) => contact.phone === phone)) {
      alert("This phone number already exists.");
      return;
    }
    setContacts([...contacts, { name, phone }]);
    setName("");
    setPhone("");
  };

  const deleteContact = (index) => {
    const newContacts = contacts.filter((_, i) => i !== index);
    setContacts(newContacts);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Contact List</h2>
      <div className="row mb-3">
        <div className="col-md-5 mb-2">
          <input
            className="form-control"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-5 mb-2">
          <input
            className="form-control"
            type="text"
            placeholder="Enter phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary w-100" onClick={addContact}>
            Add
          </button>
        </div>
      </div>

      <ul className="list-group">
        {contacts.map((contact, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            <span>
              {contact.name} - {contact.phone}
            </span>
            <button className="btn btn-danger btn-sm" onClick={() => deleteContact(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
