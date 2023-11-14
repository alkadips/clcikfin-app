import React from "react";

import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer mt-5">
      <div className=" flex justify-around " style={{ marginTop: "100px",borderBottom:'1px solid',padding:'20px' }}>
        <div>
          <div>
            <NavLink to="/">
              <img alt="logo" src="/clcikfin-app/logo.png"></img>
            </NavLink>
          </div>
        </div>
        <div>
          <div className="font-bold">PRODUCTS</div>
          <NavLink to="/personelloan">
            <div className="mt-5 text-xs">Personal Loan</div>
          </NavLink>
        </div>
        <div>
          <div className="font-bold">RESOURCES</div>
          <NavLink to="/emicalculator">
            <div className="mt-5 text-xs">Emi Calculator</div>
          </NavLink>
          <NavLink to="/faqs">
            <div className="text-xs mt-3">Faqs</div>
          </NavLink>
        </div>
        <div>
          <div className="font-bold">COMPANY</div>
          <NavLink to="/about">
            <div className="mt-5 text-xs">About Clikfin</div>
          </NavLink>
          <NavLink to="/contact">
            <div className="text-xs mt-3">Contact Us</div>
          </NavLink>
        </div>

        <div>
          <div className="font-bold">MORE</div>
          <NavLink to="/privacy">
            <div className="mt-5 text-xs">Privacy Policy</div>
          </NavLink>
          <NavLink to="/terms">
            <div className="text-xs mt-3">Terms & condition</div>
          </NavLink>
        </div>
        <div>
          <div className="font-bold">CONTACT US</div>
          <div className="flex justify-center mt-5 gap-5">
        <div>
          <NavLink to="https://www.facebook.com/ClikFin/">
            <IoLogoFacebook />
          </NavLink>
        </div>
        <div>
          <NavLink to="https://twitter.com/clikfin?lang=en">
            <IoLogoTwitter />
          </NavLink>
        </div>
        <div>
          <NavLink to="https://www.instagram.com/clikfin/?hl=en">
            <IoLogoInstagram />
          </NavLink>
        </div>
        <div>
          <NavLink to="https://www.linkedin.com/company/clikfin/">
            <IoLogoLinkedin />
          </NavLink>
        </div>
        <div>
          <NavLink to="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=support@clikfin.com">
            <IoIosMail />
          </NavLink>
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
