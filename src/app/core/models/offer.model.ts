export interface Offer {
  id: number;
  category: string;
  categorySlug: string;
  cover?: string;
  description: string;
  folder_files?: string;
  gallery?: Array<object>;
  highlight: boolean;
  link: string;
  meta_description: string;
  meta_keywords: string;
  order_display: number;
  section_id: number;
  slug: string;
  value: number;
  status: boolean;
  title: string;
}
