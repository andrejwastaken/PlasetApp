import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import './Privacy_policy.css';

function PrivacyPolicy() {
    return (
        <div className="PrivacyPolicy">
            <Navbar />
            <div className="container">
                <div className="privacy-content">
                    <h1>Privacy Policy</h1>

                    <p>
                        At Plaset Doner, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines the types of personal information we collect, how it is used, and the steps we take to ensure your data is handled responsibly.
                    </p>

                    {/* Add more content as needed for your specific Privacy Policy */}

                    <h2>Information We Collect</h2>
                    <p>
                        We may collect personal information when you interact with our website, make a purchase, or sign up for our newsletter. This information may include your name, email address, contact details, and other relevant details.
                    </p>

                    {/* Add more sections as needed */}

                    <h2>How We Use Your Information</h2>
                    <p>
                        We use the information we collect to provide and improve our services, personalize your experience, and communicate with you about promotions or updates. We do not share your personal information with third parties unless necessary for the fulfillment of our services or required by law.
                    </p>

                    {/* Add more sections as needed */}

                    <h2>Security Measures</h2>
                    <p>
                        Plaset Doner employs industry-standard security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is completely secure. Therefore, while we strive to protect your personal information, we cannot guarantee its absolute security.
                    </p>

                    {/* Add more sections as needed */}

                    <h2>Changes to this Privacy Policy</h2>
                    <p>
                        Plaset Doner reserves the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the updated Privacy Policy on our website.
                    </p>

                    {/* Add more sections as needed */}

                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions or concerns about our Privacy Policy, please contact us at privacy@plasetdoner.com.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PrivacyPolicy;
