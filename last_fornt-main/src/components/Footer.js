import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";
const Footer = () => {
  return (
    <>
     
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Hno : 277 Near Vill chopal, <br /> Sonipat, Haryana <br />
                  PinCode: 131103
                </address>
                <a
                  href="tel:+91 8264954234"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +91 8264954234
                </a>
                <a
                  href="mailto:Fadi.hajri67@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  Fadi.Hajri67@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="#">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                Politique de confidentialité
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                Politique de remboursement
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                Politique d'expédition
                </Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">
                Conditions générales d'utilisation
                </Link>
                <Link className="text-white py-2 mb-1">Blog</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">QUI SOMMME NOUS ?</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contactez-nous </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Liens rapides</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Machine de Remplissage</Link>
                <Link className="text-white py-2 mb-1">Machine d'emballage Automatique</Link>
                <Link className="text-white py-2 mb-1">Machine de Capsulage</Link>
                <Link className="text-white py-2 mb-1">Déshydrateur Alimentaire</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Fadi Hajri & Aymen Daaji
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
