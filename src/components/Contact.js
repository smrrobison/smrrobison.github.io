import React from "react";
import { PiGithubLogo } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="contact-me" id="Contact">
      <h1>Contact</h1>
      <div className="Contact-Logos">
                <a href="https://www.linkedin.com/in/scottmrobison/" target="_blank" rel="noopener noreferrer">
                    <CiLinkedin size="2em" style={{marginRight: '20px', color:'black'}} />
                </a>
                <a href="https://github.com/smrrobison" target="_blank" rel="noopener noreferrer">
                    <PiGithubLogo size="2em" style={{marginRight: '20px', color:'black'}} />
                </a>
                <a href="mailto:srobisondev@gmail.com">
                    <MdOutlineEmail size="2em" style={{color:'black' }} />
                </a>
        </div>
    </div>
  );
};

export default Contact;
