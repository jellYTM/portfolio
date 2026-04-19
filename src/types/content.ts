export interface ProfileData {
  nameLabel: string;
  name: string;
  genderLabel: string;
  gender: string;
  birthdayLabel: string;
  birthday: string;
  belongLabel: string;
  belong: string;
  gradeLabel: string;
  grade: string;
}

export interface ProfileDetails {
  title: string;
  data: ProfileData;
  mainImage: string;
  coverImage: string;
}

export interface AboutSection {
  title: string;
  paragraphs: string[];
}

export interface CareerItem {
  date: string;
  event: string;
  type: 'formal' | 'academic' | 'personal';
}

export interface AboutMeData {
  profile: ProfileDetails;
  history: AboutSection;
  programming: AboutSection;
  careers: {
    title: string;
    levelLabels: {
      formal: string;
      academic: string;
      personal: string;
    };
    items: CareerItem[];
  };
}

export interface LocalizedAboutMe {
  ja: AboutMeData;
  en: AboutMeData;
}

export interface SkillItem {
  id: string;
  imageUrl: string;
  altText: string;
  descriptions: string[];
  creditLink?: string;
  creditTitle?: string;
  creditText?: string;
}

export interface SkillCategory {
  categoryName: string;
  items: SkillItem[];
}

export interface SkillsData {
  categories: SkillCategory[];
  footers: { text: string; link: string; linkText: string }[];
}

export interface LocalizedSkills {
  ja: SkillsData;
  en: SkillsData;
}

export interface ProductItem {
  id: string;
  title: string;
  imageUrl: string;
  altText: string;
  subtitle?: string;
  descriptions: string[];
  link?: string;
  linkText?: string;
}

export interface ProductsData {
  mainTitle: string;
  mainItems: ProductItem[];
  otherTitle: string;
  otherItems: ProductItem[];
}

export interface LocalizedProducts {
  ja: ProductsData;
  en: ProductsData;
}

export interface MyJellyfishItem {
  id: string;
  nameJp: string;
  nameSciFront: string;
  nameSciBack: string;
  imageUrl: string;
  altText: string;
}

export interface LocalizedMyJellyfish {
  ja: MyJellyfishItem[];
  en: MyJellyfishItem[];
}

export interface ResearchItem {
  id: string;
  titleLines: string[];
  imageUrl: string;
  altText: string;
  description: string;
}

export interface ResearchData {
  headerText: string;
  items: ResearchItem[];
}

export interface LocalizedResearch {
  ja: ResearchData;
  en: ResearchData;
}

export interface HeaderLink {
  path: string;
  name: string;
}

export interface HeaderData {
  links: HeaderLink[];
}

export interface LocalizedHeader {
  ja: HeaderData;
  en: HeaderData;
}

export interface ContactInfo {
  type: string;
  url: string;
  id: string;
}

export interface FooterData {
  title: string;
  contacts: ContactInfo[];
}

export interface LocalizedFooter {
  ja: FooterData;
  en: FooterData;
}
