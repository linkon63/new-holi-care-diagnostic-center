import type { DepartmentService } from "@/types/department";
import type { PriceCategory } from "@/types/price";

// Extract unique categories from departments array as filter categories
export function extractDepartmentCategories(
  departments: DepartmentService[],
  isBn: boolean
): PriceCategory[] {
  const categoryMap = new Map<string, { title: string; count: number }>();

  departments.forEach((dept) => {
    const key = dept.category;
    const title = isBn ? dept.category_bn : dept.category;
    const existing = categoryMap.get(key);
    categoryMap.set(key, {
      title: existing?.title || title,
      count: (existing?.count || 0) + 1,
    });
  });

  return Array.from(categoryMap.entries()).map(([id, data]) => ({
    id,
    title: data.title,
    itemCount: data.count,
  }));
}

// Filter departments by category and search query
export function filterDepartments(
  departments: DepartmentService[],
  activeCategory: string,
  searchQuery: string,
  isBn: boolean
): DepartmentService[] {
  let result = departments;

  if (activeCategory !== "all") {
    result = result.filter((dept) => dept.category === activeCategory);
  }

  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    result = result.filter((dept) => {
      const title = isBn ? dept.title_bn : dept.title;
      const desc = isBn ? dept.description_bn : dept.description;
      return (
        title.toLowerCase().includes(query) ||
        desc.toLowerCase().includes(query)
      );
    });
  }

  return result;
}
