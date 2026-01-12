"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { 
  ArrowRight, Loader2, CheckCircle2, AlertCircle, 
  Briefcase, LifeBuoy, Handshake, Mail 
} from "lucide-react";

type ContactFormData = {
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  country: string;
  company: string;
  help_type: string;
  message: string;
};

// --- REDESIGNED DEPARTMENT ITEM ---
const DepartmentItem: React.FC<{
  title: string;
  description: string;
  email: string;
  icon: React.ReactNode;
}> = ({ title, description, email, icon }) => (
  <div className="group flex flex-col md:flex-row items-start gap-5 p-6 bg-white border border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-sm transition-all duration-300">
    {/* Icon Container */}
    <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#2A74ED] group-hover:scale-110 transition-transform">
      {icon}
    </div>
    
    {/* Content */}
    <div>
      <h4 className="text-lg font-bold text-[#1A1A1A] mb-2">{title}</h4>
      <p className="text-sm text-gray-500 mb-4 leading-relaxed">{description}</p>
      <a
        href={`mailto:${email}`}
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#2A74ED] hover:text-[#1a5fc7] transition-colors"
      >
        <Mail size={14} />
        {email}
      </a>
    </div>
  </div>
);

const ContactSection: React.FC = () => {
  // 1. Form State
  const [formData, setFormData] = useState<ContactFormData>({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    country: "",
    company: "",
    help_type: "",
    message: "",
  });

  // 2. UI & Error State
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // 3. Manual Validation Logic
  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.first_name.trim()) newErrors.first_name = "First name is required";
    if (!formData.last_name.trim()) newErrors.last_name = "Last name is required";
    if (formData.last_name.trim().length < 2) {
      newErrors.last_name = "Last name must be at least 2 characters";
    }
    if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email address";
    if (formData.mobile.length < 5) newErrors.mobile = "Valid mobile number is required";
    if (!formData.country) newErrors.country = "Please select a country";
    if (!formData.help_type) newErrors.help_type = "Please select a topic";
    if (formData.message.length < 10) newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 4. Handle Input Changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // 5. Submit to API
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");

    try {
      const response = await fetch(
        "https://app.virtualtour360.ai/wp-json/custom-contact/v1/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": "300427c1c6c781809c9d605146c993c69b8bd1ba85083b6fe52ac7db93ea82f6",
          },
          body: JSON.stringify({
            ...formData,
            gdpr_consent: true,
          }),
        }
      );

      if (!response.ok) throw new Error("API Error");

      setStatus("success");
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        country: "",
        company: "",
        help_type: "",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section className="container mx-auto max-w-7xl px-6 py-24 font-['Poppins']">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 items-start">
        
        {/* Form Side */}
        <div className="lg:col-span-7 rounded-[3rem] border border-gray-100 bg-white p-8 shadow-sm md:p-12">
          <h3 className="mb-8 text-2xl font-bold text-gray-900">
            Send Us a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-1">
                <input
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="First Name *"
                  className="form-input-custom w-full"
                />
                {errors.first_name && (
                  <p className="text-xs text-red-500">{errors.first_name}</p>
                )}
              </div>
              <div className="space-y-1">
                <input
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Last Name *"
                  className="form-input-custom w-full"
                />
                {errors.last_name && (
                  <p className="text-xs text-red-500">{errors.last_name}</p>
                )}
              </div>
            </div>

            <div className="space-y-1">
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                className="form-input-custom w-full"
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="space-y-1">
              <input
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number *"
                className="form-input-custom w-full"
              />
              {errors.mobile && (
                <p className="text-xs text-red-500">{errors.mobile}</p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-1">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="form-input-custom w-full"
                >
                  <option value="">Country / Region *</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Sweden">Sweden</option>
                  <option value="India">India</option>
                </select>
                {errors.country && (
                  <p className="text-xs text-red-500">{errors.country}</p>
                )}
              </div>
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name (Optional)"
                className="form-input-custom w-full"
              />
            </div>

            <div className="space-y-1">
              <select
                name="help_type"
                value={formData.help_type}
                onChange={handleChange}
                className="form-input-custom w-full"
              >
                <option value="">Tell us what you need help with *</option>
                <option value="general_inquiry">General Inquiry</option>
                <option value="technical_support">Technical Support</option>
                <option value="billing_question">Billing Question</option>
              </select>
              {errors.help_type && (
                <p className="text-xs text-red-500">{errors.help_type}</p>
              )}
            </div>

            <div className="space-y-1">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Your Message *"
                className="form-input-custom w-full resize-none"
              />
              {errors.message && (
                <p className="text-xs text-red-500">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="flex w-full items-center justify-center gap-2 rounded-4xl bg-[#2A74ED] py-5 text-lg font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-[#1a5fc7] disabled:opacity-70"
            >
              {status === "loading" ? (
                <Loader2 className="h-5  w-5 animate-spin" />
              ) : (
                <>
                <span className=" max-sm:text-sm "> Submit Message</span>
                 
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>

            {status === "success" && (
              <div className="flex items-center gap-2 text-green-600 justify-center font-medium">
                <CheckCircle2 className="h-5 w-5" /> Message sent successfully!
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 text-red-600 justify-center font-medium">
                <AlertCircle className="h-5 w-5" /> Submission failed. Please try again.
              </div>
            )}
          </form>
        </div>

        {/* Departments Side - ENHANCED DESIGN */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 pt-8 lg:pt-0">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Department Contacts
            </h3>
            <p className="text-gray-500 text-sm">
              Connect directly with the team best suited to help you
            </p>
          </div>
          
          <div className="space-y-4">
            <DepartmentItem
              title="Sales & Pre-Sales"
              description="Questions about plans, pricing, or custom quotes for your business?"
              email="sales@virtualtour360.ai"
              icon={<Briefcase size={24} />}
            />
            <DepartmentItem
              title="Technical Support"
              description="Need help with tour creation, hosting, or WordPress integration?"
              email="support@virtualtour360.ai"
              icon={<LifeBuoy size={24} />}
            />
            <DepartmentItem
              title="Partnerships"
              description="Reseller opportunities and enterprise licensing inquiries."
              email="sales@virtualtour360.ai"
              icon={<Handshake size={24} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;