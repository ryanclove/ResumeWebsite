/* eslint-disable react/jsx-sort-props */
/* eslint-disable object-curly-spacing */
import dynamic from 'next/dynamic';
import { FC, memo, useCallback, useEffect, useRef, useState } from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import CollegeCommit from '../components/Sections/College/CollegeIndex';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Medals from '../components/Sections/Medals';
import Resume from '../components/Sections/Resume';
import Testimonials from '../components/Sections/Testimonials';
import { homePageMeta } from '../data/index';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

const Home: FC = memo(() => {
  const { title, description } = homePageMeta;
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/background-music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.35;
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = useCallback(() => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => { });
      setPlaying(true);
    }
  }, [playing]);

  return (
    <Page description={description} title={title}>
      <Header playing={playing} onToggleMusic={toggleMusic} />
      <Hero/>
      <About />
      <Resume />
      <Medals />
      <CollegeCommit />
      <Testimonials />
      <Contact />
      <Footer />
    </Page>
  );
});

export default Home;
