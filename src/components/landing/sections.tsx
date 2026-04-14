import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white/40 bg-white/5 tracking-widest text-xs uppercase">Клуб саморазвития СИЛА</Badge>,
    title: "Импульс к развитию своей силы",
    content: 'Начни раскрывать свои возможности — живой онлайн-интенсив три недели движения, роста и поддержки',
    showButton: true,
    buttonText: 'Присоединиться'
  },
  {
    id: 'about',
    title: 'Зачем вам ИМПУЛЬС?',
    content: 'Три недели живой практики — йога, работа с психологом в группе, гимнастика и уникальные факультативы. Не курс, не запись — живое движение рядом с людьми, которые идут вперёд вместе с вами.'
  },
  {
    id: 'program',
    title: 'Программа',
    isProgram: true,
  },
  {
    id: 'pricing',
    title: 'Тарифы',
    isPricing: true,
  },
  {
    id: 'join',
    title: 'Готовы стартовать?',
    content: 'Присоединяйтесь к интенсиву ИМПУЛЬС и сделайте первый шаг к новой версии себя вместе с клубом СИЛА.',
    showButton: true,
    buttonText: 'Записаться на интенсив'
  },
]