import { Table, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
export default function EmiTable(props) {
  return (
    <div className="flex">
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="ETableCellText">
                <strong  style={{color:'white'}}>Loan Amount</strong>
              </TableCell>
              <TableCell className="EtableCellValue">
                <strong style={{color:'white'}}>Rs</strong>:<span style={{color:'white'}}>{props.pAmount}</span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="ETableCellText">
                <strong style={{color:'white'}}>Interest %</strong>
              </TableCell>
              <TableCell className="EtableCellValue">
                <strong style={{color:'white'}}>₹</strong>:<span style={{color:'white'}}>{props.interest}</span>

              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="ETableCellText">
                <strong style={{color:'white'}}>Tenure (Months)</strong>
              </TableCell>
              <TableCell className="EtableCellValue">
                <span style={{color:'white'}}>{props.duration}</span>

              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="ETableCellText">
                <strong style={{color:'white'}}>EMI (Monthly)</strong>
              </TableCell>
              <TableCell className="EtableCellValue">
                <strong style={{color:'white'}}>₹</strong>:<span style={{color:'white'}}>{props.emi}</span>

              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="ETableCellText">
                <strong style={{color:'white'}}>Total Interest</strong>
              </TableCell>
              <TableCell className="EtableCellValue">
                <strong style={{color:'white'}}>₹</strong>:<span style={{color:'white'}}>{props.totalAmountOFInterest}</span>

              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="ETableCellText">
                <strong style={{color:'white'}}>Total Payment (Loan Amount + Interest rate)</strong>
              </TableCell>
              <TableCell className="EtableCellValue">
                <strong style={{color:'white'}}>₹</strong> : <span style={{color:'white'}}>{props.totalAmt ? props.totalAmt : 0}</span>

              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </div>

      <div>
        <Pie
          data={{
            labels: ["Total Interest", "Total Amount"],
            datasets: [
              {
                data: [props.totalAmountOFInterest, props.pAmount],
                backgroundColor: ["#f9bd08", "#2B4A84"],
              },
            ],
          }}
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
