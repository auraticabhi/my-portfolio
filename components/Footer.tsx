import React, { useRef, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import emailjs from "@emailjs/browser"; // Import EmailJS
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_btn7dj6",
        "template_ayfwxvt",
        formRef.current!,
        "ldtd_IdJeAYlkNZ_o"
      )
      .then(
        (response) => {
          console.log("Email sent!", response.status, response.text);
          setLoading(false);
          alert("Response sent successfully!");
          formRef.current?.reset(); // Optionally reset the form after submission
        },
        (error) => {
          console.error("Email failed to send!", error);
          setLoading(false);
          alert("Failed to send response");
        }
      );
  };

  return (
    <footer className="w-full pt-[2.5rem] relative mb-[3rem]" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 z-0">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[45vw] text-purple">Get in touch!</h1>
        <p className="text-white-200 md:mt-5 text-xs my-5 text-center">
          Questions, Thoughts, Or Have a project idea in mind? Drop me a line,
          and let&apos;s build something amazing together!
        </p>
        <div className="relative z-10 mt-[1.5rem]">
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="formfield-container flex flex-col">
              <div className="border-2 border-dashed border-purple rounded-lg">
                <input
                  type="email"
                  name="from_email"
                  placeholder="Enter your email address"
                  required
                  className="formfield bg-black focus:outline-none h-[3rem] p-[1rem] w-full rounded-lg"
                />
              </div>
              <div className="border-2 border-dashed border-purple rounded-lg mt-[1rem]">
                <textarea
                  name="message"
                  cols={50}
                  rows={10}
                  placeholder="How can I help?"
                  required
                  className="formfield focus:outline-none bg-black formfield-textarea p-[1rem] w-[21rem] md:w-full rounded-lg max-h-[15rem] resize-none"
                ></textarea>
              </div>
            </div>

            <div className="flex gap-[1.5rem]">
              <div className="mt-0">
                <MagicButton
                  title="Send"
                  icon={<FaLocationArrow />}
                  position="right"
                  disabled={loading}
                  otherClasses="md:mt-[1rem] mt-[1rem]"
                />
              </div>
              {loading && (
                <div id="loader" className="loader mt-[28px]">
                  Loading...
                </div>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center relative z-10">
        <p className="md:text-base text-sm md:font-normal font-light">
          Made with &#9829; by Abhi
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-[1rem] md:mt-0">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 text-white cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.url} target="_blank">
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
