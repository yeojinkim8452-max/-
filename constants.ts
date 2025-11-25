import { Bean, FaqItem } from './types';

export const IMAGES = {
  HERO: 'https://loremflickr.com/1600/900/coffee,morning',
  PACKAGING: 'https://loremflickr.com/800/600/paper,bag',
  FARM: 'https://loremflickr.com/1600/900/coffee,farm',
  BEANS_BG: 'https://loremflickr.com/1600/900/coffee,beans',
  LOGO_PLACEHOLDER: 'https://placehold.co/150x50/4A7C59/F5F5DC?text=Eco+Brew'
};

export const BEANS: Bean[] = [
  {
    id: '1',
    name: '에티오피아 예가체프 G1',
    origin: 'Ethiopia',
    roastLevel: 'Light',
    notes: ['Jasmine', 'Lemon', 'Peach'],
    price: 14000,
    image: 'https://loremflickr.com/400/400/coffee,beans,light',
    acidity: 5,
    body: 2,
    description: '화사한 꽃향기와 상큼한 과일 산미가 어우러진 커피의 귀부인',
    tags: ['Best Seller', 'Sanmi']
  },
  {
    id: '2',
    name: '과테말라 안티구아 SHB',
    origin: 'Guatemala',
    roastLevel: 'Medium',
    notes: ['Chocolate', 'Smoke', 'Spice'],
    price: 13000,
    image: 'https://loremflickr.com/400/400/coffee,beans,medium',
    acidity: 3,
    body: 4,
    description: '스모키한 향과 묵직한 바디감의 완벽한 밸런스',
    tags: ['Classic', 'Balanced']
  },
  {
    id: '3',
    name: '콜롬비아 수프리모',
    origin: 'Colombia',
    roastLevel: 'Medium',
    notes: ['Caramel', 'Nutty', 'Orange'],
    price: 12000,
    image: 'https://loremflickr.com/400/400/coffee,beans,dark',
    acidity: 3,
    body: 3,
    description: '호불호 없는 고소함과 마일드한 풍미',
    tags: ['Daily', 'Nutty']
  },
  {
    id: '4',
    name: '인도네시아 만델링',
    origin: 'Indonesia',
    roastLevel: 'Dark',
    notes: ['Earth', 'Dark Chocolate', 'Herbal'],
    price: 13500,
    image: 'https://loremflickr.com/400/400/coffee,dark,roast',
    acidity: 1,
    body: 5,
    description: '진한 남성적인 향미와 입안 가득 차는 중후함',
    tags: ['Heavy Body', 'Low Acidity']
  }
];

export const FAQS: FaqItem[] = [
  {
    question: '배송은 언제 시작되나요?',
    answer: '매일 오전 10시 이전 주문 건은 당일 로스팅 후 발송됩니다. 보통 발송 다음 날 수령 가능합니다.'
  },
  {
    question: '구독 일시 정지가 가능한가요?',
    answer: '네, 마이페이지에서 언제든지 최대 3개월까지 구독 일시 정지가 가능합니다.'
  },
  {
    question: '원두 분쇄도를 선택할 수 있나요?',
    answer: '네, 홀빈(분쇄 안함)부터 에스프레소, 핸드드립, 프렌치프레스용까지 선택 가능합니다.'
  },
  {
    question: '친환경 패키지는 어떻게 버리나요?',
    answer: '에코 브루의 모든 패키지는 100% 생분해성 소재입니다. 일반 쓰레기로 배출하시면 자연으로 돌아갑니다.'
  }
];