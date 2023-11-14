import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
export default function Homepage() {
  const [value, setValue] = useState(0);
  const [upwords, setupwords] = useState(false);
  const [laontap, setLoanTap] = useState(false);
  const [creditSesions, setCreditSesions] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 

  const toggleupword = () => {
    setupwords(!upwords);
  };
  
  const toggleloantap = () => {
    setLoanTap(!laontap);
  };
  
 
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ width: "50%" }}
            alt=""
            src="./clcikfin-app/mobile.png"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "50%" }}
            alt=""
            src="./clcikfin-app/mobile.png"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "50%" }}
            alt=""
            src="./clcikfin-app/mobile.png"
          />
        </Carousel.Item>
      </Carousel>
      <div>
        {/* <div class="hover01 column">
  <div>
    <figure><img src="https://picsum.photos/300/200?image=244" /></figure>
  </div>
  </div> */}
      </div>

      <div>
        {/* <Dialog onClose={handleClose} open={open}>
      <div className="popup-wrapper"  style={{boxShadow: '4px 4px 5px 0px rgba(0, 0, 0, 0.5)'}}>
        <Link to='https://play.google.com/store/apps/details?id=com.clikfin.clikfinapplication'>
        <img className="popup-style"  alt="popup" src='./clcikfin-app/popup.jpeg'></img>
        </Link>
      </div>
       
    </Dialog> */}
      </div>
      <div className="p-5 flex gap-5  justify-between">
        <div>
          <div style={{ borderRadius: "20px" }}>
            {" "}
            <img
              className="mobile-image"
              alt="mobile"
              src="./clcikfin-app/mobile.png"
            ></img>
          </div>
          <div className="flex gap-5 ml-5  mt-5">
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
        </div>
        <div style={{ width: "50%" }}>
          <div className="font-bold text-3xl ml-3 mt-5 text-black">
            Welcome To ClikFin – Your Instant Life Upgrade
          </div>
          <div className="list-item-demo">
            <ul style={{ listStyle: "initial", color: "#2B4A84" }}>
              <li>Up to ₹10 Lakhs</li>
              <li>Instant Transfer to Bank</li>
            </ul>
          </div>
          <div className="clickfin-para-home p-5 bg-black rounded text-white">
            <p>
              At ClikFin, we understand that life can present unexpected
              challenges and opportunities, and that’s why we’re here to offer
              you instant cash solutions up to ₹10 Lakhs. Whether you need to
              fund your dream vacation, shop for your favorite gadgets, settle
              bills, or handle any financial exigency, we’ve got you covered!
            </p>
          </div>
          <NavLink
            style={{ textDecoration: "none" }}
            to="https://play.google.com/store/apps/details?id=com.clikfin.clikfinapplication"
          >
            <div className="get-cash-now rounded-full ... p-2 mt-5 font-bold">
              <button>GET CASH NOW</button>
            </div>
          </NavLink>
        </div>
      </div>

      <div
        className=" text-center text-4xl text-black"
        style={{ marginTop: "100px" }}
      >
        Why Choose Instant Loan?
      </div>
      <div className="text-center mt-3 text-black">
        <p>
          It's A Rapidly Evolving Digital Age, And Clikfin Offers You A Truly
          Modern, Sensible Personal Loan Option. No Lengthy Paperwork, Instant
          Processing Times, Attractive Interest Rates, With No Prepayment
          Charges. Borrow Personal Loan Up To ₹ 10 Lakh And Have It Transferred
          To Your Bank Account Within Minutes. Fully Digital Journey Available
          24X7
        </p>
      </div>

      <div
        className=" text-center text-4xl text-black"
        style={{ marginTop: "100px" }}
      >
        Our Awesome Testimonials
      </div>
      <div className="text-center mt-3 text-black">
        <p>
          We Believe Helping People During Need Is A Best Deed, Thus Your
          Blessings Makes Us Unique.
        </p>
      </div>
      <div className="flex gap-5 mt-3 justify-center text-black p-5">

      <Carousel>
        <Carousel.Item>
          <div className="flex gap-5 mt-3 justify-center text-black p-5">
        <div
          className=" p-5 rounded-lg ... mobile-image"
          style={{ background: "black", color: "white" }}
        >
          <div>
            <p>
              “I used ClikFin to help me pay for my travel expenses. The service
              was great – fast but still friendly. Fantastic and Painless
              Experience. Thank you.”
            </p>
          </div>
          <div className="flex gap-5 mt-5">
            <div>
              <img
                alt="test1"
                style={{ height: "50px" }}
                src="./clcikfin-app/testm.png"
              ></img>
            </div>
            <div>
              <div className=" font-bold">Swati Joshi</div>
              <div>Mumbai</div>
            </div>
          </div>
        </div>
        <div
          className=" p-5 rounded-lg ... mobile-image"
          style={{ background: "black", color: "white" }}
        >
          <div>
            <p>
              “These guys are always ready to help when you need it most. They
              helped cover school fees for my brother and I when I was a little
              low on cash.”
            </p>
          </div>
          <div className="flex gap-5 mt-5">
            <div>
              <img
                alt="test2"
                style={{ height: "50px" }}
                src="./clcikfin-app/testm.png"
              ></img>
            </div>
            <div>
              <div className=" font-bold">Purnima Rawat</div>
              <div>Kanpur</div>
            </div>
          </div>
        </div>
        <div
          className=" p-5 rounded-lg ... mobile-image"
          style={{ background: "black", color: "white" }}
        >
          <div>
            <p>
              “Their application process was quick and simple. in a short time I
              had the funds I needed to complete some much needed improvements
              around the house.”
            </p>
          </div>
          <div className="flex gap-5 mt-5">
            <div>
              <img
                alt="test3"
                style={{ height: "50px" }}
                src="./clcikfin-app/testm.png"
              ></img>
            </div>
            <div>
              <div className=" font-bold">Kartik Patel</div>
              <div>Ahmedabad</div>
            </div>
          </div>
        </div>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="flex gap-5 mt-3 justify-center text-black p-5">
        <div
          className=" p-5 rounded-lg ... mobile-image"
          style={{ background: "black", color: "white" }}
        >
          <div>
            <p>
              “I used ClikFin to help me pay for my travel expenses. The service
              was great – fast but still friendly. Fantastic and Painless
              Experience. Thank you.”
            </p>
          </div>
          <div className="flex gap-5 mt-5">
            <div>
              <img
                alt="test1"
                style={{ height: "50px" }}
                src="./clcikfin-app/testm.png"
              ></img>
            </div>
            <div>
              <div className=" font-bold">Swati Joshi</div>
              <div>Mumbai</div>
            </div>
          </div>
        </div>
        <div
          className=" p-5 rounded-lg ... mobile-image"
          style={{ background: "black", color: "white" }}
        >
          <div>
            <p>
              “These guys are always ready to help when you need it most. They
              helped cover school fees for my brother and I when I was a little
              low on cash.”
            </p>
          </div>
          <div className="flex gap-5 mt-5">
            <div>
              <img
                alt="test2"
                style={{ height: "50px" }}
                src="./clcikfin-app/testm.png"
              ></img>
            </div>
            <div>
              <div className=" font-bold">Purnima Rawat</div>
              <div>Kanpur</div>
            </div>
          </div>
        </div>
        <div
          className=" p-5 rounded-lg ... mobile-image"
          style={{ background: "black", color: "white" }}
        >
          <div>
            <p>
              “Their application process was quick and simple. in a short time I
              had the funds I needed to complete some much needed improvements
              around the house.”
            </p>
          </div>
          <div className="flex gap-5 mt-5">
            <div>
              <img
                alt="test3"
                style={{ height: "50px" }}
                src="./clcikfin-app/testm.png"
              ></img>
            </div>
            <div>
              <div className=" font-bold">Kartik Patel</div>
              <div>Ahmedabad</div>
            </div>
          </div>
        </div>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="flex gap-5 mt-3 justify-center text-black p-5">
        <div
          className=" p-5 rounded-lg ... mobile-image"
          style={{ background: "black", color: "white" }}
        >
          <div>
            <p>
              “I used ClikFin to help me pay for my travel expenses. The service
              was great – fast but still friendly. Fantastic and Painless
              Experience. Thank you.”
            </p>
          </div>
          <div className="flex gap-5 mt-5">
            <div>
              <img
                alt="test1"
                style={{ height: "50px" }}
                src="./clcikfin-app/testm.png"
              ></img>
            </div>
            <div>
              <div className=" font-bold">Swati Joshi</div>
              <div>Mumbai</div>
            </div>
          </div>
        </div>
        <div
          className=" p-5 rounded-lg ... mobile-image"
          style={{ background: "black", color: "white" }}
        >
          <div>
            <p>
              “These guys are always ready to help when you need it most. They
              helped cover school fees for my brother and I when I was a little
              low on cash.”
            </p>
          </div>
          <div className="flex gap-5 mt-5">
            <div>
              <img
                alt="test2"
                style={{ height: "50px" }}
                src="./clcikfin-app/testm.png"
              ></img>
            </div>
            <div>
              <div className=" font-bold">Purnima Rawat</div>
              <div>Kanpur</div>
            </div>
          </div>
        </div>
        <div
          className=" p-5 rounded-lg ... mobile-image"
          style={{ background: "black", color: "white" }}
        >
          <div>
            <p>
              “Their application process was quick and simple. in a short time I
              had the funds I needed to complete some much needed improvements
              around the house.”
            </p>
          </div>
          <div className="flex gap-5 mt-5">
            <div>
              <img
                alt="test3"
                style={{ height: "50px" }}
                src="./clcikfin-app/testm.png"
              ></img>
            </div>
            <div>
              <div className=" font-bold">Kartik Patel</div>
              <div>Ahmedabad</div>
            </div>
          </div>
        </div>
        </div>
        </Carousel.Item>
      </Carousel>
      
      
      </div>
      <div
        className="font-bold text-center text-4xl text-black"
        style={{ marginTop: "50px" }}
      >
        Our Partners
      </div>

     

<div className="flex justify-around mt-5">
  <div>
  <img onClick={toggleupword}
          style={{ width: "150px",cursor:'pointer' }}
          className="mobile-image"
          src="./clcikfin-app/part1.png"
        ></img>
  </div>
  <div>
  <img  onClick={toggleloantap}
          style={{ width: "150px",cursor:'pointer' }}
          className="mobile-image"
          src="./clcikfin-app/par2.jpeg"
        ></img>
  </div>

  <div>
   <img
          style={{ width: "150px",cursor:'pointer' }}
          className="mobile-image"
          src="./clcikfin-app/par3.jpg"
        ></img>
  </div>
</div>

{upwords && (<div className="mt-5">
  <table style={{ margin: "0 auto" ,width:'90%' }}>
            <tr>
              <th>BANK/NBFC</th>
              <th>Interest Rate(pa)</th>
              <th>Loan Amount </th>
              <th>Processing Fees </th>
              <th>Part Payment</th>
              <th>Pre-closure Charges</th>
              <th>Locking Period</th>
              <th>Tenure</th>
            </tr>
            <tr>
              <td>Upwards</td>
              <td>16.00 % to 32%</td>
              <td>20,000 Thousand to 5 Lakhs</td>
              <td>Up to 2 % to 4 % of the loan amount</td>
              <td>Up to 40% of loan amount every year</td>
              <td>Upto 5% on your principal outstanding + GST</td>
              <td>3 Month</td>
              <td>12 to 48 months</td>
            </tr>
          </table>
</div>
)}
{laontap && (
  <div className="mt-5">
      <table style={{ width: "90%", margin: "0 auto" }}>
            <tr>
              <th>BANK/NBFC</th>
              <th>Interest Rate(pa)</th>
              <th>Loan Amount </th>
              <th>Processing Fees </th>
              <th>Part Payment</th>
              <th>Pre-closure Charges</th>
              <th>Locking Period</th>
              <th>Tenure</th>
            </tr>

            <tr>
              <td>Loan Tap</td>
              <td>16.00 % to 24%</td>
              <td>50 Thousand to 10 Lakhs</td>
              <td>2 % of the loan amount</td>
              <td>Up to 40% of loan amount every year</td>
              <td>
                <ul>
                  <li>0-6 Months – 5% of Principal Outstanding</li>
                  <li>6 months – 0%</li>
                </ul>
              </td>
              <td>6 Month</td>
              <td>12 to 60 months</td>
            </tr>
          </table>
  </div>

)}
      <div
        className="font-bold text-center text-4xl text-black"
        style={{ marginTop: "50px" }}
      >
        Introducing ClikFin - Your Gateway To Financial Solutions
      </div>
      <div
        className="flex font-bold justify-around text-black"
        style={{ marginTop: "50px" }}
      >
        <div>About</div>
        <div>What Makes Us Unique?</div>
      </div>
      <div className="flex gap-5 justify-around mt-3">
        <div className="p-5 bg-black rounded" style={{ width: "40%" }}>
          <div className="text-white" style={{ color: "white" }}>
            <p>
              ClikFin, a proud venture wholly owned by CygniSys Services Pvt.
              Ltd. Formerly known as (CygniSys OPC Pvt. Ltd.), established in
              2021, is an innovative online platform that empowers customers
              with a wide array of financial products and services, specializing
              in personal loans. Our primary mission is to bridge the gap
              between borrowers and lenders, ensuring they secure the most
              favorable and tailored deals available in the market.
            </p>
          </div>
          <div className="text-white font-bold mt-5">Our Vision:</div>
          <div className="text-white mt-2">
            <p>
              ClikFin’s vision is to empower individuals by providing them with
              the necessary financial tools and support to achieve their
              aspirations. We are dedicated to delivering exceptional customer
              service and guidance throughout your financial voyage.
            </p>
          </div>
          <div className="text-white mt-5">
            <p>
              Experience the power of choice with ClikFin. Let us be your
              trusted companion in making informed financial decisions. Begin
              exploring our comprehensive range of financial products and
              services today, and take a significant step towards securing a
              brighter financial future.
            </p>
          </div>
        </div>
        <div className="p-5 p-5 bg-black rounded" style={{ width: "40%" }}>
          <div className="text-white">
            <p>
              1.{" "}
              <span className="font-bold ">Transparency and Neutrality : </span>{" "}
              At ClikFin, transparency and neutrality are at the core of our
              operations. As a facilitator, we maintain an unbiased approach in
              assisting you in finding the best financial options from RBI
              Approved NBFCs, ensuring you receive fair and competitive terms.
            </p>
          </div>
          <div className="mt-5 text-white">
            <p>
              2.{" "}
              <span className="font-bold ">Extensive Loan Distribution : </span>{" "}
              Leveraging our strategic partnerships with RBI Approved NBFCs, we
              offer a diverse range of loans to cater to your varied financial
              needs.
            </p>
          </div>
          <div className="mt-5 text-white">
            <p>
              3.<span className="font-bold "> Not an NBFC:</span> It is
              essential to understand that ClikFin is not an NBFC itself. We do
              not engage in co-lending or FLDG based lending. Our expertise lies
              in connecting you with reputable lenders to meet your borrowing
              requirements.
            </p>
          </div>
          <div className="mt-5 text-white">
            <p>
              4. <span className="font-bold "> No Collections/Recovery:</span>
              Rest assured, at ClikFin, we do not undertake any collections or
              recovery activities related to the loans we facilitate. Our
              commitment is solely to assist you in securing the loan that
              aligns with your preferences.
            </p>
          </div>
        </div>
      </div>
     
      {/* <div className="flex pers-loan p-5  justify-around mt-5">
        <div className="text-xl text-white">
          <div>
            Apply for loans of upto ₹ 10 lakhs easily using your phone or laptop,{" "}
          </div>
          <div>and pay back on low EMIs</div>
        </div>

        <div className="get-loan-now rounded-full ... p-2  font-bold">
          Get a Personal Loan Now
        </div>
      </div> */}
    </div>
  );
}
