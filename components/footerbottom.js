import logo from "../public/Subtract.png";
import mainLogo from "../public/Subtract (1).png";
import Image from "next/image";
function FooterBottom() {
  return (
    <div className="footer-bottom-bg mb-0 p-3 d-flex justify-content-between flex-wrap">
      <div className="pt-2 text-white me-3">Besnik Creative Agency.</div>
      <div className="image-logo-sub-2 pt-2 me-auto">
        <Image src={logo} className="logo-sub-1 logo" />
        <Image src={mainLogo} className="logo-sub-2 logo" />
        <span className="logo-head"> NetBook</span>
      </div>
      <div className="d-flex flex-row">
        <div className="icon-bg">
         
        </div>
        <div className="icon-bg">
         
        </div>
        <div className="icon-bg">
         
        </div>
        <div className="icon-bg">
         </div>
      </div>
      {/* <div className="d-flex flex-column flex-md-row justify-content-between footer-bottom-sec">
        <div className="col-12 col-md-6">
          <p className="pt-2">Besnik Creative Agency.</p>
          <div className="image-logo-sub-2 pt-2">
            <Image src={logo} className="logo-sub-1 logo" />
            <Image src={mainLogo} className="logo-sub-2 logo" />
            <span className="logo-head"> NetBook</span>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="d-flex flex-row">
            <div className="icon-bg">
              <FaTwitter />
            </div>
            <div className="icon-bg">
              <FaInstagram />
            </div>
            <div className="icon-bg">
              <FaFacebookF />
            </div>
            <div className="icon-bg">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default FooterBottom;
