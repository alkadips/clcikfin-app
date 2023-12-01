import { Box, Modal } from "@mui/material";
import React  from "react";

export default function Grivience() {
    const [credits, setCreditS] = React.useState(false);
    const handleOpenCredits = () => setCreditS(true);
    const handleCloseCredits = () => setCreditS(false);
    const [upwords, setupword] = React.useState(false);
    const handleOpenupwords = () => setupword(true);
    const handleCloseUpwords = () => setupword(false);
    const [cashe, setcashe] = React.useState(false);
    const handleOpencheshe = () => setcashe(true);
    const handleCloseCashe = () => setcashe(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '40%',
        bgcolor: 'background.paper',
        fontSize: '16px',
        p: 4,
    };
    return (
        <div className="mt-24   font-bold">
            <Modal
                open={credits}
                onClose={handleCloseCredits}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="font-bold" style={{ background: '#e5d2d2', padding: '25px' }}>Credit Saison Grievance Officer Details</div>
                    <div className="mt-5">
                        <div>Name: <span style={{ color: '#16baff' }}> Ms. Preethi Nair</span></div>
                        <div>Designation: <span style={{ color: '#16baff' }}>Grievance Officer</span> </div>
                        <div>Email ID: <span style={{ color: '#16baff' }}>preethi.nair@creditsaison-in.com</span> </div>
                        <div style={{ color: '#16baff' }}>grievance@creditsaison-in.com</div>
                        <div>Contact No: <span style={{ color: '#16baff' }}>9962003070</span> </div>
                        <div>Address: <span style={{ color: '#16baff' }}>IndiQube Lexington Tower, First Floor,</span> </div>
                        <div>Tavarekere Main Rd, Tavarekere, S.G. Palya,</div>
                        <div> Bengaluru, Karnataka 560029</div>
                    </div>
                </Box>
            </Modal>

            <Modal
                open={cashe}
                // onClose={handleOpenCasche}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="font-bold" style={{ background: '#e5d2d2', padding: '25px' }}>Credit Saison Grievance Officer Details</div>
                    <div className="mt-5">
                  <div> Grievance Redressal Officer:<span>Mr. Prateek Saxena</span> </div> 
<div>Bhanix Finance and Investment Limited</div>
<div>Tel:<span>022-46047350</span> </div>
<div>Email:<span>bhanix@cashe.co.in</span> </div>

<div>Customer Care:<span>Bhanix Finance & Investment Ltd.</span>
</div>
<div>Tel: 022-46047350</div>
Email: support@cashe.co.in
                    </div>
                </Box>
            </Modal>
            <Modal
                open={upwords}
                onClose={handleCloseUpwords}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="font-bold" style={{ background: '#e5d2d2', padding: '25px' }}>Upwords Grievance Officer Details</div>
                    <div className="mt-5">
                    GrievanceRedressalOfficer:<span style={{ color: '#16baff' }}> Mr. Venkatesh Dontul</span>
<div>Company name: <span style={{ color: '#16baff' }}>Upwards Capital Private Limited</span> </div>
Tel: <span style={{ color: '#16baff' }}>+ 91 98921 56608</span> 
<div>Email: <span style={{ color: '#16baff' }}>venkatesh.dontul@go-upwards.com</span> </div>
CustomerCare: <span style={{ color: '#16baff' }}>+91-77150 98615</span> 

                    </div>
                </Box>
            </Modal>
            <div className="p-5">
                <div className="shadow-2xl ... p-5">
                    <div >Grievance Officer Details</div>
                    <ul style={{ color: '#2b4a84', cursor: 'pointer' }}>
                        <li>
                            <div onClick={handleOpenCredits}>Credit Saison</div>
                        </li>
                        {/* <li>    <div onClick={handleOpencheshe}>Cashe</div></li> */}
                        <li>
                            <div  onClick={handleOpenupwords}>Upwords</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}
