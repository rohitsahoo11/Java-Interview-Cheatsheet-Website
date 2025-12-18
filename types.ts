
export interface FAQItem {
  question: string;
  answer: string;
}

export interface CheatSection {
  id: string;
  title: string;
  items: {
    label: string;
    content: string;
    code?: string;
  }[];
}
