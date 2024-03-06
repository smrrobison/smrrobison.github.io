import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { PiGithubLogo } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { TbHexagonLetterS } from "react-icons/tb";

const Sidebar = () => {
    return (
        <div style={{ width: '15%', position: 'fixed', top: '20%' }}>
            <div className="Home-Icon">
                <a href="#Top">
                    <TbHexagonLetterS size="3em" style={{ color:'white'}} />
                </a>
            </div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><a href="#Experience" className="Menu-Option">Experience</a></li>
                <li><a href="#Skills" className="Menu-Option">Skills</a></li>
                <li><a href="#Projects" className="Menu-Option">Projects</a></li>
                <li><a href="#Contact" className="Menu-Option">Contact Me</a></li>
            </ul>
            <div className="Logos">
                <a href="https://www.linkedin.com/in/scottmrobison/" target="_blank" rel="noopener noreferrer">
                    <CiLinkedin size="2em" style={{marginRight: '20px', color:'white'}} />
                </a>
                <a href="https://github.com/smrrobison" target="_blank" rel="noopener noreferrer">
                    <PiGithubLogo size="2em" style={{marginRight: '20px', color:'white'}} />
                </a>
                <a href="mailto:srobisondev@gmail.com">
                    <MdOutlineEmail size="2em" style={{color:'white' }} />
                </a>
            </div>
        </div>
      );
}

export default Sidebar