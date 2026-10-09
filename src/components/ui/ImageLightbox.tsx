"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

export type LightboxItem = { src: string; width: number; height: number; alt: string; label: string };
export type LightboxLabels = { viewer: string; enlarge: string; close: string; previous: string; next: string };

export function ImageLightbox({ items, labels }: { items: LightboxItem[]; labels: LightboxLabels }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const reduceMotion = useReducedMotion();

  const close = useCallback(() => {
    setActiveIndex((current) => { if (current !== null) requestAnimationFrame(() => triggerRefs.current[current]?.focus()); return null; });
  }, []);
  const move = useCallback((direction: number) => setActiveIndex((current) => current === null ? null : (current + direction + items.length) % items.length), [items.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const previousOverflow = document.body.style.overflow; document.body.style.overflow = "hidden"; closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") close(); if (event.key === "ArrowRight") move(1); if (event.key === "ArrowLeft") move(-1); };
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", onKeyDown); };
  }, [activeIndex, close, move]);

  return (
    <>
      <div className="gallery-grid">
        {items.map((item, index) => (
          <motion.button ref={(element) => { triggerRefs.current[index] = element; }} type="button" className={`gallery-card gallery-card--${index + 1}`} key={item.src} onClick={() => setActiveIndex(index)} aria-label={`${labels.enlarge}: ${item.label}`} whileHover={reduceMotion ? undefined : { y: -4 }} transition={{ duration: 0.3 }}>
            <Image src={item.src} alt={item.alt} width={item.width} height={item.height} sizes={index === 0 ? "(max-width: 767px) 100vw, 55vw" : "(max-width: 767px) 100vw, 30vw"} className="gallery-card__image" />
            <span className="gallery-card__overlay" aria-hidden="true" /><span className="gallery-card__label">{item.label}</span><span className="gallery-card__expand" aria-hidden="true"><Expand size={18} /></span>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {activeIndex !== null ? (
          <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label={labels.viewer} initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.currentTarget === event.target) close(); }}>
            <button ref={closeButtonRef} type="button" className="lightbox__close" onClick={close} aria-label={labels.close}><X /></button>
            <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={() => move(-1)} aria-label={labels.previous}><ChevronLeft /></button>
            <motion.figure key={items[activeIndex].src} className="lightbox__figure" initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
              <Image src={items[activeIndex].src} alt={items[activeIndex].alt} width={items[activeIndex].width} height={items[activeIndex].height} sizes="90vw" className="lightbox__image" /><figcaption>{items[activeIndex].label}</figcaption>
            </motion.figure>
            <button type="button" className="lightbox__nav lightbox__nav--next" onClick={() => move(1)} aria-label={labels.next}><ChevronRight /></button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
