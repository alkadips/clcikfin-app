import { Box, Modal } from "@mui/material";
import React, { useEffect } from "react";
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
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <div className="flex justify-around shadow-2xl ... header-wrapper ">
        {/* <input type="checkbox" id="drawer-toggle" name="drawer-toggle" />

        <label for="drawer-toggle" id="drawer-toggle-label"></label>
        <nav id="drawer">
          <ul>
            <li>
              <Link style={{textDecoration:'none',color:'#2B4A84'}} to="/">
                <div>Home</div>
              </Link>
            </li>
            <li>
              <Link style={{textDecoration:'none',color:'#2B4A84'}} to="/about">
                <div>About</div>
              </Link>
            </li>
            <li>
              <Link style={{textDecoration:'none',color:'#2B4A84'}} to="/personelloan">
                <div>Personal Loan</div>
              </Link>
            </li>
            <li>
              <Link style={{textDecoration:'none',color:'#2B4A84'}} to="/emicalculator">
                <div>EMI Calculator</div>
              </Link>
            </li>
            <li>
              <Link style={{textDecoration:'none',color:'#2B4A84'}} to="/terms">
                <div>Terms & condition</div>
              </Link>
            </li>
            <li>
              <Link style={{textDecoration:'none',color:'#2B4A84'}} to="/privacy">
                <div>Privacy Policy</div>
              </Link>
            </li>
            <li>
              <Link style={{textDecoration:'none',color:'#2B4A84'}} to="/faqs">
                <div>FAQS</div>
              </Link>
            </li>
            <li>
              <Link style={{textDecoration:'none',color:'#2B4A84'}} to="/contact">
                <div>Contact</div>
              </Link>
            </li>
            <li >
              <Link style={{textDecoration:'none',color:'#2B4A84'}}  to="https://play.google.com/store/apps/details?id=com.clikfin.clikfinapplication">
                <div  className="get-cash-now rounded-full ... p-2">
                  GET CASH NOW
                </div>
              </Link>
            </li>
            <li>
              <Link style={{ cursor: "pointer",textDecoration:'none',color:'#2B4A84' }}>
                <div
                  onClick={handleOpen}
                  className="get-cash-now rounded-full ... p-2"
                >
                  Log In
                </div>
              </Link>
            </li>
          </ul>
        </nav> */}
        <div className="ml-5">
          <Link className="no-underline" style={{ color: "#2B4A84" }} to="/">
            <img
              className="w-36 h-10"
              alt="logo"
              src={process.env.PUBLIC_URL + '/assets/images/logo3.png'}

            ></img>
          </Link>{" "}
        </div>
        <div className="flex font-bold wrapper-gap" style={{ gap: "20px" }}>
          <Link className="no-underline" style={{ color: "#2B4A84" }} to="/">
            <div className="home">Home</div>
          </Link>
          <Link
            className="no-underline"
            style={{ color: "#2B4A84" }}
            to="/about"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <div className="home">About</div>
          </Link>
          <Link
            className="no-underline"
            style={{ color: "#2B4A84" }}
            to="/personelloan"
          >
            <div className="home">Personal Loan</div>
          </Link>
          <Link
            className="no-underline"
            style={{ color: "#2B4A84" }}
            to="/emicalculator"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <div className="home">EMI Calculator</div>
          </Link>
          <Link
            className="no-underline"
            style={{ color: "#2B4A84" }}
            to="/faqs"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <div className="home">FAQs</div>
          </Link>
          <Link
            className="no-underline"
            style={{ color: "#2B4A84" }}
            to="/blog"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <div className="home">Blog</div>
          </Link>
          {/* <Link
            className="no-underline"
            style={{ color: "#2B4A84" }}
            to="/duplicate"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <div className="home">Duplicate</div>
          </Link> */}
          <Link
            className="no-underline"
            style={{ color: "#2B4A84" }}
            to="/contact"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <div className="home">Contact</div>
          </Link>

          <Link
            className="no-underline"
            style={{ color: "#2B4A84" }}
            to="https://play.google.com/store/apps/details?id=com.clikfin.clikfinapplication"
          >
            <div className="get-cash-now rounded-full ... p-2">
              Get Cash Now
            </div>
          </Link>
          <Link
            className="cursor-pointer no-underline"
            style={{ color: "#2B4A84" }}
          >
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
