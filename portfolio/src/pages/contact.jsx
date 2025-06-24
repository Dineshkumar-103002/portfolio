import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const SERVICE_ID = "service_6dw0zad";
const TEMPLATE_ID = "template_g2t3775";
const USER_ID = "RCApYstziuGZcv2ph";

const Contact = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 md:px-12 bg-gradient-to-r from-[#393e46] via-[#222831] to-[#00adb5] min-h-[60vh] flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#e0f7fa] mb-6">
        Contact
      </h2>
      <p className="text-[#e0f7fa] mb-10 max-w-xl text-center">
        Interested in collaborating, have a question, or just want to say hello?
        <br />
        I’d love to connect!
      </p>


      <div className="flex flex-col gap-4 mb-10">

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="flex items-center gap-3">
            <EmailIcon className="text-[#00adb5] text-2xl" />
            <a href="mailto:dineshkumartech2002@gmail.com" className="text-[#e0f7fa] hover:text-[#00adb5] transition">
              dineshkumartech2002@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <PhoneIcon className="text-[#00adb5] text-2xl" />
            <a href="tel:+918825670478" className="text-[#e0f7fa] hover:text-[#00adb5] transition">
              +91 88256 70478
            </a>
          </div>
          <div className="flex items-center gap-3">
            <LinkedInIcon className="text-[#00adb5] text-2xl" />
            <a href="https://www.linkedin.com/in/dinesh-kumar-v-2a20a2257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-[#e0f7fa] hover:text-[#00adb5] transition">
              linkedin.com/in/dineshkumarv
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="flex items-center gap-3">
            <InstagramIcon className="text-[#00adb5] text-2xl" />
            <a
              href="https://www.instagram.com/wizard_god_10?igsh=MW41MXVzYm51aWVxYQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e0f7fa] hover:text-[#00adb5] transition"
            >
              instagram.com/wizard_god_10
            </a>
          </div>
          <div className="flex items-center gap-3">
            <TwitterIcon className="text-[#00adb5] text-2xl" />
            <a
              href="https://twitter.com/wizard_god_10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e0f7fa] hover:text-[#00adb5] transition"
            >
              twitter.com/wizard_god_10
            </a>
          </div>
        </div>
      </div>

      <form
        ref={form}
        className="bg-white/80 rounded-xl shadow-lg p-8 w-full max-w-lg flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="px-4 py-2 rounded border border-[#00adb5] focus:outline-none focus:ring-2 focus:ring-[#00adb5] bg-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="px-4 py-2 rounded border border-[#00adb5] focus:outline-none focus:ring-2 focus:ring-[#00adb5] bg-white"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          className="px-4 py-2 rounded border border-[#00adb5] focus:outline-none focus:ring-2 focus:ring-[#00adb5] bg-white"
          required
        />
        <button
          type="submit"
          className="mt-2 px-6 py-2 bg-[#00adb5] text-white rounded-full font-semibold hover:bg-[#222831] transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
