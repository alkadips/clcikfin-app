import {  HashRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import Footer from "./Footer";
import EmiCalc from "./EmiCalc";
import Faqs from "./Faqs";
import About from "./About";
import TermsCon from "./TermsCon";
import Privacy from "./Privacy";
import Contact from "./Contact";
import Personel from "./Personel";
import Blog from "./Blog";
import DuplicateCusLead from "./DuplicateCusLead";
import CheckDuplicateCustomer from "./Form/CheckDuplicateCustomer";
import PreApproval from "./Form/PreApproval";
// import Privacy2 from "./Privacy2";

function App() {
  return (
    <div className="main-wrapper">
      <HashRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/personelloan" element={<Personel />} />
          <Route path="/emicalculator" element={<EmiCalc />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<TermsCon />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* <Route path="/privacy2" element={<Privacy2 />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/duplicate" element={<DuplicateCusLead />} />
          <Route path="/checkdupcusform" element={<CheckDuplicateCustomer />} />
          <Route path="/preapproval" element={<PreApproval />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}
export default App;
