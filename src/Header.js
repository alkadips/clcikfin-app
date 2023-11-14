import { Box, Modal } from "@mui/material";
import React from "react";
import { NavLink } from "react-bootstrap";

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
              <NavLink href="/">
                <div>Home</div>
              </NavLink>
            </li>
            <li>
              <NavLink href="/about">
                <div>About</div>
              </NavLink>
            </li>
            <li>
              <NavLink href="/personelloan">
                <div>Personal Loan</div>
              </NavLink>
            </li>
            <li>
              <NavLink href="/emicalculator">
                <div>EMI Calculator</div>
              </NavLink>
            </li>
            <li>
              <NavLink href="/terms">
                <div>Terms & condition</div>
              </NavLink>
            </li>
            <li>
              <NavLink href="/privacy">
                <div>Privacy Policy</div>
              </NavLink>
            </li>
            <li>
              <NavLink href="/faqs">
                <div>FAQS</div>
              </NavLink>
            </li>
            <li>
              <NavLink href="/contact">
                <div>Contact</div>
              </NavLink>
            </li>
            <li >
              <NavLink  href="https://play.google.com/store/apps/details?id=com.clikfin.clikfinapplication">
                <div  className="get-cash-now rounded-full ... p-2">
                  GET CASH NOW
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink style={{ cursor: "pointer" }}>
                <div
                  onClick={handleOpen}
                  className="get-cash-now rounded-full ... p-2"
                >
                  Log In
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div >
          <NavLink href="/">
            <img  alt="logo" src="/clcikfin-app/logo.png"></img>
          </NavLink>{" "}
        </div>
        <div className="flex font-bold wrapper-gap" style={{gap:'20px'}}>
          <NavLink href="/">
            <div className="home">Home</div>
          </NavLink>
          <NavLink href="/about">
            <div className="home">About</div>
          </NavLink>
          <NavLink href="/personelloan">
            <div className="home">Personal Loan</div>
          </NavLink>
          <NavLink href="/emicalculator">
            <div className="home">EMI Calculator</div>
          </NavLink>
          {/* <NavLink href="/terms">
            <div className="home">Terms & condition</div>
          </NavLink>
          <NavLink href="/privacy">
            <div className="home">Privacy Policy</div>
          </NavLink> */}
          <NavLink href="/faqs">
            <div className="home">FAQs</div>
          </NavLink>
          <NavLink href="/blog">
            <div className="home">Blog</div>
          </NavLink>
          <NavLink href="/contact">
            <div className="home">Contact</div>
          </NavLink>
          {/* <Link href="/whatsapp">
            <div>Whatsapp</div>
          </Link> */}
          <NavLink href="https://play.google.com/store/apps/details?id=com.clikfin.clikfinapplication">
            <div className="get-cash-now rounded-full ... p-2">
              Get Cash Now
            </div>
          </NavLink>
          <NavLink style={{ cursor: "pointer" }}>
            <div
              onClick={handleOpen}
              className="get-cash-now rounded-full ... p-2"
            >
              Log In
            </div>
          </NavLink>
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
