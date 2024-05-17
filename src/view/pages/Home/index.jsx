import { Header } from "../../components/Header";
import { Description } from "../../components/Description";
import { About } from "../../components/About";
import { Schedule } from "../../components/Schedule";
import { Speakers } from "../../components/Speakers";
import { Sponsors } from "../../components/Sponsors";
import { Footer } from "../../components/Footer";
import { Equipe } from "../../components/Equipe";
import { Apoio } from "../../components/Apoio";

export function Home() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <Description />
        <About />
        <Schedule />
        <Speakers />
        <Sponsors />
        <Apoio />
        <Equipe />
        <Footer />
      </main>
    </>
  )
}
