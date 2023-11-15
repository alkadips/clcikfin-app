import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Contact() {
  
  return (
    <div style={{ marginTop: "100px" }}>
    
      <div className="font-bold text-4xl mt-5 text-center text-black">Get In Touch</div>
      <div className="font-bold text-center mt-5 text-black">
        Reach Out To Us & We Will Respond As Soon As We Can.
      </div>
     
      <div >
        <div className="flex  gap-5 p-5">
          <div style={{width:'50%'}}>
            <div className="font-bold mt-5 text-black">About </div>
            <div className="mt-3  rounded-xl text-black">
              <p>
                Clikfin brand is 100% owned by CygniSys Service’s Pvt Ltd
                formerly known as ( CygniSys OPC Pvt Ltd ) incorporated in 2021,
                we are an online platform that provides customers with financial
                products and services such as personal loans. We connect
                borrowers with lenders to help them get the best deal possible.
                We have partnered with RBI Approved NBFCs to distribute various
                types of loans. We are not a NBFC, we do not do any co-lending /
                FLDG based lending ourselves. We don’ do any sort of collections
                / recovery of loans we distribute..
              </p>
            </div>
          </div>
          <div style={{width:'50%'}}>
              <img style={{marginTop:'-145px'}} src="./clcikfin-app/mobile2.png"></img>
            </div>
          <div>
        
          </div>
        </div>
       
        <div className="font-bold mt-5 text-center">
          We Would Love To Hear Your Suggestions Or Complaints. Please Let Us
          Try To Help You.
        </div>
        <div className="flex justify-around mt-5">
          <div>
            <img className="h-24" alt="branch"  src="./clcikfin-app/branch.png"></img>
          </div>
          <div>
            <img  className="h-24" alt="call" src="./clcikfin-app/call.png"></img>
          </div>
          <div>
            <img className="h-24" alt="email" src="./clcikfin-app/email.png"></img>
          </div>
        </div>
        <div className="flex justify-around mt-3 font-bold">
          <div>BRANCH OFFICE</div>
          <div>CALL US AT</div>
          <div>EMAIL ADDRESS</div>
        </div>
        <div className="flex justify-around mt-3 gap-5 p-5">
          <div className="text-center" style={{ width: "20%", textAlign: "center" }}>
            47, 7th sector 5th Main, HSR layout Bangalore – 560102 Karnataka,
            India
          </div>
          <div style={{ width: "20%", textAlign: "center" }}>
            {" "}
            Available Soon
          </div>
          <div style={{ width: "20%", textAlign: "center" }}>
            support@clikfin.com
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://maps.google.com/maps?q=155-148%2C%205th%20Main%20Rd%2C%20Sector%207%2C%20HSR%20Layout%2C%20Bengaluru%2C%20Karnataka%20560102&t=m&z=10&output=embed&iwloc=near"
          width="100%"
          title="Address"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
