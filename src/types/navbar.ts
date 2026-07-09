export interface NavLink {
    name: string;
    href: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  }

  export interface NavItem {
    key: string;
    href?: string;
    onClick?: (e: React.MouseEvent) => void;
  }