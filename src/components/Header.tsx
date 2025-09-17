import { Button } from "./ui/button";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
            <span className="text-primary-foreground text-sm font-bold">AI</span>
          </div>
          <span className="text-xl font-medium">SınavKoç AI</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('#about')}
            className="transition-colors hover:text-primary cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            aria-label="Hakkımızda bölümüne git"
          >
            Hakkımızda
          </button>
          <button 
            onClick={() => scrollToSection('#features')}
            className="transition-colors hover:text-primary cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            aria-label="Özellikler bölümüne git"
          >
            Özellikler
          </button>
          <button 
            onClick={() => scrollToSection('#contact')}
            className="transition-colors hover:text-primary cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            aria-label="İletişim bölümüne git"
          >
            İletişim
          </button>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}