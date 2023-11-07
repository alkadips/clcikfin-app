import React, { useState } from "react";
import FAQ from "./FAq";
export default function Faqs() {
  const [faqs1, setFaqs1] = useState([
    {
      question: "Criteria for Loan Approval:",
      answer:
        "The loan approval depends on the information you provide in the ClikFin App and your credit history, which plays a significant role in the loan approval process.",
      open: true,
    },
    {
      question: "Eligibility for a Personal Loan from ClikFin:",
      answer:
        "As long as you meet the eligibility criteria, you can apply for a personal loan with ClikFin.",
      open: false,
    },
    {
      question: "Minimum and Maximum Loan Amount:",
      answer:
        "The minimum and maximum loan amount available for you to avail will be based on your profile and creditworthiness.",
      open: false,
    },
    {
      question: "Supported Platform:",
      answer:
        "ClikFin supports the Google Play Store platform for its mobile application.,",
      open: false,
    },
    {
      question: "Processing Fee:",
      answer:
        "ClikFin charges a processing fee, the exact amount of which will be specified during the loan application process.",
      open: false,
    },
  ]);
  const [faqs2, setFaqs2] = useState([
    {
      question: "Reason for Loan Amount Not Increasing:",
      answer:
        " The loan amount increases based on your credit records and repayment history. As you make timely loan repayments and build a positive credit history, your loan amount eligibility will increase.",
      open: true,
    },
    {
      question: "Changing Bank Account Number:",
      answer:
        "To change your bank account number in the ClikFin App, please reach out to our customer support.",
      open: false,
    },
    {
      question: "Updating Mobile Number:",
      answer: `If you need to change your mobile number in your profile, you can do so through the App’s settings or contact our customer support for assistance.`,
      open: false,
    },
    {
      question: "Data Security:",
      answer: `Your information is secure with ClikFin, and we take data privacy seriously, following strict security practices and encryption protocols.`,
      open: false,
    },
    {
      question: "Contacting ClikFin:",
      answer: `You can contact ClikFin through the customer support section in the App or visit our website for contact details.`,
      open: false,
    },
    {
      question: "E-Sign Process:",
      answer: `The E-sign process can be done through the App, allowing you to digitally sign loan documents.`,
      open: false,
    },
    {
      question: "Reasons for Loan Application Rejection:",
      answer: `Loan applications can be rejected for various reasons, including inadequate documentation, low credit score, or not meeting the eligibility criteria. If your application is rejected, you can contact customer support for further information and assistance.`,
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

  const toggleFAQ2 = (index) => {
    setFaqs2(
      faqs2.map((faq, i) => {
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
    <div style={{ marginTop: "100px" }}>
      <div className="text-center">
        <div className="font-bold text-4xl mt-5 heading-para">
        Frequently Asked Questions
        </div>
        <div className="font-bold text-3xl mt-5 heading-para" style={{color: '#f9bd08'}}>
          How To Apply For A Loan With ClikFin?
        </div>
        <div className="font-bold text-2xl mt-5 heading-para">
          To Apply For A Loan With ClikFin, Follow These Simple Steps:
        </div>
        <div className="heading-para p-5 bg-black rounded-xl mt-5">
          <div className="mt-5 ">
            <p>
              1. Install the ClikFin App from Google Play Store and register an
              account with basic KYC details.
            </p>
          </div>
          <div>
            <p>
              2. Submit the required documents for verification and loan
              approval.
            </p>
          </div>
          <div>
            <p>
              3. Once approved, add your bank account details and give consent
              to our loan agreement on the ClikFin App.
            </p>
          </div>
          <div>
            <p>
              4. The approved loan amount will be disbursed directly to your
              bank account.
            </p>
          </div>
        </div>
      </div>

      <div className="faqs heading-para ">
        {faqs1.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>

      <div className="font-bold text-3xl mt-5 text-center heading-para">
        Why My Loan Amount Is Not Increas In Geven
      </div>
      <div className="faqs heading-para">
        {faqs2.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ2} />
        ))}
      </div>
    </div>
  );
}
