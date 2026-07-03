export interface WebsiteRequest {
  id: string;
  fullName: string;
  businessName: string;
  phoneNumber: string;
  businessCategory: string;
  country: string;
  websiteType: string;
  hasLogo: 'yes' | 'no';
  hasDomain: 'yes' | 'no';
  hasHosting: 'yes' | 'no';
  features: string[];
  designStyle: string;
  colorScheme: string;
  budget: string;
  expectedDelivery: string;
  projectDescription: string;
  submittedAt: string;
}

export interface ContactInquiry {
  id: string;
  fullName: string;
  phoneNumber: string;
  businessName: string;
  websiteType: string;
  budget: string;
  message: string;
  submittedAt: string;
}
