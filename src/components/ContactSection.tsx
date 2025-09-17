import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

export function ContactSection() {
  const [showForm, setShowForm] = useState(false);

  const handleEmailClick = () => {
    window.location.href = "mailto:info@sinavkoc.ai?subject=SınavKoç AI Hakkında Bilgi";
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/905336151240?text=Merhaba, SınavKoç AI hakkında bilgi almak istiyorum.", "_blank");
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+905336151240";
  };

  return (
    <section id="contact" className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-6 mb-12">
          <h2 className="text-3xl lg:text-4xl">
            Daha Fazla Bilgi İçin İletişime Geçin
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            SınavKoç AI hakkında detaylı bilgi almak, beta testlerine katılmak 
            veya iş birliği fırsatları için bize ulaşın.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card 
            className="bg-primary-foreground/10 border-primary-foreground/20 cursor-pointer hover:bg-primary-foreground/20 transition-colors"
            onClick={handleEmailClick}
          >
            <CardContent className="p-6 text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-primary-foreground" />
              <h3 className="mb-2 text-primary-foreground">E-posta</h3>
              <p className="text-sm opacity-80 text-primary-foreground">info@sinavkoc.ai</p>
            </CardContent>
          </Card>
          
          <Card 
            className="bg-primary-foreground/10 border-primary-foreground/20 cursor-pointer hover:bg-primary-foreground/20 transition-colors"
            onClick={handleWhatsAppClick}
          >
            <CardContent className="p-6 text-center">
              <MessageCircle className="w-8 h-8 mx-auto mb-4 text-primary-foreground" />
              <h3 className="mb-2 text-primary-foreground">WhatsApp</h3>
              <p className="text-sm opacity-80 text-primary-foreground">+90 533 615 12 40</p>
            </CardContent>
          </Card>
          
          <Card 
            className="bg-primary-foreground/10 border-primary-foreground/20 cursor-pointer hover:bg-primary-foreground/20 transition-colors"
            onClick={handlePhoneClick}
          >
            <CardContent className="p-6 text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-primary-foreground" />
              <h3 className="mb-2 text-primary-foreground">Telefon</h3>
              <p className="text-sm opacity-80 text-primary-foreground">+90 533 615 12 40</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Dialog open={showForm} onOpenChange={setShowForm}>
            <DialogTrigger asChild>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-10 px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Mesaj Gönder
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <ContactForm />
            </DialogContent>
          </Dialog>
          <p className="text-sm opacity-80">
            24 saat içinde size geri dönüş yapacağız
          </p>
        </div>
      </div>
    </section>
  );
}