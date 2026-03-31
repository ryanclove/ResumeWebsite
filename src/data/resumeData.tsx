/* eslint-disable react/jsx-sort-props */
/* eslint-disable object-curly-spacing */
/* eslint-disable simple-import-sort/imports */

import { TimelineItem } from './dataDef';
import diploma from '../images/diploma.jpg';
import viennalogo from '../images/viennalogo.png';
import dcthunderlogo from '../images/dcthunder.png';
import dynamixlogo from '../images/dynamixlogo.png';
import cjheatlogo from '../images/cjheatlogo.png';
import rutgersphoto from '../images/rutgersphoto.jpg';
import playersedgephoto from '../images/playersedge.jpg';
import cinnaphoto from '../images/cinnaphoto.jpg';
import quandophoto from '../images/quandophoto.jpg';

/**
 * Education timeline
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2018 - May 2022',
    image: diploma,
    location: 'Rutgers University - the State University of New Jersey',
    title: 'Bachelor of Science in Computer Science',
    alwaysOpen: true,
    content: (
      <div>
        While completing my Bachelor's Degree, I played Intramural volleyball, participated in Rutgers Men's and Women's Club teams in open gyms, and coached junior girls volleyball at Central Jersey Heat.
      </div>
    ),
  },
];

/**
 * Coaching experience timeline
 */
export const experience: TimelineItem[] = [
  {
    date: 'September 2023 - Present',
    image: viennalogo,
    location: 'Vienna Elite Volleyball Club',
    title: <span className="text-blue-300">Head Volleyball Coach (16 National, 17 National)</span>,
    alwaysOpen: true,
    size: 'large',
    content: (
      <div>
        <p className="mb-2 text-sm italic text-neutral-400">
          Vienna Elite is a girls travel volleyball club focusing on the development of volleyball players in middle and high school.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            For the 2025-2026 club season, I am the Head Coach for{' '}
            <a
              className="text-blue-300 underline hover:text-purple-300"
              href="https://www.viennaelite.org/team/158529"
              rel="noopener noreferrer"
              target="_blank"
            >
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
    alwaysOpen: true,
    size: 'wide',
    content: (
      <div>
        <p className="mb-2 text-sm italic text-neutral-400">
          Washington DC Thunder is a 9man travel club focusing on adult players in 9man (men) and women's 6s.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Entrusted with leading the adult women's program at DC Thunder.</li>
          <li>Devising practices to optimize fundamentals, teamwork, communication, and more.</li>
          <li>Managing 2 rosters on 1 practice court without sacrificing quality or quantity of reps.</li>
          <li>Follow the guidelines of 9man and its Chinese & Asian-ethnicity requirements.</li>
          <li>Head coach for the women's B team at tournaments; make rosters, adjustments, etc.</li>
          <li>
            Tournament Finishes 2024
            <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
              <li>New York Mini (45 teams) – Women's A: 15th Overall / Women's B: 25th Overall</li>
              <li>DC Mini (12 teams) – Women's A AA Silver Champions</li>
              <li>North American Chinese Invitational Volleyball Tournament Nationals (83 teams) – Women's A: 41st Overall / Women's B: 60th Overall</li>
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
    size: 'normal',
    content: (
      <div>
        <p className="mb-2 text-sm italic text-neutral-400">
          Dynamix is a girls travel volleyball club focusing on middle and high school players.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Placed in charge of a National 16s team facing high competition levels.</li>
          <li>Executed game plans resulting in 2 first-place finishes and a 2nd place finish in Gold at tournaments.</li>
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
    size: 'normal',
    content: (
      <div>
        <p className="mb-2 text-sm italic text-neutral-400">
          CJ Heat is a girls travel volleyball club focusing on high school players.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Worked with young women ages 14-18</li>
          <li>Placed in charge of a developmental 15s team</li>
        </ul>
      </div>
    ),
  },
];

/**
 * Playing timeline
 */
export const playing: TimelineItem[] = [
  {
    date: 'Rutgers University 2018 - 2022',
    image: rutgersphoto,
    location: 'New Brunswick, NJ',
    title: <span className="text-red-600">Setter, OH/RS</span>,
    alwaysOpen: true,
    content: (
      <div>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>
            Rutgers University Intramurals
            <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
              <li>Finished 2nd Place in Spring 2022</li>
              <li>Made Playoffs every season</li>
            </ul>
          </li>
          <li>Open Gyms with Men's/Women's Club Teams</li>
        </ul>
      </div>
    ),
  },
  {
    date: "Quandomania Player's Edge 2015 - 2019",
    image: playersedgephoto,
    location: 'Mt. Laurel, NJ',
    title: <span className="text-amber-200">Sand/Beach Player</span>,
    alwaysOpen: true,
    content: (
      <div>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Played for 4 summer seasons</li>
          <li>Practicing twice a week</li>
          <li>Competing in tournaments along the Jersey shore on weekends</li>
          <li>Played either defender or split back with my partner</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'High School 2015 - 2018',
    image: cinnaphoto,
    location: 'Cinnaminson High School, NJ',
    title: <span className="text-red-300">Setter</span>,
    alwaysOpen: true,
    content: (
      <div>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Varsity Setter for 3 years</li>
          <li>Captain - Senior Year 2018</li>
          <li>West Jersey Interscholastic Volleyball League 2018 All-Conference 2nd-Team</li>
          <li>NJ State Boys All-Star Selections: 2017, 2018</li>
          <li>
            <a
              href="https://www.nj.com/highschoolsports/article/vote-who-is-the-top-boys-volleyball-junior-assist-leader/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1a73e8', textDecoration: 'underline' }}
            >
              Voted
            </a>{' '}
            4th-Best Junior Setter in New Jersey in 2017
          </li>
          <li>
            Career Stats:{' '}
            <a
              href="https://highschoolsports.nj.com/player/ryan-coslove/boysvolleyball/season/2017-2018"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1a73e8', textDecoration: 'underline' }}
            >
              Kills: 7 | Digs: 130 | Assists: 825 | Service Aces: 55
            </a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    date: 'Quandomania VBC 2015 - 2018',
    image: quandophoto,
    location: 'Washington Township, NJ',
    title: <span className="text-orange-400">Libero, Setter</span>,
    alwaysOpen: true,
    content: (
      <div>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Played for 3 club seasons</li>
          <li>Alternating between Libero and Setter.</li>
          <li>Occasionally filled in as an Outside Hitter or Right Side Hitter.</li>
        </ul>
      </div>
    ),
  },
];