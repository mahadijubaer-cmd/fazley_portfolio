import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope/wght.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource-variable/noto-sans-bengali/wght.css";
import "../../globals.css";
import { RootDocument } from "@/app/RootDocument";
import { createMetadata, viewport as sharedViewport } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("bn");
export const viewport: Viewport = sharedViewport;
export default function BanglaLayout({ children }: { children: React.ReactNode }) { return <RootDocument locale="bn">{children}</RootDocument>; }
