import React from "react";
import { medpart1, randomGraphic, sponsor1 } from "../assets";
import Navbar from "../components/Navbar";
import HeroTitleHome from "../components/home/HeroTitleHome";
import AboutHome from "../components/home/AboutHome";
import EventCardRight from "../components/home/EventCardRight";
import EventCardLeft from "../components/home/EventCardLeft";
import SubTitle from "../components/SubTitle";
import SponsorContainer from "../components/home/SponsorContainer";
import Background from "../components/Background";
import Footer from "../components/Footer";

const Home = () => {
  const imagesMedpart = [
    { index: 1, src: medpart1, alt: "Logo1", class: "w-32" },
    { index: 2, src: medpart1, alt: "Logo2", class: "w-32" },
    { index: 3, src: medpart1, alt: "Maskot", class: "w-32" },
    { index: 4, src: medpart1, alt: "Maskot", class: "w-32" },
  ];

  const imagesSponsor = [
    { index: 1, src: sponsor1, alt: "Logo1", class: "w-32" },
    { index: 2, src: sponsor1, alt: "Logo2", class: "w-32" },
    { index: 3, src: sponsor1, alt: "Maskot", class: "w-32" },
    { index: 4, src: sponsor1, alt: "Maskot", class: "w-32" },
  ];

  return (
    <div className="font-poppins">
      <Navbar />
      <HeroTitleHome title="X - Project 9.0" link="#about-home" />
      <div className="bg-gradient-to-b from-blue-1000 to-blue-400 w-full">
        <AboutHome />
        <SubTitle title="Our Event" />
        <EventCardRight
          title="Tech Genius"
          desc="Tech Genius adalah kegiatan yang dirancang untuk membangun dan meningkatkan pemahaman serta keterampilan teknologi di kalangan peserta. Kegiatan ini bertujuan untuk mengembangkan generasi yang cakap dan kreatif dalam pemanfaatan teknologi di berbagai aspek kehidupan."
          img={randomGraphic}
        />
        <EventCardLeft
          title="Informatic Championship"
          desc="Informatic Championship (IC) adalah sebuah ajang perlombaan atau kompetisi yang  bertujuan untuk mengasah kemampuan dan keterampilan peserta di bidang teknologi, sehingga dapat menciptakan berbagai inovasi baru di masa yang akan datang, yang dikemas dalam berbagai jenis perlombaan"
          img={randomGraphic}
        />
        <EventCardRight
          title="Techno Symphony"
          desc="Techno Symphony adalah kegiatan akhir dari X-Project 9.0, kegiatan yang bertujuan untuk meningkatkan pengetahuan tentang rumpun teknik informatika bagi mahasiswa TI Unesa dan menjadi wadah kreatifitas seni Mahasiswa"
          img={randomGraphic}
        />
        <SubTitle title="Sponsored By" />
        <SponsorContainer images={imagesSponsor} />
        <SubTitle title="Media Partner" />
        <SponsorContainer images={imagesMedpart} />
        <Background />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
