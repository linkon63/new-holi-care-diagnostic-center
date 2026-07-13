import type { Doctor } from "@/types/doctor";
import type { PriceCategory } from "@/types/price";

// Extract unique specialties from doctors array as filter categories
export function extractDoctorCategories(
  doctors: Doctor[],
  isBn: boolean
): PriceCategory[] {
  const specialtyMap = new Map<string, number>();

  doctors.forEach((doc) => {
    const key = doc.specialty;
    specialtyMap.set(key, (specialtyMap.get(key) || 0) + 1);
  });

  return Array.from(specialtyMap.entries()).map(([specialty, count]) => ({
    id: specialty,
    title: isBn
      ? doctors.find((d) => d.specialty === specialty)?.specialty_bn || specialty
      : specialty,
    itemCount: count,
  }));
}

// Filter doctors by specialty and search query
export function filterDoctors(
  doctors: Doctor[],
  activeCategory: string,
  searchQuery: string,
  isBn: boolean
): Doctor[] {
  let result = doctors;

  if (activeCategory !== "all") {
    result = result.filter((doc) => doc.specialty === activeCategory);
  }

  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    result = result.filter((doc) => {
      const name = isBn ? doc.name_bn : doc.name;
      const specialty = isBn ? doc.specialty_bn : doc.specialty;
      const education = isBn ? doc.education_bn : doc.education;
      return (
        name.toLowerCase().includes(query) ||
        specialty.toLowerCase().includes(query) ||
        education.toLowerCase().includes(query)
      );
    });
  }

  return result;
}
