
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function InicioPage() {
  const stats = [
    {
      title: "Ventas Totales",
      value: "$45,231.89",
      change: "+20.1%",
      icon: DollarSign,
      color: "text-green-500",
    },
    {
      title: "Usuarios Activos",
      value: "2,350",
      change: "+15.3%",
      icon: Users,
      color: "text-blue-500",
    },
    {
      title: "Pedidos",
      value: "1,234",
      change: "+7.2%",
      icon: ShoppingCart,
      color: "text-primary-400",
    },
    {
      title: "Conversión",
      value: "3.2%",
      change: "+2.1%",
      icon: TrendingUp,
      color: "text-purple-500",
    },
  ]

  const recentActivity = [
    { id: 1, action: "Nueva venta realizada", time: "Hace 2 minutos", amount: "$299.00" },
    { id: 2, action: "Usuario registrado", time: "Hace 5 minutos", amount: null },
    { id: 3, action: "Pedido completado", time: "Hace 10 minutos", amount: "$150.00" },
    { id: 4, action: "Producto actualizado", time: "Hace 15 minutos", amount: null },
    { id: 5, action: "Nueva reseña recibida", time: "Hace 20 minutos", amount: null },
  ]

  return (
    <div className="p-6 space-y-8 bg-background">
      {/* Hero Section with Logo and Slogan */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center text-center space-y-4"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src="/logo.png"
            alt="Logo de la empresa"
            width={120}
            height={120}
            className="rounded-full border-4 border-primary shadow-lg"
          />
        </motion.div>
        <div>
          <h1 className="text-4xl font-bold text-foreground">Bienvenido a <span className="text-primary">Nuestra Plataforma</span></h1>
          <p className="text-xl text-muted-foreground mt-2">Innovación y calidad a tu alcance</p>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-500">{stat.change}</span> desde el mes pasado
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Ventas Mensuales</CardTitle>
              <CardDescription className="text-muted-foreground">
                Rendimiento de ventas en los últimos 6 meses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-primary-400 mx-auto mb-2" />
                  <p className="text-muted-foreground">Gráfico de ventas</p>
                  <p className="text-sm text-muted-foreground">Aquí iría un gráfico real</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Actividad Reciente</CardTitle>
              <CardDescription className="text-muted-foreground">Últimas acciones en tu plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <motion.div 
                    key={activity.id} 
                    className="flex items-center justify-between"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    {activity.amount && <span className="text-sm font-medium text-green-500">{activity.amount}</span>}
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}