import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { NewsletterSignup } from "./NewsletterSignup";

export function ComingSoonSection() {
  const features = [
    {
      icon: "🤝",
      title: "Koç + AI Hibrit Mentörlük",
      description: "İnsan koçlarımız ve yapay zeka birlikte çalışarak size en iyi rehberliği sağlar"
    },
    {
      icon: "📅",
      title: "Akıllı Çalışma Planı",
      description: "Hedefinize uygun kişiselleştirilmiş çalışma programı oluşturulur"
    },
    {
      icon: "📱",
      title: "Mobil Uygulama",
      description: "Her zaman yanınızda olan mobil öğrenme deneyimi"
    },
    {
      icon: "💰",
      title: "Uygun Fiyatlı Erişim",
      description: "Herkesin erişebileceği makul fiyatlarla kaliteli eğitim"
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="mb-2">
            🔥 Yakında Geliyor
          </Badge>
          
          <h2 className="text-3xl lg:text-4xl">
            Gelişmiş Özellikler Yolda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SınavKoç AI'nin tüm gücünü keşfetmeye hazır olun. Öğrenme deneyiminizi 
            dönüştürecek yenilikçi özellikler çok yakında kullanımınızda olacak.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-medium">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/10">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">⏰</div>
              <h3 className="text-2xl mb-2">Hedef Tarih</h3>
              <p className="text-muted-foreground mb-4">
                2026 Yılının İkinci Çeyreğinde
              </p>
              <div className="text-sm text-muted-foreground">
                Beta testleri daha erken başlayacak
              </div>
            </CardContent>
          </Card>
          
          <div>
            <NewsletterSignup />
          </div>
        </div>
      </div>
    </section>
  );
}