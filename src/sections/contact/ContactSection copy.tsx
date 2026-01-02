import React from "react";
import { ArrowRight } from "lucide-react";

type DepartmentItemProps = {
  title: string;
  description: string;
  email: string;
};

const DepartmentItem: React.FC<DepartmentItemProps> = ({
  title,
  description,
  email,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <h4 className="text-lg font-bold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
      <a
        href={`mailto:${email}`}
        className="text-sm font-medium text-blue-600 hover:underline"
      >
        {email}
      </a>
    </div>
  );
};

const ContactSection: React.FC = () => {
  return (
    <section className="container mx-auto max-w-7xl px-6 py-24">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        {/* Form Side */}
        <div className="lg:col-span-7 rounded-[3rem] border border-gray-100 bg-white p-8 shadow-sm md:p-12">
          <h3 className="mb-8 text-2xl font-bold text-gray-900">
            Send Us a Message
          </h3>

          <form className="space-y-6">
            {/* First & Last Name */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <input
                type="text"
                placeholder="First Name *"
                required
                className="form-input-custom"
              />
              <input
                type="text"
                placeholder="Last Name *"
                required
                className="form-input-custom"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address *"
              required
              className="form-input-custom"
            />

            {/* Mobile */}
            <input
              type="tel"
              placeholder="Mobile Number *"
              required
              className="form-input-custom"
            />

            {/* Country */}
            <select required className="form-input-custom">
              <option value="">Country / Region *</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>India</option>
              <option>Canada</option>
            </select>

            {/* Company */}
            <input
              type="text"
              placeholder="Company Name (Optional)"
              className="form-input-custom"
            />

            {/* Help Topic */}
            <select required className="form-input-custom">
              <option value="">Tell us what you need help with *</option>
              <option>General Inquiry</option>
              <option>Technical Support</option>
              <option>Billing Question</option>
            </select>

            {/* Message */}
            <textarea
              rows={5}
              placeholder="Your Message *"
              required
              className="form-input-custom resize-none"
            />

            {/* Submit */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-4xl bg-[#2A74ED] py-5 text-lg font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-[#1a5fc7]"
            >
              Submit Message
              <ArrowRight className="h-5 w-5" />
            </button>

            {/* <p className="text-center text-xs font-medium text-gray-400">
              Response Time: Within 48 Business Hours
            </p> */}
          </form>
        </div>

        {/* Departments Side */}
        <div className="lg:col-span-5 space-y-8 pt-8 lg:pt-0">
          <h3 className="mb-8 text-2xl font-bold text-gray-900">
            Department Contacts
          </h3>

          <DepartmentItem
            title="Sales & Pre-Sales"
            description="Questions about plans or custom quotes?"
            email="sales-360@thingsatweb.com"
          />

          <DepartmentItem
            title="Technical Support"
            description="Help with tour creation or WordPress integration."
            email="support-360@thingsatweb.com"
          />

          <DepartmentItem
            title="Partnerships"
            description="Reseller and enterprise licensing inquiries."
            email="sales-360@thingsatweb.com"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
