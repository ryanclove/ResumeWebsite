/* eslint-disable object-curly-spacing */
/* eslint-disable simple-import-sort/imports */
import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import { About } from './dataDef';
import profilepic from '../images/profilepic.jpg';

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