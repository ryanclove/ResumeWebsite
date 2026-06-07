/* eslint-disable object-curly-spacing */
/* eslint-disable simple-import-sort/imports */
import { TestimonialSection } from './dataDef';
import testimonial1 from '../images/testimonials/neqrocky.jpg';
import testimonial2 from '../images/testimonials/sfjump.jpg';
import testimonial3 from '../images/testimonials/sfjwong.jpg';
import testimonial4 from '../images/testimonials/neqsign.jpg';
import testimonial5 from '../images/testimonials/patriotscuplunch.jpg';
import testimonial6 from '../images/testimonials/eccroof.jpg';
import testimonial7 from '../images/testimonials/sharkteam.jpg';
import testimonial8 from '../images/testimonials/dvcsquad.jpg';
import testimonial9 from '../images/testimonials/ecc2026.jpg';

export const testimonial: TestimonialSection = {
  images: [testimonial1, testimonial2, testimonial3, testimonial4, testimonial5, testimonial6, testimonial7, testimonial8, testimonial9],
  testimonials: [
    // ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
    // ────────────────────────────────────────────────── Players ───────────────────────────────────────────────────────────
    // ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

    /* Template
    {
      type: 'player',
      name: "",
      age: "",
      text: "",
      position: "",
      year: "",
    },
    */

    // ── 2026 ───────────────────────────────────────────────────────────
    {
      type: 'player',
      name: 'Addie B.',
      age: '16',
      text: 'Thank you for all of the work you put in as our coach this year. I really appreicate the skills you have taught me as a player to get better and to be a better leader.',
      position: 'OH/RS',
      year: '2026',
    },
    {
      type: 'player',
      name: 'Amelia P.',
      age: '16',
      text: "Thank you for a great season. I appreciate the opportunity and I feel like I learned a lot this season. I truly felt supported by you and the girls on the team. " +
        "I hope we get to work together again!",
      position: 'OH/RS, DS',
      year: '2026',
    },
    {
      type: 'player',
      name: 'Anna D.',
      age: '16',
      text: "You have not only been a coach, you have been a role model and a person I can trust and count on. You've inspired and pushed me to be a better athlete but overall a better person. " +
        "You have believed in me when I wasn't able to do so myself. You have had such a huge impact on my life and I have learned so much from you. Thank you so much.",
      position: 'S',
      year: '2026',
    },
    {
      type: 'player',
      name: 'Austin A.',
      age: '16',
      text: "This is the most fun I've had playing volleyball and it's mostly because of you Coach Ryan. You have not only made us a great team but you have made us family!",
      position: 'OH/RS',
      year: '2026',
    },
    {
      type: 'player',
      name: 'Emma H.',
      age: '16',
      text: "Thank you for an amazing season! Thank you for pushing me and making me a better player. I feel like I have grown a lot this season from your coaching. Thank you so much!!",
      position: 'OH/RS',
      year: '2026',
    },
    {
      type: 'player',
      name: 'Kobie B.',
      age: '16',
      text: "Thank you for taking your time and coaching all of us this season. I appreciate how patient you've been with us (especially me) because it really helped me learn " +
        "a lot this season and enjoy every moment. I'm going to miss this so much, you are a part of the reason it was so great. I think I've grown mentally as a player because it's " +
        "always been easy to know you're supporting and wishing the best for the team. Thank you for everything!!!",
      position: 'DS/L',
      year: '2026',
    },
    {
      type: 'player',
      name: 'Kylah S.',
      age: '16',
      text: "Thank you for an amazing season! I couldn't have asked for a better team and coach to have my last season with. You are truly an amazing coach and I have grown so much as a player.",
      position: 'OH/RS',
      year: '2026',
    },
    {
      type: 'player',
      name: 'Lily Mae H.',
      age: '16',
      text: "Thank you so much for this season! You are genuinely the best coach I've ever had. I feel I have improved so much this season and that's because of you. " +
        "You have created a comfortable space to play volleyball and that means so much.",
      position: 'MB',
      year: '2026',
    },
    {
      type: 'player',
      name: 'Nina B.',
      age: '16',
      text: "Thank you so much for your dedication to our team and my indiviudal improvements... I've really appreacted the encouragement... You're also very nice and funny. " +
        "I love how much you have believed in our success this year. Thank you for a great season!",
      position: 'MB',
      year: '2026',
    },
    {
      type: 'player',
      name: 'Nora B.',
      age: '16',
      text: "Thanks for being the funniest coach I've ever had. You have helped me grow so much as a player and chose a team full of the best friends I could ask for. " +
        "This was my favorite club season and I loved this team! Thank you!",
      position: 'DS/L',
      year: '2026',
    },
    {
      type: 'player',
      name: 'Riyana T',
      age: '16',
      text: "Thank you so much for being a great coach and trusting me on the court. You have taught me so much that I know will be helpful to me in the future. " +
        "I have really enjoyed getting to know you and play for you and I'm going to miss this season so much. Even when we were down, you still found a way to make it fun..." +
        "I appreciate all you have done for me and I want you to know that you're a good and thoughtful coach.",
      position: 'S',
      year: '2026',
    },

    // ── 2025 ───────────────────────────────────────────────────────────
    {
      type: 'player',
      name: 'Alex B.',
      age: '17',
      text: 'Thank you for the support and belief in all of us this season <3',
      position: 'OH/RS',
      year: '2025',
    },
    {
      type: 'player',
      name: 'Alyssa S.',
      age: '17',
      text: "Thank you for your support all season! You've helped me grow as both a player and a person.",
      position: 'OH/RS',
      year: '2025',
    },
    {
      type: 'player',
      name: 'Bridget M.',
      age: '17',
      text: 'Thank you for always bringing energy to the court, practice, and ourselves.',
      position: 'DS/L',
      year: '2025',
    },
    {
      type: 'player',
      name: 'Caitlin M. ',
      age: '17',
      text: "Thank you for being the REALEST. Couldn't have grown as a player without you!",
      position: 'OH/RS',
      year: '2025',
    },
    {
      type: 'player',
      name: 'Denaria J.',
      age: '17',
      text: 'Thank you for your funny prescence on and off the court and thank you for being an amazing coach.',
      position: 'OH/RS',
      year: '2025',
    },
    {
      type: 'player',
      name: 'Kaylin R.',
      age: '17',
      text: 'Thank you for the best season. I have enjoyed you being my coach this year!',
      position: 'DS/L',
      year: '2025',
    },
    {
      type: 'player',
      name: 'Kiki M.',
      age: '17',
      text: "Thank you for always being understanding, being chill and positive at practices and games. This season's been so fun. :) ",
      position: 'MB',
      year: '2025',
    },
    {
      type: 'player',
      name: 'Mansi K.',
      age: '17',
      text: 'This season was really fun. Thank you for being so positive!',
      position: 'Utility',
      year: '2025',
    },
    {
      type: 'player',
      name: 'Nathalia S.',
      age: '17',
      text: 'Thank you for always having my back & supporting me on and off the court!',
      position: 'S',
      year: '2025',
    },
    {
      type: 'player',
      name: 'Tabi E. ',
      age: '17',
      text: "Thank you so much for the opportunity to play for you this season! Every week I felt like I was becoming a better player while getting to have fun. " +
        "This was an amazing season! Thank you for always encouraging us an keeping us hype. You're the best!",
      position: 'DS, RS',
      year: '2025',
    },
    {
      type: 'player',
      name: 'Wale N.',
      age: '17',
      text: 'Thank you for your support throughout the whole season',
      position: 'S',
      year: '2025',
    },

    // ── 2024 ───────────────────────────────────────────────────────────
    {
      type: 'player',
      name: "Abby A.",
      age: "17",
      text: "Thank you for a fun season!",
      position: "MB",
      year: "2024",
    },
    {
      type: 'player',
      name: "Alexis E.",
      age: "17",
      text: "Thanks for the past 2 seasons!",
      position: "S",
      year: "2024",
    },
    {
      type: 'player',
      name: "Caelen G.",
      age: "17",
      text: "Thanks for being my coach the past 2 years. I know it hasn't been easy. Also, Adalyn wants more mic'd up moments. <3",
      position: "DS/L",
      year: "2024",
    },
    {
      type: 'player',
      name: "Emily F.",
      age: "17",
      text: "Thanks for being a great coach, especially for my senior year! I had so much fun and laughed a lot! Thank you!",
      position: "OH/RS",
      year: "2024",
    },
    {
      type: 'player',
      name: "Grace S.",
      age: "17",
      text: "Thanks you for being a great coach this season... this was probably my last year but I had such a blast thanks to you!",
      position: "OH/RS",
      year: "2024",
    },
    {
      type: 'player',
      name: "Kaila I.",
      age: "17",
      text: "Thanks for a good season!",
      position: "DS/L, OH/RS",
      year: "2024",
    },
    {
      type: 'player',
      name: "Kennedy K.",
      age: "17",
      text: "Thanks for helping and being my coach for the past 2 years. It's definitely been a fun season. Thanks for all you've taught me and helped me accomplish.",
      position: "MB",
      year: "2024",
    },
    {
      type: 'player',
      name: 'Leah W.',
      age: '17',
      text: "Since day one when I met you at tryouts you made the space so welcoming and sweet. I wasn't afraid to make mistakes and was ready to learn.  " +
      "Thanks for being funny (at times) and for making a team that we can have fun with for our last season. Thank you for everything!",
      position: 'DS/L',
      year: '2024',
    },
    {
      type: 'player',
      name: 'Rachel B.',
      age: '17',
      text: 'Thank you for being an awesome coach. You made me feel like I was heard. Thank you for having a positive impact on my life and for being so understanding.',
      position: 'S',
      year: '2024',
    },
    {
      type: 'player',
      name: "Rithee P.",
      age: "17",
      text: "Thanks for being a good coach... I had a lot of fun being one of your players! Thank you for a great season! I loved this team!",
      position: "OH/RS",
      year: "2024",
    },
    {
      type: 'player',
      name: "Vynavi T.",
      age: "17",
      text: "Thank you so much for coaching me this season. I hope I can play with you again... ",
      position: "OH/RS, DS",
      year: "2024",
    },
    {
      type: 'player',
      name: "Washington DC Thunder Women's Teams",
      text: "Thank you for all the time and energy you put into Thunder Women's! We are grateful for your unwavering support and spirit wear :). We enjoyed spending time with you on and off the court.",
      year: 'Summer 2024',
    },

    // ── 2023 ───────────────────────────────────────────────────────────
    {
      type: 'player',
      name: "Caelen G.",
      age: "16",
      text: "Thanks for a great season! It was really fun and I will miss it.",
      position: "DS/L",
      year: "2023",
    },
    {
      type: 'player',
      name: 'Clara A.',
      age: '16',
      text: "Thank you for making this season fun and full of surprises and helping us all get better. This season was the best and I don't know what we will do with a " +
        "different coach. Thank you for making everything a celebration, spending time and money on us. I've learned so much.",
      position: 'S, OH/RS',
      year: '2023',
    },
    {
      type: 'player',
      name: 'Claudia A. ',
      age: '16',
      text: "Thank you so much for this season and everything you've done for us this season! I had so so much fun and learned so much from you. Thanks for EVERYTHING",
      position: 'S',
      year: '2023',
    },
    {
      type: 'player',
      name: "Faith W.",
      age: "16",
      text: "Thanks for putting up with me, I know I'm a handful. Though we didn't always get along, I'm going to miss you.",
      position: "OH/RS",
      year: "2023",
    },
    {
      type: 'player',
      name: 'Neema K.',
      age: '16',
      text: "Thank you so much for being our coach this year and helping me develop my skills. I couldn't be where I am without you. " +
        "Also thank you for being someone who we can talk to and confide in.",
      position: 'MB',
      year: '2023',
    },

    // ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
    // ────────────────────────────────────────────────── Parents ───────────────────────────────────────────────────────────
    // ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

    // ── 2026 ───────────────────────────────────────────────────────────
    {
      type: 'parent',
      name: 'Jennie B.',
      age: '16',
      text: "You are incredibly tactical... You're a great coach and communicator.",
      year: '2026',
    },
    {
      type: 'parent',
      name: 'Jimmy D.',
      age: '16',
      text: "Couldn't be happier for Anna to be coached by you and thank you for a great season. Honestly, I learned a lot from you too, sir. Much respect.",
      year: '2026',
    },
    {
      type: 'parent',
      name: 'Kristen S.',
      age: '16',
      text: "Girls had a great season. Never seen that many tears at the end from any of the teams we've been on.",
      year: '2026',
    },
    {
      type: 'parent',
      name: 'Lora Ann H.',
      age: '16',
      text: "You're the best coach Lily Mae has ever had. She's improved more since November than she has in any other full season... You've given her confidence in herself and her abilities, " +
        " which allows her to try more things on the court- which can lead to mistakes. But, you've given her the confidence to be able to make mistakes, which is one of your most important roles (IMO). " +
        "I've talked to pretty much every parent and all of us have the same feeling about you and this team. We're happy the girls are getting along, happy that you have a better understanding of teenagers " +
        "than many adults, happy with your positivity, happy with you setting high expectations of their behavior and just all around happy with the team.",
      year: '2026',
    },
    {
      type: 'parent',
      name: 'Sejal T.',
      age: '16',
      text: "Awesome season! One of the best! We've never had a coach who recognizes everyone equally, holds himself accountable, very communicative and overall made the season fun for all. So THANK YOU!",
      year: '2026',
    },
    {
      type: 'parent',
      name: 'Stacie B.',
      age: '16',
      text: "I've seen such a positive change in Addie in just a short time... [You've shown] a deep level of self awareness and maturity beyond your years. One team one fight!",
      year: '2026',
    },

    // ── 2025 ───────────────────────────────────────────────────────────
    {
      type: 'parent',
      name: 'Dolores B.',
      age: '17',
      text: 'Thank you for being such a good coach and human 😀. Vienna Elite is lucky to have you.',
      year: '2025',
    },
    {
      type: 'parent',
      name: 'Stacy E.',
      age: '17',
      text: 'Thank you for a wonderful season, coach!',
      year: '2025',
    },

    // ── 2024 ───────────────────────────────────────────────────────────
    {
      type: 'parent',
      name: 'Sherry F.',
      age: '17',
      text: 'Thanks for a great season! Emily says it was her favorite Vienna year!',
      year: '2024',
    },
  ],
};