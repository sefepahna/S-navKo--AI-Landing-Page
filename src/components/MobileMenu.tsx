import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "./ui/sheet";
import { VisuallyHidden } from "./ui/visually-hidden";
import { Menu } from "lucide-react";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { href: "#about", label: "Hakkımızda" },
    { href: "#features", label: "Özellikler" },
    { href: "#contact", label: "İletişim" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground h-8 px-3 text-xs md:hidden">
          <Menu className="h-4 w-4" />
          <span className="sr-only">Menüyü aç</span>
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <VisuallyHidden>
            <SheetTitle>SınavKoç AI Navigasyon Menüsü</SheetTitle>
            <SheetDescription>
              Ana sayfadaki bölümler arasında gezinmek için kullanın
            </SheetDescription>
          </VisuallyHidden>
        </SheetHeader>
        <div className="flex flex-col space-y-6 mt-6">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
              <span className="text-primary-foreground text-sm font-bold">AI</span>
            </div>
            <span className="text-xl font-medium">SınavKoç AI</span>
          </div>
          
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-left px-3 py-2 rounded-md hover:bg-accent transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t">
            <Button 
              className="w-full"
              onClick={() => scrollToSection('#contact')}
            >
              İletişime Geç
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}