"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Gujarat, India",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-2646-221638 / +91 6358 940 904",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@blowpack.com",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-12 pb-24 sm:py-24 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Get in Touch
          </p>
          <h2 className="mt-2 text-balance font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Let&apos;s Discuss Your Requirements
          </h2>
          <p className="mt-3 text-pretty text-base text-muted-foreground sm:mt-4 sm:text-lg">
            Ready to elevate your packaging? Contact us for a custom quote or to
            learn more about our solutions.
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:mt-16 lg:grid-cols-2 lg:gap-12">
          {/* Contact form */}
          <div className="rounded-xl border border-border bg-background p-5 sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-foreground sm:text-xl">
              Send us a message
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill out the form below and we&apos;ll get back to you within 24
              hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4 sm:mt-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
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
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your packaging requirements..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact info & map */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Info cards - 2x2 grid on tablet, single column on mobile */}
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-start gap-3 rounded-lg border border-border bg-background p-3 sm:gap-4 sm:p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent sm:h-10 sm:w-10">
                    <info.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground">
                      {info.label}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground sm:mt-1 sm:text-sm">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="flex-1 overflow-hidden rounded-xl border border-border">
              <iframe
                title="Shri Navkar Blowpack Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3711.287930344019!2d72.984185!3d21.535594!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be03b53acebb357%3A0x7c0025c781b4912b!2sShri%20Navkar%20Blowpack%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1766483606483!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-50 w-full sm:min-h-75"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
