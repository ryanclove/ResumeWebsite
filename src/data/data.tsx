/* eslint-disable react/jsx-sort-props */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable object-curly-spacing */
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
import cjheatlogo from '../images/cjheatlogo.png';
import dcthunderlogo from '../images/dcthunder.png';
import dynamixlogo from '../images/dynamixlogo.png';
import headerPhoto from '../images/headerphoto.png';
import clashincarolina from '../images/medals/Clash in Carolina.jpg';
import dcminiaasilver from '../images/medals/DC Mini AA Silver.jpg';
import maymadnessgoldrunner from '../images/medals/May Madness Silver.jpg';
import mdjrsgold from '../images/medals/MDJRS gold.jpg';
import mvsagoldrunner from '../images/medals/MVSA Gold 2nd.jpg';
import nikeharborbronze from '../images/medals/Nike harbor bronze.jpg';
import nvpl1 from '../images/medals/NVPL 1.jpg';
import nvpl2 from '../images/medals/NVPL 2.jpg';
import prezdaysilver from '../images/medals/Prez Day Silver.jpg';
import volleyjamesbronze from '../images/medals/Volley by the James.jpg';
import profilepic from '../images/profilepic.jpg';
import alexprofile from '../images/alexprofile.jpg';
import testimonialImage from '../images/testimonialsbackground.jpg';
import viennalogo from '../images/viennalogo.png';
import {
  About,
  CollegeItem,
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
  College: 'college',
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
  imageSrc: headerPhoto,
  name: `Coach Ryan Coslove`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a DMV based <strong className="text-stone-100">Volleyball Coach</strong>, currently working at{' '}
        <strong className="text-stone-100">Vienna Elite Volleyball Club</strong>. <br></br>I am the Head Coach for{' '}
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
      external: true,
    },
    /*{
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },*/
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
    { label: 'Location', text: 'DMV, USA', Icon: MapIcon },
    { label: 'Age', text: '25', Icon: CalendarIcon },
    { label: 'Interests', text: 'Volleyball, Philly Sports, Technology', Icon: SparklesIcon },
    { label: 'Study', text: 'Rutgers University', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'Vienna Elite VBC | Peraton, Inc.', Icon: BuildingOffice2Icon },
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
    title: '17 Club Gold Medal',
    description: 'MDJRS 17 Club division \n Gold Medalists (1st OVR) \n April 2025',
    image: mdjrsgold,
  },
  {
    title: 'NVPL 16s Gold Medal',
    description: 'NVPL 16s division \n Gold Medalists (1st OVR) \n January 2023',
    image: nvpl1,
  },
  {
    title: 'NVPL 16s Gold Medal',
    description: 'NVPL 16s division \n Gold Medalists (1st OVR) \n February 2023',
    image: nvpl2,
  },
  {
    title: 'MVSA Gold Runner-Up',
    description: 'MVSA 17 Club division \n Silver Medalists (2nd OVR) \n March 2024',
    image: mvsagoldrunner,
  },
  {
    title: 'May Madness Gold Runner-Up',
    description: 'May Madness 17 Club division \n Silver Medalists (2nd OVR) \n May 2025',
    image: maymadnessgoldrunner,
  },
  {
    title: 'Clash in Carolina Gold Runner-Up',
    description: 'Clash in Carolina 16 Club division \n Silver Medalists (2nd OVR) \n February 2023',
    image: clashincarolina,
  },
  {
    title: 'Prez Day Invitational Silver',
    description: 'Prez Day Invitational 17 Club division \n Silver Bracket Champs (5th OVR) \n February 2025',
    image: prezdaysilver,
  },
  {
    title: 'Volley by the James Bronze',
    description: 'Volley by the James 17 Club division \n Bronze Medalists (9th OVR) \n January 2024',
    image: volleyjamesbronze,
  },
  {
    title: 'Nike National Harbor Bronze',
    description: 'Nike National Harbor 16 USA division \n Bronze Medalists (9th OVR) \n January 2026',
    image: nikeharborbronze,
  },
  {
    title: 'DC Mini AA Silver',
    description: 'DC Mini AA (Adult Women) division \n Silver Medalists (5th OVR) \n July 2024',
    image: dcminiaasilver,
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
    date: 'September 2023 - Present',
    image: viennalogo,
    location: 'Vienna Elite Volleyball Club',
    title: <span className="text-blue-300"> Head Volleyball Coach (16 National, 17 National) </span>,
    content: (
      <div>
        <p className="mb-2 text-sm italic text-neutral-400">
          Vienna Elite is a girls travel volleyball club focusing on the development of volleyball players in middle and
          high school.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            For the 2025-2026 club season, I am the Head Coach for{' '}
            <a
              className="text-blue-300 underline hover:text-purple-300"
              href="https://www.viennaelite.org/team/158529"
              rel="noopener noreferrer"
              target="_blank">
              Vienna Elite 16 Black
            </a>{' '}
            (National) team
          </li>

          <li>Work with coaching staff to run practices and oversee middle and high school athletes (ages 13–18).</li>
          <li>Devise drills and training plans to optimize fundamentals, teamwork, communication, and game IQ.</li>
          <li>Evaluate individual strengths and assign positions to maximize team performance.</li>
          <li>Manage tournament lineups and make in-game adjustments to improve execution and results.</li>
          <li>Medals are in section below!</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'June 2024 - Present',
    image: dcthunderlogo,
    location: 'Washington DC Thunder 9man VBC',
    title: <span className="text-blue-600">Women's Program Lead & Head Volleyball Coach (Women's 6s)</span>,
    content: (
      <div>
        <p className="mb-2 text-sm italic text-neutral-400">
          Washington DC Thunder is a 9man travel club focusing on the development of adult men's players in 9man and
          adult women's players in women's 6s
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Entrusted with the lone responsibility to lead the adult women's program at DC Thunder.</li>
          <li>Devising practices to optimize their fundamentals, teamwork, communication, and more.</li>
          <li>Managing 2 rosters on 1 practice court without sacrificing quality or quantity of reps.</li>
          <li>Follow the guidelines of 9man and its Chinese & Asian-ethnicity requirements.</li>
          <li>Head coach for the women's B team at tournaments; make rosters, adjustments, etc.</li>
          <li>
            Tournament Finishes 2024
            <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
              <li>New York Mini (45 teams) – Women's A: 15th Overall / Women's B: 25th Overall</li>
              <li>DC Mini (12 teams) – Women's A AA Silver Champions</li>
              <li>
                North American Chinese Invitational Volleyball Tournament Nationals (83 teams) – Women's A: 41st Overall
                / Women's B: 60th Overall
              </li>
            </ul>
          </li>
        </ul>
      </div>
    ),
  },
  {
    date: 'November 2022 - July 2023',
    image: dynamixlogo,
    location: 'Dynamix Volleyball Club',
    title: <span className="text-amber-500">Head Volleyball Coach (16 National)</span>,
    content: (
      <div>
        <p className="mb-2 text-sm italic text-neutral-400">
          Dynamix is a girls travel volleyball club focusing on the development of volleyball players in middle and high
          school.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Same responsibilities as listed in Vienna Elite experience above with the following modifications:</li>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Placed in charge of a National 16s that faced high levels of competition.</li>
            <li>
              Executed game plans that resulted in 2, 1st place finishes and a 2nd place finish in Gold at respective
              tournaments. Respectable finishes at regional qualifier tournaments and AAU Nationals.
            </li>
          </ul>
          <li>Medals are in section below!</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'August 2021 - September 2022',
    image: cjheatlogo,
    location: 'Central Jersey Heat Volleyball Club',
    title: <span className="text-red-600">Head Volleyball Coach (15 Regional)</span>,
    content: (
      <div>
        <p className="mb-2 text-sm italic text-neutral-400">
          CJ Heat is a girls travel volleyball club focusing on the development of volleyball players in high school.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Same responsibilities as listed in Vienna Elite experience above with the following modifications:</li>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Worked with young women ages 14-18</li>
            <li>Placed in charge of a developmental 15s team</li>
            <li>
              Players new to the sport in need of learning basic fundamentals, techniques, game rules, team and system
              execution. Played against lower levels of competition to allow paced individual & team growth.
            </li>
          </ul>
        </ul>
      </div>
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
      name: 'Claudia A. (Former 16s Player)',
      text: 'Thank you so much for this season and everything you\'ve done for us this season! I had so much fun and learned so much from you.',
    },
    {
      name: 'Lora Ann H. (Mother of 16s Player)',
      text: "You're the best coach Lily Mae has ever had. She's improved more since November than she has in any other full season... You've given her confidence in herself and her abilities, which allows her to try more things on the court- which can lead to mistakes. But, you've given her the confidence to be able to make mistakes, which is one of your most important roles (IMO). I've talked to pretty much every parent and all of us have the same feeling about you and this team. We're happy the girls are getting along, happy that you have a better understanding of teenagers than many adults, happy with your positivity, happy with you setting high expectations of their behavior and just all around happy with the team.",
      //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Leah W. (Former 17s Player)',
      text: 'Since day one when I met you at tryouts you made the space so welcoming and sweet. I wasn\'t afraid to make mistakes and was ready to learn. Thank you for everything!',
    },
    {
      name: 'Stacie B. (Mother of 16s Player)',
      text: " I've seen such a positive change in Addie in just a short time...  [You've shown] a deep level of self awareness and maturity beyond your years. One team one fight!",
      //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Rachel B. (Former 17s Player)',
      text: 'Thank you for being an awesome coach. You made me feel like I was heard. Thank you for having a positive impact on my life and for being so understanding.',
    },
    {
      name: 'Jennie B. (Mother of 16s Player)',
      text: "You are incredibly tactical... You're a great coach and communicator.",
      //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
    {
      name: 'Sherry F. (Mother of 17s Player)',
      text: 'Thanks for a great season! Emily says it was her favorite Vienna year!',
    },
    {
      name: 'Clara A. (Former 16s Player)',
      text: 'Thank you for making this season fun and full of surprises and helping us all get better! This season was the best and I don\'t know what we will do with a different coach. THank you for making everything a celebration, spending time and money on us. I\'ve learned so much this season',
    },
    {
      name: 'Dolores B. (Mother of 17s Player)',
      text: 'Thank you for being such a good coach and human 😀. Vienna Elite is lucky to have you.',
    },
    {
      name: 'Neema K. (Former 16s Player)',
      text: 'Thank you so much for being our coach this year and helping me develop my skills. I couldn\'t be where I am without you. Also thank you for being someone who we can talk to and confide in.'
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
  {
    label: 'Instagram',
    Icon: InstagramIcon,
    href: 'https://www.instagram.com/coachryantutu/?utm_source=link',
    text: 'Follow me @coachryantutu Instagram - Over 4 Million Views!',
    external: true,
  },
  //{label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];

/**
 * College section
 */
export const college: CollegeItem[] = [
  {
    date: 'Vienna 17 Blue (National) - 2025',
    image: alexprofile,
    location: 'Westminster College - New Wilmington, PA',
    title: 'Alex Boda - Westminster College (DIII)',
    content: (
      <div>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Alex (Class of 2026) is committed to Westminster College to play Division III volleyball starting in the
            Fall of 2026.
          </li>
          <li>
            Committed as an <strong className="text-stone-100">OH/RS</strong>
          </li>
          <li>Alex played RS/OH for Coach Ryan for Vienna Elite 17 Blue in the 2024-2025 Club season</li>
          <li>
            As voted by her peers, Alex was voted:
            <ul className="list-disc pl-8 mt-2 space-y-1 italic">
              <li>Most Likely to Get a Kill When We Need It Most</li>
              <li>Most Improved Player</li>
              <li>Best Front Row Player</li>
              <li>Best Sense of Humor</li>
            </ul>
          </li>
          <li>
            <span>Follow Alex on Instagram: {' '}</span>
            <a
              className="inline-flex items-center gap-1 text-purple-300 hover:underline"
              href="https://www.instagram.com/alexbodavball2026/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="h-5 w-5" />
              @alexbodavball2026
            </a>
          </li>
        </ul>
      </div>
    ),
  },
];
