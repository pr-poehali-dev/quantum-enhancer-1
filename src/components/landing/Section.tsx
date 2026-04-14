import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

const ACCENT = "#E53935"

const weeks = [
  {
    num: "01",
    label: "НЕДЕЛЯ 1",
    theme: "Старт и очищение",
    days: [
      { title: "Знакомство с группой", desc: "Создаём безопасное пространство, снимаем барьеры — вы перестаёте быть одни на этом пути" },
      { title: "Психология в группе", desc: "Разбираем внутренние блоки и установки, которые мешают двигаться вперёд" },
      { title: "Йога", desc: "Возвращаем тело в ресурс: снимаем зажимы, учимся дышать и чувствовать себя" },
      { title: "Семинар по чистке организма", desc: "Практические инструменты детокса — больше энергии уже с первой недели" },
    ],
    bonus: { label: "Факультатив ВС", title: "Speaking Club Английского" },
    result: "Вы в команде, тело просыпается, голова становится светлее",
  },
  {
    num: "02",
    label: "НЕДЕЛЯ 2",
    theme: "Тело и глубина",
    days: [
      { title: "Психология в группе", desc: "Прорабатываем отношения с собой и другими — уходит тревога, приходит ясность" },
      { title: "Йога", desc: "Углубляем практику: учимся слышать сигналы тела и входить в состояние потока" },
      { title: "Гимнастика постуральных мышц", desc: "Убираем хроническое напряжение в спине и шее — осанка, лёгкость, уверенность в движении" },
    ],
    bonus: { label: "Факультатив ВС", title: "Самомассаж" },
    result: "Тело становится союзником, тревога отступает, сила растёт",
  },
  {
    num: "03",
    label: "НЕДЕЛЯ 3",
    theme: "Интеграция и сила",
    days: [
      { title: "Психологическая практика", desc: "Закрепляем изменения: новые реакции, новое мышление, новый способ быть собой" },
      { title: "Йога", desc: "Финальная практика — интегрируем всё тело и дух в единое состояние силы" },
      { title: "Гимнастика", desc: "Динамика и радость движения — тело, которое умеет отдыхать и действовать" },
    ],
    bonus: { label: "Факультатив ВС", title: "Дизайн человека" },
    result: "Вы выходите с инструментами, которые работают каждый день",
  },
]

function ProgramSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative min-h-screen w-full snap-start flex flex-col justify-center py-16 px-8 md:px-16 lg:px-24">
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: ACCENT }}>3 недели · живой формат</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Программа интенсива</h2>
      </motion.div>

      <div className="flex flex-col gap-5 max-w-5xl">
        {weeks.map((week, wi) => (
          <motion.div
            key={week.num}
            className="rounded-3xl overflow-hidden"
            style={{ backgroundColor: "#1a1a1a", border: "1px solid #2a2a2a" }}
            initial={{ opacity: 0, y: 40 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + wi * 0.1 }}
          >
            <div className="flex items-center gap-4 px-6 py-4 border-b border-white/5">
              <span className="text-5xl font-black leading-none" style={{ color: ACCENT, opacity: 0.25 }}>{week.num}</span>
              <div>
                <p className="text-xs tracking-widest uppercase text-neutral-500 font-semibold">{week.label}</p>
                <p className="text-white font-bold text-lg leading-tight">{week.theme}</p>
              </div>
              <div className="ml-auto hidden md:flex items-center gap-2 bg-white/5 rounded-2xl px-4 py-2">
                <div>
                  <p className="text-xs text-neutral-500 leading-none mb-0.5">{week.bonus.label}</p>
                  <p className="text-white text-sm font-medium leading-none">{week.bonus.title}</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
              {week.days.map((day) => (
                <div key={day.title} className="p-4 flex flex-col gap-2" style={{ backgroundColor: "#1a1a1a" }}>
                  <p className="text-white text-sm font-semibold leading-tight">{day.title}</p>
                  <p className="text-neutral-500 text-xs leading-relaxed">{day.desc}</p>
                </div>
              ))}
            </div>
            <div className="px-6 py-3 flex items-center gap-2">
              <span className="text-xs font-semibold" style={{ color: ACCENT }}>Результат →</span>
              <span className="text-neutral-400 text-xs">{week.result}</span>
            </div>
          </motion.div>
        ))}

        <motion.div
          className="rounded-3xl px-6 py-4 flex items-center gap-3 border-2 border-dashed"
          style={{ backgroundColor: "#121212", borderColor: ACCENT + "66" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <div>
            <p className="text-white font-semibold text-sm">Финальный сбор группы</p>
            <p className="text-neutral-500 text-xs">Делимся впечатлениями, фиксируем результат, остаёмся на связи</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const plans = [
  {
    name: "БАЗА",
    price: "9 900 ₽",
    features: [
      "Три недели живого интенсива",
      "Йога, гимнастика, психология в группе",
      "Факультативы по воскресеньям",
      "Поддержка сообщества СИЛА",
    ],
    highlighted: false,
  },
  {
    name: "ГЛУБИНА",
    price: "14 900 ₽",
    features: [
      "Всё из тарифа БАЗА",
      "3 индивидуальных занятия",
      "Личная работа с психологом",
      "Приоритетная поддержка",
    ],
    highlighted: true,
  },
]

function PricingSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Тарифы
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-6 max-w-3xl">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            className="flex-1 rounded-3xl p-8 flex flex-col gap-5"
            style={{
              backgroundColor: plan.highlighted ? ACCENT : "#1E1E1E",
              border: plan.highlighted ? "none" : "1px solid #2a2a2a",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.15 }}
          >
            <div>
              <p className="text-sm font-bold tracking-widest uppercase mb-1"
                style={{ color: plan.highlighted ? "rgba(255,255,255,0.7)" : ACCENT }}>
                ТАРИФ
              </p>
              <h3 className="text-3xl font-bold text-white">{plan.name}</h3>
            </div>
            <div className="text-4xl font-bold text-white">{plan.price}</div>
            <ul className="flex flex-col gap-3 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm"
                  style={{ color: plan.highlighted ? "rgba(255,255,255,0.9)" : "#aaa" }}>
                  <span className="mt-0.5">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, isProgram, isPricing }: SectionProps) {
  if (isProgram) return <ProgramSection isActive={isActive} />
  if (isPricing) return <PricingSection isActive={isActive} />

  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      {subtitle && (
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        className="text-5xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-bold leading-[1.05] tracking-tight max-w-4xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {content && (
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            className="text-white bg-transparent hover:text-white transition-colors text-base px-8 py-6"
            style={{ borderColor: ACCENT, color: ACCENT }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = ACCENT }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent' }}
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  )
}