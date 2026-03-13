import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import SectionWrapper from "./SectionWrapper";

interface Props { onBack: () => void }

const ContactSection = ({ onBack }: Props) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <SectionWrapper title="CONTACT PORTAL" onBack={onBack}>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Links */}
        <div className="space-y-4">
          {[
            { icon: <Mail size={18} />, label: "[harshitshukla813@gmail.com]", href: "#" },
            { icon: <Github size={18} />, label: "[https://www.github.com/Harshit9026]", href: "#" },
            { icon: <Linkedin size={18} />, label: "[https://www.linkedin.com/in/harshit9026]", href: "#" },
          ].map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              className="pixel-border flex items-center gap-3 rounded bg-card p-4 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ x: 4 }}
            >
              <span className="text-primary">{link.icon}</span>
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Form */}
        <motion.div
          className="pixel-border rounded bg-card p-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="mb-4 font-pixel text-xs text-accent">SEND MESSAGE</h3>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded border border-border bg-muted px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded border border-border bg-muted px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            <textarea
              placeholder="Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded border border-border bg-muted px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            <motion.button
              className="pixel-border w-full rounded bg-muted px-4 py-2 font-pixel text-xs text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              TRANSMIT
            </motion.button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
