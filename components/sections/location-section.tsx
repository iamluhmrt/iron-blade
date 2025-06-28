"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Clock, Car, Wifi, Accessibility, Snowflake } from "lucide-react"
import { motion } from "framer-motion"
import { salonConfig } from "@/lib/config"

export function LocationSection() {
  const openGoogleMaps = () => {
    const address = `${salonConfig.address.street}, ${salonConfig.address.neighborhood}, ${salonConfig.address.city}, ${salonConfig.address.state}`
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
    window.open(mapsUrl, "_blank")
  }

  const facilities = [
    { icon: Car, name: "Estacionamento gratuito" },
    { icon: Accessibility, name: "Acessibilidade" },
    { icon: Wifi, name: "Wi-Fi gratuito" },
    { icon: Snowflake, name: "Ar condicionado" },
  ]

  return (
    <section id="location" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Localização</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Venha nos visitar! Estamos localizados em um ponto de fácil acesso
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mapa Melhorado */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video relative bg-gradient-to-br from-rose-50 to-pink-50 flex items-center justify-center">
                  {/* Mapa estilizado */}
                  <div className="absolute inset-0">
                    <div className="w-full h-full bg-gradient-to-br from-rose-100 via-pink-50 to-rose-50 relative overflow-hidden">
                      {/* Grid pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                          {Array.from({ length: 48 }).map((_, i) => (
                            <div key={i} className="border border-rose-200" />
                          ))}
                        </div>
                      </div>

                      {/* Ruas simuladas */}
                      <div className="absolute top-1/3 left-0 right-0 h-2 bg-gray-300 opacity-60" />
                      <div className="absolute top-2/3 left-0 right-0 h-1 bg-gray-300 opacity-40" />
                      <div className="absolute left-1/4 top-0 bottom-0 w-1 bg-gray-300 opacity-40" />
                      <div className="absolute left-3/4 top-0 bottom-0 w-2 bg-gray-300 opacity-60" />

                      {/* Pin do salão */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          className="relative"
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                            <MapPin className="h-5 w-5 text-white" />
                          </div>
                          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-md text-xs font-medium whitespace-nowrap">
                            {salonConfig.name}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Overlay com botão */}
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <Button
                      onClick={openGoogleMaps}
                      className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white text-gray-900 hover:bg-gray-100"
                    >
                      <Navigation className="mr-2 h-4 w-4" />
                      Ver no Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Informações */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  Endereço
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">{salonConfig.address.street}</p>
                  <p className="text-muted-foreground">{salonConfig.address.neighborhood}</p>
                  <p className="text-muted-foreground">
                    {salonConfig.address.city}, {salonConfig.address.state}
                  </p>
                  <p className="text-muted-foreground">CEP: {salonConfig.address.zipCode}</p>
                </div>
                <Button onClick={openGoogleMaps} className="mt-4 w-full">
                  <Navigation className="mr-2 h-4 w-4" />
                  Como Chegar
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  Horários de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Segunda a Sexta:</span>
                  <span>9h às 19h</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sábado:</span>
                  <span>9h às 17h</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Domingo:</span>
                  <span className="text-muted-foreground">Fechado</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Facilidades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {facilities.map((facility, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="p-1 rounded bg-rose-100">
                        <facility.icon className="h-4 w-4 text-rose-600" />
                      </div>
                      <span className="text-sm">{facility.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
