import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SalesChart } from "@/components/charts/sales-chart"
import { DonutChart } from "@/components/charts/donut-chart"
import { LineChart } from "@/components/charts/line-chart"
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  ShoppingCart,
  Eye,
  Download,
  Calendar,
  Filter,
} from "lucide-react"

export default function ReportsPage() {
  const salesData = [
    { month: "Ene", sales: 45000, orders: 120, users: 89 },
    { month: "Feb", sales: 52000, orders: 145, users: 102 },
    { month: "Mar", sales: 48000, orders: 132, users: 95 },
    { month: "Abr", sales: 61000, orders: 167, users: 118 },
    { month: "May", sales: 55000, orders: 151, users: 108 },
    { month: "Jun", sales: 67000, orders: 189, users: 134 },
  ]

  const revenueData = [
    { label: "Ventas Directas", value: 1890000, color: "#914D21" },
    { label: "Marketplace", value: 756000, color: "#BE8450" },
    { label: "Afiliados", value: 306000, color: "#715B49" },
  ]

  const userGrowthData = [
    { label: "Ene", value: 1200 },
    { label: "Feb", value: 1350 },
    { label: "Mar", value: 1280 },
    { label: "Abr", value: 1520 },
    { label: "May", value: 1680 },
    { label: "Jun", value: 1850 },
  ]

  const topProducts = [
    { name: "Laptop Gaming Pro", sales: 1250, revenue: "$1,625,000", trend: "up" },
    { name: "Smartphone Ultra", sales: 890, revenue: "$712,000", trend: "up" },
    { name: "Auriculares Bluetooth", sales: 756, revenue: "$68,000", trend: "down" },
    { name: "Monitor 4K", sales: 623, revenue: "$280,000", trend: "up" },
    { name: "Tablet Pro 12", sales: 445, revenue: "$267,000", trend: "down" },
  ]

  const recentMetrics = [
    {
      title: "Ingresos Totales",
      value: "$2,952,000",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Nuevos Usuarios",
      value: "1,246",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Pedidos Completados",
      value: "3,891",
      change: "+15.3%",
      trend: "up",
      icon: ShoppingCart,
      color: "text-primary-400",
      bgColor: "bg-primary-500/10",
    },
    {
      title: "Tasa de Conversión",
      value: "4.2%",
      change: "-2.1%",
      trend: "down",
      icon: TrendingUp,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
  ]

  return (
    <div className="p-6 space-y-6 bg-background">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reportes y Análisis</h1>
          <p className="text-muted-foreground mt-2">Análisis detallado del rendimiento de tu negocio</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-border text-muted-foreground hover:bg-muted/50">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
          <Button variant="outline" className="border-border text-muted-foreground hover:bg-muted/50">
            <Calendar className="w-4 h-4 mr-2" />
            Período
          </Button>
          <Button className="bg-primary-500 hover:bg-primary-600 text-white">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recentMetrics.map((metric, index) => (
          <Card key={index} className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                  <p className="text-2xl font-bold text-foreground mt-1">{metric.value}</p>
                  <div className="flex items-center mt-2">
                    {metric.trend === "up" ? (
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                    )}
                    <span
                      className={`text-sm font-medium ${metric.trend === "up" ? "text-green-500" : "text-red-500"}`}
                    >
                      {metric.change}
                    </span>
                    <span className="text-sm text-muted-foreground ml-1">vs mes anterior</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Chart */}
        <SalesChart data={salesData} />

        {/* Revenue Breakdown */}
        <DonutChart data={revenueData} title="Desglose de Ingresos" description="Distribución de ingresos por canal" />
      </div>

      {/* User Growth and Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth Chart */}
        <LineChart
          data={userGrowthData}
          title="Crecimiento de Usuarios"
          description="Nuevos usuarios registrados por mes"
          color="#BE8450"
        />

        {/* Top Products */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Productos Más Vendidos</CardTitle>
            <CardDescription className="text-muted-foreground">
              Ranking de productos por ventas este mes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{product.sales} unidades vendidas</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground">{product.revenue}</p>
                    <div className="flex items-center">
                      {product.trend === "up" ? (
                        <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                      )}
                      <Badge
                        className={
                          product.trend === "up"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : "bg-red-500/20 text-red-400 border-red-500/30"
                        }
                      >
                        {product.trend === "up" ? "↗" : "↘"}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Activity */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center">
              <Eye className="w-5 h-5 mr-2" />
              Actividad de Usuarios
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Usuarios activos hoy</span>
                <span className="text-foreground font-semibold">1,247</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Sesiones promedio</span>
                <span className="text-foreground font-semibold">3.2</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Tiempo en sitio</span>
                <span className="text-foreground font-semibold">4m 32s</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Tasa de rebote</span>
                <span className="text-foreground font-semibold">23.4%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Revenue Breakdown */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Desglose de Ingresos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Ventas directas</span>
                <span className="text-foreground font-semibold">$1,890,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Marketplace</span>
                <span className="text-foreground font-semibold">$756,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Afiliados</span>
                <span className="text-foreground font-semibold">$306,000</span>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">Total</span>
                  <span className="text-foreground font-bold text-lg">$2,952,000</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Acciones Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button className="w-full justify-start bg-muted/50 hover:bg-muted text-foreground">
                <TrendingUp className="w-4 h-4 mr-2" />
                Generar Reporte Mensual
              </Button>
              <Button className="w-full justify-start bg-muted/50 hover:bg-muted text-foreground">
                <Download className="w-4 h-4 mr-2" />
                Exportar Datos
              </Button>
              <Button className="w-full justify-start bg-muted/50 hover:bg-muted text-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                Programar Reporte
              </Button>
              <Button className="w-full justify-start bg-muted/50 hover:bg-muted text-foreground">
                <Eye className="w-4 h-4 mr-2" />
                Ver Análisis Detallado
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
