import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getDictionary, type Locale } from "@/content/i18n";

const themeScript = `(function(){try{var k="fazley-theme",s=localStorage.getItem(k);if(s!=="light"&&s!=="dark"&&s!=="system")s="system";var d=s==="dark"||(s==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches),r=document.documentElement;r.dataset.themeSetting=s;r.dataset.theme=d?"dark":"light";r.style.colorScheme=d?"dark":"light"}catch(e){}})()`;

export function RootDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const dict = getDictionary(locale);
  return (
    <html lang={locale} data-theme="light" data-theme-setting="system" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>
        <a className="skip-link" href="#main-content">{dict.controls.skipToContent}</a>
        <Header locale={locale} dict={dict} />
        <main id="main-content">{children}</main>
        <Footer dict={dict} locale={locale} />
      </body>
    </html>
  );
}
