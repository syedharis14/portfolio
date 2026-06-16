"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { profile } from "@/content/profile";
import { Icon } from "../ui/Icon";
import { cn } from "@/lib/cn";

const projectTypes = [
  "New product build",
  "Rescue / scale an existing codebase",
  "AI feature or integration",
  "Mobile app (React Native / Expo)",
  "Contract / staff augmentation",
  "Something else",
];

const fieldCls =
  "w-full border border-line-2 bg-panel/60 px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-grass/60";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: projectTypes[0],
    message: "",
  });

  function set<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `New project enquiry — ${form.type}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.type}\n\n${form.message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass flex flex-col items-center gap-4 border border-grass/40 p-10 text-center"
          >
            <span className="grid h-14 w-14 place-items-center voxel-edge bg-grass/15 text-grass">
              <Icon name="check" size={26} />
            </span>
            <h3 className="font-display text-xl font-semibold text-ink">Your email client is open</h3>
            <p className="max-w-sm text-sm text-ink-dim">
              If it didn&apos;t pop up, just reach me directly at{" "}
              <a className="text-grass hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a>.
              I reply within a day.
            </p>
            <button onClick={() => setSent(false)} className="mt-2 font-mono text-xs text-ink-faint hover:text-grass">
              ← send another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={onSubmit}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="label mb-2 block text-ink-dim">Your name</span>
                <input required value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Jane Doe" className={fieldCls} />
              </label>
              <label className="block">
                <span className="label mb-2 block text-ink-dim">Email</span>
                <input required type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="jane@company.com" className={fieldCls} />
              </label>
            </div>

            <label className="block">
              <span className="label mb-2 block text-ink-dim">What do you need?</span>
              <select value={form.type} onChange={(e) => set("type", e.target.value)} className={cn(fieldCls, "appearance-none")}>
                {projectTypes.map((t) => (
                  <option key={t} value={t} className="bg-panel text-ink">{t}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="label mb-2 block text-ink-dim">Tell me about it</span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
                placeholder="The problem, rough timeline, and where you're stuck…"
                className={cn(fieldCls, "resize-none")}
              />
            </label>

            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 bg-grass px-6 py-3.5 text-sm font-medium text-void voxel-edge transition-colors hover:bg-emerald sm:w-auto"
            >
              Send enquiry
              <Icon name="arrow-right" size={16} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
