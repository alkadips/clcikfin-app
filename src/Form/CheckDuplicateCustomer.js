import { useState } from "react";

export default function CheckDuplicateCustomer() {
    const PHONE_REGEX =
        new RegExp(/"^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"/gmi);
    const [errors, setErros] = useState({
        partnerNameError: "",
        mobileNumberError: "",
        emailError: ""
    });
    const [submitClicked, setSubmitClicked] = useState(false);
    const [partnerName, setPartnerName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const onClickButton = () => {
        if (!partnerName) {
            setErros({ partnerNameError: "Please Enter Partner name" });
            return false;
        } else if (!mobileNumber && PHONE_REGEX) {
            setErros({ mobileNumberError: "Please Enter Valid Number" });
            return false;
        } else if (!email) {
            setErros({ emailError: "Please Enter Valid Email Address" });
            return false;
        } else if (partnerName && mobileNumber && email) {
            setSubmitClicked(true);
            return true;
        }
    };
    const handleInputPartnerName = (e) => {
        setPartnerName(e.target.value);
    };
    const handleInputMobile = (e) => {
        setMobileNumber(e.target.value);
    };
    const handleInputEmail = (e) => {
        setEmail(e.target.value);
    };
    return (
        <div className="mt-24">
            <div className="font-bold text-center text-3xl">Check Duplicate Customer Lead</div>
            <div className="p-5 login-page">
                <div className="one-login">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-24 clickfin-para-home p-5" style={{ border: '1px solid' }}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Enter Partner Name<span className="text-red-600 ml-1">*</span>
                            </label>
                            <input onChange={handleInputPartnerName} value={partnerName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Partner Name" />
                            <p className="text-red-600 text-left mt-2">
                                {!partnerName ? errors.partnerNameError : ""}
                            </p>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Enter Mobile Number<span className="text-red-600 ml-1">*</span>
                            </label>
                            <input onChange={handleInputMobile} value={mobileNumber} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Mobile Number" />
                            <p className="text-red-600 text-left mt-2">
                                {!mobileNumber ? errors.mobileNumberError : ""}
                            </p>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Enter Email Id<span className="text-red-600 ml-1">*</span>
                            </label>
                            <input onChange={handleInputEmail} value={email} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
                            <p className="text-red-600 text-left mt-2">
                                {!email ? errors.emailError : ""}
                            </p>
                        </div>

                        <div onClick={onClickButton} className="mb-4 text-center bg-blue-600 p-2 text-white cursor-pointer">
                            Save
                        </div>


                    </form>

                </div>
                <div className="one-login">
                    <img
                        className="mobile-i3mage"
                        alt="google"
                        src={process.env.PUBLIC_URL + '/assets/images/slider1.jpg'}
                    ></img>
                </div>
            </div>
        </div>
    )

}