import "../../index.css";
import iconMastercard from "../../assets/icons/footer/payment/footer_icon_payment_Mastercard.svg";
import iconPaypal from "../../assets/icons/footer/payment/footer_icon_payment_Paypal.svg";
import iconVisa from "../../assets/icons/footer/payment/footer_icon_payment_Visa.svg";
import iconTwitter from "../../assets/icons/footer/social/footer_icon_social_twitter.png";
import iconFacebook from "../../assets/icons/footer/social/footer_icon_social_facebook.png";
import iconYoutube from "../../assets/icons/footer/social/footer_icon_social_youtube.png";

function Footer() {
  return (
    <>
      <div className="main-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-item">
              <h4>About Ivan</h4>
              <ul>
                <li>
                  <a href="">About Ivan</a>
                </li>
              </ul>
            </div>

            <div className="footer-item">
              <h4>Help & FAQs</h4>
              <ul>
                <li>
                  <a href="">Help & FAQs</a>
                </li>
              </ul>
            </div>

            <div className="footer-item">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <a href="">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="footer-item footer-social">
              <h4>Latest from Ivan</h4>
              <ul>
                <li>
                  <a href="">
                    <img src={iconTwitter} alt="Icon Twitter" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={iconFacebook} alt="Icon Facebook" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={iconYoutube} alt="Icon Youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-payment">
            <h4>Payment Methods</h4>
            <ul>
              <li>
                <img src={iconMastercard} alt="Icon Mastercard" />
              </li>
              <li>
                <img src={iconPaypal} alt="Icon Paypal" />
              </li>
              <li>
                <img src={iconVisa} alt="Icon Visa" />
              </li>
            </ul>
          </div>
          <div className="footer-copyright">
            <p>© 2023 Ivan Souza</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
