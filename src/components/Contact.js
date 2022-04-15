import React from "react"
import "../css/Contact.css"

function Contact() {
  return (
    <div className="contact">
      <h2 className="contact__header">Contact</h2>
      <hr className="break" />
      <p className="contact__caption">
        If you have an oppurtunity to share, or would like or discuss anything,
        you can leave your details below.
      </p>
      <form className="contact__form">
        <input
          className="contact__form__name"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
        />
        <input
          className="contact__form__email"
          type="text"
          id="email"
          name="email"
          placeholder="E-mail"
        />
        <textarea
          className="contact__form__message"
          id="message"
          name="message"
          placeholder="Message"
        />
        <input
          className="contact__form__submit"
          type="submit"
          id="submit"
          name="submit"
        />
      </form>
    </div>
  )
}

export default Contact
