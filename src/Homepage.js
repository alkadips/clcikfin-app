import React from "react";
import {  NavLink } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
export default function Homepage() { 
 
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
   fontSize:'12px',
   
    p: 4,
  };
  

  const [upwordOpen, setUpwordOpen] = React.useState(false);
  const handleOpenUpword = () => setUpwordOpen(true);
  const handleCloseUpword = () => setUpwordOpen(false);

  const [loantapOpen, setloantapOpen] = React.useState(false);
  const handleOpenLoanTap = () => setloantapOpen(true);
  const handleCloselaonTap = () => setloantapOpen(false);

  return (
    <div>
      <div
        className="p-3  main-home"
        style={{marginTop:'45px'}}
      >
        <div style={{width:'50%'}}>
          <img  src={process.env.PUBLIC_URL + "/assets/images/home88.jpg"}></img>
        </div>

        <div style={{width:'50%'}}>


          <div className="font-bold text-3xl mt-16 text-black welcome">
            <span style={{color:"#2b4a84"}}>Welcome To ClikFin </span>– Your Instant Life Upgrade
          </div>
          <div>
            <div className=" mt-3" style={{ listStyle: "initial",color:'#0dcaf0' }}>
              <div className="font-bold text-3xl">Get Up to ₹10 Lakhs Instant Transfer to Bank</div>
            </div>

          </div>
          <div className="p-3  rounded text-black text-2xl  border-solid  mt-16">
            <p>
              At ClikFin, we understand that life can present unexpected
              challenges and opportunities, and that’s why we’re here to offer
              you instant cash solutions up to ₹10 Lakhs. Whether you need to
              fund your dream vacation, shop for your favorite gadgets, settle
              bills, or handle any financial exigency, we’ve got you covered!
            </p>
          </div>
          <NavLink
            className="no-underline"
            to="https://play.google.com/store/apps/details?id=com.clikfin.clikfinapplication"
          ></NavLink>
        </div>
      </div>

      <div className=" text-center text-3xl text-black font-bold ">
        Why Choose Instant Loan?
      </div>
      <div
        className="text-center mt-3 text-black m-auto"
        style={{ width: "50%" }}
      >
        <p>
          It's A Rapidly Evolving Digital Age, And Clikfin Offers You A Truly
          Modern, Sensible Personal Loan Option. No Lengthy Paperwork, Instant
          Processing Times, Attractive Interest Rates, With No Prepayment
          Charges. Borrow Personal Loan Up To ₹ 10 Lakh And Have It Transferred
          To Your Bank Account Within Minutes. Fully Digital Journey Available
          24X7
        </p>
      </div>
      {/* <div className="font-bold text-center text-3xl mt-5">How ClikFin Works?</div>
      <div>
        <img
          className=" how-clik"
          src={process.env.PUBLIC_URL + "/assets/images/home22.png"}
        ></img>
      </div> */}
      <div className=" text-center text-3xl text-black  font-bold">
        Our Awesome Testimonials
      </div>
      <div className="text-center mt-3 text-black">
        <p>
          We Believe Helping People During Need Is A Best Deed, Thus Your
          Blessings Makes Us Unique.
        </p>
      </div>
      <div className="flex gap-5  justify-center text-black p-3 ">
        <Carousel>
          <Carousel.Item>
            <div className=" gap-5  justify-center text-black p-3 testmonials">
              <div className=" p-5 rounded-lg ... clickfin-para-home text-black border-2 border-solid" style={{ background: '#bdbde3' }}>
                <div>
                  <p>
                    “I used ClikFin to help me pay for my travel expenses. The
                    service was great – fast but still friendly. Fantastic and
                    Painless Experience. Thank you.”
                  </p>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <div>
                    <div className="text-yellow-600 font-bold text-xl">
                      Swati Joshi
                    </div>
                    <div>Mumbai</div>
                  </div>
                </div>
              </div>
              <div className=" p-5 rounded-lg ... clickfin-para-home text-black border-2 border-solid" style={{ background: '#bdbde3' }}>
                <div>
                  <p>
                    “These guys are always ready to help when you need it most.
                    They helped cover school fees for my brother and I when I
                    was a little low on cash.”
                  </p>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <div>
                    <div className="text-yellow-600 font-bold text-xl font-bold">
                      Purnima Rawat
                    </div>
                    <div>Kanpur</div>
                  </div>
                </div>
              </div>
              <div className=" p-5 rounded-lg ... clickfin-para-home text-black border-2 border-solid" style={{ background: '#bdbde3' }}>
                <div>
                  <p>
                    “Their application process was quick and simple. in a short
                    time I had the funds I needed to complete some much needed
                    improvements around the house.”
                  </p>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <div>
                    <div className="text-yellow-600 font-bold text-xl font-bold">
                      Kartik Patel
                    </div>
                    <div>Ahmedabad</div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className=" gap-5 justify-center text-black p-3 testmonials">
              <div className=" p-5 rounded-lg ... clickfin-para-home text-black border-2 border-solid" style={{ background: '#bdbde3' }}>
                <div>
                  <p>
                    “I used ClikFin to help me pay for my travel expenses. The
                    service was great – fast but still friendly. Fantastic and
                    Painless Experience. Thank you.”
                  </p>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <div>
                    <div className="text-yellow-600 font-bold text-xl font-bold">
                      Swati Joshi
                    </div>
                    <div>Mumbai</div>
                  </div>
                </div>
              </div>
              <div className=" p-5 rounded-lg ... clickfin-para-home text-black border-2 border-solid" style={{ background: '#bdbde3' }}>
                <div>
                  <p>
                    “These guys are always ready to help when you need it most.
                    They helped cover school fees for my brother and I when I
                    was a little low on cash.”
                  </p>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <div>
                    <div className="text-yellow-600 font-bold text-xl font-bold">
                      Purnima Rawat
                    </div>
                    <div>Kanpur</div>
                  </div>
                </div>
              </div>
              <div className=" p-5 rounded-lg ... clickfin-para-home text-black border-2 border-solid" style={{ background: '#bdbde3' }}>
                <div>
                  <p>
                    “Their application process was quick and simple. in a short
                    time I had the funds I needed to complete some much needed
                    improvements around the house.”
                  </p>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <div>
                    <div className="text-yellow-600 font-bold text-xl font-bold">
                      Kartik Patel
                    </div>
                    <div>Ahmedabad</div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className=" gap-5  justify-center text-black p-3 testmonials">
              <div className=" p-5 rounded-lg ... clickfin-para-home text-black border-2 border-solid" style={{ background: '#bdbde3' }}>
                <div>
                  <p>
                    “I used ClikFin to help me pay for my travel expenses. The
                    service was great – fast but still friendly. Fantastic and
                    Painless Experience. Thank you.”
                  </p>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <div>
                    <div className="text-yellow-600 font-bold text-xl font-bold">
                      Swati Joshi
                    </div>
                    <div>Mumbai</div>
                  </div>
                </div>
              </div>
              <div className=" p-5 rounded-lg ... clickfin-para-home text-black border-2 border-solid" style={{ background: '#bdbde3' }}>
                <div>
                  <p>
                    “These guys are always ready to help when you need it most.
                    They helped cover school fees for my brother and I when I
                    was a little low on cash.”
                  </p>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <div>
                    <div className="text-yellow-600 font-bold text-xl font-bold">
                      Purnima Rawat
                    </div>
                    <div>Kanpur</div>
                  </div>
                </div>
              </div>
              <div className=" p-5 rounded-lg ... clickfin-para-home text-black border-2 border-solid" style={{ background: '#bdbde3' }}>
                <div>
                  <p>
                    “Their application process was quick and simple. in a short
                    time I had the funds I needed to complete some much needed
                    improvements around the house.”
                  </p>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <div>
                    <div className="text-yellow-600 font-bold text-xl font-bold">
                      Kartik Patel
                    </div>
                    <div>Ahmedabad</div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="font-bold text-center text-3xl text-black mt-12">
        Our Partners
      </div>
      <Modal
  open={upwordOpen}
  onClose={handleCloseUpword}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
  <div className="mt-5">
          <table className="m-auto w-11/12" >
            <tr>
              <th>BANK/NBFC</th>
              <td>Upwards</td>
            </tr>
            <tr>
              <th>Interest Rate(pa)</th>
              <td>16.00 % to 32%</td>
            </tr>
            <tr>
              <th>Loan Amount </th>
              <td>20,000 Thousand to 5 Lakhs</td>
            </tr>
            <tr>
              <th>Processing Fees </th>
              <td>Up to 2 % to 4 % of the loan amount</td>
            </tr>
            <tr>
              <th>Part Payment</th>
              <td>Up to 40% of loan amount every year</td>
            </tr>
            <tr>
              <th>Pre-closure Charges</th>
              <td>Upto 5% on your principal outstanding + GST</td>
            </tr>
            <tr>
              <th>Locking Period</th>
              <td>3 Month</td>
            </tr>
            <tr>
              <th>Tenure</th>
              <td>12 to 48 months</td>
            </tr>
          </table>
        </div>
  </Box>
</Modal>

<Modal
  open={loantapOpen}
  onClose={handleCloselaonTap}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
  <div className="mt-5">
          <table className="m-auto w-11/12" style={{fontSize:'12x'}}>
            <tr>
              <th>BANK/NBFC</th>
              <td>Loan Tap</td>
            </tr>
            <tr>
              <th>Interest Rate(pa)</th>
              <td>16.00 % to 24%</td>
            </tr>
            <tr>
              <th>Loan Amount </th>
              <td>50 Thousand to 10 Lakhs</td>
            </tr>
            <tr>
              <th>Processing Fees </th>
              <td>2 % of the loan amount</td>
            </tr>
            <tr>
              <th>Part Payment</th>
              <td>Up to 40% of loan amount every year</td>
            </tr>
            <tr>
              <th>Pre-closure Charges</th>
              <td>
                <ul>
                  <li>0-6 Months – 5% of Principal Outstanding</li>
                  <li>6 months – 0%</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Locking Period</th>
              <td>6 Month</td>
            </tr>

            <tr>
              <th>Tenure</th>

              <td>12 to 60 months</td>
            </tr>
          </table>
        </div>
  </Box>
</Modal>
      <div className="flex justify-center gap-5 mt-5">
        <div>
          <img
           
            onClick={handleOpenUpword}
            className="mobile-image cursor-pointer w-36"
            src={process.env.PUBLIC_URL + "/assets/images/part1.png"}
          ></img>
        </div>
        <div>
          <img
              onClick={handleOpenLoanTap}
          
            className="mobile-image cursor-pointer w-36"
            src={process.env.PUBLIC_URL + "/assets/images/par3.jpg"}
          ></img>
        </div>

        <div>
          <img
            className="mobile-image w-16 cursor-pointer"
            src={process.env.PUBLIC_URL + "/assets/images/par2.jpeg"}
          ></img>
        </div>
      </div>

   
       
     
    
      <div className="font-bold text-center text-3xl text-black mt-12">
        Introducing ClikFin - Your Gateway To Financial Solutions
      </div>
      <div className="flex font-bold justify-around text-black mt-12">
        <div>About</div>
        <div>What Makes Us Unique?</div>
      </div>
      <div className="flex gap-5 justify-around mt-3 text-black ">
        <div className="  rounded w-2/5">
          <div>
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
          <div className=" font-bold mt-2">Our Vision:</div>
          <div className=" mt-2">
            <p>
              ClikFin’s vision is to empower individuals by providing them with
              the necessary financial tools and support to achieve their
              aspirations. We are dedicated to delivering exceptional customer
              service and guidance throughout your financial voyage.
            </p>
          </div>
          <div className="text-black mt-2">
            <p>
              Experience the power of choice with ClikFin. Let us be your
              trusted companion in making informed financial decisions. Begin
              exploring our comprehensive range of financial products and
              services today, and take a significant step towards securing a
              brighter financial future.
            </p>
          </div>
        </div>
        <div className="rounded w-2/5">
          <div className="text-black">
            <p>
              <span className="font-bold "> 1. Transparency: </span> Clear and
              open communication throughout the loan process, ensuring you
              understand every step .
            </p>
          </div>
          <div className="mt-3 text-black">
            <p>
              <span className="font-bold ">
                {" "}
                2. Super-Fast Loan Disbursement: :{" "}
              </span>{" "}
              : We understand your requirement, We ensure that your application
              is fast-tracked and the funds reaches your account within promised
              timeline
            </p>
          </div>
          <div className="mt-3 text-black">
            <p>
              <span className="font-bold "> 3. Great Customer Success: </span>{" "}
              Customer Obsession is the back bone of our organization, We always
              listen to the customer and provide swift response for a
              hassle-free loan
            </p>
          </div>
          <div className="mt-3 text-black">
            <p>
              <span className="font-bold "> 4. We Do What We Promise: </span>A
              commitment to delivering on our promises, providing reliability
              and trustworthiness in our services.
            </p>
          </div>
          <div className="mt-3 text-black">
            <p>
              <span className="font-bold "> 5. Not an NBFC: </span>It is
              essential to understand that ClikFin is not an NBFC itself. We do
              not engage in co-lending or FLDG based lending. Our expertise lies
              in connecting you with reputable lenders to meet your borrowing
              requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
