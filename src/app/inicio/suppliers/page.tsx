"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { AddSupplierModal } from "./add-supplier-modal"
import {
  Search,
  Plus,
  MoreHorizontal,
  Truck,
  Package,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Calendar,
  Filter,
} from "lucide-react"

export default function SuppliersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const suppliers = [
    {
      id: 1,
      name: "TechSupply Corp",
      contact: "María González",
      email: "maria@techsupply.com",
      phone: "+34 912 345 678",
      address: "Calle Mayor 123, Madrid",
      rating: 4.8,
      totalOrders: 156,
      deliveredProducts: 1240,
      pendingProducts: 45,
      totalDebt: 15750.5,
      lastDelivery: "2024-01-15",
      status: "Activo",
      paymentStatus: "Al día",
      category: "Electrónicos",
    },
    {
      id: 2,
      name: "Global Electronics",
      contact: "Carlos Ruiz",
      email: "carlos@globalelec.com",
      phone: "+34 913 456 789",
      address: "Av. Tecnología 456, Barcelona",
      rating: 4.2,
      totalOrders: 89,
      deliveredProducts: 780,
      pendingProducts: 120,
      totalDebt: 28900.75,
      lastDelivery: "2024-01-12",
      status: "Activo",
      paymentStatus: "Pendiente",
      category: "Electrónicos",
    },
    {
      id: 3,
      name: "Office Solutions",
      contact: "Ana Martín",
      email: "ana@officesol.com",
      phone: "+34 914 567 890",
      address: "Plaza Oficina 789, Valencia",
      rating: 3.9,
      totalOrders: 234,
      deliveredProducts: 2100,
      pendingProducts: 0,
      totalDebt: 0,
      lastDelivery: "2024-01-18",
      status: "Activo",
      paymentStatus: "Al día",
      category: "Oficina",
    },
    {
      id: 4,
      name: "Mobile World",
      contact: "Luis Fernández",
      email: "luis@mobileworld.com",
      phone: "+34 915 678 901",
      address: "Calle Móvil 321, Sevilla",
      rating: 4.6,
      totalOrders: 67,
      deliveredProducts: 450,
      pendingProducts: 85,
      totalDebt: 12300.25,
      lastDelivery: "2024-01-10",
      status: "Inactivo",
      paymentStatus: "Atrasado",
      category: "Móviles",
    },
  ]

  const recentDeliveries = [
    {
      id: 1,
      supplier: "TechSupply Corp",
      product: "Laptop Gaming Pro",
      quantity: 25,
      deliveryDate: "2024-01-15",
      status: "Entregado",
      value: 32475.0,
    },
    {
      id: 2,
      supplier: "Global Electronics",
      product: "Smartphone Ultra",
      quantity: 40,
      deliveryDate: "2024-01-12",
      status: "Entregado",
      value: 31960.0,
    },
    {
      id: 3,
      supplier: "Mobile World",
      product: "Auriculares Bluetooth",
      quantity: 100,
      deliveryDate: "2024-01-10",
      status: "Parcial",
      value: 8990.0,
    },
    {
      id: 4,
      supplier: "Office Solutions",
      product: "Monitor 4K",
      quantity: 15,
      deliveryDate: "2024-01-18",
      status: "Entregado",
      value: 6749.85,
    },
  ]

  const pendingOrders = [
    {
      id: 1,
      supplier: "Global Electronics",
      product: "Tablet Pro 12",
      quantityOrdered: 50,
      quantityPending: 30,
      expectedDate: "2024-01-25",
      daysOverdue: 0,
      value: 17997.0,
    },
    {
      id: 2,
      supplier: "TechSupply Corp",
      product: "Monitor Gaming",
      quantityOrdered: 20,
      quantityPending: 20,
      expectedDate: "2024-01-20",
      daysOverdue: 3,
      value: 8999.8,
    },
    {
      id: 3,
      supplier: "Mobile World",
      product: "Cargador Inalámbrico",
      quantityOrdered: 75,
      quantityPending: 45,
      expectedDate: "2024-01-15",
      daysOverdue: 8,
      value: 2247.75,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Activo":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Inactivo":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      default:
        return "bg-primary-500/20 text-primary-400 border-primary-500/30"
    }
  }

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case "Al día":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Pendiente":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "Atrasado":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getDeliveryStatusColor = (status: string) => {
    switch (status) {
      case "Entregado":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Parcial":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "Pendiente":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
      />
    ))
  }

  const totalSuppliers = suppliers.length
  const activeSuppliers = suppliers.filter((s) => s.status === "Activo").length
  const totalDebt = suppliers.reduce((sum, s) => sum + s.totalDebt, 0)
  const totalPendingProducts = suppliers.reduce((sum, s) => sum + s.pendingProducts, 0)

  return (
    <div className="p-6 space-y-6 bg-background">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Proveedores</h1>
          <p className="text-muted-foreground mt-2">Gestiona tus proveedores y el historial de entregas</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-border text-muted-foreground hover:bg-muted/50 bg-transparent">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
          <Button variant="outline" className="border-border text-muted-foreground hover:bg-muted/50 bg-transparent">
            <Calendar className="w-4 h-4 mr-2" />
            Período
          </Button>
          <Button onClick={() => setIsModalOpen(true)} className="bg-primary-500 hover:bg-primary-600 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Nuevo Proveedor
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Proveedores</p>
                <p className="text-2xl font-bold text-foreground">{totalSuppliers}</p>
                <p className="text-xs text-green-500 mt-1">
                  <span className="flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {activeSuppliers} activos
                  </span>
                </p>
              </div>
              <div className="p-3 rounded-lg bg-blue-500/10">
                <Truck className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Productos Pendientes</p>
                <p className="text-2xl font-bold text-foreground">{totalPendingProducts}</p>
                <p className="text-xs text-yellow-500 mt-1">
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    Por entregar
                  </span>
                </p>
              </div>
              <div className="p-3 rounded-lg bg-yellow-500/10">
                <Package className="w-6 h-6 text-yellow-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Deuda Total</p>
                <p className="text-2xl font-bold text-foreground">€{totalDebt.toLocaleString()}</p>
                <p className="text-xs text-red-500 mt-1">
                  <span className="flex items-center">
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    Por pagar
                  </span>
                </p>
              </div>
              <div className="p-3 rounded-lg bg-red-500/10">
                <DollarSign className="w-6 h-6 text-red-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Entregas del Mes</p>
                <p className="text-2xl font-bold text-foreground">{recentDeliveries.length}</p>
                <p className="text-xs text-green-500 mt-1">
                  <span className="flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Completadas
                  </span>
                </p>
              </div>
              <div className="p-3 rounded-lg bg-green-500/10">
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Suppliers List */}
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-foreground">Lista de Proveedores</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Información detallada de tus proveedores
                  </CardDescription>
                </div>
                <div className="relative w-64">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar proveedores..."
                    className="pl-10 bg-muted/50 border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {suppliers.map((supplier) => (
                  <div
                    key={supplier.id}
                    className="p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors border border-border/50"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-foreground text-lg">{supplier.name}</h3>
                          <Badge className={getStatusColor(supplier.status)}>{supplier.status}</Badge>
                          <Badge className={getPaymentStatusColor(supplier.paymentStatus)}>
                            {supplier.paymentStatus}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-1 mb-2">
                          {getRatingStars(supplier.rating)}
                          <span className="text-sm text-muted-foreground ml-2">({supplier.rating})</span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Mail className="w-4 h-4 mr-2" />
                          {supplier.email}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Phone className="w-4 h-4 mr-2" />
                          {supplier.phone}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          {supplier.address}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Productos entregados:</span>
                          <span className="text-foreground font-medium">{supplier.deliveredProducts}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Productos pendientes:</span>
                          <span className="text-yellow-400 font-medium">{supplier.pendingProducts}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Deuda total:</span>
                          <span className="text-red-400 font-medium">€{supplier.totalDebt.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <Separator className="my-3 bg-border" />

                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">
                        Última entrega: {new Date(supplier.lastDelivery).toLocaleDateString()}
                      </span>
                      <span className="text-muted-foreground">Total pedidos: {supplier.totalOrders}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          {/* Recent Deliveries */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Entregas Recientes</CardTitle>
              <CardDescription className="text-muted-foreground">Últimas entregas realizadas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentDeliveries.map((delivery) => (
                  <div key={delivery.id} className="p-3 bg-muted/20 rounded-lg border border-border/50">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <p className="font-medium text-foreground text-sm">{delivery.product}</p>
                        <p className="text-xs text-muted-foreground">{delivery.supplier}</p>
                      </div>
                      <Badge className={getDeliveryStatusColor(delivery.status)}>{delivery.status}</Badge>
                    </div>
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>{delivery.quantity} unidades</span>
                      <span>€{delivery.value.toLocaleString()}</span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {new Date(delivery.deliveryDate).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pending Orders */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-yellow-500" />
                Pedidos Pendientes
              </CardTitle>
              <CardDescription className="text-muted-foreground">Productos por entregar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {pendingOrders.map((order) => (
                  <div key={order.id} className="p-3 bg-muted/20 rounded-lg border border-border/50">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <p className="font-medium text-foreground text-sm">{order.product}</p>
                        <p className="text-xs text-muted-foreground">{order.supplier}</p>
                      </div>
                      {order.daysOverdue > 0 && (
                        <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                          {order.daysOverdue} días atraso
                        </Badge>
                      )}
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Pendiente:</span>
                        <span className="text-yellow-400 font-medium">
                          {order.quantityPending}/{order.quantityOrdered}
                        </span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Valor:</span>
                        <span className="text-foreground font-medium">€{order.value.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Fecha esperada:</span>
                        <span className="text-muted-foreground">
                          {new Date(order.expectedDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Add Supplier Modal */}
      <AddSupplierModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  )
}
