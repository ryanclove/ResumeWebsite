/* eslint-disable object-curly-spacing */
/* eslint-disable simple-import-sort/imports */
import { MedalsItem } from './dataDef';

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
import stjamesgrandprix from '../images/medals/St James Grand Prix.jpg';
import vienna16smixed from '../images/medals/Vienna 16s Mixed.jpg';

export const medalsItems: MedalsItem[] = [
  {
    title: '17 Club Gold Medal',
    description: 'MDJRS 17 Club division \n Gold Medalists (1st OVR) \n April 2025',
    medalType: 'gold',
    image: mdjrsgold,
  },
  {
    title: 'NVPL 16s Gold Medal',
    description: 'NVPL 16s division \n Gold Medalists (1st OVR) \n January 2023',
    medalType: 'gold',
    image: nvpl1,
  },
  {
    title: 'NVPL 16s Gold Medal',
    description: 'NVPL 16s division \n Gold Medalists (1st OVR) \n February 2023',
    medalType: 'gold',
    image: nvpl2,
  },
  {
    title: 'St. James AAU Grand Prix Gold Runner-Up',
    description: 'St. James AAU Grand Prix 16 Club division \n Silver Medalists (2nd OVR) \n February 2026',
    medalType: 'goldrunnerup',
    image: stjamesgrandprix,
  },
  {
    title: 'May Madness Gold Runner-Up',
    description: 'May Madness 17 Club division \n Silver Medalists (2nd OVR) \n May 2025',
    medalType: 'goldrunnerup',
    image: maymadnessgoldrunner,
  },
  {
    title: 'Clash in Carolina Gold Runner-Up',
    description: 'Clash in Carolina 16 Club division \n Silver Medalists (2nd OVR) \n February 2023',
    medalType: 'goldrunnerup',
    image: clashincarolina,
  },
  {
    title: 'Vienna Elite 16s Mixed Gold Runner-Up',
    description: 'Vienna Elite 16s Mixed division \n Silver Medalists (2nd OVR) \n March 2026',
    medalType: 'goldrunnerup',
    image: vienna16smixed,
  },
  {
    title: 'MVSA Gold Runner-Up',
    description: 'MVSA 17 Club division \n Silver Medalists (2nd OVR) \n March 2024',
    medalType: 'goldrunnerup',
    image: mvsagoldrunner,
  },
  {
    title: 'Prez Day Invitational Silver',
    description: 'Prez Day Invitational 17 Club division \n Silver Bracket Champs (5th OVR) \n February 2025',
    medalType: 'silver',
    image: prezdaysilver,
  },
  {
    title: 'DC Mini AA Silver',
    description: 'DC Mini AA (Adult Women) division \n Silver Medalists (5th OVR) \n July 2024',
    medalType: 'silver',
    image: dcminiaasilver,
  },
  {
    title: 'Volley by the James Bronze',
    description: 'Volley by the James 17 Club division \n Bronze Medalists (9th OVR) \n January 2024',
    medalType: 'bronze',
    image: volleyjamesbronze,
  },
  {
    title: 'Nike National Harbor Bronze',
    description: 'Nike National Harbor 16 USA division \n Bronze Medalists (9th OVR) \n January 2026',
    medalType: 'bronze',
    image: nikeharborbronze,
  },
];