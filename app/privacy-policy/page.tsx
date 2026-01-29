"use client";
import Script from "next/script";
import "./privacy-policy.scss";

export default function PrivacyPolicy() {
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

      {/* --- Main Content --- */}
      <main className="privacy-page-wrapper">
        <article className="privacy-container">
          <div className="privacy-header">
            <h1>Privacy Policy</h1>
          </div>

          <section className="privacy-section">
            <h3>Introduction</h3>
            <p>
              This Privacy Policy describes how Paraplex ("we," "us," or "our")
              collects, uses, and discloses information when you use Paraplex
              (the "Service"). We are committed to protecting your privacy and
              ensuring the security of your personal information. By using the
              Service, you consent to the practices described in this policy.
            </p>
          </section>

          <section className="privacy-section">
            <h3>Information We Collect</h3>
            <p>
              We collect various types of information to provide and improve our
              Service:
            </p>
            <ul>
              <li>
                <strong>User-Provided Information</strong>
                <ul>
                  <li>
                    When you create an account, we may collect your name, email
                    address, and other contact information.
                  </li>
                  <li>
                    When you interact with Paraplex, we collect the queries and
                    prompts you submit.
                  </li>
                  <li>Any other information you voluntarily provide to us.</li>
                </ul>
              </li>
              <li>
                <strong>Automatically Collected Information</strong>
                <ul>
                  <li>
                    We may collect information about your use of the Service,
                    such as your IP address, browser type, operating system, and
                    usage patterns.
                  </li>
                  <li>
                    We may use cookies and similar technologies to collect
                    information about your interactions with the Service.
                  </li>
                  <li>
                    <strong>Prompt Data: </strong>The prompts you provide to the
                    bot are recorded.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Supreme Court Ruling Data: </strong> We use a
                proprietary dataset of Supreme Court rulings, but we do not
                collect personal information from these rulings beyond what is
                already publicly available.
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h3>How We Use Your Information</h3>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>
                <strong>To Provide and Improve the Service: </strong>
                <ul>
                  <li>
                    To process your queries and provide legal information and
                    analysis.
                  </li>
                  <li>
                    To personalize your experience and improve the functionality
                    of Paraplex.
                  </li>
                  <li>
                    To analyze usage patterns and trends to enhance the Service.
                  </li>
                </ul>
              </li>
              <li>
                <strong>To Communicate with You</strong>
                <ul>
                  <li>
                    To send you updates, notifications, and other relevant
                    information.
                  </li>
                  <li>
                    To respond to your inquiries and provide customer support.
                  </li>
                </ul>
              </li>
              <li>
                <strong> To Ensure Security and Compliance: </strong>
                <ul>
                  <li>
                    To detect and prevent fraud, abuse, and other harmful
                    activities.
                  </li>
                  <li>
                    To comply with legal obligations and enforce our Terms and
                    Conditions.
                  </li>
                </ul>
              </li>
              <li>
                <strong> To improve our proprietary dataset. </strong>
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h3>Data Sharing and Disclosure</h3>
            <p>We may share your information in the following circumstances:</p>
            <ul>
              <li>
                <strong>With Service Providers: </strong>
                We may share information with third-party service providers who
                assist us in providing and maintaining the Service (e.g.,
                hosting providers, analytics providers).
              </li>
              <li>
                <strong>OpenAI:</strong> Your prompts are transmitted to OpenAI
                as the AI technology provider. Their privacy policy is also
                applicable.
              </li>
              <li>
                <strong>Legal Compliance:</strong>
                We may disclose information if required by law or in response to
                a valid legal request.
              </li>
              <li>
                <strong>Business Transfers:</strong>
                In the event of a merger, acquisition, or sale of assets, your
                information may be transferred to the acquiring entity.
              </li>
              <li>
                <strong>With your consent:</strong>
                We may share your information with other parties if we have your
                explicit consent.
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h3>Data Security</h3>
            <ul>
              <li>
                We implement reasonable security measures to protect your
                information from unauthorized access, use, or disclosure.
              </li>
              <li>
                However, no method of transmission over the internet or
                electronic storage is completely secure, and we cannot guarantee
                absolute security.
              </li>
              <li>We use industry standard security practices.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h3>Data Retention</h3>
            <ul>
              <li>
                We retain your information for as long as necessary to provide
                the Service and fulfill the purposes described in this policy,
                unless a longer retention period is required or permitted by
                law.
              </li>
              <li>
                Prompt data may be kept for a longer period to improve the bot.
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h3>Your Rights</h3>
            <p>
              You have the following rights regarding your personal information:
            </p>
            <ul>
              <li>
                <strong>Access: </strong>You can request access to the
                information we hold about you.
              </li>
              <li>
                <strong>Correction: </strong>You can request that we correct any
                inaccurate or incomplete information.
              </li>
              <li>
                <strong>Deletion: </strong> You can request that we delete your
                information, subject to legal limitations.
              </li>
              <li>
                <strong>Objection: </strong>You can object to the processing of
                your information in certain circumstances.
              </li>
              <li>
                To exercise these rights, please contact us at{" "}
                <a href="mailto:support@thelextbot.com">
                  support@thelextbot.com
                </a>
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h3>Children's Privacy</h3>
            <p>
              The Service is not intended for children under the age of 18. We
              do not knowingly collect personal information from children. If we
              become aware that we have collected information from a child, we
              will take steps to delete it.
            </p>
          </section>

          <section className="privacy-section">
            <h3>Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on our website
              or through other communication methods. Your continued use of the
              Service after the changes constitute your acceptance of the new
              policy.
            </p>
          </section>

          <section className="privacy-section">
            <h3>Contact Us</h3>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <p>
              <strong>Paraplex </strong>
              <br />
              <strong> Mobile: </strong>
              <a href="tel:917982092862">+91-7982092862</a>
              <br />
              <strong>Email: </strong>
              <a href="mailto:support@thelextbot.com">support@thelextbot.com</a>
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
