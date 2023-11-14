import React from "react";
import InputForm from "./InputForm";
import AmortizationSchedule from "./AmortizationSchedule";
import LoanRequest from "./Modals/LoanRequest";
import getSchedule from "./Lib/AmortizationService";
  class EmiCalc extends React.Component {
  

  state = {
    monthlyPayment: 0,
    columns: [
      {
        Header: 'Month',
        accessor: 'paymentNumber',
      },
      {
        Header: 'Principal',
        accessor: 'principalPaymentRounded',
      },
      {
        Header: 'Interest',
        accessor: 'interestPaymentRounded',
      },
      {
        Header: 'Total Payments',
        accessor: 'paymentRounded',
      },
      {
        Header: 'Remaining Balance',
        accessor: 'principalBalanceRounded',
      },
    ],
    amortizationSchedule: [],
    loanResponse: {
      amortizationSchedule: [],
      annualPaymentSummary: new Map(),
    },
    currentYear: (new Date()).getFullYear(),
    developer: 'goel4ever'
  };
  calculatePayments = ({ principal, rate, duration, startDate, extraPayment }) => {

    if (principal < 0 || rate < 0 || duration < 0 || duration > 40) {
      return;
    }

    const loanRequest = new LoanRequest(principal, rate, duration)
    const loanResponse = getSchedule(loanRequest)

    this.setState({
      monthlyPayment: loanResponse.monthlyPayment,
      amortizationSchedule: loanResponse.amortizationSchedule,
      loanResponse,
    });
  };
  render() {
    return (
  
    <div className="text-black text-center" style={{ marginTop: "100px" }}>
      <div className="font-bold text-3xl mt-5">
        EMI Calculator - Your Convenient Loan Planning Tool
      </div>
     
      {/* <div className=" flex justify-center gap-5 p-5 mt-5">
        <div className="shadow-2xl ... p-5" style={{width:'50%',background:'#2B4A84',color:'white'}}>
      <div>
        <div>Loan Amount</div>
        <Slider   size="small" value={pAmount} onChange={(event,vAmt)=>{setpAmount(vAmt)}} defaultValue={pAmount} max={maxValue}/>
      </div>
      <div>
        <div>Interest Rate %</div>
        <Slider  value={interest} onChange={(event,vint)=>{setInterest(vint)}} defaultValue={interest} max={intmax}/>
      </div>
      <div>
        <div>Tenure (Months)</div>
        <Slider  value={duration} onChange={(event,vduration)=>{setDuration(vduration)}} defaultValue={duration} max={maxDuration}/>
      </div>
      </div> */}
      {/* <div  >
        <Table>
          <TableRow>
            <TableCell>
              <EmiTable pAmount={pAmount} interest={interest} duration={duration} emi={emi}totalAmountOFInterest={totalAmountOFInterest} totalAmt={totalAmt}/>
            </TableCell>
          </TableRow>
        </Table>
      </div> */}
      {/* </div>
       */}
<div className="flex justify-evenly text-black gap-5 p-5">
  <div className="shadow-2xl ... p-5" style={{width:'50%'}}>
<div><InputForm onSubmit={this.calculatePayments} />
<div className="mt-5">
<AmortizationSchedule
  data={this.state.loanResponse}
  columns={this.state.columns}
  showPagination={false}
  defaultPageSize={400}
/>
</div>
</div>
</div>
<div className="sample-cal shadow-2xl ... p-5" style={{width:'44%'}}>
  <div>Sample Calculations</div>
  <div className="flex mt-5 gap-5 justify-between">
    <div>Loan Amount</div>
    <div>₹1,00,000</div>
  </div>
  <hr></hr>

  <div className="flex mt-5 gap-5 justify-between">
    <div>Loan Tenure</div>
    <div>24 months</div>
  </div>
  <hr></hr>

  <div className="flex mt-5 gap-5 justify-between">
    <div>Processing fee (3% + GST)</div>
    <div>₹3,540</div>
  </div>
  <hr></hr>

  <div className="flex mt-5 gap-5 justify-between">
    <div>EMI</div>
    <div>₹5,905</div>
  </div>
  <hr></hr>

  <div className="flex mt-5 gap-5 justify-between">
    <div>Total interest charged</div>
    <div>₹41,714</div>
  </div>
  <hr></hr>
  <div className="flex mt-5 gap-5 justify-between">
    <div>ROI(per month)</div>
    <div>3%</div>
  </div>
</div>
</div>



<div>

</div>
     <div className="p-5 bg-black text-white rounded-xl">
      <div style={{width:'50%',margin:'0 auto'}}>
      <div className="mt-5">

        <p>
          Calculating the Equated Monthly Installment (EMI) for a loan has never
          been easier. With our user-friendly EMI calculator, you can obtain the
          EMI instantly by entering the desired loan amount and the applicable
          interest rate. The calculator considers the reducing balance method to
          compute the installment accurately.
        </p>
      </div>
      <div className="font-bold">Important Considerations:</div>
      <div className="mt-5">
        
          <div className="font-bold">1. Reducing Balance Method: </div>
          <div>Our
          EMI calculator employs the reducing balance method, which ensures a
          precise calculation of your installment amount, factoring in the
          reduced principal balance over time.
          </div> 
      </div>
      <div className="mt-5">
        
          <div className="font-bold">2. Additional Charges:</div> 
          <div>Please note
          that the EMI calculated using the tool does not include processing
          fees or any other possible charges that may be applicable as per the
          financing institution’s rules.</div>
        
      </div>
      <div className="mt-5 font-bold">Plan Your Loan Repayment:</div>
      <div className="mt-5">
        
          Using our EMI calculator, you can make informed decisions about your
          loan repayment strategy. By adjusting the loan amount and interest
          rate, you can assess various loan options and determine an EMI that
          aligns with your financial capacity.
        
      </div>
      <div className="mt-5">
        <p>
          Get started with our EMI calculator today and plan your loan journey
          with confidence. Please keep in mind that the results provided are
          indicative and may differ slightly from the actual EMI offered by the
          lending institution. For precise loan details, feel free to connect
          with our team or the respective financing institution.
        </p>
      </div>
      
      </div>
      </div>
    </div>
   );
  }
}
export default EmiCalc;
