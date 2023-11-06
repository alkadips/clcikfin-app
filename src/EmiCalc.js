import { Slider, Table, TableCell, TableRow } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { useState } from "react";
// import {  withStyles } from "@mui/material";
// import { Pie } from "react-chartjs-2";
import EmiTable from "./EmiTable";
export default function EmiCalc() {
  const PrettoSlider=withStyles({
    root:{color:'MediumVioletRed',height:10},
    thumb:{height:25,width:25,backgroundColor:'white',border:'3px solid black',marginTop:-9,marginLeft:-9},
    track:{height:10,borderRadius:4},
    rail:{height:10,borderRadius:4}
  })

  const [pAmount,setpAmount]=useState(2755000);
  const [interest,setInterest]=useState(7);
  const [duration,setDuration]=useState(147);
  const maxValue=6000000;
  const intmax=20;
  const maxDuration=360;
  const intr=interest/1200;
  const emi=duration?Math.round(pAmount*intr/(1-(Math.pow(1/(1+intr),duration)))):0;
  const totalAmt=duration*emi;
  var totalAmountOfCredit=Math.round((emi/intr)*(1-Math.pow((1+intr),(-duration))));
  const totalAmountOFInterest=Math.round(totalAmt-totalAmountOfCredit);



  return (
    <div className="heading-para text-center" style={{ marginTop: "100px" }}>
      <div className="font-bold text-3xl mt-5">
        EMI Calculator - Your Convenient Loan Planning Tool
      </div>
      <div className=" flex justify-around gap-5 p-5">
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
      </div>
      <div className="shadow-2xl ... p-5" style={{width:'50%'}}>
        <Table>
          <TableRow>
            <TableCell>
              <EmiTable pAmount={pAmount} interest={interest} duration={duration} emi={emi}totalAmountOFInterest={totalAmountOFInterest} totalAmt={totalAmt}/>
            </TableCell>
          </TableRow>
        </Table>
      </div>
      </div>
      
     
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
        <p>
          <span className="font-bold">1. Reducing Balance Method: </span> Our
          EMI calculator employs the reducing balance method, which ensures a
          precise calculation of your installment amount, factoring in the
          reduced principal balance over time.
        </p>
      </div>
      <div className="mt-5">
        <p>
          <spa className="font-bold">2. Additional Charges:</spa> Please note
          that the EMI calculated using the tool does not include processing
          fees or any other possible charges that may be applicable as per the
          financing institution’s rules.
        </p>
      </div>
      <div className="mt-5 font-bold">Plan Your Loan Repayment:</div>
      <div className="mt-5">
        <p>
          Using our EMI calculator, you can make informed decisions about your
          loan repayment strategy. By adjusting the loan amount and interest
          rate, you can assess various loan options and determine an EMI that
          aligns with your financial capacity.
        </p>
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
  );
}
