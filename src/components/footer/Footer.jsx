import React from 'react';
import './footer.css';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiOutlineGithub} from 'react-icons/ai';
import {BiNews} from 'react-icons/bi';
import {MdArrowCircleUp} from 'react-icons/md';


export const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo"><MdArrowCircleUp /></a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://linkedin.com" target="_blank"><AiOutlineLinkedin /></a>
        <a href="https://github.com" target="_blank"><AiOutlineGithub /></a>
        <a href="https://dev.to/deviamaolo" target="_blank"><BiNews /></a>
      </div>
      
      <div className="footer_copyright">
        <small>Created by deviamaolo</small>
      </div>

    </footer>
  )
}

export default Footer;