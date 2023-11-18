import React from "react";
export default function About() {
  return (
    <div className="mt-16">
      <div className="about-back">
        <div className="flex">
          <div className="mt-2  ml-5 w-2/4">
            <p
              className=" text-3xl mt-5 font-bold text-black"
             
            >
              ABOUT US
            </p>
            <p className="mt-2 text-xl text-black" >
              Get to know the team behind Clikfin, India’s Best app to offer
              online credit, making credit easily accessible to millions of
              Indians right when they need it, without any collateral or complex
              paperwork. ClikFin, a venture of CygniSys Services Pvt. Ltd.
              (formerly CygniSys OPC Pvt. Ltd.), established in 2021, is an
              innovative online platform specializing in personal loans. Our
              mission is to bridge the gap between borrowers and lenders,
              securing favorable deals.
            </p>
          </div>
          <div>
           
              <img style={{width:'100%',height:'100%'}} 
                                src={process.env.PUBLIC_URL + '/assets/images/bg.png'}

              ></img>
            
          </div>
        </div>
      </div>

      <div className="flex p-5 gap-5">
        <div className=" p-5 rounded-lg ... clickfin-para-home text-black border-2 border-solid ">
          <div className="font-bold text-center"> Our Vision</div>
          <div className="mt-3">
            {" "}
            Empower individuals to achieve their aspirations through financial
            tools and support. Dedicated to exceptional customer service,
            ClikFin is your trusted companion for informed financial decisions.
            Explore our range of products today for a brighter financial future.
          </div>
        </div>

        <div className=" p-5 rounded-lg ... clickfin-para-home text-black border-2 border-solid ">
          <div className="font-bold text-center">Our Mission</div>
          <div className="mt-3">
            At ClikFin, our mission is to seamlessly connect borrowers and
            lenders, ensuring access to the besttailored financial solutions. We
            are dedicated to empowering individuals by providing efficient and
            transparent financial services that help them achieve their goals.
          </div>
        </div>

        <div className=" p-5 rounded-lg ... clickfin-para-home text-black border-2 border-solid ">
          <div className="font-bold text-center"> Who We Are</div>
          <div className="mt-3">
            ClikFin, a venture by CygniSys Services Pvt. Ltd. is a leading
            online platform specializing in personal loans. We pride ourselves
            on bridging the gap between financial aspirations and practical
            solutions, ensuring a seamless and empowering experience for our
            users.
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="font-bold mt-5 text-4xl ">
          Discover The Possibilities With Our Instant Loan Service
        </div>
        <div className="font-bold mt-3 ">
          At ClikFin, Our Instant Loan Service Opens Up A World Of Possibilities
          For You. You Can Use The Funds For A Wide Range Of Purposes,
          Including:
        </div>
        <div className="p-2  rounded-xl mt-2">
          <div className="flex justify-center gap-5 text-black">
            <div className="mt-2 w-1/4">
              <div className="font-bold text-black">Vacation: </div>
              <div>
                Fulfill your wanderlust and embark on that dream vacation you’ve
                been longing for.
              </div>
            </div>
            <div className="mt-2 w-1/4">
              <div className="font-bold">Home Remodeling: </div>
              <div>
                Give your home a refreshing makeover or undertake those
                much-needed renovations.
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-5 text-black">
            <div className="mt-5 w-1/4">
              <div className="font-bold">Debt Consolidation: </div>
              <div>
                Streamline your finances and manage multiple debts by
                consolidating them into a single, more manageable loan.
              </div>
            </div>
            <div className="mt-5 w-1/4">
              <div className="font-bold">Wedding Expenses: </div>
              <div>
                Create the perfect wedding experience without financial worries,
                making it a memorable and joyous occasion.
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-5 text-black">
            <div className="mt-5 w-1/4">
              <div className="font-bold">Medical Emergencies:</div>
              <div>
                In times of unexpected health challenges, our instant loan can
                provide the necessary financial support for medical expenses.
              </div>
            </div>
            <div className="mt-5 w-1/4">
              <div className="font-bold">Any Other Emergency Expenses: </div>
              <div>
                Life is unpredictable, and emergencies can strike at any time.
                With our instant loan service, you can be prepared to handle
                unforeseen expenses.
              </div>
            </div>
          </div>

          <div className="mt-5 text-black">
            <p className="m-auto w-1/3">
              The power to choose lies with you, and ClikFin is here to provide
              the financial assistance you need to turn your dreams into
              reality. Our swift and convenient loan service empowers you to
              meet your diverse needs and embrace life’s opportunities with
              confidence. Experience the freedom of our instant loan service and
              take control of your financial journey today!
            </p>
          </div>
          <div className="font-bold text-3xl mt-5 text-black">
            How To Apply For A Personal Loan With ClikFin:
          </div>
          <div className="mt-5 font-bold text-black">
            Applying For A Personal Loan With ClikFin Is Quick And Effortless.
            Just Follow These Simple Steps:
          </div>
          <div className="text-black m-auto w-2/4">
            <div className="mt-5">
              <div className="font-bold">1. Download the App:</div>
              <div>
                Begin by downloading and installing the ClikFin App from the
                Google Play Store. Once installed, create an account by
                providing basic KYC details and submit your account to ClikFin.
              </div>
            </div>
            <div className="mt-5">
              <div className="font-bold">2. Verification and Approval:</div> Our
              team will carefully verify the information you provided. Once your
              account is verified, we will assess your eligible loan limit and
              proceed with the loan approval process.
            </div>
            <div className="mt-5">
              <div className="font-bold">3. Get Instant Cash:</div>
              <div>
                After receiving approval, access the ClikFin App and enter your
                bank account details. Review and consent to our loan agreement
                through the app. Once these steps are completed, you’ll receive
                the approved loan amount directly into your bank account within
                5 minutes. Experience the speed and convenience of our personal
                loan application process at ClikFin. With just a few minutes of
                your time, you can gain access to the funds you need, helping
                you overcome financial challenges or seize new opportunities.
                Empower your financial journey with ClikFin today!
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="our-mission text-center font-bold text-4xl">
        Why Apply With Us?
      </div>
      <div className="text-center font-bold mt-5">
        There Are Not Only One Or Couples Of Reason, We Understand To Provide
        Best Services As Much As We Can.
      </div>
      <div className="flex justify-around mt-5 font-bold">
        <div>Secure And Easy Process</div>
        <div>100% Confidential</div>
        <div>Flexible Repayment Plans</div>
      </div>
      <div className="flex justify-around  gap-5">
        <div className="text-center p-2  rounded-xl text-black">
          Your privacy and security are our utmost priorities. Our loan
          procedure is designed to be easy and straightforward, and once your
          submitted documents are approved, we ensure instant processing to get
          you the funds you need.
        </div>
        <div className="text-center p-2  rounded-xl text-black">
          We value the privacy of your personal data and adhere to a strict
          private data policy. Rest assured that your information is handled
          with the utmost confidentiality and care.
        </div>
        <div className="text-center p-2  rounded-xl text-black">
          We understand that every individual’s financial situation is unique.
          Hence, when we approve loans, we offer flexible repayment plans
          tailored to suit your financial capacity and preferences.
        </div>
      </div>
    </div>
  );
}
