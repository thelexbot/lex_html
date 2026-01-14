"use client";

import React from "react";
import Script from "next/script";
import "./terms-of-service.scss";

export default function TermsAndConditions() {
  return (
    <>
      {/* --- Google Tag Manager --- */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, "script", "dataLayer", "GTM-THQW2JSM");
        `}
      </Script>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-THQW2JSM"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      <main className="terms-page-wrapper">
        <article className="terms-container">
          <div className="terms-header">
            <h1>Terms and Conditions</h1>
            <p>Last updated: January 2026</p>
          </div>

          <section className="terms-section">
            <h3>Acceptance of Terms</h3>
            <p>
              By accessing and using TheLexBot (hereinafter referred to as "the
              Service"), you agree to be bound by these Terms and Conditions
              ("Terms"). If you do not agree with any part of these Terms, you
              must not use the Service.
            </p>
          </section>

          <section className="terms-section">
            <h3>Description of Service</h3>
            <p>
              TheLexBot is an AI-powered legal research tool designed to assist
              lawyers, judges, corporate professionals, students, law
              professionals, and aspirants in India. The Service utilizes
              OpenAI's AI technology to analyze and process a proprietary
              dataset of Supreme Court of India rulings. This dataset is
              independently collected and maintained by Thelextbot. The
              information provided is for informational purposes only and does
              not constitute legal advice. While we aim to provide comprehensive
              coverage of Supreme Court rulings within our dataset, there may be
              limitations in the data coverage.
            </p>
          </section>

          <section className="terms-section">
            <h3>Disclaimer of Legal Advice</h3>
            <p>
              <strong>No Legal Advice:</strong> The information provided by
              TheLexBot, derived from our proprietary dataset of Supreme Court
              rulings, is not a substitute for professional legal advice. Users
              should consult with a qualified legal professional for advice
              tailored to their specific circumstances.
            </p>
            <p>
              <strong>Informational Purposes Only:</strong> The Service provides
              legal information and analysis based on our proprietary dataset of
              Supreme Court rulings, but it does not provide legal opinions or
              interpretations.
            </p>
            <p>
              <strong>User Responsibility:</strong> Users are solely responsible
              for their use of the information provided by TheLexBot.
            </p>
          </section>

          <section className="terms-section">
            <h3>AI Limitations and Accuracy</h3>
            <p>
              <strong>AI-Powered Analysis:</strong> The Service uses OpenAI's AI
              technology to analyze our proprietary dataset of Supreme Court
              rulings. While the AI is powerful, it may still generate
              inaccurate or incomplete information.
            </p>
            <p>
              <strong>Proprietary Dataset Limitations:</strong> While we strive
              to maintain an accurate and up-to-date dataset, it may not be
              exhaustive. There can be limitations to the amount of data that is
              within our dataset.
            </p>
            <p>
              <strong>Dynamic Legal Landscape:</strong> Legal information,
              including Supreme Court precedents, is subject to change, and our
              dataset may not always reflect the most current laws and
              regulations.
            </p>
            <p>
              <strong>No Guarantee of Accuracy:</strong> The Company does not
              guarantee the accuracy, completeness, or reliability of the
              information provided by TheLexBot, even regarding Supreme Court
              rulings within our dataset.
            </p>
            <p>
              <strong>Reliance at User's Risk:</strong> Users rely on the
              information provided by the Service, including analyses of Supreme
              Court rulings from our proprietary dataset, at their own risk.
            </p>
          </section>

          <section className="terms-section">
            <h3>User Conduct</h3>
            <p>
              <strong>Lawful Use:</strong> Users must use the Service for lawful
              purposes and in compliance with all applicable laws and
              regulations.
            </p>
            <p>
              <strong>Prohibited Activities:</strong> Users must not engage in
              any activity that could harm, disrupt, or interfere with the
              Service or other users. This includes, but is not limited to,
              hacking, spamming, and distributing malware.
            </p>
            <p>
              <strong>Respectful Interaction:</strong> Users must interact with
              the Service and other users in a respectful and professional
              manner.
            </p>
            <p>
              <strong>No data scraping or unauthorized use:</strong> Users are
              forbidden from data scraping or any other form of unauthorized use
              of the data provided by the service.
            </p>
          </section>

          <section className="terms-section">
            <h3>Intellectual Property</h3>
            <p>
              <strong>Ownership of Dataset:</strong> The Company retains all
              rights, title, and interest in its proprietary dataset of Supreme
              Court rulings, as well as the Service itself, including all
              intellectual property rights.
            </p>
            <p>
              <strong>OpenAI's AI Technology:</strong> Users acknowledge that
              the Service utilizes OpenAI's AI technology, and their terms and
              conditions related to the use of their AI technology apply.
              However, the data used is not from OpenAI.
            </p>
            <p>
              <strong>User Content:</strong> Users retain ownership of any
              content they submit to the Service, but grant the Company a
              non-exclusive, royalty-free license to use, reproduce, and
              distribute such content for the purpose of providing the Service.
            </p>
            <p>
              <strong>No Redistribution:</strong> Users are prohibited from
              redistributing or reselling the Service or any of its content,
              including the information derived from our proprietary dataset.
            </p>
          </section>

          <section className="terms-section">
            <h3>Limitation of Liability</h3>
            <p>
              The Company shall not be liable for any direct, indirect,
              incidental, consequential, or punitive damages arising from the
              use or inability to use the Service.
            </p>
            <p>
              Users agree to indemnify and hold harmless the Company, its
              officers, directors, employees, and agents from any claims,
              liabilities, damages, and expenses arising from their use of the
              Service or their violation of these Terms.
            </p>
            <p>
              The Service is provided "as is" and "as available" without any
              warranties of any kind, whether express or implied. In any case,
              the maximum liability of the company will be the amount paid by
              the user for the service.
            </p>
          </section>

          <section className="terms-section">
            <h3>Privacy Policy</h3>
            <p>
              Data Collection: The Company collects and uses user data in
              accordance with its Privacy Policy, which is incorporated by
              reference into these Terms.
            </p>
            <p>
              Data Security: The Company takes reasonable measures to protect
              user data, but cannot guarantee its absolute security.
            </p>
            <p>
              OpenAI Data usage: Users acknowledge that their prompts are sent
              to openAI, and that openAI's data usage policies are also
              applicable.
            </p>
          </section>

          <section className="terms-section">
            <h3>Modifications to Terms and Service</h3>
            <p>
              <strong>Changes to Terms:</strong> The Company reserves the right
              to modify these Terms at any time. Users will be notified of any
              changes, and continued use of the Service constitutes acceptance
              of the revised Terms.
            </p>
            <p>
              <strong>Service Updates:</strong> The Company may update or modify
              the Service at any time without notice.
            </p>
            <p>
              <strong>Service Termination:</strong> The Company reserves the
              right to terminate or suspend the Service at any time for any
              reason.
            </p>
          </section>

          <section className="terms-section">
            <h3>Governing Law and Dispute Resolution</h3>
            <p>
              <strong>Governing Law:</strong> These Terms shall be governed by
              and construed in accordance with the laws of India.
            </p>
            <p>
              <strong>Jurisdiction:</strong> Any disputes arising from these
              Terms shall be subject to the exclusive jurisdiction of the courts
              in Delhi.
            </p>
            <p>
              <strong>Arbitration:</strong> The company may choose to use
              arbitration as a form of dispute resolution.
            </p>
          </section>

          <section className="terms-section">
            <h3>User Accounts and Security</h3>
            <p>
              <strong>Account Responsibility:</strong> Users are responsible for
              maintaining the confidentiality of their account credentials.
            </p>
            <p>
              <strong>Unauthorized Access:</strong> Users must notify the
              Company immediately of any unauthorized access to their account.
            </p>
            <p>
              <strong>Account Termination:</strong> The Company reserves the
              right to terminate user accounts for violations of these Terms.
            </p>
          </section>

          <section className="terms-section">
            <h3>Contact Information</h3>
            <p>
              For any questions or concerns regarding these Terms, please
              contact us at:
            </p>
            <p>
              <strong>Mobile: </strong>
              <a href="tel:917982092862">+91-7982092862</a>
            </p>
            <p>
              <strong>Email: </strong>
              <a href="mailto:support@thelextbot.com">support@thelextbot.com</a>
            </p>
          </section>

          <section className="terms-section">
            <h3>Severability & Entire Agreement</h3>
            <p>
              If any provision of these Terms is held to be invalid or
              unenforceable, the remaining provisions shall continue in full
              force and effect.
            </p>
            <p>
              These Terms constitute the entire agreement between the user and
              the Company with respect to the Service.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
