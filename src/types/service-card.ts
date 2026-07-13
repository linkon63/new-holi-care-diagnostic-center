import type { ReactNode } from "react";

// Props for the shared service card component
export interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
  imageHeight?: string;
  footer?: ReactNode;
}
