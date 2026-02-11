import {
  AcademicCapIcon,
  //ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  //FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

//import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
//import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import NewTabIcon from '../components/Icon/NewTabIcon';
import porfolioImage1 from '../images/medals/portfolio-1.jpg';
import porfolioImage2 from '../images/medals/portfolio-2.jpg';
import porfolioImage3 from '../images/medals/portfolio-3.jpg';
import porfolioImage4 from '../images/medals/portfolio-4.jpg';
import porfolioImage5 from '../images/medals/portfolio-5.jpg';
import porfolioImage6 from '../images/medals/portfolio-6.jpg';
import porfolioImage7 from '../images/medals/portfolio-7.jpg';
import porfolioImage8 from '../images/medals/portfolio-8.jpg';
import porfolioImage9 from '../images/medals/portfolio-9.jpg';
import porfolioImage10 from '../images/medals/portfolio-10.jpg';
import porfolioImage11 from '../images/medals/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import teamPhoto from '../images/teamphoto.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  MedalsItem,
  //SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Ryan Coslove - Volleyball Coach',
  description: 'Website and resume of Ryan Coslove, Volleyball Coach based in the DMV Area.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Medals: 'medals',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: teamPhoto,
  name: `Coach Ryan Coslove`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a DMV based <strong className="text-stone-100">Volleyball Coach</strong>, currently working at{' '}
        <strong className="text-stone-100">Vienna Elite Volleyball Club</strong>. I am the Head Coach for{' '}
        <strong className="text-stone-100">Vienna Elite 16 Black</strong> in the 2025-2026 Season.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Explore my site to learn more about me and my Coaching background and feats.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1Ex5G_BaW8MNRxrJy97KHLg5O_4Wnefe-/view',
      text: 'Resume',
      primary: true,
      Icon: NewTabIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Experienced volleyball coach with a proven record of leading teams to success and developing
athletes at all levels. Dedicated to helping players reach their full potential through
personalized instruction, focusing on technique, decision-making, and overall performance—
while keeping the game enjoyable. Available for private lessons and support in achieving
college or personal volleyball goals.`,
  aboutItems: [
    {label: 'Location', text: 'DMV, USA', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Interests', text: 'Volleyball, Philly Sports, Technology', Icon: SparklesIcon},
    {label: 'Study', text: 'Rutgers University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Vienna Elite VBC | Peraton, Inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 /**
 * Skills section
 *
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];
*/

/**
 * Medals section
 */
export const medalsItems: MedalsItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2018 - May 2022',
    location: 'Rutgers University - the State University of New Jersey',
    title: 'Bachelor of Science in Computer Science',
    content: (
      <p>
        While completing my Bachelor's Degreee, I played Intramural volleyball as well as played with the Rutgers Men's
        and Women's Club teams in open gyms, and coached junior girls volleyball at Central Jersey Heat.
      </p>
    ),
  },
  /*{
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },*/
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Email me for inquiries about coaching, private lessons, or any other questions you may have.',
  items: [
    {
      type: ContactType.Email,
      text: 'ryan.coslove@viennaelite.org',
      href: 'mailto:ryan.coslove@viennaelite.org',
    },
    {
      type: ContactType.Location,
      text: 'DMV, USA',
      //href: '',
    },
    {
      type: ContactType.Instagram,
      text: '@coachryantutu',
      href: 'https://www.instagram.com/coachryantutu/',
    },
    /*{
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },*/
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  //{label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  //{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  //{label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/coachryantutu/'},
  //{label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
