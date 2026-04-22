"use client";

import { AnimatedSection, FadeIn } from "./AnimatedSection";
import {
  CheckCircle2,
  Code2,
  Rocket,
  Shield,
  Clock,
  TrendingUp,
  Phone,
  Mail,
  ExternalLink,
  ChevronDown,
  Zap,
  Users,
  Award,
  Target,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const contactInfo = {
  name: "Турченко Сергей Викторович",
  role: "Самозанятый веб-разработчик",
  inn: "302200893635",
  phone: "+7 (904) 415-00-78",
  email: "jolyweb.dev@mail.ru",
  city: "Волгоград, Россия",
  demoUrl: "https://jolylollyq.github.io/vet-clinic-site/",
};

const problems = [
  "Потенциальные клиенты не могут найти полную информацию о ваших услугах и ценах",
  "Администраторы тратят время на однотипные звонки с вопросами",
  "Клиенты уходят к конкурентам с удобными сайтами и онлайн-записью",
  "Нет возможности записаться на приём в нерабочее время",
];

const solutions = [
  { icon: TrendingUp, text: "Привлечение новых клиентов из Яндекса" },
  { icon: Clock, text: "Автоматизация записи на приём 24/7" },
  { icon: Users, text: "Сокращение нагрузки на администраторов" },
  { icon: Award, text: "Повышение доверия через профессиональный имидж" },
];

const techStack = [
  {
    name: "Next.js 16 + React 19",
    desc: "Быстрая загрузка страниц и отличная SEO-оптимизация",
  },
  {
    name: "TypeScript",
    desc: "Надёжный и безопасный код без ошибок",
  },
  {
    name: "Tailwind CSS",
    desc: "Чистый адаптивный дизайн",
  },
  {
    name: "Российский хостинг",
    desc: "Стабильная работа и соответствие законодательству",
  },
];

const stages = [
  {
    title: "Согласование",
    duration: "1-2 дня",
    items: [
      "Обсуждение требований и пожеланий",
      "Сбор материалов: логотип, фото, тексты",
      "Согласование структуры и стиля",
      "Подписание договора",
    ],
  },
  {
    title: "Разработка",
    duration: "7-10 дней",
    items: [
      "Создание дизайна под ваш бренд",
      "Разработка всех страниц",
      "Наполнение контентом",
      "Настройка форм и интеграций",
    ],
  },
  {
    title: "Тестирование",
    duration: "1-2 дня",
    items: [
      "Проверка на всех устройствах",
      "Тестирование форм и записи",
      "Исправление замечаний",
    ],
  },
  {
    title: "Запуск",
    duration: "1 день",
    items: [
      "Размещение на хостинге",
      "Настройка домена и SSL",
      "Подключение аналитики",
      "Передача проекта",
    ],
  },
];

const faqs = [
  {
    q: "Можно ли изменить дизайн демо-версии?",
    a: "Демо-версия — это просто пример моей работы. Ваш сайт будет разработан с нуля по вашим требованиям, с уникальным дизайном под ваш бренд.",
  },
  {
    q: "Что если у нас нет профессиональных фотографий?",
    a: "Помогу подобрать качественные стоковые изображения или порекомендую фотографа.",
  },
  {
    q: "Можно ли добавить функционал после запуска?",
    a: "Да, сайт можно расширять и дорабатывать в любое время.",
  },
  {
    q: "Кто будет обновлять контент на сайте?",
    a: "В базовом пакете — вы присылаете изменения мне. В премиум пакете — вы сами через админ-панель.",
  },
  {
    q: "Что если сайт сломается?",
    a: "В течение гарантийного периода исправляю любые ошибки бесплатно. После — по абонементу или разово.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="rounded-xl glass overflow-hidden"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-4 p-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-xs font-mono text-muted-foreground/50 shrink-0 w-7">
          0{index + 1}
        </span>
        <span className="flex-1 font-semibold text-sm sm:text-base">
          {q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-5 pb-5 pl-16">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function KpPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs sm:text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Коммерческое предложение
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Разработка сайта
              <br />
              <span className="bg-gradient-to-r from-[#4faa78] to-[#5a9db8] bg-clip-text text-transparent">
                для ветеринарной клиники
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Современный сайт на Next.js с онлайн-записью, каталогом услуг и
              SEO-оптимизацией. Привлекайте клиентов из поиска и автоматизируйте
              запись 24/7.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-6 max-w-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground mb-1">Исполнитель</p>
                  <p className="font-semibold">{contactInfo.name}</p>
                  <p className="text-muted-foreground text-xs">{contactInfo.role}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Контакты</p>
                  <p className="font-semibold">{contactInfo.phone}</p>
                  <p className="text-muted-foreground text-xs">{contactInfo.email}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Problem */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
            Проблема
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {problems.map((problem, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="glass rounded-xl p-6 hover:bg-white/[0.08] transition-colors">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs">✕</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {problem}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Solution */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
            Решение
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl">
            {solutions.map((solution, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="glass rounded-xl p-6 hover:bg-white/[0.08] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <solution.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm leading-relaxed">{solution.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Demo */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Демо-версия
          </h2>
          <div className="glass rounded-2xl p-8 max-w-3xl">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Пример моей работы — демонстрационный проект, показывающий мои
              возможности и уровень работы. Ваш сайт будет разработан с нуля по
              вашим требованиям.
            </p>
            <a
              href={contactInfo.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-primary shadow-glow-primary font-semibold hover:opacity-90 transition-opacity"
            >
              Посмотреть демо
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* Tariffs */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
            Тарифные планы
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl">
            {/* Basic */}
            <FadeIn>
              <div className="glass rounded-2xl p-8 border-2 border-primary/20">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Базовый пакет</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">100 000 ₽</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Срок: 10–14 рабочих дней
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    "Главная, О клинике, Услуги, Врачи, Контакты",
                    "Онлайн-запись на приём",
                    "Адаптивный дизайн",
                    "Интеграция с Яндекс.Картами",
                    "Размещение на хостинге",
                    "SSL-сертификат",
                    "Базовая SEO-оптимизация",
                    "Яндекс.Метрика + Google Analytics",
                    "1 месяц технической поддержки",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Premium */}
            <FadeIn delay={0.1}>
              <div className="glass rounded-2xl p-8 border-2 border-[#5a9db8]/40 relative overflow-hidden">
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#5a9db8]/20 text-[#5a9db8] text-xs font-semibold">
                  Популярный
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Премиум пакет</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-[#5a9db8]">200 000 ₽</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Срок: 20–25 рабочих дней
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-[#5a9db8] mb-3">
                    Всё из базового пакета +
                  </p>
                  {[
                    "Административная панель",
                    "Управление услугами и врачами",
                    "Модерация отзывов",
                    "Система авторизации",
                    "Личный кабинет клиента",
                    "Автоматические уведомления",
                    "Раздел Блог/Новости",
                    "Автоматическое резервное копирование",
                    "Расширенная SEO-оптимизация",
                    "Персональное обучение (1-2 часа)",
                    "3 месяца технической поддержки",
                    "До 10 часов доработок",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#5a9db8] shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </AnimatedSection>

      {/* Tech Stack */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
            Технологии
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
            {techStack.map((tech, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="glass rounded-xl p-6 hover:bg-white/[0.08] transition-colors">
                  <div className="flex items-start gap-3">
                    <Code2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">{tech.name}</h3>
                      <p className="text-sm text-muted-foreground">{tech.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Stages */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
            Этапы работы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl">
            {stages.map((stage, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="glass rounded-xl p-6">
                  <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center mb-4 text-sm font-bold">
                    {i + 1}
                  </div>
                  <h3 className="font-bold mb-1">{stage.title}</h3>
                  <p className="text-xs text-primary mb-4">{stage.duration}</p>
                  <ul className="space-y-2">
                    {stage.items.map((item, j) => (
                      <li key={j} className="text-xs text-muted-foreground flex gap-2">
                        <span className="text-primary">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Payment */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
            Условия оплаты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <FadeIn>
              <div className="glass rounded-xl p-6">
                <h3 className="font-bold mb-4">Базовый пакет (100 000 ₽)</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Предоплата</span>
                    <span className="font-semibold">50 000 ₽ (50%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">После завершения</span>
                    <span className="font-semibold">50 000 ₽ (50%)</span>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="glass rounded-xl p-6">
                <h3 className="font-bold mb-4">Премиум пакет (200 000 ₽)</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Предоплата</span>
                    <span className="font-semibold">80 000 ₽ (40%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">После разработки</span>
                    <span className="font-semibold">60 000 ₽ (30%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">После завершения</span>
                    <span className="font-semibold">60 000 ₽ (30%)</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </AnimatedSection>

      {/* Guarantees */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
            Гарантии
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
            {[
              { icon: Shield, text: "Официальный договор" },
              { icon: CheckCircle2, text: "Закрывающие документы" },
              { icon: Code2, text: "Передача исходных кодов" },
              { icon: Clock, text: "Соблюдение сроков" },
              { icon: Award, text: "Гарантия на работу" },
              { icon: Target, text: "Техническая поддержка" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="glass rounded-xl p-6 flex items-center gap-3 hover:bg-white/[0.08] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
            Частые вопросы
          </h2>
          <div className="max-w-3xl space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="glass rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Готов ответить на вопросы
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Свяжитесь со мной удобным способом для обсуждения вашего проекта
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg gradient-primary shadow-glow-primary font-semibold hover:opacity-90 transition-opacity"
                >
                  <Phone className="h-4 w-4" />
                  {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg glass hover:bg-white/10 font-semibold transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {contactInfo.email}
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold mb-1">{contactInfo.name}</p>
                <p>{contactInfo.role}</p>
                <p className="mt-2">ИНН: {contactInfo.inn}</p>
                <p>{contactInfo.city}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 {contactInfo.name}. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
