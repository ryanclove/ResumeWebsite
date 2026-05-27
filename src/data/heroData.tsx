import { Hero } from './dataDef';
import NewTabIcon from '../components/Icon/NewTabIcon';

// import multiple images
import hero1 from '../images/hero/legkick.jpg';
import hero2 from '../images/hero/neqbunny.jpg';
import hero3 from '../images/hero/dvcbumble.jpg';
import hero4 from '../images/hero/jwong.jpg';
import hero5 from '../images/hero/orangetutu.jpg';
import hero6 from '../images/hero/necktattoo.png';
import hero7 from '../images/hero/sharkref.jpg';
import hero8 from '../images/hero/jefftutu.jpg';

export const heroData: Hero = {
  images: [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8], // 🔁 slideshow images

  name: `Coach Ryan Coslove`,

  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a DMV based <strong className="text-stone-100">Volleyball Coach</strong>, currently working at{' '}
        <strong className="text-stone-100">Vienna Elite Volleyball Club</strong>. <br />
        In the <strong className="text-stone-100">upcoming 2026-2027</strong> club season, I will be the head coach for <strong className="text-stone-100">either</strong><br />
        the Vienna Elite <strong className="text-stone-100">15 Travel</strong> or <strong className="text-stone-100">17 Travel</strong> team.
        <strong className="text-stone-100">To Be Determined.</strong><br />
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Explore my site to learn more about me, my coaching background, and feats.
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