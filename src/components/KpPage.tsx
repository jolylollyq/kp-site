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
  Sparkles,
  ArrowRight,
  Package,
  Layers,
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
      className="rounded-xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent backdrop-blur-sm overflow-hidden hover:border-white/10 transition-colors"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-4 p-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-xs font-mono text-slate-600 shrink-0 w-8">
          0{index + 1}
        </span>
        <span className="flex-1 font-semibold text-base text-slate-200 group-hover:text-white transition-colors">
          {q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-slate-500" />
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
            <div className="px-6 pb-6 pl-[4.5rem]">
              <p className="text-sm text-slate-400 leading-relaxed">
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
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#6366f1] rounded-full blur-[120px] opacity-20" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ec4899] rounded-full blur-[140px] opacity-15" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#6366f1]/30 bg-[#6366f1]/5 px-4 py-2 text-xs sm:text-sm font-medium mb-8 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#6366f1]" />
              <span className="text-[#6366f1]">Коммерческое предложение</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
              Разработка сайта
              <br />
              <span className="bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent">
                для ветклиники
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed">
              Современный сайт на Next.js с онлайн-записью, каталогом услуг и
              SEO-оптимизацией. Привлекайте клиентов из поиска и автоматизируйте
              запись 24/7.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
              <div className="border-gradient rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Исполнитель</p>
                    <p className="font-semibold text-sm">{contactInfo.name}</p>
                    <p className="text-slate-400 text-xs mt-1">{contactInfo.role}</p>
                  </div>
                </div>
              </div>
              <div className="border-gradient rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Контакты</p>
                    <p className="font-semibold text-sm">{contactInfo.phone}</p>
                    <p className="text-slate-400 text-xs mt-1">{contactInfo.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Problem */}
      <AnimatedSection className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-red-400" />
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Проблема
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-slate-400 text-lg mb-12 max-w-2xl">
                Без сайта вы теряете клиентов каждый день
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {problems.map((problem, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="group relative rounded-xl p-6 border border-red-500/10 bg-red-500/5 hover:border-red-500/20 transition-all duration-300">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-red-400 text-sm font-bold">✕</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">{problem}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Solution */}
      <AnimatedSection className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Решение
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-slate-400 text-lg mb-12 max-w-2xl">
                Профессиональный сайт, который работает на вас 24/7
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {solutions.map((solution, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="group relative rounded-xl p-6 border-gradient hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                      <solution.icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-slate-200 font-medium leading-snug">{solution.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Demo */}
      <AnimatedSection className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Демо-версия
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="border-gradient rounded-2xl p-8 sm:p-10 backdrop-blur-sm">
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                  Пример моей работы — демонстрационный проект, показывающий мои
                  возможности и уровень работы. Ваш сайт будет разработан с нуля по
                  вашим требованиям.
                </p>
                <a
                  href={contactInfo.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl gradient-primary font-semibold text-white hover:shadow-glow transition-all duration-300 group"
                >
                  Посмотреть демо
                  <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </AnimatedSection>

      {/* Tariffs */}
      <AnimatedSection className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Тарифные планы
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-slate-400 text-lg mb-12 max-w-2xl">
                Выберите подходящий пакет для вашего бизнеса
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Basic */}
              <FadeIn>
                <div className="relative rounded-2xl border border-[#6366f1]/20 bg-gradient-to-br from-[#6366f1]/5 to-transparent p-8 backdrop-blur-sm hover:border-[#6366f1]/40 transition-all duration-300">
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366f1]/10 text-[#6366f1] text-xs font-semibold mb-4">
                      <Zap className="w-3 h-3" />
                      Базовый
                    </div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-bold">100 000</span>
                      <span className="text-2xl text-slate-400">₽</span>
                    </div>
                    <p className="text-sm text-slate-400">
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
                      <div key={i} className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#6366f1] shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Premium */}
              <FadeIn delay={0.1}>
                <div className="relative rounded-2xl border-2 border-[#ec4899]/30 bg-gradient-to-br from-[#ec4899]/10 via-[#8b5cf6]/5 to-transparent p-8 backdrop-blur-sm hover:border-[#ec4899]/50 transition-all duration-300 shadow-elegant">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full gradient-accent text-white text-xs font-bold shadow-glow">
                    Популярный выбор
                  </div>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ec4899]/10 text-[#ec4899] text-xs font-semibold mb-4">
                      <Sparkles className="w-3 h-3" />
                      Премиум
                    </div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-bold bg-gradient-to-r from-[#ec4899] to-[#f59e0b] bg-clip-text text-transparent">200 000</span>
                      <span className="text-2xl text-slate-400">₽</span>
                    </div>
                    <p className="text-sm text-slate-400">
                      Срок: 20–25 рабочих дней
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-[#ec4899] mb-4 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
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
                      <div key={i} className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#ec4899] shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Tech Stack */}
      <AnimatedSection className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Технологии
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-slate-400 text-lg mb-12 max-w-2xl">
                Современный стек для быстрой и надёжной работы
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techStack.map((tech, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="group relative rounded-xl p-6 border-gradient hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366f1]/20 to-[#8b5cf6]/20 flex items-center justify-center shrink-0">
                        <Code2 className="h-6 w-6 text-[#6366f1]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{tech.name}</h3>
                        <p className="text-sm text-slate-400">{tech.desc}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Stages */}
      <AnimatedSection className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Этапы работы
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-slate-400 text-lg mb-12 max-w-2xl">
                Прозрачный процесс от идеи до запуска
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stages.map((stage, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="relative rounded-xl p-6 border border-[#6366f1]/10 bg-gradient-to-br from-[#6366f1]/5 to-transparent backdrop-blur-sm hover:border-[#6366f1]/30 transition-all duration-300">
                    <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white font-bold shadow-glow">
                      {i + 1}
                    </div>
                    <h3 className="font-bold text-lg mb-1 mt-2">{stage.title}</h3>
                    <p className="text-xs text-[#6366f1] mb-4">{stage.duration}</p>
                    <ul className="space-y-2">
                      {stage.items.map((item, j) => (
                        <li key={j} className="text-xs text-slate-400 flex gap-2">
                          <span className="text-[#6366f1]">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Payment */}
      <AnimatedSection className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Условия оплаты
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-slate-400 text-lg mb-12 max-w-2xl">
                Гибкая схема оплаты по этапам
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FadeIn>
                <div className="rounded-xl p-8 border-gradient backdrop-blur-sm">
                  <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                    <span className="text-[#6366f1]">Базовый</span>
                    <span className="text-slate-500">100 000 ₽</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 rounded-lg bg-[#6366f1]/5 border border-[#6366f1]/10">
                      <span className="text-slate-400">Предоплата</span>
                      <span className="font-bold text-lg">50 000 ₽ <span className="text-sm text-slate-500">(50%)</span></span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-[#6366f1]/5 border border-[#6366f1]/10">
                      <span className="text-slate-400">После завершения</span>
                      <span className="font-bold text-lg">50 000 ₽ <span className="text-sm text-slate-500">(50%)</span></span>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="rounded-xl p-8 border-2 border-[#ec4899]/20 bg-gradient-to-br from-[#ec4899]/5 to-transparent backdrop-blur-sm">
                  <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                    <span className="text-[#ec4899]">Премиум</span>
                    <span className="text-slate-500">200 000 ₽</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 rounded-lg bg-[#ec4899]/5 border border-[#ec4899]/10">
                      <span className="text-slate-400">Предоплата</span>
                      <span className="font-bold text-lg">80 000 ₽ <span className="text-sm text-slate-500">(40%)</span></span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-[#ec4899]/5 border border-[#ec4899]/10">
                      <span className="text-slate-400">После разработки</span>
                      <span className="font-bold text-lg">60 000 ₽ <span className="text-sm text-slate-500">(30%)</span></span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-[#ec4899]/5 border border-[#ec4899]/10">
                      <span className="text-slate-400">После завершения</span>
                      <span className="font-bold text-lg">60 000 ₽ <span className="text-sm text-slate-500">(30%)</span></span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Guarantees */}
      <AnimatedSection className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Гарантии
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-slate-400 text-lg mb-12 max-w-2xl">
                Ваша уверенность — наш приоритет
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Shield, text: "Официальный договор", color: "6366f1" },
                { icon: CheckCircle2, text: "Закрывающие документы", color: "8b5cf6" },
                { icon: Code2, text: "Передача исходных кодов", color: "ec4899" },
                { icon: Clock, text: "Соблюдение сроков", color: "f59e0b" },
                { icon: Award, text: "Гарантия на работу", color: "6366f1" },
                { icon: Target, text: "Техническая поддержка", color: "8b5cf6" },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.06}>
                  <div className="group relative rounded-xl p-6 border-gradient hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-[#${item.color}]/10 flex items-center justify-center shrink-0 group-hover:bg-[#${item.color}]/20 transition-colors`}>
                        <item.icon className={`h-6 w-6 text-[#${item.color}]`} />
                      </div>
                      <span className="font-medium text-slate-200">{item.text}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Частые вопросы
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-slate-400 text-lg mb-12">
                Ответы на популярные вопросы
              </p>
            </FadeIn>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl border-2 border-[#6366f1]/30 bg-gradient-to-br from-[#6366f1]/10 via-[#8b5cf6]/5 to-[#ec4899]/10 p-10 sm:p-16 text-center backdrop-blur-sm overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/20 to-[#ec4899]/20 blur-3xl opacity-30" />
              
              <div className="relative z-10">
                <FadeIn>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6366f1]/10 text-[#6366f1] text-sm font-semibold mb-6">
                    <Rocket className="w-4 h-4" />
                    Готовы начать?
                  </div>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                    Обсудим ваш проект
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                    Свяжитесь со мной удобным способом — обсудим детали и начнём работу
                  </p>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl gradient-primary font-semibold text-white hover:shadow-glow transition-all duration-300 group"
                    >
                      <Phone className="h-5 w-5" />
                      {contactInfo.phone}
                    </a>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-gradient font-semibold hover:bg-white/5 transition-all duration-300 group"
                    >
                      <Mail className="h-5 w-5" />
                      {contactInfo.email}
                    </a>
                  </div>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <div className="pt-8 border-t border-white/10">
                    <p className="font-semibold text-lg mb-2">{contactInfo.name}</p>
                    <p className="text-slate-400 text-sm mb-3">{contactInfo.role}</p>
                    <div className="flex items-center justify-center gap-4 text-xs text-slate-500">
                      <span>ИНН: {contactInfo.inn}</span>
                      <span>•</span>
                      <span>{contactInfo.city}</span>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-slate-500">
            &copy; 2026 {contactInfo.name}. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
