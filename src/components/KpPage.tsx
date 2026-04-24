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
  email: "jolyweb.dev@mail.ru",
  demoUrl: "https://jolylollyq.github.io/vet-clinic-site/",
};

const problems = [
  {
    title: "Клиенты ищут в 21:00, администратор уже дома",
    desc: "До 40% владельцев питомцев ищут ветклинику вечером — с телефона, в нерабочее время. Без онлайн-записи они просто уходят к тем, у кого она есть",
  },
  {
    title: "Администратор тратит 40% времени на типовые вопросы",
    desc: "«Сколько стоит осмотр?», «Есть ли место завтра?», «До скольки вы работаете?» — одни и те же вопросы каждый день, пока в клинике ждут реальные пациенты",
  },
  {
    title: "Клиент звонит в 3 клиники подряд",
    desc: "Без сайта он видит в 2ГИС только телефон и адрес. Не дозвонился — звонит в следующую. У кого быстрее ответят, тот и получит запись",
  },
  {
    title: "Упущенная выручка копится незаметно",
    desc: "Каждый пропущенный звонок — это потерянный приём. 5-10 клиентов в месяц за год складываются в 200–400 тысяч рублей, которые получает конкурент",
  },
];

const solutions = [
  { icon: TrendingUp, text: "Клиенты записываются сами — утром вы видите новые заявки", metric: "Без звонков" },
  { icon: Clock, text: "Сайт отвечает на типовые вопросы 24/7 — цены, график, услуги", metric: "Даже ночью" },
  { icon: Users, text: "Администратор работает с пациентами, а не с телефоном", metric: "Меньше рутины" },
  { icon: Award, text: "Полная информация о клинике — доверие растёт до первого визита", metric: "Профессиональный имидж" },
];

const techStack = [
  {
    name: "Загружается за 2 секунды даже на 3G",
    desc: "Серверный рендеринг отдаёт готовый HTML — клиент не видит пустой экран, как в обычных сайтах",
    why: "Каждая дополнительная секунда загрузки = 7% потерянных клиентов",
  },
  {
    name: "Надёжная защита от ошибок и сбоев",
    desc: "Статическая типизация TypeScript предотвращает критические ошибки ещё до запуска",
    why: "Меньше багов в production — стабильная работа без сюрпризов",
  },
  {
    name: "Адаптивный дизайн из коробки",
    desc: "Сайт отлично выглядит на телефоне, планшете и десктопе — без отдельных версий",
    why: "70% клиентов заходят с телефона. Оптимизация под мобильные — приоритет",
  },
  {
    name: "Российский хостинг",
    desc: "Соответствие 152-ФЗ о персональных данных, ежедневные автобэкапы, SSL-сертификат",
    why: "Требование законодательства для хранения данных клиентов на территории РФ",
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
    q: "А если мне не понравится дизайн?",
    a: "Дизайн согласовывается до начала разработки. Вы видите макет, вносите правки — и только после вашего утверждения начинается вёрстка. Правки на этапе макета включены в стоимость без ограничений. Вы платите за результат, а не за попытки угадать.",
  },
  {
    q: "Мы не разбираемся в сайтах — сможем ли управлять?",
    a: "Да. В базовом пакете вы просто присылаете мне изменения тексты, фото — я обновляю сам. В премиум пакете — интуитивная админ-панель, плюс персональное обучение (1-2 часа) и записанные видео-инструкции. Мои клиенты без технического опыта справляются за неделю.",
  },
  {
    q: "А вдруг клиентов не станет больше?",
    a: "Сайт экономит время администраторов с первого дня — даже при том же потоке клиентов. Типовые вопросы («сколько стоит», «есть ли место») закрываются автоматически. А новые клиенты приходят как бонус — из поиска и по рекомендациям.",
  },
  {
    q: "Что если сайт сломается или зависнет?",
    a: "В течение гарантийного периода (базовый: 1 мес, премиум: 3 мес) исправляю любые ошибки бесплатно. Настраиваю мониторинг доступности и автоматические бэкапы. После гарантии — поддержка по абонементу (10К₽/мес) или разово (3К₽/час).",
  },
  {
    q: "Можно ли изменить что-то после запуска?",
    a: "Да, сайт можно расширять в любое время. Передаю полный исходный код и документацию — вы не привязаны к одному разработчику. Доработки: 3000₽/час или абонемент 10К₽/мес (до 4 часов работы).",
  },
  {
    q: "У нас нет профессиональных фотографий клиники",
    a: "Помогу подобрать качественные стоковые изображения или порекомендую фотографа. На первом этапе можно запустить сайт с профессиональными стоковыми фото, а позже заменить на ваши. Это не блокирует запуск.",
  },
  {
    q: "А что с безопасностью данных наших клиентов?",
    a: "HTTPS (SSL), защита от SQL-инъекций, XSS, CSRF. Хеширование паролей, rate limiting. Соответствие 152-ФЗ — персональные данные хранятся на российских серверах. Регулярные обновления зависимостей. Это базовый стандарт, а не опция.",
  },
  {
    q: "Чем вы отличаетесь от Tilda или студии?",
    a: "Не конструктор: индивидуальный дизайн и онлайн-запись под ваш бизнес, а не шаблон. Не студия: общаетесь напрямую со мной, нет наценки за менеджера, проект сдаётся в 2-3 раза быстрее. Вы получаете полный исходный код, а не подписку на платформу.",
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
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-24">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
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
              <p className="text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed mx-auto">
                Владельцы питомцев ищут клинику вечером, после работы, с телефона.
                Если нет онлайн-записи — они уходят к конкурентам. Сайт, который
                принимает заявки 24/7 и отвечает на вопросы вместо ваших администраторов.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="border-gradient rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-slate-500 mb-1">Разработчик</p>
                      <p className="font-semibold text-sm">Full-stack Developer</p>
                      <p className="text-slate-400 text-xs mt-1">Next.js • React • TypeScript</p>
                    </div>
                  </div>
                </div>
                <div className="border-gradient rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-slate-500 mb-1">Контакт</p>
                      <a href={`mailto:${contactInfo.email}`} className="font-semibold text-sm hover:text-[#6366f1] transition-colors">
                        {contactInfo.email}
                      </a>
                      <p className="text-slate-400 text-xs mt-1">Ответ в течение 24 часов</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
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
                      <div>
                        <h3 className="text-slate-200 font-semibold mb-2">{problem.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{problem.desc}</p>
                      </div>
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
                    <p className="text-slate-200 font-medium leading-snug mb-2">{solution.text}</p>
                    <p className="text-[#6366f1] text-sm font-semibold">{solution.metric}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Customer Journey */}
      <AnimatedSection className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Как это работает для ваших клиентов
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-slate-400 text-lg mb-12 max-w-2xl">
                От поиска до приёма — 4 шага, ни одного звонка
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  num: "01",
                  title: "Нашёл в поиске",
                  desc: "Владелец питомца ищет «ветклиника рядом» — видит ваш сайт с полным описанием услуг, цен и врачей",
                  color: "#6366f1",
                },
                {
                  num: "02",
                  title: "Посмотрел и решил",
                  desc: "На сайте вся информация: цены, фото врачей, отзывы. Не нужно звонить, чтобы уточнить — решение принимается на месте",
                  color: "#8b5cf6",
                },
                {
                  num: "03",
                  title: "Записался онлайн",
                  desc: "Выбрал врача, удобное время, оставил контакты. 30 секунд — запись готова, даже если на часах 23:00",
                  color: "#ec4899",
                },
                {
                  num: "04",
                  title: "Получил подтверждение",
                  desc: "Автоматическое уведомление на почту или в мессенджер. Клиент уверен — его ждут. Администратор видит запись в расписании",
                  color: "#f59e0b",
                },
              ].map((step, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="relative rounded-xl p-6 border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                    <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white text-sm font-bold shadow-glow">
                      {step.num}
                    </div>
                    <h3 className="font-bold text-lg mb-3 mt-2 text-slate-200">{step.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why It Pays Off */}
      <AnimatedSection className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Почему это окупается
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-slate-400 text-lg mb-12 max-w-2xl">
                Не обещаю чудес — считаю риски
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <FadeIn delay={0.1}>
                <div className="rounded-2xl p-8 border border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent backdrop-blur-sm">
                  <h3 className="font-bold text-xl mb-6 text-red-400">Без сайта — каждый день</h3>
                  <div className="space-y-5">
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-400 shrink-0 mt-2.5" />
                      <div>
                        <p className="text-sm text-slate-200 mb-1">22:00 — клиент ищет клинику с телефона</p>
                        <p className="text-xs text-slate-400">Видит только карточку в 2ГИС с телефоном. Звонит — никто не берёт. Открывает следующего конкурента с онлайн-записью</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-400 shrink-0 mt-2.5" />
                      <div>
                        <p className="text-sm text-slate-200 mb-1">Администратор отвечает на 50 звонков в день</p>
                        <p className="text-xs text-slate-400">40% из них — типовые вопросы: «сколько стоит осмотр», «есть ли место завтра». Время, которое можно было потратить на пациентов в клинике</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-400 shrink-0 mt-2.5" />
                      <div>
                        <p className="text-sm text-slate-200 mb-1">5-10 потерянных клиентов в месяц</p>
                        <p className="text-xs text-slate-400">Каждый не дозвонившийся — это минус 3 500 ₽ среднего чека. За год: 200–400 000 ₽ упущенной выручки, которую забирает конкурент</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="rounded-2xl p-8 border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent backdrop-blur-sm">
                  <h3 className="font-bold text-xl mb-6 text-emerald-400">С сайтом — каждое утро</h3>
                  <div className="space-y-5">
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 mt-2.5" />
                      <div>
                        <p className="text-sm text-slate-200 mb-1">3-5 новых записей за ночь</p>
                        <p className="text-xs text-slate-400">Клиенты записались сами, пока вы спали. Утром администратор видит расписание и готовится к приёму</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 mt-2.5" />
                      <div>
                        <p className="text-sm text-slate-200 mb-1">Типовые вопросы закрыты сайтом</p>
                        <p className="text-xs text-slate-400">Цены, график, услуги, врачи — всё на сайте. Администратор тратит время на реальных пациентов, а не на телефон</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 mt-2.5" />
                      <div>
                        <p className="text-sm text-slate-200 mb-1">Окупаемость за 3-6 месяцев</p>
                        <p className="text-xs text-slate-400">Стоимость базового пакета (90 000 ₽) — это всего 26 потерянных приёмов. После этого каждый новый клиент — чистая прибыль</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.25}>
              <div className="mt-8 rounded-xl p-6 border border-[#f59e0b]/20 bg-[#f59e0b]/5 backdrop-blur-sm">
                <p className="text-sm text-slate-300 text-center">
                  <strong className="text-[#f59e0b]">Вы не тратите деньги на сайт.</strong> Вы возвращаете потерянных клиентов и освобождаете время администраторов. Окупаемость — с первых месяцев работы.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </AnimatedSection>

      {/* Methodology / Social Proof */}
      <AnimatedSection className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-emerald-400" />
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Подход
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-slate-400 text-lg mb-12 max-w-2xl">
                Не шаблон. Не конструктор. Индивидуальное решение под вашу клинику
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <FadeIn delay={0.1}>
                <div className="rounded-xl p-6 border border-[#6366f1]/10 bg-gradient-to-br from-[#6366f1]/5 to-transparent backdrop-blur-sm">
                  <div className="text-3xl font-bold text-[#6366f1] mb-2">15+</div>
                  <h3 className="font-semibold text-slate-200 mb-2">Сайтов конкурентов анализирую</h3>
                  <p className="text-sm text-slate-400">Перед проектированием вашего сайта изучаю конкурентов в вашем регионе — чтобы ваше предложение было сильнее</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="rounded-xl p-6 border border-[#8b5cf6]/10 bg-gradient-to-br from-[#8b5cf6]/5 to-transparent backdrop-blur-sm">
                  <div className="text-3xl font-bold text-[#8b5cf6] mb-2">2 сек</div>
                  <h3 className="font-semibold text-slate-200 mb-2">Средняя загрузка страницы</h3>
                  <p className="text-sm text-slate-400">Быстрый сайт — клиент не уходит. Каждая дополнительная секунда загрузки = 7% потерянных записей</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="rounded-xl p-6 border border-[#ec4899]/10 bg-gradient-to-br from-[#ec4899]/5 to-transparent backdrop-blur-sm">
                  <div className="text-3xl font-bold text-[#ec4899] mb-2">100%</div>
                  <h3 className="font-semibold text-slate-200 mb-2">Исходный код — ваш</h3>
                  <p className="text-sm text-slate-400">Полная передача кода, документации и прав. Вы не привязаны к одному разработчику или платформе</p>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.25}>
              <div className="rounded-xl p-6 border border-[#f59e0b]/20 bg-[#f59e0b]/5 backdrop-blur-sm">
                <p className="text-sm text-slate-300 text-center leading-relaxed">
                  <strong className="text-[#f59e0b]">Не Tilda</strong> — индивидуальный дизайн и онлайн-запись под ваш бизнес, не шаблон.
                  <strong className="text-[#f59e0b]"> Не студия</strong> — общаетесь напрямую с разработчиком, нет наценки за менеджера, проект сдаётся в 2-3 раза быстрее.
                  <strong className="text-[#f59e0b]"> Не фрилансер-однодневка</strong> — договор, гарантии, передача кода, техническая поддержка.
                </p>
              </div>
            </FadeIn>
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
                <p className="text-slate-300 text-lg mb-4 leading-relaxed">
                  Откройте демо с телефона — именно так ваши клиенты будут записываться на приём.
                  Ваш сайт будет разработан с нуля, с вашим дизайном и контентом.
                </p>
                <p className="text-sm text-slate-400 mb-6">
                  Попробуйте пройти весь путь: найти врача, выбрать время, оставить заявку — так же, как это сделает ваш клиент.
                </p>
                <a
                  href={contactInfo.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl gradient-primary font-semibold text-white hover:shadow-glow transition-all duration-300 group"
                >
                  Попробовать записаться — как ваш клиент
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
                Прозрачное ценообразование без скрытых платежей
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
                      <span className="text-5xl font-bold">90 000</span>
                      <span className="text-2xl text-slate-400">₽</span>
                    </div>
                    <p className="text-sm text-slate-400">
                      Срок: 10–14 рабочих дней
                    </p>
                  </div>
                  <div className="space-y-3 mb-6">
                    {[
                      "Главная, О клинике, Услуги, Врачи, Контакты",
                      "Онлайн-запись на приём с выбором врача и времени",
                      "Адаптивный дизайн (оптимизирован для мобильных — основной трафик идёт с телефонов)",
                      "Интеграция с Яндекс.Картами",
                      "Размещение на российском хостинге",
                      "SSL-сертификат (HTTPS)",
                      "Базовая SEO-оптимизация (meta, schema.org)",
                      "Яндекс.Метрика для отслеживания посещаемости",
                      "1 месяц технической поддержки",
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#6366f1] shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-xs text-slate-500">
                      <strong className="text-slate-400">Обоснование цены:</strong> ~80 часов работы × 1125₽/час. 
                      Включает дизайн, разработку, тестирование, деплой. Работа напрямую без агентств позволяет 
                      предложить конкурентную цену при сохранении качества.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Premium */}
              <FadeIn delay={0.1}>
                <div className="relative rounded-2xl border-2 border-[#ec4899]/30 bg-gradient-to-br from-[#ec4899]/10 via-[#8b5cf6]/5 to-transparent p-8 backdrop-blur-sm hover:border-[#ec4899]/50 transition-all duration-300 shadow-elegant">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full gradient-accent text-white text-xs font-bold shadow-glow">
                    Рекомендую для роста
                  </div>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ec4899]/10 text-[#ec4899] text-xs font-semibold mb-4">
                      <Sparkles className="w-3 h-3" />
                      Премиум
                    </div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-bold bg-gradient-to-r from-[#ec4899] to-[#f59e0b] bg-clip-text text-transparent">180 000</span>
                      <span className="text-2xl text-slate-400">₽</span>
                    </div>
                    <p className="text-sm text-slate-400">
                      Срок: 20–25 рабочих дней
                    </p>
                  </div>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm font-semibold text-[#ec4899] mb-4 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Всё из базового пакета +
                    </p>
                    {[
                      "Административная панель (CRUD для всех сущностей)",
                      "Управление услугами, врачами, расписанием",
                      "Модерация и публикация отзывов",
                      "Система авторизации (JWT + refresh tokens)",
                      "Личный кабинет клиента с историей визитов",
                      "Автоматические email/SMS уведомления",
                      "Раздел Блог/Новости с редактором",
                      "Автоматическое резервное копирование (daily)",
                      "Расширенная SEO (sitemap, robots, Open Graph)",
                      "Персональное обучение работе с админкой (1-2 часа)",
                      "3 месяца технической поддержки",
                      "До 10 часов доработок по запросу",
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#ec4899] shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-xs text-slate-500">
                      <strong className="text-slate-400">Обоснование цены:</strong> ~160 часов работы × 1125₽/час. 
                      Включает backend API, базу данных, админку, интеграции, обучение. Прямое сотрудничество 
                      без посредников снижает стоимость.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <FadeIn delay={0.2}>
              <div className="mt-8 rounded-xl p-6 border border-[#f59e0b]/20 bg-[#f59e0b]/5 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-slate-200 mb-2">Почему эти цены?</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-3">
                      Средняя стоимость разработки сайта для ветклиники в РФ: 150-400К₽ (по данным Workspace, Habr Career 2026). 
                      Работа напрямую без агентств и студий позволяет снизить стоимость на 30-40% при сохранении качества.
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Передаю полный исходный код, документацию и обучаю работе с системой. Гарантирую соблюдение сроков 
                      и техническую поддержку в течение гарантийного периода.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </AnimatedSection>

      {/* AI Integration */}
      <AnimatedSection className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f59e0b] to-[#ec4899] flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-[#f59e0b] via-[#ec4899] to-[#6366f1] bg-clip-text text-transparent">AI-Интеграция</span>
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-slate-400 text-lg mb-12 max-w-2xl">
                ИИ-ассистент, который помогает клиентам записаться на приём и подбирает специалиста
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-3 space-y-4">
                <FadeIn delay={0.1}>
                  <div className="relative rounded-2xl border-2 border-[#f59e0b]/40 bg-gradient-to-br from-[#f59e0b]/15 via-[#ec4899]/10 to-[#6366f1]/5 p-8 backdrop-blur-sm">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-bold bg-gradient-to-r from-[#f59e0b] via-[#ec4899] to-[#6366f1] bg-clip-text text-transparent">320 000</span>
                      <span className="text-2xl text-slate-400">₽</span>
                    </div>
                    <p className="text-sm text-slate-400 mb-4">
                      Срок: 30–35 рабочих дней
                    </p>
                    <p className="text-sm font-semibold text-[#f59e0b] mb-4 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Включает всё из премиум пакета +
                    </p>
                    <div className="space-y-3">
                      {[
                        "ИИ-ассистент на лучшей LLM по соотношению цена/качество — минимум затрат, максимум отдачи",
                        "Автоматический подбор специалиста по симптомам",
                        "Помощь в записи на приём через чат 24/7",
                        "Ответы на типовые вопросы о клинике и услугах",
                        "Интеграция с Telegram/Max/сайтом",
"Персонализация ответов под тон клиники",
                        "6 месяцев технической поддержки",
                        "До 20 часов доработок и дообучения ИИ",
                      ].map((item, i) => (
                        <div key={i} className="flex gap-3">
                          <Sparkles className="h-5 w-5 text-[#f59e0b] shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-300">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-6 mt-6 border-t border-white/10">
                    <p className="text-xs text-slate-500">
                      <strong className="text-slate-400">Обоснование цены:</strong> ~280 часов работы × 1143₽/час. 
                      Включает интеграцию OpenAI API, обучение модели, разработку логики диалогов, тестирование, мониторинг. 
                      Это сложная задача, требующая работы с AI API и тщательного тестирования.
                    </p>
                    </div>
                  </div>
                </FadeIn>
              </div>

              <div className="lg:col-span-2 space-y-4">
                <FadeIn delay={0.2}>
                  <div className="rounded-2xl p-6 border-2 border-[#f59e0b]/20 bg-[#f59e0b]/5 backdrop-blur-sm">
                    <h3 className="text-sm font-bold text-[#f59e0b] mb-4 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Как работает ИИ-ассистент
                    </h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#f59e0b]/20 flex items-center justify-center shrink-0 text-[#f59e0b] text-sm font-bold">1</div>
                        <div>
                          <p className="text-sm font-medium text-slate-200">Клиент пишет в чат</p>
                          <p className="text-xs text-slate-400">Описывает проблему питомца на естественном языке</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#ec4899]/20 flex items-center justify-center shrink-0 text-[#ec4899] text-sm font-bold">2</div>
                        <div>
                          <p className="text-sm font-medium text-slate-200">ИИ анализирует симптомы</p>
                          <p className="text-xs text-slate-400">Рекомендует подходящего специалиста</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#6366f1]/20 flex items-center justify-center shrink-0 text-[#6366f1] text-sm font-bold">3</div>
                        <div>
                          <p className="text-sm font-medium text-slate-200">Предлагает запись</p>
                          <p className="text-xs text-slate-400">Показывает свободные слоты выбранного врача</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#8b5cf6]/20 flex items-center justify-center shrink-0 text-[#8b5cf6] text-sm font-bold">4</div>
                        <div>
                          <p className="text-sm font-medium text-slate-200">Подтверждение</p>
                          <p className="text-xs text-slate-400">Клиент подтверждает запись, получает уведомление</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div className="rounded-2xl p-6 border border-[#ec4899]/20 bg-[#ec4899]/5 backdrop-blur-sm">
                    <h3 className="text-sm font-bold text-[#ec4899] mb-3">Важно</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      ИИ-ассистент <strong className="text-slate-300">не ставит диагнозы</strong> и не заменяет ветеринарного врача. 
                      Он помогает клиенту выбрать подходящего специалиста и записаться на приём. 
                      При сложных случаях диалог автоматически передаётся администратору.
                    </p>
                  </div>
                </FadeIn>
              </div>
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
            <div className="grid grid-cols-1 gap-4">
              {techStack.map((tech, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="group relative rounded-xl p-6 border-gradient hover:scale-[1.01] transition-transform duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366f1]/20 to-[#8b5cf6]/20 flex items-center justify-center shrink-0">
                        <Code2 className="h-6 w-6 text-[#6366f1]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">{tech.name}</h3>
                        <p className="text-sm text-slate-400 mb-2">{tech.desc}</p>
                        <p className="text-xs text-[#6366f1] flex items-center gap-1">
                          <Zap className="w-3 h-3" />
                          {tech.why}
                        </p>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FadeIn>
                <div className="rounded-xl p-8 border-gradient backdrop-blur-sm">
                  <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                    <span className="text-[#6366f1]">Базовый</span>
                    <span className="text-slate-500">90К ₽</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 rounded-lg bg-[#6366f1]/5 border border-[#6366f1]/10">
                      <span className="text-slate-400">Предоплата</span>
                      <span className="font-bold text-lg">45К ₽ <span className="text-sm text-slate-500">(50%)</span></span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-[#6366f1]/5 border border-[#6366f1]/10">
                      <span className="text-slate-400">После завершения</span>
                      <span className="font-bold text-lg">45К ₽ <span className="text-sm text-slate-500">(50%)</span></span>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="rounded-xl p-8 border-2 border-[#ec4899]/20 bg-gradient-to-br from-[#ec4899]/5 to-transparent backdrop-blur-sm">
                  <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                    <span className="text-[#ec4899]">Премиум</span>
                    <span className="text-slate-500">180К ₽</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 rounded-lg bg-[#ec4899]/5 border border-[#ec4899]/10">
                      <span className="text-slate-400">Предоплата</span>
                      <span className="font-bold text-lg">72К ₽ <span className="text-sm text-slate-500">(40%)</span></span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-[#ec4899]/5 border border-[#ec4899]/10">
                      <span className="text-slate-400">После разработки</span>
                      <span className="font-bold text-lg">54К ₽ <span className="text-sm text-slate-500">(30%)</span></span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-[#ec4899]/5 border border-[#ec4899]/10">
                      <span className="text-slate-400">После завершения</span>
                      <span className="font-bold text-lg">54К ₽ <span className="text-sm text-slate-500">(30%)</span></span>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="rounded-xl p-8 border-2 border-[#f59e0b]/20 bg-gradient-to-br from-[#f59e0b]/5 to-transparent backdrop-blur-sm">
                  <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                    <span className="text-[#f59e0b]">AI</span>
                    <span className="text-slate-500">320К ₽</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 rounded-lg bg-[#f59e0b]/5 border border-[#f59e0b]/10">
                      <span className="text-slate-400 text-sm">Предоплата</span>
                      <span className="font-bold">128К ₽ <span className="text-xs text-slate-500">(40%)</span></span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-[#f59e0b]/5 border border-[#f59e0b]/10">
                      <span className="text-slate-400 text-sm">После разработки</span>
                      <span className="font-bold">96К ₽ <span className="text-xs text-slate-500">(30%)</span></span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-lg bg-[#f59e0b]/5 border border-[#f59e0b]/10">
                      <span className="text-slate-400 text-sm">После завершения</span>
                      <span className="font-bold">96К ₽ <span className="text-xs text-slate-500">(30%)</span></span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Risks & Mitigation */}
      <AnimatedSection className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Риски и их минимизация
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-slate-400 text-lg mb-12 max-w-2xl">
                Прозрачность о возможных рисках и способах их решения
              </p>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <FadeIn delay={0.1}>
                <div className="rounded-xl p-6 border border-yellow-500/20 bg-yellow-500/5 backdrop-blur-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center shrink-0">
                      <span className="text-yellow-400 text-sm">⚠</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-200 mb-2">Задержка сроков</h3>
                      <p className="text-sm text-slate-400 mb-3">
                        Возможна при позднем предоставлении материалов (фото, тексты, логотип)
                      </p>
                      <p className="text-xs text-[#6366f1]">
                        <strong>Решение:</strong> Чёткий чек-лист материалов на старте, еженедельные статус-коллы, буфер +2 дня в сроках
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="rounded-xl p-6 border border-yellow-500/20 bg-yellow-500/5 backdrop-blur-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center shrink-0">
                      <span className="text-yellow-400 text-sm">⚠</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-200 mb-2">Низкая посещаемость после запуска</h3>
                      <p className="text-sm text-slate-400 mb-3">
                        Сайт не приносит трафик в первые 1-2 месяца (индексация Яндекса занимает время)
                      </p>
                      <p className="text-xs text-[#6366f1]">
                        <strong>Решение:</strong> Настройка Яндекс.Вебмастер, контекстная реклама (Яндекс.Директ), продвижение в соцсетях
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="rounded-xl p-6 border border-yellow-500/20 bg-yellow-500/5 backdrop-blur-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center shrink-0">
                      <span className="text-yellow-400 text-sm">⚠</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-200 mb-2">Технические проблемы хостинга</h3>
                      <p className="text-sm text-slate-400 mb-3">
                        Downtime, медленная загрузка, проблемы с SSL
                      </p>
                      <p className="text-xs text-[#6366f1]">
                        <strong>Решение:</strong> Проверенный хостинг (Timeweb, Beget), мониторинг доступности, ежедневные автобэкапы
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.25}>
                <div className="rounded-xl p-6 border border-yellow-500/20 bg-yellow-500/5 backdrop-blur-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center shrink-0">
                      <span className="text-yellow-400 text-sm">⚠</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-200 mb-2">Сложность самостоятельного обновления</h3>
                      <p className="text-sm text-slate-400 mb-3">
                        Сотрудники не могут разобраться с админ-панелью (премиум пакет)
                      </p>
                      <p className="text-xs text-[#6366f1]">
                        <strong>Решение:</strong> Интуитивный интерфейс, видео-инструкции, персональное обучение 1-2 часа, поддержка 3 месяца
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Whitelist Readiness */}
      <AnimatedSection className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Техническая база
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-slate-400 text-lg mb-12 max-w-2xl">
                Готовность к «белым спискам»
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-2xl p-8 border-2 border-[#6366f1]/20 bg-gradient-to-br from-[#6366f1]/5 to-transparent backdrop-blur-sm mb-6">
                <h3 className="font-bold text-lg text-[#6366f1] mb-4">Условия Минцифры для непрерывной работы</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Государство ведёт перечень ресурсов («белый список»), доступных даже при временных ограничениях мобильного интернета. В него уже активно включают региональные сервисы в сфере здравоохранения.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FadeIn delay={0.2}>
                <div className="rounded-xl p-6 border border-[#ec4899]/20 bg-[#ec4899]/5 backdrop-blur-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#ec4899]/20 flex items-center justify-center shrink-0">
                      <span className="text-[#ec4899] text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-200 mb-2">Обязательное требование</h4>
                      <p className="text-sm text-slate-400">Все серверы должны быть на территории РФ</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.25}>
                <div className="rounded-xl p-6 border border-[#6366f1]/20 bg-[#6366f1]/5 backdrop-blur-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#6366f1]/20 flex items-center justify-center shrink-0">
                      <span className="text-[#6366f1] text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-200 mb-2">Моя ответственность</h4>
                      <p className="text-sm text-slate-400">Я размещаю ваш сайт на российском хостинге, обеспечивая полное соответствие этому ключевому критерию</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="rounded-xl p-6 border border-[#f59e0b]/20 bg-[#f59e0b]/5 backdrop-blur-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#f59e0b]/20 flex items-center justify-center shrink-0">
                      <span className="text-[#f59e0b] text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-200 mb-2">Ваш следующий шаг</h4>
                      <p className="text-sm text-slate-400">Имея эту базу, вы сможете самостоятельно подать заявку на включение в список через региональные власти</p>
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
                Ваша уверенность — мой приоритет
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
                      href={`mailto:${contactInfo.email}`}
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl gradient-primary font-semibold text-white hover:shadow-glow transition-all duration-300 group"
                    >
                      <Mail className="h-5 w-5" />
                      {contactInfo.email}
                    </a>
                  </div>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <div className="pt-8 border-t border-white/10">
                    <p className="text-slate-400 text-sm">
                      Отправьте запрос на почту — отвечу в течение 24 часов с детальным планом работы и ответами на ваши вопросы
                    </p>
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
            &copy; 2026 Full-stack Web Development. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
