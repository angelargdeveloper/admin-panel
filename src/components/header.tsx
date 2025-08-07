"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sun, Moon, Palette, User, Bell, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useTheme } from "@/components/theme-provider"

export function Header() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Left side - Search */}
        <div className=" mx-40 flex items-center space-x-4 flex-1">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar en el panel..."
              className="pl-10 bg-muted/50 border-border focus:bg-background transition-colors"
            />
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="relative overflow-hidden group hover:bg-accent"
          >
            <div className="relative w-5 h-5">
              <Sun
                className={`absolute inset-0 h-5 w-5 transition-all duration-500 ${
                  theme === "light" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
                }`}
              />
              <Moon
                className={`absolute inset-0 h-5 w-5 transition-all duration-500 ${
                  theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                }`}
              />
            </div>
            <span className="sr-only">{theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}</span>
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative hover:bg-accent">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary-500 rounded-full flex items-center justify-center">
              <span className="text-[10px] text-white font-bold">3</span>
            </span>
            <span className="sr-only">Notificaciones</span>
          </Button>

          {/* Color Palette */}
          <Button variant="ghost" size="icon" className="hover:bg-accent">
            <Palette className="h-5 w-5" />
            <span className="sr-only">Personalizar colores</span>
          </Button>

          {/* User Profile */}
          <Card className="p-1">
            <Button variant="ghost" size="sm" className="flex items-center space-x-2 hover:bg-accent">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium">Admin</p>
                <p className="text-xs text-muted-foreground">admin@panel.com</p>
              </div>
            </Button>
          </Card>
        </div>
      </div>
    </header>
  )
}
