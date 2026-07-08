export interface AppointmentFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
}

export const servicesList = [
  "Full Body Checkup",
  "Executive Health Package",
  "MRI / CT Scan",
  "Radiology & Imaging",
  "Pathology & Blood Tests",
  "Cardiology Evaluation",
  "Women's Wellness Package",
  "Diabetes Care Package",
];

export const initialAppointmentForm: AppointmentFormData = {
  name: "",
  phone: "",
  email: "",
  service: "Full Body Checkup",
  date: "",
  time: "",
};

export function handleAppointmentInput(
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  setFormData: React.Dispatch<React.SetStateAction<AppointmentFormData>>
) {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
}

export function validateAppointmentForm(
  formData: AppointmentFormData,
  language: string
): boolean {
  if (!formData.name || !formData.phone || !formData.date || !formData.time) {
    const fillErr =
      language === "bn"
        ? "অনুগ্রহ করে সব প্রয়োজনীয় তথ্য পূরণ করুন।"
        : "Please fill in all required fields.";
    alert(fillErr);
    return false;
  }
  return true;
}

export function resetAppointmentForm(
  setStep: React.Dispatch<React.SetStateAction<number>>,
  setFormData: React.Dispatch<React.SetStateAction<AppointmentFormData>>,
  onClose: () => void,
  selectedServicePreset: string
) {
  setStep(1);
  setFormData({
    ...initialAppointmentForm,
    service: selectedServicePreset || "Full Body Checkup",
  });
  onClose();
}
