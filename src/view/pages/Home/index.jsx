import { About } from "../../components/About";
import { Header } from "../../components/Header";

export function Home() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <About />
      </main>
    </>
  )
}
