import { BrowserRouter, Route, Routes } from "react-router-dom";
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
function App() {
  return (
    <div className="main-wrapper">
    <BrowserRouter>
      <Header />

      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/personelloan" element={<Personel />} />
        <Route path="/emicalculator" element={<EmiCalc />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<TermsCon />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/duplicate" element={<DuplicateCusLead />} />

      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}
export default App;