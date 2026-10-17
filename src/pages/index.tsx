/* eslint-disable react/jsx-sort-props */
/* eslint-disable object-curly-spacing */
import { FC, memo, useCallback, useEffect, useRef, useState } from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import CollegeCommit from '../components/Sections/College/CollegeIndex';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Header from '../components/Sections/Header';
import Hero from '../components/Sections/Hero';
import Medals from '../components/Sections/Medals';
import Resume from '../components/Sections/Resume';
import Testimonials from '../components/Sections/Testimonials';
import { homePageMeta } from '../data/index';

const Home: FC = memo(() => {
  const { title, description } = homePageMeta;
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = useCallback(() => {
    // Create the audio on first play so the 4MB mp3 doesn't download during page load
    if (!audioRef.current) {
      audioRef.current = new Audio('/background-music.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.35;
    }
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
