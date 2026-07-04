import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt ,FaChild} from "react-icons/fa";
import { useRef } from "react";

import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_71e1cuf",
        "template_q3e90nm",
        form.current,
        "MakrPw9V-AEpwZhov",
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset(); 
      })

      .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
      });
  };
  return (
    <div>
      <div className="bg-[#0a192f]  flex justify-center items-center">
        <div className="working-area">
          <div className="connect-box text-center mt-25 ">
            <h1 className="text-6xl ">
              Let's <span className="text-gradient-neon">Connect</span>
            </h1>
            <p className="text-2xl mt-5 font-outfit text-[#A1A1A1]">
              Have a project in mind, or just want to say hi? . Feel free to
              reach out. I'm currently
            </p>
            <p className="text-2xl mt-1 font-outfit text-[#A1A1A1]">
              open to new opportunities.
            </p>
          </div>
          <div className="flex gap-10 mt-10">
            <div className="contact-info">
              <h1 className="text-3xl mt-10  flex  justify-center font-semibold">
                Contact Information
              </h1>
              <div>
                <div className="flex items-center gap-5 mt-6 ml-5 text-2xl">
                  <FaChild className="text-[#00d9FF] text-3xl" />
                  <div className="flex flex-col">
                    <p className="text-sm text-[#A1A1A1]">Name</p>
                    <span>Jayendra Pratap Singh</span>
                  </div>
                </div>

                <div className="flex gap-5 mt-6 ml-5 text-2xl">
                  <FaPhoneAlt className="text-[#00d9FF] text-3xl mt-3" />
                  <div className="flex flex-col">
                    <p className="text-sm text-[#A1A1A1]">Phone</p>
                    <span>+91 8795XXXXXX</span>
                  </div>
                </div>

                <div className="flex items-center gap-5 mt-6 ml-5 text-2xl">
                  <FaEnvelope className="text-[#00d9FF] text-3xl" />
                  <div className="flex flex-col">
                    <p className="text-sm text-[#A1A1A1]">Gmail</p>
                    <span>jayendra4pratap@gmail.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-6 ml-5 text-2xl">
                  <FaMapMarkerAlt className="text-[#00d9FF] text-3xl" />
                  <div className="flex flex-col">
                    <p className="text-sm text-[#A1A1A1]">Location</p>
                    <span>Raebareli, Uttar Pradesh, India</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="send-info">
              <form ref={form} onSubmit={sendEmail}>
                <div className="ml-5 font-bold">
                  <p className="text-sm text-[#A1A1A1]">Name</p>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="name w-full h-12 mt-2 rounded-md bg-[#0a192f] border border-gray-300 text-white px-3"
                  />
                </div>
                <div className="mt-2 ml-5 font-bold">
                  <p className="text-sm text-[#A1A1A1]">Email</p>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="email w-full h-12 mt-2 rounded-md bg-[#0a192f] border border-gray-300 text-white px-3"
                  />
                </div>
                <div className="message mt-2 ml-5 font-bold">
                  <p className="text-sm text-[#A1A1A1]">Message</p>
                  <textarea
                    placeholder="Type your message"
                    name="message"
                    className="w-full h-48 mt-2 rounded-md bg-[#0a192f] border border-gray-300 text-white px-3 py-2 resize-none focus:outline-none focus:border-[#00d9FF]"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button className="bg-[#00d9FF] text-white px-6 py-2 rounded-md mt-4 ml-5 hover:bg-[#00bcd4] transition-colors duration-300 cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
