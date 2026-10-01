import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050a14] text-slate-100">
      {/* Fixed background grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(6,182,212,0.035) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(6,182,212,0.035) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <ExperienceSection />
        <SkillsSection />
        <Footer />
      </div>
    </main>
  );
}
