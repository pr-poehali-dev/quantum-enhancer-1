import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

const ACCENT = "#E53935"

const weeks = [
  {
    label: "НЕДЕЛЯ 1",
    items: ["👋 Знакомство", "🧠 Работа с психологом в группе", "🧘 Йога", "🍏 Семинар по чистке организма"],
    extra: "🔥 Факультатив (ВС): Speaking Club Английского",
  },
  {
    label: "НЕДЕЛЯ 2",
    items: ["🧠 Работа с психологом в группе", "🧘 Йога", "💪 Гимнастика постуральных мышц"],
    extra: "🔥 Факультатив (ВС): Самомассаж",
  },
  {
    label: "НЕДЕЛЯ 3",
    items: ["🎭 Психологическая практика", "🧘 Йога", "🤸 Гимнастика"],
    extra: "🔥 Факультатив (ВС): Дизайн человека",
  },
]

function ProgramSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Программа
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl">
        {weeks.map((week, i) => (
          <motion.div
            key={week.label}
            className="rounded-3xl p-6 flex flex-col gap-4"
            style={{ backgroundColor: "#1E1E1E" }}
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
          >
            <span className="font-bold text-lg" style={{ color: ACCENT }}>{week.label}</span>
            <ul className="flex flex-col gap-2">
              {week.items.map((item) => (
                <li key={item} className="text-white text-sm leading-relaxed">{item}</li>
              ))}
            </ul>
            <p className="text-neutral-400 text-xs mt-auto pt-2 border-t border-white/10">{week.extra}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-6 rounded-3xl px-6 py-5 max-w-5xl border-2 border-dashed flex items-center gap-3"
        style={{ backgroundColor: "#121212", borderColor: ACCENT }}
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.55 }}
      >
        <span className="text-white font-semibold text-base">🎉 Сбор группы: Делимся впечатлениями</span>
      </motion.div>
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