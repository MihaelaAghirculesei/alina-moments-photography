import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#000308] to-[#000000]">
      <div className="max-w-[1440px] mx-auto">
        <Header />

        <main className="pt-[400px]">
          {/* Your content sections will go here */}
        </main>
      </div>
    </div>
  );
}
