import { About } from "../../components/About";
import { Description } from "../../components/Description";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Schedule } from "../../components/Schedule";
import { Sponsors } from "../../components/Sponsors";

export function Home() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <Description />
        <About />
        <Schedule />
        <Sponsors />
        <Footer />
      </main>
    </>
  )
}
