/* eslint-disable object-curly-spacing */
/* eslint-disable simple-import-sort/imports */
import { Hero } from './dataDef';
import NewTabIcon from '../components/Icon/NewTabIcon';
import headerPhoto from '../images/headerphoto.png';

export const heroData: Hero = {
  imageSrc: headerPhoto,
  name: `Coach Ryan Coslove`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a DMV based <strong className="text-stone-100">Volleyball Coach</strong>, currently working at{' '}
        <strong className="text-stone-100">Vienna Elite Volleyball Club</strong>. <br />
        I am the Head Coach for <strong className="text-stone-100">Vienna Elite 16 Black</strong> in the 2025-2026 Season.
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
  ],
};