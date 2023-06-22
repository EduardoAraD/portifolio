export interface IconLink {
  icon: 'Web' | 'Android' | 'IOS' | 'default';
  link: string;
}

export interface Project {
  name: string;
  content: string;
  links: IconLink[];
}