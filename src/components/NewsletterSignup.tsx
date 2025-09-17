import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { toast } from "sonner@2.0.3";
import { Loader2, Mail, CheckCircle } from "lucide-react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Lütfen e-posta adresinizi girin");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Lütfen geçerli bir e-posta adresi girin");
      return;
    }

    setIsSubmitting(true);

    try {
      // Create email content for early access signup
      const emailSubject = "SınavKoç AI - Erken Erişim Listesi Kaydı";
      const emailBody = `
Merhaba,

SınavKoç AI erken erişim listesine yeni bir kayıt geldi:

E-posta Adresi: ${email}
Kayıt Tarihi: ${new Date().toLocaleDateString('tr-TR')}

Bu kullanıcı SınavKoç AI'nin lansmanı hakkında bilgilendirilmek istiyor.

---
Bu mesaj SınavKoç AI web sitesinden otomatik olarak gönderilmiştir.
      `.trim();

      // Create mailto link
      const mailtoLink = `mailto:info@sinavkocai.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Simulate processing time for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubscribed(true);
      toast.success("E-posta istemciniz açıldı! Erken erişim kaydınızı tamamlamak için e-postayı gönderin.");
      setEmail("");
    } catch (error) {
      toast.error("E-posta istemciniz açılamadı. Lütfen doğrudan info@sinavkocai.com adresine e-posta gönderin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubscribed) {
    return (
      <Card className="w-full max-w-md mx-auto border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800">
        <CardContent className="p-6 text-center">
          <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-green-800 dark:text-green-200 mb-2">
            Teşekkürler!
          </h3>
          <p className="text-sm text-green-600 dark:text-green-300">
            E-posta listemize başarıyla katıldınız. SınavKoç AI'den haberler alacaksınız.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <Mail className="w-8 h-8 text-primary mx-auto mb-2" />
          <h3 className="text-lg font-medium mb-1">Erken Erişim Listesi</h3>
          <p className="text-sm text-muted-foreground">
            Lansmanla ilgili ilk bilgileri almak için kayıt olun
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="E-posta adresiniz"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
          />
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Kaydediliyor...
              </>
            ) : (
              "Erken Erişim Listesine Katıl"
            )}
          </Button>
          
          <p className="text-xs text-muted-foreground text-center">
            Spam göndermiyoruz. İstediğiniz zaman abonelikten çıkabilirsiniz.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}