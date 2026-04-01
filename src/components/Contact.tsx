import { useState, useRef, useEffect, FormEvent } from "react";
import "./Contact.scss";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const CONTACT_ITEMS = [
  {
    icon: "📧",
    label: "Email",
    value: "unmesh1jathar@gmail.com",
    href: "mailto:unmesh1jathar@gmail.com",
  },
  {
    icon: "",
    label: "Location",
    value: "Pune, Maharashtra – 411001",
    href: null,
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/unmeshjathar",
    href: "https://linkedin.com/in/unmeshjathar",
  },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) sectionRef.current?.classList.add("visible");
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    const subject = encodeURIComponent(form.subject);
    window.open(
      `mailto:unmesh1jathar@gmail.com?subject=${subject}&body=${body}`,
      "_blank",
    );
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project or opportunity? I'd love to connect!
        </p>

        <div className="contact-grid" ref={sectionRef}>
          <div className="contact-info-col">
            <div className="contact-intro">
              <h3 className="contact-intro-title">
                Let's Build Something Together
              </h3>
              <p className="contact-intro-text">
                I'm currently open to new opportunities — whether it's a
                full-time role, a remote contract, or a challenging project. My
                inbox is always open and I typically respond within{" "}
                <strong>24 hours</strong>.
              </p>
            </div>

            <div className="contact-items">
              {CONTACT_ITEMS.map((item) => (
                <div key={item.label} className="contact-item">
                  <div className="contact-item-icon">{item.icon}</div>
                  <div className="contact-item-body">
                    <span className="contact-item-label">{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="contact-item-value link"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-item-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="availability-card">
              <div className="avail-dot" />
              <div>
                <div className="avail-title">Available for Work</div>
                <div className="avail-sub">
                  Open to full-time, remote &amp; freelance opportunities
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-col">
            <form
              className="contact-form"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Job Opportunity / Project Inquiry..."
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about the role, project, or just say hello..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {status === "success" && (
                <div className="form-success">
                  ✅ Gmail opened! Review and hit Send to reach me.
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary form-submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <span className="spinner" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message{" "}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
