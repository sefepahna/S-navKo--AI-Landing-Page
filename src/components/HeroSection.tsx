import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { ContactForm } from "./ContactForm";

export function HeroSection() {
  const [showForm, setShowForm] = useState(false);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="w-fit">
              🚀 Yapay Zeka Destekli Sınav Hazırlığı
            </Badge>
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl tracking-tight">
                <span className="text-primary">SınavKoç AI</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground">
                Geleceğin Eğitim Teknolojisi
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-md">
              Yapay zeka destekli kişiselleştirilmiş öğrenme deneyimi ve koçluk ile öğrencilerin başarısını artıran yenilikçi eğitim platformu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Dialog open={showForm} onOpenChange={setShowForm}>
                <DialogTrigger asChild>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8 w-fit">
                    Erken Erişim İçin Kayıt Ol
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-lg">
                  <ContactForm />
                </DialogContent>
              </Dialog>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-fit"
                onClick={scrollToAbout}
              >
                Daha Fazla Bilgi
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1652127691413-6cb8c0304aba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZWR1Y2F0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTczOTQ2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="AI Education Technology"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-2xl">🤖</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}