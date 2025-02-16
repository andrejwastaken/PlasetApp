import React from 'react';
import './footer.css';
import sliki from "../../assets/sliki";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <a href="/">Plaset</a>
                </div>
                <div className="footer-links">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/plasetdonermk" target="_blank" rel="noopener noreferrer">
                                <img src={sliki.Facebook_Logo_2023} alt="Facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/plasetdoner" target="_blank" rel="noopener noreferrer">
                                <img src={sliki.Instagram_icon} alt="Instagram" />
                            </a>
                        </li>
                        <li><a href="/Privacy_Policy">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Plaset. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
