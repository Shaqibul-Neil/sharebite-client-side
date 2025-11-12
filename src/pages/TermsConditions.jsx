import { FaFileContract } from "react-icons/fa";
import Container from "../components/container/Container";

const TermsConditions = () => {
  return (
    <Container>
      <title>ShareBite - Terms & Conditions</title>
      <div className="max-w-4xl mx-auto py-16 space-y-12">
        {/* Heading with Icon */}
        <div className="flex md:flex-row flex-col items-center justify-center md:gap-3">
          <FaFileContract className="text-warning text-3xl" />
          <h1 className="text-3xl md:text-5xl font-extrabold text-accent text-center">
            Terms & Conditions
          </h1>
        </div>

        {/* Terms Content */}
        <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
          <p>
            By using ShareBite, you confirm that you are at least 13 years old
            and agree to comply with all applicable local, national, and
            international laws. If you do not agree with any of these terms, you
            are prohibited from using the platform.
          </p>

          <p>
            Donors must ensure the food they share is fresh, safe, and properly
            packaged. Accurate details including pickup location, time, and
            expiry date should be provided. Misleading or unsafe postings may
            result in suspension or banning from the platform.
          </p>

          <p>
            Requestors are expected to collect food responsibly, maintain
            hygiene, and show respect towards donors and the community. Any
            misuse of the platform or inappropriate behavior can lead to account
            restrictions.
          </p>

          <p>
            All content uploaded, including images, descriptions, and posts, is
            either owned by the users or licensed to ShareBite. Users must not
            copy, distribute, or modify content without explicit permission.
            Intellectual property rights are fully protected.
          </p>

          <p>
            ShareBite is committed to fostering a safe and collaborative
            community. Users are required to follow community guidelines, report
            violations, and help maintain the integrity of the platform.
            Harassment, spamming, or any malicious activity is strictly
            prohibited.
          </p>

          <p>
            ShareBite provides all services “as is” and is not liable for any
            damages, food spoilage, or misuse. Terms may be updated
            periodically, and continued use of the platform signifies acceptance
            of any changes. For any inquiries regarding these terms, contact us
            at support@sharebite.com.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default TermsConditions;
