import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Save, Bell, Shield } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6 bg-background">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Configuración</h1>
        <p className="text-muted-foreground mt-2">Personaliza tu experiencia en el panel administrativo</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Perfil */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Perfil de Usuario
            </CardTitle>
            <CardDescription className="text-muted-foreground">Actualiza tu información personal</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">
                Nombre completo
              </Label>
              <Input id="name" defaultValue="Administrador" className="bg-muted/50 border-border text-foreground" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Correo electrónico
              </Label>
              <Input
                id="email"
                type="email"
                defaultValue="admin@ejemplo.com"
                className="bg-muted/50 border-border text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">
                Teléfono
              </Label>
              <Input id="phone" defaultValue="+34 123 456 789" className="bg-muted/50 border-border text-foreground" />
            </div>
            <Button className="w-full bg-primary-500 hover:bg-primary-600">
              <Save className="w-4 h-4 mr-2" />
              Guardar Cambios
            </Button>
          </CardContent>
        </Card>

        {/* Notificaciones */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              Notificaciones
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Configura cómo quieres recibir notificaciones
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-foreground">Notificaciones por email</Label>
                <p className="text-sm text-muted-foreground">Recibe actualizaciones importantes por correo</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator className="bg-muted" />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-foreground">Notificaciones push</Label>
                <p className="text-sm text-muted-foreground">Recibe notificaciones en tiempo real</p>
              </div>
              <Switch />
            </div>
            <Separator className="bg-muted" />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-foreground">Reportes semanales</Label>
                <p className="text-sm text-muted-foreground">Resumen semanal de actividad</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
