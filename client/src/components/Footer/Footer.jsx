import React from "react";
import{AiOutlineCopyright} from "react-icons/ai"
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

function Footer() {
    return (
        <div className="footer">
                <div className="footer-content">
                    <div className="col">
                        <div className="title">About</div>
                        <div className="text">

                            OUR VISION,
                            We strongly believe that the amount of clothing produced today is way greater than humanity needs.
                            We share the beauty and excitement that physical fashion creates,
                            but we believe that there are ways to produce less, to produce more sustainably, and not to produce at all.
                            At a current stage of OUTFITV development, we aim to show that some clothes can exist only in their digital versions.
                        </div>
                    </div>
                    <div className="col">
                        <div className="title">Contact</div>
                        <div className="c-item">
                            <FaMobileAlt />
                            <div className="text">Phone: 7869444873</div>
                        </div>
                        <div className="c-item">
                            <FaEnvelope />
                            <div className="text">Email: pritish123@gmail.com</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="title">Account</div>
                        <span className="text">Career at OUTFIT-V</span>
                        <span className="text">About Us</span>
                        <span className="text">Sustainability</span>
                        <span className="text">Press</span>

                    </div>
                    <div className="col">
                        <div className="title">Help</div>
                        <span className="text">FAQ</span>
                        <span className="text">Shipping</span>
                        <span className="text">Returns</span>
                        <span className="text">Order Status</span>

                    </div>
                </div>
                <div className="bottom-bar">
                    <div className="bottom-bar-content">
                        <span className="text">
                            Copyright<AiOutlineCopyright /> 2023 All Rights are Reserved By Outfit-V

                        </span>
                        <img src={Payment} />
                    </div>
                </div>
            </div>
    );
};

export default Footer;