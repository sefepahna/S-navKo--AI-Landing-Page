export function Footer() {
  return (
    <footer className="py-12 px-4 border-t bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                <span className="text-primary-foreground">AI</span>
              </div>
              <span className="text-lg">SınavKoç AI</span>
            </div>
            <p className="text-sm text-muted-foreground text-[14px] max-w-md">
              Yapay zeka destekli eğitim teknolojisinin geleceği. Öğrencilerin başarısını artıran kişiselleştirilmiş öğrenme deneyimi.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://x.com/sinavkocai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/sinavkoc-ai/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/sinavkocai/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.932.013 6.708.056 5.487.098 4.67.252 3.978.472a5.938 5.938 0 0 0-2.15 1.4A5.938 5.938 0 0 0 .428 3.95c-.22.693-.374 1.51-.416 2.73C-.029 7.904-.013 8.369-.013 11.987c0 3.618-.014 4.083.042 5.307.042 1.22.196 2.037.416 2.73a5.938 5.938 0 0 0 1.4 2.15 5.935 5.935 0 0 0 2.15 1.4c.693.22 1.51.374 2.73.416 1.224.056 1.689.069 5.307.069 3.618 0 4.083-.013 5.307-.069 1.22-.042 2.037-.196 2.73-.416a5.938 5.938 0 0 0 2.15-1.4 5.938 5.938 0 0 0 1.4-2.15c.22-.693.374-1.51.416-2.73.056-1.224.069-1.689.069-5.307 0-3.618-.013-4.083-.069-5.307-.042-1.22-.196-2.037-.416-2.73a5.938 5.938 0 0 0-1.4-2.15A5.938 5.938 0 0 0 20.978.472c-.693-.22-1.51-.374-2.73-.416C17.024.013 16.559 0 12.017 0zM12.017 2.152c3.555 0 3.977.014 5.38.061 1.297.059 2.001.275 2.47.458.622.242 1.065.531 1.532.998.467.467.756.91.998 1.532.183.469.399 1.173.458 2.47.047 1.403.061 1.825.061 5.38 0 3.555-.014 3.977-.061 5.38-.059 1.297-.275 2.001-.458 2.47-.242.622-.531 1.065-.998 1.532-.467.467-.91.756-1.532.998-.469.183-1.173.399-2.47.458-1.403.047-1.825.061-5.38.061-3.555 0-3.977-.014-5.38-.061-1.297-.059-2.001-.275-2.47-.458-.622-.242-1.065-.531-1.532-.998-.467-.467-.756-.91-.998-1.532-.183-.469-.399-1.173-.458-2.47-.047-1.403-.061-1.825-.061-5.38 0-3.555.014-3.977.061-5.38.059-1.297.275-2.001.458-2.47.242-.622.531-1.065.998-1.532.467-.467.91-.756 1.532-.998.469-.183 1.173-.399 2.47-.458 1.403-.047 1.825-.061 5.38-.061zm0 3.656a6.198 6.198 0 1 0 0 12.396 6.198 6.198 0 1 0 0-12.396zm0 10.244a4.046 4.046 0 1 1 0-8.092 4.046 4.046 0 0 1 0 8.092zm7.932-10.5a1.448 1.448 0 1 1-2.896 0 1.448 1.448 0 0 1 2.896 0z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4>Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors">Özellikler</a></li>
              <li><a href="#features" className="hover:text-foreground transition-colors">Yakında Geliyor</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Beta Kaydı</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4>Destek</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#contact" className="hover:text-foreground transition-colors">İletişim</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">SSS</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Gizlilik</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 SınavKoç AI. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Kullanım Şartları</a>
            <a href="#" className="hover:text-foreground transition-colors">Gizlilik Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  );
}