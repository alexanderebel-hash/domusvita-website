"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Dank meiner Pflegerin von DomusVita geht es mir wieder richtig gut. Ich muss mir keine Sorgen mehr machen und kann das Leben genießen!",
    name: "Luise D.",
    relation: "Seit 3 Jahren Kundin bei DomusVita",
    rating: 5,
    initials: "LD",
    color: "bg-dv-500",
  },
  {
    quote: "Ich hätte nie gedacht, dass ambulante Pflege so persönlich sein kann. Schwester Lisa kennt meine Vorlieben, meinen Humor — und vergisst nie meinen Lieblingstee.",
    name: "Heinrich W.",
    relation: "Klient seit 3 Jahren",
    rating: 5,
    initials: "HW",
    color: "bg-teal-500",
  },
  {
    quote: "Die Beratung war unglaublich hilfreich. Sie haben uns durch den gesamten Antragsprozess begleitet und wir bekamen den Pflegegrad, der meinem Vater zusteht.",
    name: "Thomas & Angela B.",
    relation: "Angehörige eines Klienten",
    rating: 5,
    initials: "TB",
    color: "bg-dv-600",
  },
  {
    quote: "Als Ärztin schätze ich die professionelle Zusammenarbeit mit dem Team von DomusVita. Die Dokumentation ist vorbildlich und die Kommunikation reibungslos.",
    name: "Dr. Sabine L.",
    relation: "Kooperierende Hausärztin",
    rating: 5,
    initials: "SL",
    color: "bg-navy-700",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoplay]);

  return (
    <section id="stimmen" className="py-24 md:py-32 relative overflow-hidden bg-cream">
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-dv-200/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-dv-100/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-dv-600 tracking-wider uppercase mb-4">
            Stimmen unserer Klienten
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-800 mb-6">
            Was andere über uns <span className="gradient-text">sagen</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-dv-400 fill-dv-400" />
            ))}
            <span className="text-navy-500 text-sm ml-2">4.8/5.0 auf werpflegtwie.de</span>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-dv-400/5 border border-dv-100/50"
            >
              <Quote className="w-10 h-10 text-dv-200 mb-6" />
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-dv-400 fill-dv-400" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-navy-700 leading-relaxed mb-8 font-light italic">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm", testimonials[current].color)}>
                  {testimonials[current].initials}
                </div>
                <div>
                  <div className="font-semibold text-navy-800">{testimonials[current].name}</div>
                  <div className="text-sm text-navy-400">{testimonials[current].relation}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => { setAutoplay(false); setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length); }}
              className="p-3 rounded-full bg-white border border-dv-200 hover:bg-dv-50 hover:border-dv-300 transition-all shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 text-navy-600" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAutoplay(false); setCurrent(i); }}
                  className={cn("h-2.5 rounded-full transition-all duration-300 cursor-pointer", i === current ? "bg-dv-500 w-8" : "bg-dv-200 hover:bg-dv-300 w-2.5")}
                />
              ))}
            </div>
            <button
              onClick={() => { setAutoplay(false); setCurrent((prev) => (prev + 1) % testimonials.length); }}
              className="p-3 rounded-full bg-white border border-dv-200 hover:bg-dv-50 hover:border-dv-300 transition-all shadow-sm cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 text-navy-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
