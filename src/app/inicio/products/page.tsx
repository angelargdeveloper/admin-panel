import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, MoreHorizontal, Package } from "lucide-react"

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Laptop Gaming Pro",
      category: "Electrónicos",
      price: "$1,299.99",
      stock: 15,
      status: "Activo",
    },
    {
      id: 2,
      name: "Auriculares Bluetooth",
      category: "Audio",
      price: "$89.99",
      stock: 32,
      status: "Activo",
    },
    {
      id: 3,
      name: "Smartphone Ultra",
      category: "Móviles",
      price: "$799.99",
      stock: 0,
      status: "Agotado",
    },
    {
      id: 4,
      name: "Tablet Pro 12",
      category: "Tablets",
      price: "$599.99",
      stock: 8,
      status: "Activo",
    },
    {
      id: 5,
      name: "Monitor 4K",
      category: "Monitores",
      price: "$449.99",
      stock: 23,
      status: "Activo",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Activo":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Agotado":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      case "Inactivo":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      default:
        return "bg-primary-500/20 text-primary-400 border-primary-500/30"
    }
  }

  const getStockColor = (stock: number) => {
    if (stock === 0) return "text-red-400"
    if (stock < 10) return "text-yellow-400"
    return "text-green-400"
  }

  return (
    <div className="p-6 space-y-6 bg-background">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Productos</h1>
          <p className="text-muted-foreground mt-2">Gestiona tu inventario de productos</p>
        </div>
        <Button className="bg-primary-500 hover:bg-primary-600 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Nuevo Producto
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Productos</p>
                <p className="text-2xl font-bold text-foreground">{products.length}</p>
              </div>
              <Package className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">En Stock</p>
                <p className="text-2xl font-bold text-green-400">{products.filter((p) => p.stock > 0).length}</p>
              </div>
              <div className="h-8 w-8 bg-green-500/20 rounded-full flex items-center justify-center">
                <div className="h-4 w-4 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Agotados</p>
                <p className="text-2xl font-bold text-red-400">{products.filter((p) => p.stock === 0).length}</p>
              </div>
              <div className="h-8 w-8 bg-red-500/20 rounded-full flex items-center justify-center">
                <div className="h-4 w-4 bg-red-500 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Stock Bajo</p>
                <p className="text-2xl font-bold text-yellow-400">
                  {products.filter((p) => p.stock > 0 && p.stock < 10).length}
                </p>
              </div>
              <div className="h-8 w-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <div className="h-4 w-4 bg-yellow-500 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-foreground">Lista de Productos</CardTitle>
              <CardDescription className="text-muted-foreground">Gestiona tu catálogo de productos</CardDescription>
            </div>
            <div className="relative w-64">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar productos..."
                className="pl-10 bg-muted/50 border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Producto</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Categoría</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Precio</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Stock</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Estado</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-border/50 hover:bg-muted/20">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                          <Package className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div className="font-medium text-foreground">{product.name}</div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">{product.category}</td>
                    <td className="py-4 px-4 text-foreground font-medium">{product.price}</td>
                    <td className="py-4 px-4">
                      <span className={`font-medium ${getStockColor(product.stock)}`}>{product.stock} unidades</span>
                    </td>
                    <td className="py-4 px-4">
                      <Badge className={getStatusColor(product.status)}>{product.status}</Badge>
                    </td>
                    <td className="py-4 px-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-muted-foreground hover:bg-muted/50"
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
