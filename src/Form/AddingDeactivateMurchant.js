import { useEffect, useState } from "react";
export default function AddingDeactivateMurchant() {
    const [errors, setErros] = useState({
        partnerNameError: "",
        merchantIdError: "",
        merchantNameError: "",

    });
    const [submitClicked, setSubmitClicked] = useState(false);
    const [partnerName, setPartnerName] = useState("");
    const [merchantId, setMerchantId] = useState("");
    const [merchantName, setMerchanatName] = useState("");
    const onClickButton = () => {
        if (!partnerName) {
            setErros({ partnerNameError: "Please Enter Partner name" });
            return false;
        } else if (!merchantId) {
            setErros({ merchantIdError: "Please Enter Merchant Id" });
            return false;
        } else if (!merchantName) {
            setErros({ merchantNameError: "Please Enter merchant name" });
            return false;
        } else if (partnerName && merchantId && merchantName) {
            setSubmitClicked(true);
            return true;
        }
    };
    const handleInputPartnerName = (e) => {
        setPartnerName(e.target.value);
    };
    const handleChangeMerchantId = (e) => {
        setMerchantId(e.target.value);
    };
    const handlechangemerchantName = (e) => {
        setMerchanatName(e.target.value);
    };
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, []);
    return (
        <div className="mt-24">
            <div className="font-bold text-center text-3xl">Adding Deactivate Murchant</div>
            <div className="p-5 login-page">
                <div className="one-login" >
                    <form className="bg-white shadow-md  rounded px-8  pb-8 mb-4 mt-16 clickfin-para-home p-5" style={{ border: '1px solid' }}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Enter Partner Name<span className="text-red-600 ml-1"> *</span>
                            </label>
                            <input value={partnerName} onChange={handleInputPartnerName} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name" />
                        
                            <p className="text-red-600 text-left mt-2">
                                {!partnerName ? errors.partnerNameError : ""}
                            </p></div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                           Enter Merchant_id <span className="text-red-600 ml-1"> *</span>
                            </label>
                            <input value={merchantId} onChange={handleChangeMerchantId} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Merchant Id" />
                            <p className="text-red-600 text-left mt-2">
                                {!merchantId ? errors.merchantIdError : ""}
                            </p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                           Enter Merchant_name<span className="text-red-600 ml-1"> *</span>
                            </label>
                            <input value={merchantName} onChange={handlechangemerchantName} style={{ width: '100%' }} className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Merchant Name" />
                            <p className="text-red-600 text-left mt-2">
                                {!merchantName ? errors.merchantNameError : ""}
                            </p>
                        </div>

                        <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Is Active<span className="text-red-600 ml-1"> *</span>
                                </label>
                                <div className="flex gap-2">
                                    <div className="flex gap-2">
                                        <div>True</div>
                                        <div>
                                            <input id="username" type="radio" />

                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div>False</div>
                                        <div>
                                            <input id="username" type="radio" />

                                        </div>
                                    </div>


                                </div>
                            </div>
                        <div>
                           
                                <div onClick={onClickButton} className="mb-4 text-center bg-blue-600 p-2 text-white cursor-pointer">
                                    Save
                                </div>
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