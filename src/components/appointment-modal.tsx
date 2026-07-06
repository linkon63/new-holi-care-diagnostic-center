"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, User, Phone, CheckCircle, Shield, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/context/LanguageContext";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServicePreset?: string;
}

export default function AppointmentModal({ isOpen, onClose, selectedServicePreset = "" }: AppointmentModalProps) {
  const [step, setStep] = useState(1);
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: selectedServicePreset || "Full Body Checkup",
    date: "",
    time: "",
  });

  const servicesList = [
    "Full Body Checkup",
    "Executive Health Package",
    "MRI / CT Scan",
    "Radiology & Imaging",
    "Pathology & Blood Tests",
    "Cardiology Evaluation",
    "Women's Wellness Package",
    "Diabetes Care Package",
  ];

  React.useEffect(() => {
    if (selectedServicePreset) {
      setFormData((prev) => ({ ...prev, service: selectedServicePreset }));
    }
  }, [selectedServicePreset]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      const fillErr = language === "bn" ? "অনুগ্রহ করে সব প্রয়োজনীয় তথ্য পূরণ করুন।" : "Please fill in all required fields.";
      alert(fillErr);
      return;
    }
    // Simulate API call
    setStep(2);
  };

  const resetForm = () => {
    setStep(1);
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: selectedServicePreset || "Full Body Checkup",
      date: "",
      time: "",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) resetForm(); }}>
      <DialogContent className="sm:max-w-[500px] overflow-hidden p-0 rounded-2xl border-border bg-background shadow-2xl">
        {step === 1 ? (
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="p-6 pb-4 bg-gradient-to-br from-primary/10 via-background to-background border-b border-border/40">
              <DialogHeader>
                <div className="flex items-center gap-2 mb-1">
                  <span className="p-1 rounded-md bg-primary/10 text-primary">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">{t.modalPre}</span>
                </div>
                <DialogTitle className="text-2xl font-extrabold text-foreground tracking-tight text-left">
                  {t.modalTitle}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground text-sm text-left">
                  {t.modalDesc}
                </DialogDescription>
              </DialogHeader>
            </div>

            <div className="p-6 space-y-4">
              {/* Patient Name */}
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t.modalLabelName}</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t.modalPlaceholderName}
                    required
                    className="pl-10 h-11 border-border focus-visible:ring-primary rounded-xl"
                  />
                </div>
              </div>

              {/* Phone & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t.modalLabelPhone}</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={language === "bn" ? "০১৭১১-২২৩৩৪৪" : "01711-223344"}
                      type="tel"
                      required
                      className="pl-10 h-11 border-border focus-visible:ring-primary rounded-xl"
                    />
                  </div>
                </div>
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t.modalLabelEmail}</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="h-11 border-border focus-visible:ring-primary rounded-xl"
                  />
                </div>
              </div>

              {/* Select Service */}
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t.modalLabelService}</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full h-11 px-3 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary rounded-xl text-sm transition-colors"
                >
                  {servicesList.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t.modalLabelDate}</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="pl-10 h-11 border-border focus-visible:ring-primary rounded-xl text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t.modalLabelTime}</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="pl-10 h-11 border-border focus-visible:ring-primary rounded-xl text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-muted/30 border-t border-border flex items-center justify-between gap-4">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Shield className="w-3.5 h-3.5 text-emerald-500" /> {t.modalShieldText}
              </span>
              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={resetForm} className="rounded-xl font-medium">
                  {t.modalCancelBtn}
                </Button>
                <Button type="submit" className="rounded-xl font-bold bg-primary hover:bg-primary/95 text-white border-0">
                  {t.modalConfirmBtn}
                </Button>
              </div>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6 animate-bounce shadow-md">
              <CheckCircle className="w-10 h-10" />
            </div>
            <DialogTitle className="text-2xl font-extrabold text-foreground mb-2">
              {t.modalSuccessTitle}
            </DialogTitle>
            <p className="text-muted-foreground text-sm max-w-sm mb-6">
              {t.modalSuccessDescPre} <strong className="text-foreground">{formData.name}</strong>{t.modalSuccessDescMiddle}<strong className="text-foreground">{formData.phone}</strong>{t.modalSuccessDescPost}<strong className="text-primary">{formData.service}</strong>.
            </p>

            <div className="w-full bg-muted/40 p-4 rounded-2xl text-left text-xs space-y-2 mb-6 border border-border">
              <div className="flex justify-between">
                <span className="text-muted-foreground font-semibold">{t.modalSuccessScheduledDate}</span>
                <span className="font-bold text-foreground">{formData.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground font-semibold">{t.modalSuccessEstimatedTime}</span>
                <span className="font-bold text-foreground">{formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground font-semibold">{t.modalSuccessDeptService}</span>
                <span className="font-bold text-primary">{formData.service}</span>
              </div>
            </div>

            <Button onClick={resetForm} className="w-full rounded-xl font-bold py-5 shadow-lg shadow-primary/10 hover:shadow-primary/20 bg-primary text-white border-0">
              {t.modalSuccessBackBtn}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
