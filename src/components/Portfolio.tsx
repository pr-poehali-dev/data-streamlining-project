import { Pill } from "./Pill";

const highlights = [
  "Привлекал новых учеников в спортивные клубы",
  "Увеличивал продажи товаров и услуг",
  "Создавал узнаваемый имидж бренда",
  "Вдохновлял команды и зрителей",
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="relative z-10 bg-background py-24 md:py-32">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <Pill className="mb-6">ПОРТФОЛИО</Pill>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sentient mb-6">
            Истории, которые <br />
            уже <i className="font-light">работают</i>
          </h2>
          <p className="font-mono text-sm sm:text-base text-foreground/60 max-w-[560px] mx-auto mb-8">
            Здесь я выступал не просто оператором, а соавтором идеи, режиссёром
            и монтажёром. Каждый ролик решал конкретную задачу заказчика:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {highlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 font-mono text-sm text-foreground/50 border border-border rounded-sm px-4 py-2"
              >
                <span className="text-primary">—</span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-video bg-secondary/50 border border-border rounded-sm flex items-center justify-center group hover:border-foreground/20 transition-colors duration-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 border border-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:border-primary/50 transition-colors duration-300">
                  <svg
                    className="w-6 h-6 text-foreground/40 group-hover:text-primary transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="font-mono text-xs text-foreground/30 uppercase">
                  Проект {i}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="font-mono text-sm text-foreground/40 max-w-[480px] mx-auto">
            Я не делю сферы на «спорт» и «бизнес». Для меня важно одно — есть
            ли в проекте движение, цель и эмоция. Если есть — я сниму об этом
            кино.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
