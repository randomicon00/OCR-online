import React from "react";

const Contact = () => {
  return (
    <div id="contact-form">
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Message:
          <textarea />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default    Contact;
