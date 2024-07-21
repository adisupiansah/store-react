import { Container } from "react-bootstrap";
import Gambar from "../../assets/img/gambar.jpg"
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
const Header = () => {
  return (
    <div className="clas-header">
      <Container>
        <div className="header d-flex justify-content-between align-items-center">
            <div className="header-socialmedia align-items-center d-flex justify-content-between gap-2">
             <span>ikuti kami</span>
              <FaInstagram className="header-socialmedia-icon"/>    
              <FaFacebook className="header-socialmedia-icon"/>
              <FaTiktok className="header-socialmedia-icon"/>
            </div>
          <div className="header-akun">
            <img src={Gambar} alt="" className="header-akun-img rounded-circle"/>
            <span className="mx-2">adi supiansah</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
