"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    id: 1,
    question: "Preciso agendar ou posso chegar na hora?",
    answer:
      "Recomendamos agendamento para garantir seu horário, mas também atendemos por ordem de chegada quando há disponibilidade. Fins de semana são mais concorridos.",
  },
  {
    id: 2,
    question: "Vocês cortam cabelo de criança?",
    answer:
      "Sim! Temos experiência com cortes infantis e um ambiente acolhedor para os pequenos. Primeira cadeirinha é sempre uma experiência especial.",
  },
  {
    id: 3,
    question: "Que produtos vocês usam?",
    answer:
      "Trabalhamos apenas com produtos premium: Pompadour, Barba Brava, e importados. Navalhas alemãs Dovo e equipamentos profissionais de primeira linha.",
  },
  {
    id: 4,
    question: "Fazem barbear com navalha tradicional?",
    answer:
      "Claro! É nossa especialidade. Barbear tradicional com navalha, espuma quente, toalha e finalização com loção pós-barba. Uma experiência única.",
  },
  {
    id: 5,
    question: "Qual a diferença entre corte clássico e moderno?",
    answer:
      "Corte clássico segue técnicas tradicionais com navalha e tesoura. Moderno inclui máquinas e estilos contemporâneos. Ambos com a mesma qualidade.",
  },
  {
    id: 6,
    question: "Vocês vendem produtos para casa?",
    answer:
      "Sim! Temos uma seleção de pomadas, óleos para barba, loções e produtos para manutenção em casa. Peça orientação aos nossos barbeiros.",
  },
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Perguntas Frequentes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e tradições da barbearia
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-amber-200">
                <CardHeader className="pb-3">
                  <Button
                    variant="ghost"
                    onClick={() => toggleItem(faq.id)}
                    className="w-full justify-between p-0 h-auto text-left hover:bg-transparent"
                  >
                    <CardTitle className="text-lg font-semibold text-gray-900">{faq.question}</CardTitle>
                    {openItems.includes(faq.id) ? (
                      <ChevronUp className="h-5 w-5 text-amber-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-amber-600" />
                    )}
                  </Button>
                </CardHeader>
                <AnimatePresence>
                  {openItems.includes(faq.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardContent className="pt-0">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
