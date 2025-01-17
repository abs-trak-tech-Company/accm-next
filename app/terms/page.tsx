"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
      <Card>
        <CardHeader>
          <CardTitle>Welcome to African Centre For Career Mentorship</CardTitle>
          <CardDescription>Last updated: June 1, 2023</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Please read these terms and conditions carefully before using Our
            Service.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            Interpretation and Definitions
          </h2>
          <h3 className="text-xl font-semibold mt-4">Interpretation</h3>
          <p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>

          <h3 className="text-xl font-semibold mt-4">Definitions</h3>
          <p>For the purposes of these Terms and Conditions:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Affiliate</strong> means an entity that controls, is
              controlled by or is under common control with a party, where
              "control" means ownership of 50% or more of the shares, equity
              interest or other securities entitled to vote for election of
              directors or other managing authority.
            </li>
            <li>
              <strong>Company</strong> (referred to as either "the Company",
              "We", "Us" or "Our" in this Agreement) refers to African Centre For Career Mentorship.
            </li>
            <li>
              <strong>Country</strong> refers to: Uganda
            </li>
            <li>
              <strong>Device</strong> means any device that can access the
              Service such as a computer, a cellphone or a digital tablet.
            </li>
            <li>
              <strong>Service</strong> refers to the Website.
            </li>
            <li>
              <strong>Terms and Conditions</strong> (also referred as "Terms")
              mean these Terms and Conditions that form the entire agreement
              between You and the Company regarding the use of the Service.
            </li>
            <li>
              <strong>Third-party Social Media Service</strong> means any
              services or content (including data, information, products or
              services) provided by a third-party that may be displayed,
              included or made available by the Service.
            </li>
            <li>
              <strong>Website</strong> refers to African Centre For Career Mentorship, accessible
              from africanccm.com
            </li>
            <li>
              <strong>You</strong> means the individual accessing or using the
              Service, or the company, or other legal entity on behalf of which
              such individual is accessing or using the Service, as applicable.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">Acknowledgment</h2>
          <p>
            These are the Terms and Conditions governing the use of this Service
            and the agreement that operates between You and the Company. These
            Terms and Conditions set out the rights and obligations of all users
            regarding the use of the Service.
          </p>
          <p>
            Your access to and use of the Service is conditioned on Your
            acceptance of and compliance with these Terms and Conditions. These
            Terms and Conditions apply to all visitors, users and others who
            access or use the Service.
          </p>
          <p>
            By accessing or using the Service You agree to be bound by these
            Terms and Conditions. If You disagree with any part of these Terms
            and Conditions then You may not access the Service.
          </p>
          <p>
            You represent that you are over the age of 18. The Company does not
            permit those under 18 to use the Service.
          </p>
          <p>
            Your access to and use of the Service is also conditioned on Your
            acceptance of and compliance with the Privacy Policy of the Company.
            Our Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your personal information when You
            use the Application or the Website and tells You about Your privacy
            rights and how the law protects You. Please read Our Privacy Policy
            carefully before using Our Service.
          </p>

          {/* Add more sections as needed */}

          <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, You can
            contact us:
          </p>
          <ul className="list-disc list-inside">
            <li>By email: admin@africanccm.com</li>
            <li>
              By visiting this page on our website:
              africanccm.com/contact
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
