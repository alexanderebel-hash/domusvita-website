"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const phases = [
  { time: "06:00", title: "Ein neuer Tag beginnt", subtitle: "Die Pflegekraft macht sich auf den Weg", frame: "/scroll-story/s-01-ankunft.jpeg" },
  { time: "07:00", title: "Behutsam in den Tag", subtitle: "Morgenpflege mit Sorgfalt und Würde", frame: "/scroll-story/s-02-morgenpflege.jpeg" },
  { time: "08:00", title: "Gemeinsam frühstücken", subtitle: "Zeit für Gespräch und Gesellschaft", frame: "/scroll-story/s-03-fruehstueck.jpeg" },
  { time: "10:00", title: "Fachkundige Versorgung", subtitle: "Behandlungspflege nach ärztlicher Verordnung", frame: "/scroll-story/s-04-behandlung.jpeg" },
  { time: "12:00", title: "Zeit füreinander", subtitle: "Mittagspause — Ruhe und Erholung", frame: "/scroll-story/s-05-mittag.jpeg" },
  { time: "15:00", title: "Frische Luft & Aktivierung", subtitle: "Ein Spaziergang tut Körper und Seele gut", frame: "/scroll-story/s-06-spaziergang.jpeg" },
  { time: "18:00", title: "Ruhiger Ausklang", subtitle: "Abendpflege und ein guter Abend", frame: "/scroll-story/s-07-abend.jpeg" },
  { time: "22:00", title: "Gut behütet schlafen", subtitle: "Wir sind auch nachts für Sie da", frame: "/scroll-story/s-08-nacht.jpeg" },
];

// Normalize boundary positions (0–1) for each phase
const BOUNDARIES = phases.map((_, i) => i / phases.length);

export default function ScrollStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Preload all images
    const images: HTMLImageElement[] = phases.map((phase) => {
      const img = new window.Image();
      img.src = phase.frame;
      return img;
    });

    let currentPhaseIndex = -1;

    const drawFrame = (index: number) => {
      const img = images[index];
      if (!img.complete || img.naturalWidth === 0) return;

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };

    // Draw first frame once loaded
    if (images[0].complete) {
      drawFrame(0);
    } else {
      images[0].onload = () => drawFrame(0);
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=4000",
        pin: true,
        scrub: 1.2,
        anticipatePin: 1,
        onUpdate: (self) => {
          // Map progress (0-1) to phase index
          const rawIndex = Math.floor(self.progress * phases.length);
          const index = Math.min(rawIndex, phases.length - 1);

          if (index !== currentPhaseIndex) {
            currentPhaseIndex = index;
            drawFrame(index);

            // Fade out all phase overlays, fade in current
            phaseRefs.current.forEach((el, i) => {
              if (!el) return;
              gsap.to(el, {
                opacity: i === index ? 1 : 0,
                y: i === index ? 0 : i < index ? -20 : 20,
                duration: 0.4,
                ease: "power2.out",
              });
            });
          }

          // Update progress bar
          if (progressBarRef.current) {
            progressBarRef.current.style.transform = `scaleX(${self.progress})`;
          }
        },
      },
    });

    // Animate canvas opacity (fade in on start, fade out at end handled by onUpdate)
    tl.fromTo(canvas, { opacity: 0 }, { opacity: 1, duration: 0.05 }, 0);

    // Letterbox bars
    tl.fromTo(".dv-letterbox-top", { y: "-100%" }, { y: "0%", duration: 0.05, ease: "power2.out" }, 0);
    tl.fromTo(".dv-letterbox-bottom", { y: "100%" }, { y: "0%", duration: 0.05, ease: "power2.out" }, 0);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-navy-900">
      {/* Canvas for image frames */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectFit: "cover" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy-900/50" />

      {/* Cinematic letterbox bars */}
      <div className="dv-letterbox-top absolute top-0 left-0 right-0 h-[8%] bg-black z-20" />
      <div className="dv-letterbox-bottom absolute bottom-0 left-0 right-0 h-[8%] bg-black z-20" />

      {/* Section label */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 z-30">
        <span className="text-xs font-semibold tracking-[0.3em] uppercase text-white/50">
          Ein Tag bei DomusVita
        </span>
      </div>

      {/* Phase text overlays */}
      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
        {phases.map((phase, i) => (
          <div
            key={phase.time}
            ref={(el) => { phaseRefs.current[i] = el; }}
            className="absolute text-center px-6"
            style={{ opacity: i === 0 ? 1 : 0 }}
          >
            <div className="text-dv-400 font-mono text-sm tracking-widest mb-3">{phase.time} Uhr</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
              {phase.title}
            </h2>
            <p className="text-white/70 text-base md:text-lg max-w-md mx-auto">
              {phase.subtitle}
            </p>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-[9%] left-[10%] right-[10%] h-px bg-white/20 z-30">
        <div
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-dv-400 to-dv-300 origin-left"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      {/* Phase dots */}
      <div className="absolute bottom-[10.5%] left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
        {phases.map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-white/30" />
        ))}
      </div>
    </section>
  );
}
