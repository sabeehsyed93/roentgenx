import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="content-block">
      <div className="inner">
        <div className="section-title text-start">
          <h2 className="title mb--40">Privacy Policy</h2>
        </div>

        <div className="privacy-content">
          <div className="section mb--40">
            <h4 className="title mb--20">Welcome to the RoentgenX Privacy Policy</h4>
            <p>
              Welcome to RoentgenX! Your privacy is important to us, and we are committed to protecting the personal information you share with us. 
              This Privacy Policy explains how we collect, use, and store the information you provide when you contact us through our website. 
              By using our website or submitting your contact information, you agree to the terms outlined in this policy.
            </p>
          </div>

          <div className="section mb--40">
            <h4 className="title mb--20">The type of personal information we collect</h4>
            <p>
              When you reach out to us through the contact form or other communication methods on our website, we may collect the following information:
            </p>
            <ul className="list-style">
              <li><strong>Name</strong>: Used to address you in our communications.</li>
              <li><strong>Email Address</strong>: For responding to your inquiries or ongoing communication.</li>
              <li><strong>Phone Number (optional)</strong>: Used for direct communication if needed.</li>
            </ul>
            <p>We do not collect any other personal information unless you explicitly provide it.</p>
          </div>

          <div className="section mb--40">
            <h4 className="title mb--20">How we collect personal information</h4>
            <p>We collect information in the following ways:</p>
            <ul className="list-style">
              <li>
                <strong>Contact Form Submissions</strong>: When you fill out the contact form on our website, 
                we store the name, email address, and phone number you provide.
              </li>
              <li>
                <strong>Direct Email or Phone Communication</strong>: If you contact us directly via email or phone, 
                we may retain your contact details (name, email, phone) to facilitate further communication.
              </li>
            </ul>
            <p>
              Your information will only be used to respond to your inquiries or communications, 
              and we will not share it with third parties without your consent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
