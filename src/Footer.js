import React, { useEffect } from "react";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import {Link } from "react-router-dom"
export default function Footer() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="footer mt-5">
      <div className="footer-wrapper   mt-3 p-2">
      
          <div className="footer-logo">
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              to="/"
            >
              <img style={{width:"150px"}} alt="logo" 
                           src={process.env.PUBLIC_URL + '/assets/images/white.png'}

              ></img>
            </Link>
          </div>
        
        <div>
          <div className="font-bold text-xs">PRODUCTS</div>
          <Link target="_blank"
            className="no-underline text-white"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="/personelloan"
          >
            <div className="mt-3 text-xs">Personal Loan</div>
          </Link>


          <Link target="_blank"
            className="no-underline text-white"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="/blog"
          >
            <div className="mt-3 text-xs">Blog</div>
          </Link>
        </div>
        <div>
          <div className="font-bold text-xs">RESOURCES</div>
          <Link target="_blank"
            className="no-underline text-white"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="emicalculator"
          >
            <div className="mt-3 text-xs">Emi Calculator</div>
          </Link>
          <Link target="_blank"
            className="no-underline text-white"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="faqs"
          >
            <div className="text-xs mt-3">FAQs</div>
          </Link>
        </div>
        <div>
          <div className="font-bold text-xs">COMPANY</div>
          <Link target="_blank"
            className="no-underline text-white"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="about"
          >
            <div className="mt-3 text-xs">About Clikfin</div>
          </Link>
          <Link target="_blank"
            className="no-underline text-white"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="contact"  
          >
            <div className="text-xs mt-3">Contact Us</div>
          </Link>
        </div>

        <div>
          <div className="font-bold text-xs">MORE</div>
          <Link target="_blank"
            className="no-underline text-white"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="privacy"
          >
            <div className="mt-3 text-xs">Privacy Policy</div>
          </Link>
          <Link target="_blank"
            className="no-underline text-white"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="terms"
          >
            <div className="text-xs mt-3">Terms & condition</div>
          </Link>
          <Link target="_blank"
            className="no-underline text-white"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="grivience"
          >
            <div className="text-xs mt-3">Grievance</div>
          </Link>
        </div>
        <div>
        <div className="font-bold">CONTACT US</div>

          <div className="flex   mt-3 gap-5 justify-center">
            <div>
              <Link target="_blank" to="https://play.google.com/store/apps/details?id=com.clikfin.clikfinapplication">
                <img
                  className="mobile-i3mage"
                  alt="google"
                  src={process.env.PUBLIC_URL + '/assets/images/andr.png'}

                ></img>
              </Link>
            </div>
            <div>
              <Link target="_blank" to="https://apps.apple.com/in/app/clikfin-one-click-away/id1658734808">
                <img
                  className="mobile-image"
                  alt="apple"
                  src={process.env.PUBLIC_URL + '/assets/images/app.png'}

                ></img>
              </Link>
            </div>
          </div>

          <div className="flex justify-center mt-3 gap-2">
            <div>
              <Link target="_blank"
                className="text-white no-underline"
                to="https://www.facebook.com/ClikFin/"
              >
                <IoLogoFacebook style={{background: '#0d6efd',borderRadius: "50%", width: '27px',height: '27px',padding: '4px'}} />
                
              </Link>
            </div>
            <div>
              <Link target="_blank"
                className="text-white no-underline"
                to="https://twitter.com/clikfin?lang=en"
              >
                <IoLogoTwitter style={{background: '#fe4f50',borderRadius: "50%", width: '27px',height: '27px',padding: '4px'}}/>
              </Link>
            </div>
            <div>
              <Link target="_blank"
                className="text-white no-underline"
                to="https://www.instagram.com/clikfin/?hl=en"
              >
                <IoLogoInstagram style={{background: '#16baff',borderRadius: "50%", width: '27px',height: '27px',padding: '4px'}}/>
              </Link>
            </div>
            <div>
              <Link target="_blank"
                className="text-white no-underline"
                to="https://www.linkedin.com/company/clikfin/"
              >
                <IoLogoLinkedin style={{background: '#0d6efd',borderRadius: "50%", width: '27px',height: '27px',padding: '4px'}}/>
              </Link>
            </div>
            <div>
              <Link target="_blank"
                className="text-white no-underline"
                to="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=support@clikfin.com"
              >
                <IoIosMail style={{background: '#0d6efd',borderRadius: "50%", width: '27px',height: '27px',padding: '4px'}}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-sm">
        Copyright © 2023 | Powered by CygniSys
      </div>
    </div>
  );
}
