import { Pill } from "./Pill";
import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="relative z-10 bg-background py-24 md:py-32">
      <div className="container max-w-3xl text-center">
        <Pill className="mb-6">КОНТАКТЫ</Pill>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-sentient mb-6">
          Обсудим ваш <i className="font-light">проект</i>?
        </h2>
        <p className="font-mono text-sm sm:text-base text-foreground/60 max-w-[480px] mx-auto mb-12">
          Расскажите о вашей задаче — я предложу формат, сроки и стоимость.
          Первая консультация бесплатно.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
            <Button className="min-w-[200px]">[Написать в Telegram]</Button>
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="min-w-[200px]">
              [Написать в WhatsApp]
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
