import { Button } from '@/components/ui/button';

const navLinks = ['Home', 'Studio', 'About', 'Journal', 'Reach Us'];

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />

      <header className="relative z-10">
        <nav className="liquid-glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-8 py-6 mt-4">
          <a className="text-3xl tracking-tight text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }} href="#">
            Velorah<sup className="text-xs">®</sup>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link, index) => (
              <a
                key={link}
                href="#"
                className={`text-sm transition-colors ${index === 0 ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {link}
              </a>
            ))}
          </div>
          <Button className="liquid-glass rounded-full px-6 py-2.5 text-sm hover:scale-[1.03]" variant="ghost">
            Begin Journey
          </Button>
        </nav>
      </header>

      <section className="relative z-10 flex min-h-[calc(100vh-120px)] items-center justify-center px-6 pt-32 pb-40 py-[90px] text-center">
        <div className="mx-auto flex max-w-7xl flex-col items-center">
          <h1
            className="animate-fade-rise text-5xl font-normal leading-[0.95] tracking-[-2.46px] sm:text-7xl md:text-8xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Where <em className="not-italic text-muted-foreground">dreams</em> rise <em className="not-italic text-muted-foreground">through the silence.</em>
          </h1>
          <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We're designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos, we build digital spaces for sharp focus and inspired work.
          </p>
          <Button className="animate-fade-rise-delay-2 liquid-glass mt-12 cursor-pointer rounded-full px-14 py-5 text-base hover:scale-[1.03]" variant="ghost">
            Begin Journey
          </Button>
        </div>
      </section>
    </main>
  );
}

export default App;
