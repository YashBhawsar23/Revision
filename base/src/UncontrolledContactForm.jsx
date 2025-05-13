import React, { useRef } from "react";

const UncontrolledContactForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    alert(`Uncontrolled Form:\nName: ${name}\nEmail: ${email}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Uncontrolled Contact Form</h2>
      <input type="text" ref={nameRef} placeholder="Enter name" required />
      <br />
      <input type="text" ref={emailRef} placeholder="Enter email" required />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledContactForm;
