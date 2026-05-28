import familyIcon from '../../assets/hobbies/family.svg';
import ravensFootballIcon from '../../assets/hobbies/ravens-football.svg';
import travelIcon from '../../assets/hobbies/travel.svg';
import weightliftingIcon from '../../assets/hobbies/weightlifting.svg';
import soccerIcon from '../../assets/hobbies/soccer.svg';
import golfIcon from '../../assets/hobbies/golf.svg';
import cookingIcon from '../../assets/hobbies/cooking.svg';
import chelseaFcIcon from '../../assets/hobbies/chelseaBlackandWhite.png';

// Icons from Lucide (MIT) and Tabler Icons (MIT)
// https://lucide.dev | https://tabler.io/icons

export interface HobbyItem {
  label: string;
  tagline: string;
  story: string;
  icon: string;
  iconAlt: string;
  accentColor: string;
  /** White-on-dark PNG — skip invert filter so the logo stays visible */
  lightIcon?: boolean;
}

export const outsideTheIDEIntro =
  "I'm a software engineer, but that's not all of me. Most weeks you'll find me doing some mix of the things below, usually with people I care about, and usually away from a screen. I love being outside when the weather is nice, working on projects in my house, and much more.";

export const outsideTheIDE: HobbyItem[] = [
  {
    label: 'Friends & Family',
    icon: familyIcon,
    iconAlt: 'Friends and family',
    tagline: 'The reason any of the rest matters',
    story:
      "This is the big one. I'd rather spend a free weekend with family or close friends than almost anywhere else. A lot of my travel and traditions revolve around the people in my life, not just the places.",
    accentColor: '#0984E3',
  },
  {
    label: 'Travel',
    icon: travelIcon,
    iconAlt: 'Airplane travel',
    tagline: '40+ cities across the US, Europe, and beyond',
    story:
      "I've been fortunate to see a lot, from ski towns out west to cities in Italy, France, and Israel, plus plenty up and down the East Coast. I travel to experience new places, but also to visit people. Some of my best memories are trips with family.",
    accentColor: '#74B9FF',
  },
  {
    label: 'Weightlifting',
    icon: weightliftingIcon,
    iconAlt: 'Dumbbell weightlifting',
    tagline: 'In the gym most days',
    story:
      "Lifting is part of my routine. I have been lifting consistently for the past 6 years. Health is a big part of my life, I constantly push myself to be better and stronger.",
    accentColor: '#FF6B6B',
  },
  {
    label: 'Soccer',
    icon: soccerIcon,
    iconAlt: 'Soccer ball',
    tagline: 'Still playing weekly',
    story:
      "I've played soccer my whole life, since I was 4 years old. I really love the team aspect, relying on teammates and pushing hard toward a common goal.",
    accentColor: '#96CEB4',
  },
  {
    label: 'Chelsea FC',
    icon: chelseaFcIcon,
    iconAlt: 'Chelsea FC',
    tagline: 'Go Blues!',
    story:
      "I've followed Chelsea for years, I love sitting down on a premier league morning with a cup of coffee to watch Chelsea hopefully win!",
    accentColor: '#034694',
    lightIcon: true,
  },
  {
    label: 'Golf',
    icon: golfIcon,
    iconAlt: 'Golf flag',
    tagline: 'Always working on my swing...',
    story:
      "I got into golf around 2019 and fell in love with the game. Not only the physical challenge but I love the mental challenge, thinking through the perfect shot, but also having a goldfish memory to forget the mistakes.",
    accentColor: '#FFEAA7',
  },
  {
    label: 'Ravens Football',
    icon: ravensFootballIcon,
    iconAlt: 'American football',
    tagline: 'Maryland born and raised',
    story:
      "I grew up here, so the Ravens have always been part of fall.",
    accentColor: '#9E7BFF',
  },
  {
    label: 'Cooking',
    icon: cookingIcon,
    iconAlt: 'Cooking pot',
    tagline: 'Trying things at home, keeping it healthy and high protein.',
    story:
      "Cooking is how I wind down some evenings. I like trying new recipes and figuring it out as I go, playing with new ingredients.",
    accentColor: '#DDA0DD',
  },
];
