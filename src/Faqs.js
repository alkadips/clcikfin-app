import React, { useState } from "react";
import FAQ from "./FAq";
export default function Faqs() {
  const [faqs1, setFaqs1] = useState([
    {
      question: " What types of loans do you offer?",
      answer:
        "We provide a variety of loans to meet different needs, including personal loans, home loans, car loans, and bike loans. etc",
      open: true,
    },
    {
      question: "How can I apply for a loan?",
      answer:
        " Applying for a loan is simple. You can download our app and apply for loan, and our team will guide you through the process.",
      open: false,
    },
    {
      question: "Are there any hidden fees associated with your loans?",
      answer:
        "We believe in transparency. All applicable fees and charges are clearly communicated to you before finalizing the loan agreement.",
      open: false,
    },
    {
      question: "Eligibility criteria to apply for clikfin loans",
      answer:
        "Our basic eligibility criteria is- Applicant must be salaried or self-employed,Monthly in-hand income of ₹20,000 or more,Income should be received in a bank,Min. CIBIL score and Experian score of 650,Should be aged between 21 years and 57 years",
      open: false,
    },
    {
      question: " How to track your loan application?",
      answer: "you can track on our app 'clikfin'",
      open: false,
    },
    {
      question: " What documents do I need to get an loan from clikfin?",
      answer:
        " Pan Card, adhar card, profile pic, 3 month salary account statement in pdf, company id, Current address proof",
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
    <div className="faq-section flex mt-24 gap-5 p-5">
     

      <div>
        <div className="font-bold text-2xl text-black">
          To Apply For A Loan With ClikFin, Follow These Simple Steps:
        </div>
        <div className="text-black  rounded-xl mt-3">
          <div className="mt-3 ">
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

      <div className="faqs text-black ">
        {faqs1.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}
