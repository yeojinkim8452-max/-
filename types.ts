export interface Bean {
  id: string;
  name: string;
  origin: string;
  roastLevel: 'Light' | 'Medium' | 'Dark';
  notes: string[];
  price: number;
  image: string;
  acidity: number; // 1-5
  body: number; // 1-5
  description: string;
  tags: string[];
}

export interface Plan {
  id: string;
  name: string;
  frequency: 'Weekly' | 'Bi-Weekly' | 'Monthly';
  weight: 200 | 500 | 1000;
  priceModifier: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export enum PageRoute {
  HOME = '/',
  BEANS = '/beans',
  SUBSCRIBE = '/subscribe',
  STORY = '/story',
  SUPPORT = '/support'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}