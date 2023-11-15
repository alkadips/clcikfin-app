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
      <div className=" flex justify-around " style={{ marginTop: "20px",borderBottom:'1px solid',padding:'20px' }}>
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
  }}  style={{textDecoration:'none',color:'white'}} to="/personelloan">
            <div className="mt-5 text-xs">Personal Loan</div>
          </Link>
        </div>
        <div>
          <div className="font-bold">RESOURCES</div>
          <Link  onClick={() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }} style={{textDecoration:'none',color:'white'}} to="/emicalculator">
            <div className="mt-5 text-xs">Emi Calculator</div>
          </Link>
          <Link  onClick={() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }} style={{textDecoration:'none',color:'white'}} to="/faqs">
            <div className="text-xs mt-3">Faqs</div>
          </Link>
        </div>
        <div>
          <div className="font-bold">COMPANY</div>
          <Link  onClick={() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }} style={{textDecoration:'none',color:'white'}} to="/about">
            <div className="mt-5 text-xs">About Clikfin</div>
          </Link>
          <Link   onClick={() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }} style={{textDecoration:'none',color:'white'}} to="/contact">
            <div className="text-xs mt-3">Contact Us</div>
          </Link>
        </div>

        <div>
          <div className="font-bold">MORE</div>
          <Link  onClick={() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }}  style={{textDecoration:'none',color:'white'}} to="/privacy">
            <div className="mt-5 text-xs">Privacy Policy</div>
          </Link>
          <Link  onClick={() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }} style={{textDecoration:'none',color:'white'}} to="/terms">
            <div className="text-xs mt-3">Terms & condition</div>
          </Link>
        </div>
        <div>
        <div className="flex   mt-5 gap-5 justify-center">
              <div>
                <Link to="https://play.google.com/store/apps/details?id=com.clikfin.clikfinapplication">
                  <img
                    className="mobile-image"
                    alt="google"
                    src="./clcikfin-app/andr.png"
                  ></img>
                </Link>
              </div>
              <div>
                <Link to="https://apps.apple.com/in/app/clikfin-one-click-away/id1658734808">
                  <img
                    className="mobile-image"
                    alt="apple"
                    src="./clcikfin-app/app.png"
                  ></img>
                </Link>
              </div>
            
            </div>
          
          <div className="flex justify-center mt-5 gap-2">
        <div>
          <Link style={{textDecoration:'none',color:'white'}} to="https://www.facebook.com/ClikFin/">
            <IoLogoFacebook />
          </Link>
        </div>
        <div>
          <Link style={{textDecoration:'none',color:'white'}} to="https://twitter.com/clikfin?lang=en">
            <IoLogoTwitter />
          </Link>
        </div>
        <div>
          <Link style={{textDecoration:'none',color:'white'}} to="https://www.instagram.com/clikfin/?hl=en">
            <IoLogoInstagram />
          </Link>
        </div>
        <div>
          <Link style={{textDecoration:'none',color:'white'}} to="https://www.linkedin.com/company/clikfin/">
            <IoLogoLinkedin />
          </Link>
        </div>
        <div>
          <Link style={{textDecoration:'none',color:'white'}} to="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=support@clikfin.com">
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
