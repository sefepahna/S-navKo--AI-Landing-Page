import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { toast } from "sonner@2.0.3";
import { Loader2, Send } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Lütfen tüm zorunlu alanları doldurun");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Lütfen geçerli bir e-posta adresi girin");
      setIsSubmitting(false);
      return;
    }

    try {
      // Create email content
      const emailSubject = `SınavKoç AI İletişim - ${formData.name}`;
      const emailBody = `
Merhaba,

SınavKoç AI web sitesinden yeni bir mesaj geldi:

Ad Soyad: ${formData.name}
E-posta: ${formData.email}
Telefon: ${formData.phone || 'Belirtilmemiş'}

Mesaj:
${formData.message}

---
Bu mesaj SınavKoç AI web sitesinden otomatik olarak gönderilmiştir.
      `.trim();

      // Create mailto link
      const mailtoLink = `mailto:info@sinavkocai.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Simulate processing time for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("E-posta istemciniz açıldı! Mesajınızı göndermek için 'Gönder' butonuna tıklayın.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      toast.error("E-posta istemciniz açılamadı. Lütfen doğrudan info@sinavkocai.com adresine e-posta gönderin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <DialogHeader>
        <DialogTitle>Bizimle İletişime Geçin</DialogTitle>
        <DialogDescription>
          SınavKoç AI hakkında sorularınızı iletebilir, erken erişim için kayıt olabilirsiniz.
        </DialogDescription>
      </DialogHeader>
      <div className="mt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Ad Soyad *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Adınız ve soyadınız"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">E-posta *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="ornek@email.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Telefon</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+90 XXX XXX XX XX"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Mesaj *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="SınavKoç AI hakkında sormak istediğiniz sorular veya önerileriniz..."
              rows={4}
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Gönderiliyor...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Mesaj Gönder
              </>
            )}
          </Button>
          
          <p className="text-sm text-muted-foreground text-center">
            * işaretli alanlar zorunludur
          </p>
        </form>
      </div>
    </div>
  );
}