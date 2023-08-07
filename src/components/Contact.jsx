import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import quora from "./uploads/quora-removebg-preview.png";
import linkedin from "./uploads/linkedinIcon.png";
import git from "./uploads/GitHub-Mark-64px.png";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import 'dotenv/config';
// require('dotenv').config();

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(process.env.PUBLIC_API);
    emailjs
      .send(
        process.env.SERVICE_API,
       process.env.TEMPLATE_API,
        {
          from_name: form.name,
          to_name: "Ayush",
          from_email: form.email,
          to_email: "ayushag.cse@gmail.com",
          message: form.message,
        },
        process.env.PUBLIC_API
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div style={{marginTop:"-80px"}} 
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-3 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-[#021526] p-8 rounded-2xl'
      >
          <div className="flex">
              <a
                href="https://www.linkedin.com/in/ayush-agarwal52/"
                target="_blank"
              >
                <img width={"26px"}  src={linkedin} />
              </a>{" "}
              &nbsp;&nbsp;
              <a
                href="https://www.quora.com/profile/Ayush-Agarwal-1154"
                target="_blank"
              >
                <img width="33px" src={quora} />
              </a>
              &nbsp;&nbsp;
              <a href="https://github.com/agarwalayush9" target="_blank">
                <img width="30px" src={git} />
              </a>
              &nbsp;&nbsp;
              <a
                href="mailto:ayushag.cse@gmail.com"
                style={{ textDecoration: "none", fontSize: "25px" , marginTop:"-3px"}}
                target="_blank"
              >
                📧
              </a>
            </div>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-[#042542] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-[#042542] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-[#042542] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-[#042542] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");