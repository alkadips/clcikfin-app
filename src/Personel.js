import React, { useState } from 'react'
import FAQ from './FAq';

export default function Personel() {
  const [faqs1, setFaqs1] = useState([
    {
      question: "Are Personal Loans a Wise Choice?",
      answer:
        "Personal loans can be a prudent option, especially during financial crises, as they provide quick access to funds without requiring collateral.",
      open: true,
    },
    {
      question: "How Can I Apply for a Personal Loan?",
      answer:
        "To apply for a personal loan, you must meet specific eligibility criteria, including age requirements, salaried employment, a good credit score, and a minimum monthly income.",
      open: false,
    },
    {
      question: "What Determines Personal Loan Eligibility?",
      answer:
        " Eligibility for a personal loan is based on factors such as age, employment status, credit score, and minimum monthly income.",
      open: false,
    },
    {
      question: "Do Personal Loans Affect Your Credit Score? ",
      answer:
        "Personal loans can impact your credit score, and missed repayments can have negative consequences due to the unsecured nature of these loans.",
      open: false,
    },
    {
      question: "How Long Does Personal Loan Approval Take? ",
      answer:
        " With the digitization of loan processes, personal loan approvals have become faster, often instant. However, the disbursal of funds may take up to 24 hours due to documentation procedures.",
      open: false,
    },

    {
      question: "Can I Repay a Personal Loan Before the Tenure Ends?",
      answer:
        " Yes, you can repay a personal loan before the tenure ends through prepayment. However, some lenders may charge a pre closure charges for repayment.",
      open: false,
    },
    
    {
      question: "What Is the Average Interest Rate on Personal Loans? ",
      answer:
        "  The average interest rate on personal loans typically ranges from 16.00% to 32%, but this can vary among different lenders.",
      open: false,
    },
    
    {
      question: "What Factors Do Banks Consider During Personal Loan Applications?  ",
      answer:
        " When applying for a personal loan, banks consider various factors, including age, monthly income, credit score, credit history, and necessary documentation.",
      open: false,
    },
    {
      question: "Which Lender Offers the Best Personal Loan Rates? ",
      answer:
        "  The best personal loan rates depend on the borrower’s credit profile, including a good credit score, consistent income source, and salaried employment.",
      open: false,
    },
    {
      question: "What Is the Minimum Salary Requirement for a Personal Loan?  ",
      answer:
        " While the minimum salary requirement may vary among lenders, most banks and NBFCs typically require a monthly income of ₹20,000 or more for personal loan approval.",
      open: false,
    },
    
  ]);
  const toggleFAQ = (index) => {
    setFaqs1(
      faqs1.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
    return (
        <div
          className=" p-5 text-black"
          style={{ marginTop: "100px" }}
        >
         
          <div>
            <div className="font-bold text-4xl mt-5 text-center">
              Benefits And Features Of Unsecured Personal Loans
            </div >
            <div className='p-5 bg-black rounded-xl mt-5 '>
              <div style={{width:'50%',margin:'0 auto'}}>
            <div className="text-white mt-5">
              <div className='font-bold'>1. No Collateral Required:</div>
              <p>
               Unlike
                secured loans that demand collateral, personal loans don’t require
                you to pledge any assets. This eliminates the risk of losing
                valuable possessions and provides peace of mind while accessing
                funds.
              </p>
            </div>
            <div className="text-white mt-5">
              
                <div className="font-bold"> 2. Minimal Documentation:</div> 
                <div>In
                today’s digital era, the personal loan application process has
                become highly efficient. Minimal documentation is needed, making the
                approval process swift and hassle-free, particularly for instant
                personal loans.</div>
            
            </div>
            <div className="text-white mt-5">
              
                <div className="font-bold"> 3. Easy Approval:</div>
                <div> Personal loans
                offer easy and quick approval, making them an ideal choice during
                financial emergencies. The digitization of the process ensures
                faster verification, enabling you to access funds when you need them
                the most.</div>
              
            </div>
            <div className="text-white mt-5">
              
                <div className="font-bold"> 4. Multipurpose in Nature:</div>
                <div> A
                significant advantage of personal loans is their versatility. Unlike
                certain forms of credit tied to specific purposes, a personal loan
                can be utilized for a wide range of needs. Whether it’s funding a
                wedding, renovating your home, or addressing any immediate financial
                requirement, a personal loan serves as a flexible solution.</div>
              
            </div>
            <div className="text-white mt-5">
             
                <div className="font-bold">5. Low-Interest Rates: </div> 
                <div>Meeting
                the eligibility criteria and maintaining a good credit history can
                help you secure a low-interest personal loan. This ensures that you
                can borrow funds at competitive rates, saving you money in the long
                run.</div>
             
            </div>
            <div className="text-white mt-5">
             
                <div className="font-bold"> 6. Flexible Repayment Terms:</div>{" "}
                <div>Personal loans come with flexible repayment options, allowing you to
                choose a tenure that suits your financial capacity. This ensures
                that you can comfortably repay the loan without straining your
                budget. 7. Quick Disbursement: With the online application and
                verification process, personal loans are disbursed swiftly. This is
                particularly beneficial in situations that require immediate
                financial support. Embrace the freedom and convenience of unsecured
                personal loans. Clikfin offers a seamless and user-friendly platform
                to access the funds you need, without the burden of collateral.
                Whether it’s an unforeseen expense or fulfilling your dreams, our
                personal loans provide the financial flexibility you seek. Apply
                with us today and unlock a world of possibilities.
                </div>
            </div>
            <div className="text-white mt-5">
             
                <div className="font-bold"> 7. Quick Disbursement: </div>
                <div> With the
                online application and verification process, personal loans are
                disbursed swiftly. This is particularly beneficial in situations
                that require immediate financial support. Embrace the freedom and
                convenience of unsecured personal loans. Clikfin offers a seamless
                and user-friendly platform to access the funds you need, without the
                burden of collateral. Whether it’s an unforeseen expense or
                fulfilling your dreams, our personal loans provide the financial
                flexibility you seek. Apply with us today and unlock a world of
                possibilities.</div>
           
            </div>
            </div>
            </div>
          </div>
          <div className="font-bold text-4xl mt-5 text-center">Personal Loan Eligibility</div>
          <div className="mt-5 p-5 bg-black rounded-xl text-white">
            <p style={{width:'50%',margin:'0 auto'}}>
              Personal loans are offered by most banks and NBFCs, each with their
              own specific eligibility criteria. Nonetheless, there exist certain
              common requirements across all financial institutions. The eligibility
              criteria to get an online personal loan approval for salaried and
              self-employed individuals are:
            </p>
          </div>
          <div className="mt-5 p-5 bg-black rounded-xl text-white">
            <table style={{width:'50%',margin:'0 auto'}} >
              <tr>
                <th>Age</th>
                <td>21 years – 60 years</td>
              </tr>
              <tr>
                <th>Employment Type</th>
                <td>1. Salaried</td>
              </tr>
              <tr>
                <th>Credit score</th>
                <td>750 or above with a good credit history</td>
              </tr>
              <tr>
                <th>Minimum Net Income (Monthly)</th>
                <td>
                  <ul>
                    <li>₹30,000(non-metro cities)</li>
                    <li>₹20,000( metro cities)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Loan Amount</th>
                <td>Up to ₹10 lacs depending on the credit profile</td>
              </tr>
              <tr>
                <th>Work Experience</th>
                <td>Employed at current company for at least 6/12 months</td>
              </tr>
            </table>
          </div>
          <div className="font-bold text-3xl mt-5 text-center text-black">
            Documents Required For Personal Loan
          </div>
          <div className='mt-5 p-5 bg-black rounded-xl text-white'>
          <div className="mt-5 text-center">
            Below is a list of the typical documents needed for the approval of an
            online personal loan:
          </div>
          <div className="font-bold mt-5 text-center">Salaried Individuals</div>
          <ol className='number-list'>
  <li>Proof of Identity and Age</li>
  <li>Fully completed personal loan application form with a photograph</li>
  <li>PAN Card</li>
  <li>Proof of Residence – Passport, driving license, Voter ID,
            postpaid/landline bill, utility bills (electricity/water/gas)</li>
            <li>Bank statements from the last three months (preferably from your
            salary account)</li>
            <li>Last three-month pay slips</li>
</ol>  
        
         
          </div>
          <div className="font-bold text-3xl mt-5 text-center text-black">Personal Loan Details</div>
          <div className="mt-5 p-5 bg-black rounded-xl text-white">

            
            <table style={{width:'90%',margin:'0 auto'}}>
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
          <div className="text-3xl font-bold mt-5 text-center">Representative Example:</div>
          <div className='p-3 bg-black rounded-xl mt-5 text-white' style={{width:'33%',margin:'0 auto'}}>
          <div className="mt-5 ">Loan Amount: ₹1,00,000</div>
          <div>Tenure: 36 months</div>
          <div>Interest Rate: @18%* (reducing basis)</div>
          <div>EMI: ₹3,615</div>
          <div>
            Total Interest Payable: ₹3,615 x 36 months – ₹1,00,000 Principal =
            ₹30,140
          </div>
          <div>Processing fee (@ 2%) = ₹2,000 + GST = ₹2,360</div>
          <div>Disbursed Amount: ₹1,00,000 – ₹2,360 = ₹97,640</div>
          <div>Total Amount Payable: ₹3,615 x 36 months = ₹1,30,140</div>
          <div>
            Total Cost of the Loan = Interest Amount + Processing Fees = ₹30,140 +
            ₹2,360 = ₹32,500
          </div>

          </div>






          <div className="faqs text-black ">
        {faqs1.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
         
          
         
          
          <div className="mt-5">
            Explore the world of personal loans with confidence, knowing the answers
            to these frequently asked questions. ClikFin offers a seamless loan
            application process, ensuring you get the financial support you need for
            various purposes. Apply now and experience the convenience of our
            instant personal loan service.
          </div>
        </div>
      );
}
