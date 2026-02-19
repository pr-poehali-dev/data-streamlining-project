export const Footer = () => {
  return (
    <footer className="relative z-10 bg-background border-t border-border py-8">
      <div className="container max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-foreground/40">
          © {new Date().getFullYear()} Видеопродакшн
        </span>
        <div className="flex items-center gap-6">
          <a
            href="#services"
            className="font-mono text-xs text-foreground/40 hover:text-foreground/70 transition-colors"
          >
            Услуги
          </a>
          <a
            href="#portfolio"
            className="font-mono text-xs text-foreground/40 hover:text-foreground/70 transition-colors"
          >
            Портфолио
          </a>
          <a
            href="#contact"
            className="font-mono text-xs text-foreground/40 hover:text-foreground/70 transition-colors"
          >
            Контакты
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
