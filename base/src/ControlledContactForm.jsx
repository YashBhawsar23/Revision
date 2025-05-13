import React, { useState } from "react";

const ControlledContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Controlled Form:\nName: ${name}\nEmail: ${email}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Controlled Contact Form</h2>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          required
        />

        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ControlledContactForm;
