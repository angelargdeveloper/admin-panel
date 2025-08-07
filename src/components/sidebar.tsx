"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BarChart3, Home, LogOut, Menu, Package, Settings, Users, X, ChevronLeft, ChevronRight, Truck } from "lucide-react"

const navigation = [
  { name: "Inicio", href: "/inicio", icon: Home },
  { name: "Dashboard", href: "/inicio/dashboard", icon: Home },
  { name: "Usuarios", href: "/inicio/users", icon: Users },
  { name: "Productos", href: "/inicio/products", icon: Package },
  { name: "Proveedores", href: "/inicio/suppliers", icon: Truck },
  { name: "Reportes", href: "/inicio/reports", icon: BarChart3 },
  { name: "Configuración", href: "/inicio/settings", icon: Settings },
]

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    router.push("/login")
  }

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  const toggleMobile = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  return (
    <>
      {/* Mobile backdrop */}
      {isMobileOpen && <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={toggleMobile} />}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col bg-background border-r border-border transition-all duration-300 lg:relative lg:translate-x-0",
          // Mobile behavior
          isMobileOpen ? "translate-x-0 w-64" : "-translate-x-full w-64",
          // Desktop behavior
          "lg:translate-x-0",
          isCollapsed ? "lg:w-16" : "lg:w-64",
        )}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between px-4 border-b border-border">
          {!isCollapsed && <h1 className="text-xl font-bold text-foreground lg:block hidden">Admin Panel</h1>}
          {isCollapsed && (
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center mx-auto lg:block hidden">
              <Package className="w-5 h-5 text-white" />
            </div>
          )}

          {/* Mobile close button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobile}
            className="text-muted-foreground hover:text-foreground hover:bg-muted/50 lg:hidden"
          >
            <X className="h-5 w-5" />
          </Button>

          {/* Desktop collapse button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleCollapse}
            className="text-muted-foreground hover:text-foreground hover:bg-muted/50 hidden lg:flex"
          >
            {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors relative",
                    isActive
                      ? "bg-primary-500 text-white"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                    isCollapsed ? "justify-center" : "justify-start",
                  )}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && <span className="ml-3">{item.name}</span>}
                </Link>

                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-2 py-1 bg-popover text-popover-foreground text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 border border-border">
                    {item.name}
                    <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-primary-900"></div>
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-border p-4">
          <div className="relative group">
            <Button
              variant="ghost"
              onClick={handleLogout}
              className={cn(
                "w-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors",
                isCollapsed ? "justify-center px-2" : "justify-start",
              )}
            >
              <LogOut className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && <span className="ml-3">Cerrar Sesión</span>}
            </Button>

            {/* Tooltip for logout button when collapsed */}
            {isCollapsed && (
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-2 py-1 bg-popover text-popover-foreground text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 border border-border">
                Cerrar Sesión
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-primary-900"></div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMobile}
        className="fixed top-4 left-4 z-40 text-muted-foreground hover:text-foreground hover:bg-muted/50 lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </Button>
    </>
  )
}
