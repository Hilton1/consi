import { About } from "../../components/About";
import { Description } from "../../components/Description";
import { Header } from "../../components/Header";
import { Schedule } from "../../components/Schedule";

export function Home() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <Description />
        <About />
        <Schedule />
      </main>
    </>
  )
}
