import { Box, Modal } from "@mui/material";
import React from "react";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "20px",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <div className="flex justify-around shadow-2xl ... header-wrapper ">
        <input type="checkbox" id="drawer-toggle" name="drawer-toggle" />

        <label for="drawer-toggle" id="drawer-toggle-label"></label>
        <nav id="drawer">
          <ul>
            <li>
              <a href="/">
                <div>Home</div>
              </a>
            </li>
            <li>
              <a href="/about">
                <div>About</div>
              </a>
            </li>
            <li>
              <a href="/personelloan">
                <div>Personal Loan</div>
              </a>
            </li>
            <li>
              <a href="/emicalculator">
                <div>EMI Calculator</div>
              </a>
            </li>
            <li>
              <a href="/terms">
                <div>Terms & condition</div>
              </a>
            </li>
            <li>
              <a href="/privacy">
                <div>Privacy Policy</div>
              </a>
            </li>
            <li>
              <a href="/faqs">
                <div>FAQS</div>
              </a>
            </li>
            <li>
              <a href="/contact">
                <div>Contact</div>
              </a>
            </li>
            <li>
              <a href="https://play.google.com/store/apps/details?id=com.clikfin.clikfinapplication">
                <div className="get-cash-now rounded-full ... p-2">
                  GET CASH NOW
                </div>
              </a>
            </li>
            <li>
              <a style={{ cursor: "pointer" }}>
                <div
                  onClick={handleOpen}
                  className="get-cash-now rounded-full ... p-2"
                >
                  Log In
                </div>
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <a href="/">
            <img alt="logo" src="logo.png"></img>
          </a>{" "}
        </div>
        <div className="flex gap-5 font-bold wrapper-gap">
          <a href="/">
            <div>Home</div>
          </a>
          <a href="/about">
            <div>About</div>
          </a>
          <a href="/personelloan">
            <div>Personal Loan</div>
          </a>
          <a href="/emicalculator">
            <div>EMI Calculator</div>
          </a>
          <a href="/terms">
            <div>Terms & condition</div>
          </a>
          <a href="/privacy">
            <div>Privacy Policy</div>
          </a>
          <a href="/faqs">
            <div>FAQS</div>
          </a>
          <a href="/contact">
            <div>Contact</div>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.clikfin.clikfinapplication">
            <div className="get-cash-now rounded-full ... p-2">
              GET CASH NOW
            </div>
          </a>
          <a style={{ cursor: "pointer" }}>
            <div
              onClick={handleOpen}
              className="get-cash-now rounded-full ... p-2"
            >
              Log In
            </div>
          </a>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div>
              <div>
                <div className="font-bold"> Almost There</div>
                <div className="mt-3">
                  Please enter your phone number to proceed
                </div>
                <div className="mt-5">
                  {/* <PhoneInput
                    specialLabel={""}
                    country={"in"}
                    placeholder="Phone Number"
                    className="phone-input"
                  /> */}
                  <input
                    type="number"
                    className="phone-input"
                    placeholder="Phone Number"
                    max="10"
                    min="2"
                    maxLength={10}
                  ></input>
                </div>
                <div className="mt-3 proceed">Proceed</div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
