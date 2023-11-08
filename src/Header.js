import { Box, Modal } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

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
              <Link to="/">
                <div>Home</div>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <div>About</div>
              </Link>
            </li>
            <li>
              <Link to="/personelloan">
                <div>Personal Loan</div>
              </Link>
            </li>
            <li>
              <Link to="/emicalculator">
                <div>EMI Calculator</div>
              </Link>
            </li>
            <li>
              <Link to="/terms">
                <div>Terms & condition</div>
              </Link>
            </li>
            <li>
              <Link to="/privacy">
                <div>Privacy Policy</div>
              </Link>
            </li>
            <li>
              <Link to="/faqs">
                <div>FAQS</div>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <div>Contact</div>
              </Link>
            </li>
            <li>
              <Link to="https://play.google.com/store/apps/details?id=com.clikfin.clikfinapplication">
                <div className="get-cash-now rounded-full ... p-2">
                  GET CASH NOW
                </div>
              </Link>
            </li>
            <li>
              <Link style={{ cursor: "pointer" }}>
                <div
                  onClick={handleOpen}
                  className="get-cash-now rounded-full ... p-2"
                >
                  Log In
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Link to="/">
            <img  src="./clcikfin-app/logo.png"></img>
          </Link>{" "}
        </div>
        <div className="flex gap-5 font-bold wrapper-gap">
          <Link to="/">
            <div>Home</div>
          </Link>
          <Link to="/about">
            <div>About</div>
          </Link>
          <Link to="/personelloan">
            <div>Personal Loan</div>
          </Link>
          <Link to="/emicalculator">
            <div>EMI Calculator</div>
          </Link>
          <Link to="/terms">
            <div>Terms & condition</div>
          </Link>
          <Link to="/privacy">
            <div>Privacy Policy</div>
          </Link>
          <Link to="/faqs">
            <div>FAQS</div>
          </Link>
          <Link to="/contact">
            <div>Contact</div>
          </Link>
          {/* <Link to="/whatsapp">
            <div>Whatsapp</div>
          </Link> */}
          <Link to="https://play.google.com/store/apps/details?id=com.clikfin.clikfinapplication">
            <div className="get-cash-now rounded-full ... p-2">
              GET CASH NOW
            </div>
          </Link>
          <Link style={{ cursor: "pointer" }}>
            <div
              onClick={handleOpen}
              className="get-cash-now rounded-full ... p-2"
            >
              Log In
            </div>
          </Link>
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
