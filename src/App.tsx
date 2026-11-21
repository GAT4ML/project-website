import AboutUsSection from "./sections/AboutUsSection";
import NewsSection from "./sections/NewsSection";
import ProgressSection from "./sections/ProgressSection";
import PublicationsSection from "./sections/PublicationsSection";
import TeamSection from "./sections/TeamSection";
import ContactSection from "./sections/ContactSection";
import SiteHeader from "./components/layout/SiteHeader";
import SiteFooter from "./components/layout/SiteFooter";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8faf8] text-[#102b29]">
      <SiteHeader />

      <main className="pt-[76px] [&>section]:scroll-mt-[76px]">
        <AboutUsSection />

        <NewsSection />

        <ProgressSection />

        <PublicationsSection />

        <TeamSection />

        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
