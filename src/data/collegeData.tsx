/* eslint-disable react/jsx-sort-props */
/* eslint-disable object-curly-spacing */
/* eslint-disable simple-import-sort/imports */
import { CollegeItem } from './dataDef';
import alexprofile from '../images/alexprofile.jpg';
import InstagramIcon from '../components/Icon/InstagramIcon';

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
            Alex (Class of 2026) is committed to Westminster College to play Division III volleyball starting in the Fall of 2026.
          </li>
          <li>
            Committed as an <strong className="text-stone-100">OH/RS</strong>
          </li>
          <li>
            Alex played RS/OH for Coach Ryan on Vienna Elite 17 Blue in the 2024-2025 Club season
          </li>
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
              className="inline-flex items-center gap-1 text-blue-500 hover:text-purple-500 hover:underline underline-offset-4 transition-colors duration-200"
              href="https://www.instagram.com/alexbodavball2026/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="h-5 w-5 text-current" />
              @alexbodavball2026
            </a>
          </li>
        </ul>
      </div>
    ),
  },
];