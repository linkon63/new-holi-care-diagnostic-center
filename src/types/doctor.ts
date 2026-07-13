// Single doctor from doctors.json
export interface Doctor {
  id: string;
  name: string;
  name_bn: string;
  specialty: string;
  specialty_bn: string;
  education: string;
  education_bn: string;
  email: string;
  phone: string;
  phone_bn: string;
  quote: string;
  quote_bn: string;
  desc: string;
  desc_bn: string;
  image: string;
}

// Props for the doctor list component
export interface DoctorListProps {
  t: import("@/lang").TranslationType;
  lang: "en" | "bn";
}

// Props for individual doctor card
export interface DoctorCardProps {
  id: string;
  image: string;
  name: string;
  specialty: string;
  education: string;
  email: string;
  phone: string;
  lang: "en" | "bn";
}

// Props for the doctor detail component
export interface DoctorDetailProps {
  doctor: Doctor;
  t: import("@/lang").TranslationType;
  lang: "en" | "bn";
}
