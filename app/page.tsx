import { Header } from "@/components/Header";
import { PhotographerPresentation } from "@/components/PhotographerPresentation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#000308] to-[#000000]">
      <Header />

      <main>
        <PhotographerPresentation />

        {/* Other content sections will go here */}
      </main>
    </div>
  );
}
