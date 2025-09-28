import AboutUs from "./components/AboutUs";
import ContactSection from "./components/ContactForm";
import FAQs from "./components/Faqs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ReviewsSection from "./components/ReviewSection";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import ContactFrom from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-white ">
      <Navbar />

      <section className="flex items-center justify-center ">
        <Hero />
      </section>

      <Services />

      <AboutUs />

      <WhyUs />

      <ReviewsSection />

      <ContactFrom />

      <FAQs />

      <Footer />
    </main>
  );
}
