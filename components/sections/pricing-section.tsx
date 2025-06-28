"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Check, Star, Crown } from "lucide-react"

const pricingPlans = [
  {
    id: 1,
    name: "Essential",
    price: "R$ 45",
    description: "Perfect for regular maintenance",
    features: ["Classic Cut", "Wash & Style", "Basic Beard Trim", "Hot Towel Finish"],
    popular: false,
    color: "from-gray-600 to-gray-700",
  },
  {
    id: 2,
    name: "Premium",
    price: "R$ 85",
    description: "Our most popular package",
    features: [
      "Signature Cut",
      "Beard Sculpting",
      "Hot Towel Treatment",
      "Premium Products",
      "Scalp Massage",
      "Style Consultation",
    ],
    popular: true,
    color: "from-amber-400 to-orange-500",
  },
  {
    id: 3,
    name: "VIP Experience",
    price: "R$ 150",
    description: "The ultimate grooming experience",
    features: [
      "Everything in Premium",
      "Traditional Wet Shave",
      "Facial Treatment",
      "Eyebrow Design",
      "Complimentary Drink",
      "Priority Booking",
      "Personal Barber",
    ],
    popular: false,
    color: "from-purple-600 to-indigo-600",
  },
]

export function PricingSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/20 rounded-full px-6 py-3 mb-6">
            <Crown className="h-5 w-5 text-amber-400" />
            <span className="text-amber-200 font-semibold">Pricing</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Choose Your
            <span className="block text-amber-400">Experience</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From essential grooming to the full VIP treatment, we have packages designed to meet every need and budget.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? "scale-105 z-10" : ""}`}
            >
              <Card
                className={`h-full bg-gray-800 border-gray-700 hover:border-amber-500/50 transition-all duration-500 group hover:-translate-y-2 ${plan.popular ? "border-amber-500" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold px-4 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}
                  >
                    {plan.id === 1 && <Star className="h-8 w-8 text-white" />}
                    {plan.id === 2 && <Crown className="h-8 w-8 text-white" />}
                    {plan.id === 3 && <Crown className="h-8 w-8 text-white" />}
                  </div>

                  <CardTitle className="text-2xl font-bold text-white mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-400 mb-4">{plan.description}</CardDescription>

                  <div className="text-center">
                    <span className="text-5xl font-black text-white">{plan.price}</span>
                    <span className="text-gray-400 text-lg">/visit</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="h-5 w-5 text-amber-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-6 text-lg font-semibold rounded-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black"
                        : "bg-white text-black hover:bg-gray-100"
                    }`}
                  >
                    Choose {plan.name}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">All packages include complimentary consultation and aftercare advice</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span>✓ No hidden fees</span>
            <span>✓ Satisfaction guaranteed</span>
            <span>✓ Easy rescheduling</span>
            <span>✓ Premium products included</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
