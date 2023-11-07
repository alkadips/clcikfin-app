import React from "react";

export default function Homepage() {
  return (
    <div>
      <video width="100%" controls>
        <source src="clcikfinve.mp4" type="video/mp4" />
        Your browser does not support HTML video.
      </video>
      <div className="p-5 flex gap-5 homepage-wrapper heading-para">
        <div style={{ width: "50%" }}>
          <div className="font-bold text-3xl ml-3 mt-5">
            Welcome To ClikFin – Your Instant Life Upgrade
          </div>
          <div className="list-item">
            <ul style={{ listStyle: "initial", color: '#f9bd08'
}}>
              <li>Up to ₹10 Lakhs</li>
              <li>Instant Transfer to Bank</li>
            </ul>
          </div>
          <div className="clickfin-para-home p-5 bg-black rounded">
            <p>
              At ClikFin, we understand that life can present unexpected
              challenges and opportunities, and that’s why we’re here to offer
              you instant cash solutions up to ₹10 Lakhs. Whether you need to
              fund your dream vacation, shop for your favorite gadgets, settle
              bills, or handle any financial exigency, we’ve got you covered!
            </p>
          </div>
          <a href="https://play.google.com/store/apps/details?id=com.clikfin.clikfinapplication">
            <div className="get-cash-now rounded-full ... p-2 mt-5 font-bold">
              <button>GET CASH NOW</button>
            </div>
          </a>
        </div>
        <div style={{ width: "50%" }}>
          <div className="flex justify-around gap-5">
            <div>
              <a href="https://play.google.com/store/apps/details?id=com.clikfin.clikfinapplication">
                <img alt="google"  src="andr.png"></img>
              </a>
            </div>
            <div>
              <a href="https://apps.apple.com/in/app/clikfin-one-click-away/id1658734808">
                <img alt="apple"  src="app.png"></img>
              </a>
            </div>
          </div>
          <div className="mt-5" style={{borderRadius:'20px'}}>
            {" "}
            <img alt="mobile" src="sideimage.jpeg"></img>
          </div>
        </div>
      </div>
      <div
        className="font-bold text-center text-4xl heading-para"
        style={{ marginTop: "50px" }}
      >
        Clikfin Personal Loan App
      </div>
      <div className="flex justify-around gap-5" style={{ marginTop: "85px" }}>
        <div>
          <img alt="loan1" src="loan1.png"></img>
        </div>
        <div>
          <img alt="laon2" src="loan2.png"></img>
        </div>
        <div>
          <img alt="loan3" src="laon3.png"></img>
        </div>
        <div>
          <img alt="laon4" src="laon4.png"></img>
        </div>
      </div>
      <div
        className=" text-center text-4xl heading-para"
        style={{ marginTop: "100px" }}
      >
        Why Choose Instant Loan?
      </div>
      <div className="text-center mt-3 heading-para">
        <p>
          It's A Rapidly Evolving Digital Age, And Clikfin Offers You A Truly
          Modern, Sensible Personal Loan Option. No Lengthy Paperwork, Instant
          Processing Times, Attractive Interest Rates, With No Prepayment
          Charges. Borrow Personal Loan Up To ₹ 10 Lakh And Have It Transferred
          To Your Bank Account Within Minutes. Fully Digital Journey Available
          24X7
        </p>
      </div>
      <div className="flex justify-around gap-5" style={{ marginTop: "85px" }}>
        <div>
          <div>
            <img alt="ins1" src="ins1.png"></img>
          </div>
        </div>
        <div>
          <img alt="ins2" src="ins2.png"></img>
        </div>
        <div>
          <img alt="ins3" src="ins3.png"></img>
        </div>
        <div>
          <img alt="ins4" src="ins3.png"></img>
        </div>
      </div>
      <div
        className=" text-center text-4xl heading-para"
        style={{ marginTop: "100px" }}
      >
        Our Awesome Testimonials
      </div>
      <div className="text-center mt-3 heading-para">
        <p>
          We Believe Helping People During Need Is A Best Deed, Thus Your
          Blessings Makes Us Unique.
        </p>
      </div>
      <div className="flex gap-5 mt-5 justify-center heading-para p-5">
        <div
          className=" p-5 rounded-lg ..."
          style={{ background:'white',color:'black' }}
        >
          <div >
            <p>
              “I used ClikFin to help me pay for my travel expenses. The service
              was great – fast but still friendly. Fantastic and Painless
              Experience. Thank you.”
            </p>
          </div>
          <div className="flex gap-5 mt-5">
            <div>
              <img alt="test1" style={{ height: "50px" }} src="testm.png"></img>
            </div>
            <div>
              <div className=" font-bold">Swati Joshi</div>
              <div>Mumbai</div>
            </div>
            
          </div>
        </div>
        <div
          className=" p-5 rounded-lg ..."
          style={{ background:'white',color:'black' }}
        >
          <div >
            <p>
              “These guys are always ready to help when you need it most. They
              helped cover school fees for my brother and I when I was a little
              low on cash.”
            </p>
          </div>
          <div className="flex gap-5 mt-5">
            <div>
              <img alt="test2" style={{ height: "50px" }} src="testm.png"></img>
            </div>
            <div>
              <div className=" font-bold">Purnima Rawat</div>
              <div>Kanpur</div>
            </div>
            

          </div>
        </div>
        <div
          className=" p-5 rounded-lg ..."
          style={{background:'white',color:'black' }}
        >
          <div >
            <p>
              “Their application process was quick and simple. in a short time I
              had the funds I needed to complete some much needed improvements
              around the house.”
            </p>
          </div>
          <div className="flex gap-5 mt-5">
            <div>
              <img alt="test3" style={{ height: "50px" }} src="testm.png"></img>
            </div>
            <div>
              <div className=" font-bold">Kartik Patel</div>
              <div>Ahmedabad</div>
            </div>
          </div>
          

        </div>
      </div>
      <div
        className="font-bold text-center text-4xl heading-para"
        style={{ marginTop: "50px" }}
      >
As Seen On     
 </div>
      <div className="flex justify-center gap-5 " style={{ marginTop: "50px" }}>
        <div>
          <img alt="part1" src="part1.png"></img>
        </div>
        <div>
          <img alt="part2" style={{ height: "100px" }} src="par2.jpeg"></img>
        </div>
        <div>
          <img alt="part3" src="par3.jpg"></img>
        </div>
      </div>

      <div
        className="font-bold text-center text-4xl heading-para"
        style={{ marginTop: "50px" }}
      >
        Introducing ClikFin - Your Gateway To Financial Solutions
      </div>
      <div
        className="flex font-bold justify-around heading-para"
        style={{ marginTop: "50px" }}
      >
        <div>About</div>
        <div>What Makes Us Unique?</div>
      </div>
      <div className="flex gap-5 justify-around">
        <div className="p-5 bg-black rounded" style={{ width: "40%" }}>
          <div className="heading-para mt-5">
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
          <div className="heading-para font-bold mt-5">Our Vision:</div>
          <div className="heading-para mt-2">
            <p>
              ClikFin’s vision is to empower individuals by providing them with
              the necessary financial tools and support to achieve their
              aspirations. We are dedicated to delivering exceptional customer
              service and guidance throughout your financial voyage.
            </p>
          </div>
          <div className="heading-para mt-5">
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
          <div className="mt-5 heading-para">
            <p>
              1.{" "}
              <span className="font-bold ">
                Transparency and Neutrality :{" "}
              </span>{" "}
              At ClikFin, transparency and neutrality are at the core of our
              operations. As a facilitator, we maintain an unbiased approach in
              assisting you in finding the best financial options from RBI
              Approved NBFCs, ensuring you receive fair and competitive terms.
            </p>
          </div>
          <div className="mt-5 heading-para">
            <p>
              2.{" "}
              <span className="font-bold ">
                Extensive Loan Distribution :{" "}
              </span>{" "}
              Leveraging our strategic partnerships with RBI Approved NBFCs, we
              offer a diverse range of loans to cater to your varied financial
              needs.
            </p>
          </div>
          <div className="mt-5 heading-para">
            <p>
              3.<span className="font-bold "> Not an NBFC:</span> It
              is essential to understand that ClikFin is not an NBFC itself. We
              do not engage in co-lending or FLDG based lending. Our expertise
              lies in connecting you with reputable lenders to meet your
              borrowing requirements.
            </p>
          </div>
          <div className="mt-5 heading-para">
            <p>
              4.{" "}
              <span className="font-bold ">
                {" "}
                No Collections/Recovery:
              </span>
              Rest assured, at ClikFin, we do not undertake any collections or
              recovery activities related to the loans we facilitate. Our
              commitment is solely to assist you in securing the loan that
              aligns with your preferences.
            </p>
          </div>
        </div>
      </div>
      <div className="flex pers-loan p-5  justify-around mt-5">
        <div className="text-xl text-white">
          <div>
            Apply for loans of upto ₹ 10 lakhs easily using your phone or laptop,{" "}
          </div>
          <div>and pay back on low EMIs</div>
        </div>

        <div className="get-loan-now rounded-full ... p-2  font-bold">
          Get a Personal Loan Now
        </div>
      </div>
    </div>
  );
}
