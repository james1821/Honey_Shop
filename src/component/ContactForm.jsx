import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import HandmadeLogo from "../assets/img/Logo.png";

function ContactForm() {
  const form = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      setErrorMessage("Please fill out all fields. Thank you!");
      setIsModalOpen(true);
      return;
    }

    setIsSubmitDisabled(true);

    emailjs
      .sendForm(
        "service_fxww3rr",
        "template_ueqzu8m",
        form.current,
        "vd4v3CfMrsVxlngJv"
      )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setIsModalOpen(true);
      })
      .catch((error) => {
        console.error("Email not sent:", error);
      })
      .finally(() => {
        setIsSubmitDisabled(false);
      });
  }

  return (
    <div
      id="Contacts"
      className="h-full flex flex-col justify-center items-center"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col justify-center items-end gap-2 "
      >
        <input
          className="border-2 border-black rounded-lg p-2 m-auto"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className="border-2 border-black rounded-lg p-2 m-auto"
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <textarea
          className="border-2 border-black rounded-lg p-2 m-auto"
          name="message"
          placeholder="Your Message"
        />
        <button
          className="bg-pink-500 text-white rounded-md p-2 m-auto mb-2"
          type="submit"
          disabled={isSubmitDisabled}
        >
          Send Email
        </button>
      </form>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white border-4 border-black rounded-lg p-4 shadow-md lg:w-1/2 w-3/4 text-center">
            {errorMessage && (
              <p className="text-red-500 font-bold mb-4">{errorMessage}</p>
            )}
            {!errorMessage && (
              <p className="lg:text-5xl text-2xl">
                We have received your Email! Thank you for contacting us.
              </p>
            )}
            <img
              src={HandmadeLogo}
              alt=""
              className="lg:h-40 h-30 py-5 m-auto"
            />
            <button
              className="bg-pink-500 text-white text-2xl px-4 py-2 mt-2 rounded"
              onClick={() => {
                setIsModalOpen(false);
                setErrorMessage("");
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
