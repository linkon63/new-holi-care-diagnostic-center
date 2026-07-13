// Single test/service item within a department
export interface ServiceItem {
  name: string;
  name_bn: string;
  price: number | string;
}

// Full department service with bilingual fields
export interface DepartmentService {
  id: string;
  title: string;
  title_bn: string;
  image: string;
  description: string;
  description_bn: string;
  category: string;
  category_bn: string;
  facility: string;
  facility_bn: string;
  keyPoints: string[];
  keyPoints_bn: string[];
  items: ServiceItem[];
}

// Props for the department detail component
export interface DepartmentDetailProps {
  service: DepartmentService;
  t: import("@/lang").TranslationType;
  lang: "en" | "bn";
}
