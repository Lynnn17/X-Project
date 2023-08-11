import React from "react";
import Navbar from "../../components/Navbar";
import HeroTitle from "../../components/HeroTitle";
import SubTitleExtra from "../../components/SubTitleExtra";
import OverviewIC from "../../components/championship/OverviewIC";
import TimelineLeft from "../../components/TimelineLeft";
import TimelineRight from "../../components/TimelineRight";
import SubTitle from "../../components/SubTitle";
import Background from "../../components/Background";
import Footer from "../../components/Footer";
import Prizes from "../../components/Prizes";
import ContactPerson from "../../components/ContactPerson";
import Registration from "../../components/Registration";

const PhotoCompetition = () => {
  return (
    <div>
      <Navbar />
      <HeroTitle title="Photography Competition" />
      <div className="bg-gradient-to-b from-blue-1000 to-blue-400 pt-36">
        <SubTitleExtra title="Overview" sub="Photography Competition" />
        <OverviewIC
          desc="Lomba Fotografi adalah sebuah kompetisi yang mempertandingkan karya fotografi yang dihasilkan oleh peserta. Lomba ini bertujuan untuk mengembangkan kreativitas peserta dalam bidang fotografi, serta meningkatkan kemampuan teknis dan estetika dalam menghasilkan karya yang berkualitas."
          kategori="Mahasiswa"
          tempat="Online"
          jam="19.00-20.00"
          biaya="Rp 35.000"
          tingkat="Nasional"
        />
        <SubTitleExtra title="Timeline" sub="Photography Competition" />
        <div className="pb-36">
          <TimelineLeft nama="Pendaftaran" tanggal="11 September - 2 November 2023" />
          <TimelineRight nama="Pengumpulan Karya" tanggal="3 - 16 November 2023" />
          <TimelineLeft nama="Penjurian Karya" tanggal="17 - 22 November 2023" />
          <TimelineRight nama="Pengumuman 10 Besar" tanggal="23 November 2023" />
          <TimelineLeft nama="Technical Meeting" tanggal="24 November 2023" />
          <TimelineRight nama="Periode Vote Karya" tanggal="25 - 29 November 2023" />
          <TimelineLeft nama="Perhitungan Jumlah Like" tanggal="30 November 2023" />
          <TimelineRight nama="Pengumuman Pemenang" tanggal="1 Desember 2023" />
        </div>
        <SubTitleExtra title="The Champion Prizes" sub="Photography Competition" />
        <Prizes first="Rp 700.000" second="Rp 500.000" third="Rp 300.000" />
        <SubTitle title="Contact Person" />
        <ContactPerson firstlink="wa.me/" firstcp="Rizal Ramadhan" firstno="0858 0489 8461" secondlink="wa.me/" secondcp="Rizal Ramadhan" secondno="0858 0489 8461" />
        <Registration link="google.com" />
        <Background />
      </div>
      <Footer />
    </div>
  );
};

export default PhotoCompetition;
