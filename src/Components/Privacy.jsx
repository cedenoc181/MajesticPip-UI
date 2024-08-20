import React from "react";
import "./Privacy.css";

function Privacy() {
  console.log("Privacy component");

  return (
    <div id="privacy" className="privacy">
      <div className="privacy-container">
        <div class="privacy-title">
          MajesticPips server <span className="purple">Privacy Policy</span>
        </div>

        <div>
          <h3 className="sub-head">Privacy Policy</h3>
          <div className="policy-text">Effective Date: 08/20/2024</div>
          <br />
          <h4 className="segment">
            <span className="purple"> 1.</span> Introduction
          </h4>
          <br />
          <div className="policy-text">
            Welcome to MajesticPips! This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you
            visit our website or sign up for access to our Discord community.
            Please read this policy carefully. If you do not agree with the
            terms of this privacy policy, please do not access the site.
          </div>
          <br />
          <h4 className="segment">
            <span className="purple"> 2.</span> Information We Collect
          </h4>
          <br />
          <div className="policy-text">
            When you submit your email address to us to gain free access to our
            Discord community, we collect the following information:
            <br />
            <div className="space">
            <span className="underline">Email Address:</span> To send you an invitation to our Discord community
              and any related updates.
            </div>
          </div>
          <br />
          <h4 className="segment">
            <span className="purple">3.</span> Use of Your Information
          </h4>
          <br />
          <div className="policy-text">
            <div className="space">
            <span className="underline">We use the information we collect for the following purposes:</span>
            </div>
            <br />
            Access to Discord Community: To send you an invitation link to join
            our Discord community. Promotional Communications: To send you
            promotional emails about our products, services, updates, market
            news, and other relevant information. These communications are
            intended to keep you informed about our offerings and updates. User
            Experience Improvement: To improve our services and offer better
            user experiences based on your interactions and feedback.
          </div>
          <br />
          <h4 className="segment">
            <span className="purple">4.</span> Data Protection and
            Confidentiality
          </h4>
          <br />
          <div className="policy-text">
            Your email address and any other personal information you provide
            will be treated as confidential. We will not share, sell, or leak
            your email address to third parties. Your information will only be
            used for the purposes outlined in this privacy policy.
          </div>
          <br />
          <h4 className="segment">
            <span className="purple">5.</span> Promotional Emails
          </h4>
          <br />
          <div className="policy-text">
            You may receive promotional emails from us as described above. These
            emails will include information about our products, services, and
            updates. If you prefer not to receive such emails, you have the
            option to unsubscribe. Each promotional email will include an
            unsubscribe link for your convenience.
          </div>
          <br />
          <h4 className="segment">
            <span className="purple">6.</span> Unsubscribe Option
          </h4>
          <br />
          <div className="policy-text">
            After receiving our invitation link to the Discord community, you
            may opt out of further promotional emails at any time by clicking
            the unsubscribe link provided in those emails. You can also contact
            us directly to request removal from our mailing list.
          </div>
          <br />
          <h4 className="segment">
            <span className="purple">7.</span> Security
          </h4>
          <br />
          <div className="policy-text">
            We implement appropriate technical and organizational measures to
            protect your personal information from unauthorized access,
            disclosure, alteration, or destruction. However, please be aware
            that no security measures are completely infallible.
          </div>
          <br />
          <h4 className="segment">
            <span className="purple">8.</span> Changes to This Privacy Policy
          </h4>
          <br />
          <div className="policy-text">
            We may update this privacy policy from time to time to reflect
            changes in our practices or for other operational, legal, or
            regulatory reasons. We will notify you of any significant changes by
            posting the new privacy policy on our website.
          </div>
          <br />
          <h4 className="segment">
            <span className="purple">9.</span> Contact Us
          </h4>
          <br />

          <div className="policy-text">
            If you have any questions or concerns about this privacy policy or
            our practices, please contact us at: 
            
            <div className="space"><span className="underline">Email:</span> MajesticPipsServer@gmail.com</div>
            <br />
            Thank you for being a part of our community!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
