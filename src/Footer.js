import React from "react";

import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

export default function Footer() {
  return (
    <div className="footer ">
      <div className=" flex justify-around " style={{ marginTop: "100px",borderBottom:'1px solid',padding:'20px' }}>
        <div>
          <div>
            <a href="/">
              <img alt="logo" src="logo.png"></img>
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold">PRODUCTS</div>
          <a href="/personelloan">
            <div className="mt-5 text-xs">Personal Loan</div>
          </a>
        </div>
        <div>
          <div className="font-bold">RESOURCES</div>
          <a href="/emicalculator">
            <div className="mt-5 text-xs">Emi Calculator</div>
          </a>
          <a href="/faqs">
            <div className="text-xs mt-3">Faqs</div>
          </a>
        </div>
        <div>
          <div className="font-bold">COMPANY</div>
          <a href="/about">
            <div className="mt-5 text-xs">About Clikfin</div>
          </a>
          <a href="/contact">
            <div className="text-xs mt-3">Contact Us</div>
          </a>
        </div>

        <div>
          <div className="font-bold">MORE</div>
          <a href="/privacy">
            <div className="mt-5 text-xs">Privacy Policy</div>
          </a>
          <a href="/terms">
            <div className="text-xs mt-3">Terms & condition</div>
          </a>
        </div>
        <div>
          <div className="font-bold">CONTACT US</div>
          <div className="flex justify-center mt-5 gap-5">
        <div>
          <a href="https://www.facebook.com/ClikFin/">
            <IoLogoFacebook />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/clikfin?lang=en">
            <IoLogoTwitter />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/clikfin/?hl=en">
            <IoLogoInstagram />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/company/clikfin/">
            <IoLogoLinkedin />
          </a>
        </div>
        <div>
          <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=support@clikfin.com">
            <IoIosMail />
          </a>
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
