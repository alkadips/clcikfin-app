import React, { useEffect } from "react";

import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Footer() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="footer mt-5">
      <div className=" flex justify-around " style={{ marginTop: "100px",borderBottom:'1px solid',padding:'20px' }}>
        <div>
          <div>
            <Link onClick={() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }} to="/">
              <img alt="logo" src="/clcikfin-app/logo.png"></img>
            </Link>
          </div>
        </div>
        <div>
          <div className="font-bold">PRODUCTS</div>
          <Link  onClick={() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }}  style={{textDecoration:'none',color:'black'}} to="/personelloan">
            <div className="mt-5 text-xs">Personal Loan</div>
          </Link>
        </div>
        <div>
          <div className="font-bold">RESOURCES</div>
          <Link  onClick={() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }} style={{textDecoration:'none',color:'black'}} to="/emicalculator">
            <div className="mt-5 text-xs">Emi Calculator</div>
          </Link>
          <Link  onClick={() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }} style={{textDecoration:'none',color:'black'}} to="/faqs">
            <div className="text-xs mt-3">Faqs</div>
          </Link>
        </div>
        <div>
          <div className="font-bold">COMPANY</div>
          <Link  onClick={() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }} style={{textDecoration:'none',color:'black'}} to="/about">
            <div className="mt-5 text-xs">About Clikfin</div>
          </Link>
          <Link   onClick={() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }} style={{textDecoration:'none',color:'black'}} to="/contact">
            <div className="text-xs mt-3">Contact Us</div>
          </Link>
        </div>

        <div>
          <div className="font-bold">MORE</div>
          <Link  onClick={() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }}  style={{textDecoration:'none',color:'black'}} to="/privacy">
            <div className="mt-5 text-xs">Privacy Policy</div>
          </Link>
          <Link  onClick={() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }} style={{textDecoration:'none',color:'black'}} to="/terms">
            <div className="text-xs mt-3">Terms & condition</div>
          </Link>
        </div>
        <div>
          <div className="font-bold">CONTACT US</div>
          <div className="flex justify-center mt-5 gap-5">
        <div>
          <Link style={{textDecoration:'none',color:'black'}} to="https://www.facebook.com/ClikFin/">
            <IoLogoFacebook />
          </Link>
        </div>
        <div>
          <Link style={{textDecoration:'none',color:'black'}} to="https://twitter.com/clikfin?lang=en">
            <IoLogoTwitter />
          </Link>
        </div>
        <div>
          <Link style={{textDecoration:'none',color:'black'}} to="https://www.instagram.com/clikfin/?hl=en">
            <IoLogoInstagram />
          </Link>
        </div>
        <div>
          <Link style={{textDecoration:'none',color:'black'}} to="https://www.linkedin.com/company/clikfin/">
            <IoLogoLinkedin />
          </Link>
        </div>
        <div>
          <Link style={{textDecoration:'none',color:'black'}} to="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=support@clikfin.com">
            <IoIosMail />
          </Link>
        </div>
      </div>
        </div>
      </div>
      <div className="text-center mt-5 text-sm">
        Copyright © 2023 | Powered by CygniSys
      </div>
    
    </div>
  );
}
