import { Campaign } from 'src/app/models/campaign.model';

export const CAMPAIGNS: Campaign[] = [
  {
    title: 'The Babymaker - Stealth Road eBike With Belt Drive',
    description:
      'Leave boring behind. Classic look with modern Ebike tech. Turn heads and crush any hill in style.',
    date: new Date().getTime(),
    finish: new Date().getTime() + 60 * 24 * 60 * 60 * 1000,
    status: 'Active',
    category: 'Transportation',
    targetQuantity: 500000,
    currentQuantity: 505000,
    photo: '../../../assets/images/campaigns/baby-maker.jpg',
  },
  {
    title: 'Rotofarm: A Beautiful NASA-Inspired Indoor Garden',
    description:
      'An award-winning garden that grows fresh herbs & vegetables in 3x less space.',
    date: new Date().getTime(),
    finish: new Date().getTime() + 38 * 24 * 60 * 60 * 1000,
    status: 'Finish',
    category: 'Home',
    targetQuantity: 20000,
    currentQuantity: 1000,
    photo: '../../../assets/images/campaigns/smart-indoor.jpg',
  },
  {
    title: 'The Babymaker - Stealth Road eBike With Belt Drive',
    description:
      'Leave boring behind. Classic look with modern Ebike tech. Turn heads and crush any hill in style.',
    date: new Date().getTime(),
    finish: new Date().getTime() + 20 * 24 * 60 * 60 * 1000,
    status: 'Active',
    category: 'Transportation',
    targetQuantity: 500000,
    currentQuantity: 12000,
    photo: '../../../assets/images/campaigns/baby-maker.jpg',
  },
  {
    title: 'Rotofarm: A Beautiful NASA-Inspired Indoor Garden',
    description:
      'An award-winning garden that grows fresh herbs & vegetables in 3x less space.',
    date: new Date().getTime(),
    finish: new Date().getTime() + 30 * 24 * 60 * 60 * 1000,
    status: 'Finish',
    category: 'Home',
    targetQuantity: 20000,
    currentQuantity: 1000,
    photo: '../../../assets/images/campaigns/smart-indoor.jpg',
  },
  {
    title: 'The Babymaker - Stealth Road eBike With Belt Drive',
    description:
      'Leave boring behind. Classic look with modern Ebike tech. Turn heads and crush any hill in style.',
    date: new Date().getTime(),
    finish: new Date().getTime() - 60 * 24 * 60 * 60 * 1000,
    status: 'Active',
    category: 'Transportation',
    targetQuantity: 500000,
    currentQuantity: 12000,
    photo: '../../../assets/images/campaigns/baby-maker.jpg',
  },
  {
    title: 'Rotofarm: A Beautiful NASA-Inspired Indoor Garden',
    description:
      'An award-winning garden that grows fresh herbs & vegetables in 3x less space.',
    date: new Date().getTime(),
    finish: new Date().getTime() - 10 * 24 * 60 * 60 * 1000,
    status: 'Finish',
    category: 'Home',
    targetQuantity: 20000,
    currentQuantity: 1000,
    photo: '../../../assets/images/campaigns/smart-indoor.jpg',
  },
];
