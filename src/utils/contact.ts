export interface ContactFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

export const initialContactForm: ContactFormData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
};

export function handleContactInput(
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setFormData: React.Dispatch<React.SetStateAction<ContactFormData>>
) {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
}

export function submitContactForm(
  e: React.FormEvent,
  formData: ContactFormData,
  language: string,
  setFormData: React.Dispatch<React.SetStateAction<ContactFormData>>
) {
  e.preventDefault();
  const thankYou =
    language === "bn"
      ? `ধন্যবাদ ${formData.firstName}! আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।`
      : `Thank you ${formData.firstName}! Your message has been sent successfully. We will contact you soon.`;
  alert(thankYou);
  setFormData(initialContactForm);
}
