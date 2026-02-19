import { Pill } from "./Pill";

const packages = [
  {
    name: "Старт",
    subtitle: "Минимальный",
    price: "от 7 000 ₽",
    audience: "Для разовых задач: интервью, обзор товара, прямой эфир.",
    features: [
      "Съёмка на вашей локации (до 2 часов)",
      "Базовый монтаж (склейка, синхронизация)",
      "Простая цветокоррекция",
      "Готовый ролик до 60 сек",
    ],
  },
  {
    name: "История",
    subtitle: "Оптимальный",
    price: "от 15 000 ₽",
    audience:
      "Для имиджевых роликов, презентаций, мотивирующих видео, блогов.",
    features: [
      "Разработка сценария / сценарного плана",
      "Съёмка на локации или в студии (до 4 часов)",
      "Профессиональный монтаж с музыкой",
      "Полноценная цветокоррекция (Color Grading)",
      "Готовый ролик до 2–3 минут",
    ],
    highlighted: true,
  },
  {
    name: "Кино",
    subtitle: "VIP",
    price: "от 35 000 ₽",
    audience:
      "Для масштабных проектов: реклама, событие, фильм о компании.",
    features: [
      "Полный цикл: от идеи до финала",
      "Креативная концепция, раскадровка",
      "Съёмка с выездом, работа с режиссурой",
      "Сложный монтаж, звуковой дизайн",
      "Цветокоррекция премиум",
      "Готовый ролик любой длительности",
    ],
  },
];

const extras = [
  { label: "Написание сценария / сценарного плана", price: "от 2 000 ₽" },
  { label: "Подбор лицензионной музыки", price: "от 1 000 ₽" },
  { label: "Съёмка с дрона (аэросъёмка)", price: "от 3 000 ₽/час" },
  { label: "Работа с актёрами / моделями", price: "по договорённости" },
  { label: "Аренда студии / спецоборудования", price: "по чеку + 15%" },
];

export const Services = () => {
  return (
    <section id="services" className="relative z-10 bg-background py-24 md:py-32">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <Pill className="mb-6">УСЛУГИ И ЦЕНЫ</Pill>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sentient mb-6">
            Как я <i className="font-light">работаю</i>
          </h2>
          <p className="font-mono text-sm sm:text-base text-foreground/60 max-w-[560px] mx-auto">
            Каждый проект уникален, но для вашего удобства я собрал базовые пакеты.
            Вы можете добавить опции или собрать индивидуальное решение под задачу.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`border rounded-sm p-8 flex flex-col transition-colors duration-300 ${
                pkg.highlighted
                  ? "border-primary/50 bg-primary/5"
                  : "border-border hover:border-foreground/20"
              }`}
            >
              <div className="mb-6">
                <span className="font-mono text-xs uppercase text-foreground/40 tracking-wider">
                  {pkg.subtitle}
                </span>
                <h3 className="text-2xl font-sentient mt-1">«{pkg.name}»</h3>
              </div>

              <p className="font-mono text-sm text-foreground/50 mb-6">
                {pkg.audience}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="font-mono text-sm text-foreground/70 flex items-start gap-2"
                  >
                    <span className="text-primary mt-0.5 shrink-0">—</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-border">
                <span className="text-2xl font-sentient text-foreground">
                  {pkg.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-border rounded-sm p-8">
          <h3 className="text-xl font-sentient mb-6">
            Опции <span className="text-foreground/40 font-mono text-sm font-normal">добавляются к любому пакету</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {extras.map((extra) => (
              <div
                key={extra.label}
                className="flex justify-between items-start gap-4 py-3 border-b border-border/50 last:border-0"
              >
                <span className="font-mono text-sm text-foreground/70">
                  {extra.label}
                </span>
                <span className="font-mono text-sm text-primary whitespace-nowrap">
                  {extra.price}
                </span>
              </div>
            ))}
          </div>
          <p className="font-mono text-xs text-foreground/40 mt-6">
            Все цены указаны как ориентир. Точная стоимость рассчитывается после обсуждения задачи. Предоплата — 50%.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
