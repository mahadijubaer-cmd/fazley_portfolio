import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverse = false,
  id,
}: SectionHeadingProps) {
  return (
    <div className={cn("section-heading", align === "center" && "section-heading--center", inverse && "section-heading--inverse")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </div>
  );
}
