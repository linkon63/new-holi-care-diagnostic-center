"use client";

import { useState } from "react";
import {
  ClipboardList,
  Phone,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  User,
  Users,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { weekDays, monthNames, divisions, divisionDistricts, formatDisplayDate } from "@/utils/quick-appointment";

interface AppointmentFormProps {
  showHeader?: boolean;
  onBookClick?: () => void;
}

export default function AppointmentForm({ showHeader = true, onBookClick }: AppointmentFormProps) {
  const { t } = useLanguage();

  const [bookingFor, setBookingFor] = useState<"myself" | "other">("myself");
  const [formData, setFormData] = useState({
    name: "",
    patientName: "",
    age: "",
    reason: "",
    otherReason: "",
    mobile: "",
    patientMobile: "",
    email: "",
    message: "",
    division: "",
    district: "",
    date: "",
  });

  const today = new Date();
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [calYear, setCalYear] = useState(today.getFullYear());

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const goToPrevMonth = () => {
    if (calMonth === 0) {
      setCalMonth(11);
      setCalYear((y) => y - 1);
    } else {
      setCalMonth((m) => m - 1);
    }
  };

  const goToNextMonth = () => {
    if (calMonth === 11) {
      setCalMonth(0);
      setCalYear((y) => y + 1);
    } else {
      setCalMonth((m) => m + 1);
    }
  };

  const handleBookClick = () => {
    if (onBookClick) {
      onBookClick();
    }
  };

  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(calYear, calMonth, 1).getDay();

  const handleDaySelect = (day: number) => {
    const formatted = `${calYear}-${String(calMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    setFormData((prev) => ({ ...prev, date: formatted }));
  };

  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  const reasonOptions = t.quickApptReasonOptions || [];
  const isOtherSelected = formData.reason === reasonOptions[reasonOptions.length - 1];

  return (
    <div className="max-w-6xl mx-auto bg-background border border-border shadow-xl shadow-black/5 overflow-hidden">
      {showHeader && (
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
          <div className="relative px-6 md:px-8 pt-6 md:pt-8 pb-4 border-b border-border/50">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-primary to-primary/80 p-2.5 rounded-xl shadow-md shadow-primary/20">
                <ClipboardList className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-base md:text-lg font-black text-foreground">
                  {t.quickApptTitle}
                </span>
                <span className="text-[11px] md:text-xs font-semibold text-muted-foreground">
                  {t.quickApptSubtitle}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Right: Calendar + Call — first in DOM for mobile */}
        <div className="lg:col-span-2 space-y-6 lg:order-2">
          {/* Calendar */}
          <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-950/20 dark:via-background dark:to-purple-950/20 border border-border p-5">
            <div className="flex items-center justify-between mb-5 bg-gradient-to-r from-primary/10 to-purple-500/10 -mx-5 -mt-5 px-5 pt-5 pb-4 border-b border-border/50">
              <button
                onClick={goToPrevMonth}
                className="p-1.5 hover:bg-primary/10 transition-colors rounded-lg cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 text-primary" />
              </button>
              <span className="text-sm font-extrabold text-foreground bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                {monthNames[calMonth]} {calYear}
              </span>
              <button
                onClick={goToNextMonth}
                className="p-1.5 hover:bg-primary/10 transition-colors rounded-lg cursor-pointer"
              >
                <ChevronRight className="w-4 h-4 text-primary" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center mb-1">
              {weekDays.map((d, i) => (
                <div
                  key={d}
                  className={`text-[11px] font-extrabold uppercase tracking-wider py-1 ${i === 0 || i === 6
                    ? "text-rose-500"
                    : "text-muted-foreground"
                    }`}
                >
                  {d}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const dateStr = `${calYear}-${String(calMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                const isSelected = formData.date === dateStr;
                const isToday = dateStr === todayStr;
                const dayOfWeek = new Date(calYear, calMonth, day).getDay();
                const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

                return (
                  <button
                    key={day}
                    onClick={() => handleDaySelect(day)}
                    className={`aspect-square flex items-center justify-center text-sm font-bold transition-all cursor-pointer rounded-sm
                      ${isSelected ? "bg-gradient-to-br from-primary to-purple-600 text-primary-foreground shadow-md shadow-primary/30 scale-105" : isWeekend ? "text-rose-500/80 hover:bg-rose-50 dark:hover:bg-rose-950/20" : "text-foreground hover:bg-primary/5"}
                      ${isToday && !isSelected ? "ring-2 ring-primary/40" : ""}
                    `}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            {formData.date && (
              <div className="mt-4 pt-3 border-t border-border/50 text-center">
                <span className="text-xs font-semibold text-muted-foreground">
                  {t.quickApptSelected}{" "}
                </span>
                <span className="text-sm font-extrabold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  {formatDisplayDate(formData.date)}
                </span>
              </div>
            )}
          </div>

          {/* Direct Call Section */}
          <div className="bg-gradient-to-br from-secondary/5 via-background to-primary/5 border border-border p-5">
            <div className="flex items-start gap-3">
              <div className="bg-secondary/10 p-2.5 rounded-xl shrink-0">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black text-foreground">
                  {t.quickApptCallTitle}
                </span>
                <span className="text-xs font-semibold text-muted-foreground mt-0.5">
                  {t.quickApptCallDesc}
                </span>
                <a
                  href="tel:+8801707811010"
                  className="inline-flex items-center gap-2 mt-2 text-sm font-extrabold text-secondary hover:text-secondary-hover transition-colors group"
                >
                  <span className="bg-secondary/10 p-1.5 rounded-lg group-hover:bg-secondary/20 transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                  </span>
                  {t.hotline}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Left: Form — second in DOM but first on desktop via order */}
        <div className="lg:col-span-3 space-y-5 lg:order-1">
          {/* Booking For Toggle */}
          <div className="flex items-center gap-2 bg-muted/30 p-1.5 rounded-xl w-full sm:w-fit border border-border/50">
            <button
              onClick={() => setBookingFor("myself")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 cursor-pointer ${bookingFor === "myself"
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
            >
              <User className="w-4 h-4" />
              {t.quickApptForMyself}
            </button>
            <button
              onClick={() => setBookingFor("other")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 cursor-pointer ${bookingFor === "other"
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
            >
              <Users className="w-4 h-4" />
              {t.quickApptForOther}
            </button>
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">
                {t.quickApptLabelName} <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.quickApptPlaceholderName}
                className="w-full bg-muted/50 text-foreground placeholder:text-muted-foreground/60 rounded-none px-4 py-3 text-sm font-semibold outline-none border border-border focus:border-primary/50 focus:bg-background focus:ring-2 focus:ring-primary/10 transition-all"
              />
            </div>
            {bookingFor === "other" && (
              <div className="animate-fadeIn">
                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">
                  {t.quickApptLabelPatientName} <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleChange}
                  placeholder={t.quickApptPlaceholderPatientName}
                  className="w-full bg-muted/50 text-foreground placeholder:text-muted-foreground/60 rounded-none px-4 py-3 text-sm font-semibold outline-none border border-border focus:border-primary/50 focus:bg-background focus:ring-2 focus:ring-primary/10 transition-all"
                />
              </div>
            )}
          </div>

          {/* Age + Reason */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">
                {t.quickApptLabelAge} <span className="text-destructive">*</span>
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder={t.quickApptPlaceholderAge}
                className="w-full bg-muted/50 text-foreground placeholder:text-muted-foreground/60 rounded-none px-4 py-3 text-sm font-semibold outline-none border border-border focus:border-primary/50 focus:bg-background focus:ring-2 focus:ring-primary/10 transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
            <div className="relative">
              <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">
                {t.quickApptLabelReason} <span className="text-destructive">*</span>
              </label>
              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full bg-muted/50 text-foreground rounded-none px-4 py-3 text-sm font-semibold outline-none border border-border focus:border-primary/50 focus:bg-background transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  {t.quickApptPlaceholderReason}
                </option>
                {reasonOptions.map((opt: string) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 bottom-3.5 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          {/* Other Reason (fallback) */}
          {isOtherSelected && (
            <div className="animate-fadeIn">
              <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">
                {t.quickApptLabelOtherReason}
              </label>
              <input
                type="text"
                name="otherReason"
                value={formData.otherReason}
                onChange={handleChange}
                placeholder={t.quickApptPlaceholderOtherReason}
                className="w-full bg-muted/50 text-foreground placeholder:text-muted-foreground/60 rounded-none px-4 py-3 text-sm font-semibold outline-none border border-border focus:border-primary/50 focus:bg-background focus:ring-2 focus:ring-primary/10 transition-all"
              />
            </div>
          )}

          {/* Mobile + Patient Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">
                {t.quickApptLabelMobile} <span className="text-destructive">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder={t.quickApptPlaceholderMobile}
                className="w-full bg-muted/50 text-foreground placeholder:text-muted-foreground/60 rounded-none px-4 py-3 text-sm font-semibold outline-none border border-border focus:border-primary/50 focus:bg-background focus:ring-2 focus:ring-primary/10 transition-all"
              />
            </div>
            {bookingFor === "other" && (
              <div className="animate-fadeIn">
                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">
                  {t.quickApptLabelPatientMobile}
                </label>
                <input
                  type="tel"
                  name="patientMobile"
                  value={formData.patientMobile}
                  onChange={handleChange}
                  placeholder={t.quickApptPlaceholderPatientMobile}
                  className="w-full bg-muted/50 text-foreground placeholder:text-muted-foreground/60 rounded-none px-4 py-3 text-sm font-semibold outline-none border border-border focus:border-primary/50 focus:bg-background focus:ring-2 focus:ring-primary/10 transition-all"
                />
              </div>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">
              {t.quickApptLabelEmail}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.quickApptPlaceholderEmail}
              className="w-full bg-muted/50 text-foreground placeholder:text-muted-foreground/60 rounded-none px-4 py-3 text-sm font-semibold outline-none border border-border focus:border-primary/50 focus:bg-background focus:ring-2 focus:ring-primary/10 transition-all"
            />
          </div>

          {/* Division + District */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">
                {t.quickApptLabelDivision} <span className="text-destructive">*</span>
              </label>
              <select
                name="division"
                value={formData.division}
                onChange={handleChange}
                className="w-full bg-muted/50 text-foreground rounded-none px-4 py-3 text-sm font-semibold outline-none border border-border focus:border-primary/50 focus:bg-background transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  {t.quickApptPlaceholderDivision}
                </option>
                {divisions.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 bottom-3.5 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
            <div className="relative">
              <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">
                {t.quickApptLabelDistrict} <span className="text-destructive">*</span>
              </label>
              <select
                name="district"
                value={formData.district}
                onChange={handleChange}
                disabled={!formData.division}
                className="w-full bg-muted/50 text-foreground rounded-none px-4 py-3 text-sm font-semibold outline-none border border-border focus:border-primary/50 focus:bg-background transition-all appearance-none cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <option value="" disabled>
                  {formData.division ? t.quickApptPlaceholderDistrict : "Select Division first"}
                </option>
                {(formData.division ? divisionDistricts[formData.division] || [] : []).map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 bottom-3.5 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">
              {t.quickApptLabelMessage}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t.quickApptPlaceholderMessage}
              rows={3}
              className="w-full bg-muted/50 text-foreground placeholder:text-muted-foreground/60 rounded-none px-4 py-3 text-sm font-semibold outline-none border border-border focus:border-primary/50 focus:bg-background focus:ring-2 focus:ring-primary/10 transition-all resize-none"
            />
          </div>

          {/* Confirm Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-border/50">
            <button
              onClick={handleBookClick}
              className="w-full sm:w-auto bg-secondary hover:bg-secondary-hover text-primary-foreground font-black text-sm rounded-sm px-10 py-3.5 shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30 transition-all duration-200 cursor-pointer"
            >
              {t.quickApptConfirmBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
