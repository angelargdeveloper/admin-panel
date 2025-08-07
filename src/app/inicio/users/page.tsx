import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, UserPlus, MoreHorizontal } from "lucide-react"

export default function UsersPage() {
  const users = [
    {
      id: 1,
      name: "Ana García",
      email: "ana.garcia@email.com",
      role: "Admin",
      status: "Activo",
      lastLogin: "Hace 2 horas",
    },
    {
      id: 2,
      name: "Carlos López",
      email: "carlos.lopez@email.com",
      role: "Editor",
      status: "Activo",
      lastLogin: "Hace 1 día",
    },
    {
      id: 3,
      name: "María Rodríguez",
      email: "maria.rodriguez@email.com",
      role: "Viewer",
      status: "Inactivo",
      lastLogin: "Hace 1 semana",
    },
    {
      id: 4,
      name: "Juan Martínez",
      email: "juan.martinez@email.com",
      role: "Editor",
      status: "Activo",
      lastLogin: "Hace 3 horas",
    },
    {
      id: 5,
      name: "Laura Sánchez",
      email: "laura.sanchez@email.com",
      role: "Admin",
      status: "Activo",
      lastLogin: "Hace 30 minutos",
    },
  ]

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Admin":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      case "Editor":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "Viewer":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      default:
        return "bg-primary-500/20 text-primary-400 border-primary-500/30"
    }
  }

  const getStatusColor = (status: string) => {
    return status === "Activo"
      ? "bg-green-500/20 text-green-400 border-green-500/30"
      : "bg-gray-500/20 text-gray-400 border-gray-500/30"
  }

  return (
    <div className="p-6 space-y-6 bg-background">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Usuarios</h1>
          <p className="text-muted-foreground mt-2">Gestiona los usuarios de tu plataforma</p>
        </div>
        <Button className="bg-primary-500 hover:bg-primary-600 text-white">
          <UserPlus className="w-4 h-4 mr-2" />
          Nuevo Usuario
        </Button>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-foreground">Lista de Usuarios</CardTitle>
              <CardDescription className="text-muted-foreground">{users.length} usuarios registrados</CardDescription>
            </div>
            <div className="relative w-64">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar usuarios..."
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
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Usuario</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Rol</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Estado</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Último acceso</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-border/50 hover:bg-muted/20">
                    <td className="py-4 px-4">
                      <div>
                        <div className="font-medium text-foreground">{user.name}</div>
                        <div className="text-sm text-muted-foreground">{user.email}</div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Badge className={getRoleColor(user.role)}>{user.role}</Badge>
                    </td>
                    <td className="py-4 px-4">
                      <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">{user.lastLogin}</td>
                    <td className="py-4 px-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-foreground hover:bg-muted/50"
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
