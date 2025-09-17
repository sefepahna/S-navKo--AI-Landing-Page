import { Card, CardContent } from "./ui/card";

export function AboutSection() {
  const features = [
    {
      icon: "🎯",
      title: "Kişiselleştirilmiş Öğrenme",
      description: "Her öğrencinin öğrenme tarzına ve eksiklerine uygun AI destekli içerik önerileri"
    },
    {
      icon: "📊",
      title: "Akıllı Analiz",
      description: "Detaylı deneme analizleri ve performans gelişim raporları"
    },
    {
      icon: "🏆",
      title: "Sınav Hazırlığı",
      description: "Üniversite hazırlığınızı hibrit mentörlük ile güçlendirin"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl">
            Eğitimde Yapay Zeka Devrimi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SınavKoç AI, öğrencilerin bireysel ihtiyaçlarını anlayan ve ona göre 
            özelleştirilmiş eğitim deneyimi sunan gelişmiş yapay zeka teknolojisi kullanır.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-4xl mb-4 transform hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl">{feature.title}</h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}