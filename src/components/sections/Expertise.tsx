import {
  ChartNoAxesCombined,
  Container,
  Drill,
  FileCheck2,
  HardHat,
  Network,
  Search,
  Warehouse,
} from "lucide-react";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";

const icons = { Search, Drill, Network, Container, Warehouse, FileCheck2, HardHat, ChartNoAxesCombined };

export function Expertise() {
  return (
    <section id="expertise" className="section expertise" aria-labelledby="expertise-heading">
      <div className="shell">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Consulting focus"
            id="expertise-heading"
            title="Expertise Across the Energy Value Chain"
            description="A multidisciplinary perspective shaped by technical operations, regulatory service, and executive responsibility."
          />
        </AnimatedReveal>
        <div className="expertise__grid">
          {profile.expertise.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <AnimatedReveal className="expertise-card" key={item.number} delay={(index % 4) * 0.04}>
                <div className="expertise-card__top"><span>{item.number}</span><Icon aria-hidden="true" /></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="expertise-card__rule" aria-hidden="true" />
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
