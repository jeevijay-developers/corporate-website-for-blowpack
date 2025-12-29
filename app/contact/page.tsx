"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileCTA } from "@/components/mobile-cta";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Building2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Address",
    value: "info@shrinavkarblowpack.com",
    link: "mailto:info@shrinavkarblowpack.com",
  },
  {
    icon: Phone,
    label: "Phone Numbers",
    value: "+91-2646-221638 / +91 6358 940 904",
    link: "tel:+912646221638",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon to Sat: 9:00 AM to 6:00 PM",
  },
];

const locations = [
  {
    name: "Registered Office & FACTORY",
    address:
      "Unit-l, Plot No. 3540-3541, G.I .D.C, PANOLI -394 116, Dist, Bharuch. Gujarat, INDIA",
    icon: Building2,
  },
  {
    name: "Corporate Office Address",
    address:
      "Unit-Il, Plot No, 120-121/11 & 12, GIDC Ind. Estate, Ankleshwar-393002. Gujarat, INDIA",
    icon: Building2,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3_FORM_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
          from_name: "Shri Navkar Blowpack - Contact Form",
          replyto: formData.email,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: "success",
          message: "Thank you for your message! We'll get back to you soon.",
        });

        // Show success toast
        toast.success(
          "Message sent successfully! We'll get back to you soon.",
          {
            duration: 5000,
            position: "top-center",
            style: {
              background: "#10b981",
              color: "#fff",
              padding: "16px",
              borderRadius: "8px",
            },
          }
        );

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ type: null, message: "" });
        }, 5000);
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or contact us directly via email.",
      });

      // Show error toast
      toast.error(
        "Failed to send message. Please try again or contact us directly.",
        {
          duration: 5000,
          position: "top-center",
          style: {
            background: "#ef4444",
            color: "#fff",
            padding: "16px",
            borderRadius: "8px",
          },
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col pt-[80px]">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-linear-to-b from-muted/50 to-background">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground">
                <span className="mr-2 h-2 w-2 rounded-full bg-accent" />
                Get in Touch
              </div>
              <h1 className="text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                Let&apos;s Discuss Your{" "}
                <span className="text-accent">Packaging Needs</span>
              </h1>
              <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Ready to elevate your packaging? Contact us for a custom quote
                or to learn more about our solutions. Our team is here to help
                you find the perfect packaging solution.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.link || "#"}
                  className={`group flex items-start gap-4 rounded-xl border border-border bg-background p-6 shadow-sm transition-all hover:shadow-lg ${
                    info.link ? "hover:border-accent/50" : ""
                  }`}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-muted-foreground">
                      {info.label}
                    </p>
                    <p className="mt-1 text-base font-semibold text-foreground">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Factory Locations */}
        <section className="bg-muted/30 py-12 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Our Locations
              </p>
              <h2 className="mt-2 text-balance font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                Manufacturing Facilities
              </h2>
              <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">
                Two state-of-the-art manufacturing units in Gujarat&apos;s
                premier industrial zones.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-4xl">
              <div className="grid gap-6 lg:grid-cols-2">
                {locations.map((location) => (
                  <div
                    key={location.name}
                    className="rounded-xl border border-border bg-background p-6 shadow-sm transition-all hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <location.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-foreground">
                          {location.name}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {location.address}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Map */}
            <div className="mx-auto mt-12 max-w-6xl">
              <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
                <iframe
                  title="Shri Navkar Blowpack Location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3711.287930344019!2d72.984185!3d21.535594!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be03b53acebb357%3A0x7c0025c781b4912b!2sShri%20Navkar%20Blowpack%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1766483606483!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <MessageSquare className="h-8 w-8 text-accent" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Send Us a Message
                </p>
                <h2 className="mt-2 text-balance font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                  We&apos;d Love to Hear From You
                </h2>
                <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-10 rounded-2xl border border-border bg-background p-6 shadow-lg sm:p-8 lg:p-10"
              >
                <div className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Full Name <span className="text-accent">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="transition-all focus:border-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email Address <span className="text-accent">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="transition-all focus:border-accent"
                      />
                    </div>
                  </div>

                  {/* Phone and Company */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="transition-all focus:border-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="transition-all focus:border-accent"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <Label htmlFor="subject">
                      Subject <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="subject"
                      placeholder="What would you like to discuss?"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      required
                      className="transition-all focus:border-accent"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Message <span className="text-accent">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your packaging requirements..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      className="resize-none transition-all focus:border-accent"
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus.type && (
                    <div
                      className={`rounded-lg p-4 ${
                        submitStatus.type === "success"
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}
                    >
                      <p className="text-sm font-medium">
                        {submitStatus.message}
                      </p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 disabled:opacity-50"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-accent-foreground border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    We respect your privacy. Your information will never be
                    shared.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Why Contact Us Section */}
        <section className="bg-muted/30 py-12 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Why Choose Us
              </p>
              <h2 className="mt-2 text-balance font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                We&apos;re Here to Help
              </h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-border bg-background p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">
                  Quick Response
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  24-hour response time guaranteed
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">
                  Expert Support
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Technical guidance from specialists
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">
                  Custom Solutions
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tailored to your specific needs
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">
                  Easy Access
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Two facilities for your convenience
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
