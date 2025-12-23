import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Products } from "@/components/products";
import { Timeline } from "@/components/timeline";
import { Leadership } from "@/components/leadership";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { MobileCTA } from "@/components/mobile-cta";
import { BackendWarmup } from "@/components/backend-warmup";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <BackendWarmup />
        <Hero />
        <Services />
        <Products />
        <Timeline />
        <Leadership />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
