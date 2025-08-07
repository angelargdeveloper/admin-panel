"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, Lock, Mail, Shield, Sparkles, ArrowRight } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulación de autenticación con animación
    setTimeout(() => {
      if (email && password) {
        localStorage.setItem("isAuthenticated", "true")
        router.push("/inicio")
      }
      setIsLoading(false)
    }, 2000)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 via-primary-800 to-primary-700">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs with Enhanced Animation */}
        <div
          className="absolute top-20 left-20 w-40 h-40 bg-primary-400/30 rounded-full blur-2xl animate-bounce"
          style={{ animationDuration: "3s", animationDelay: "0s" }}
        ></div>

        <div
          className="absolute top-32 right-24 w-32 h-32 bg-primary-300/40 rounded-full blur-xl animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        ></div>

        <div
          className="absolute bottom-40 left-1/4 w-48 h-48 bg-primary-500/25 rounded-full blur-3xl animate-bounce"
          style={{ animationDuration: "5s", animationDelay: "0.5s" }}
        ></div>

        <div
          className="absolute bottom-32 right-16 w-36 h-36 bg-primary-600/35 rounded-full blur-2xl animate-bounce"
          style={{ animationDuration: "3.5s", animationDelay: "2s" }}
        ></div>

        <div
          className="absolute top-1/2 left-12 w-28 h-28 bg-primary-200/30 rounded-full blur-xl animate-bounce"
          style={{ animationDuration: "4.5s", animationDelay: "1.5s" }}
        ></div>

        <div
          className="absolute top-3/4 right-1/3 w-44 h-44 bg-primary-400/20 rounded-full blur-2xl animate-bounce"
          style={{ animationDuration: "6s", animationDelay: "0.8s" }}
        ></div>

        {/* Additional floating elements for more dynamic effect */}
        <div
          className="absolute top-16 left-1/2 w-24 h-24 bg-primary-300/25 rounded-full blur-lg animate-pulse"
          style={{ animationDuration: "2s" }}
        ></div>

        <div
          className="absolute bottom-20 left-1/3 w-20 h-20 bg-primary-500/30 rounded-full blur-md animate-pulse"
          style={{ animationDuration: "2.5s", animationDelay: "1s" }}
        ></div>

        {/* Subtle gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-primary-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/30 via-transparent to-primary-800/30"></div>

        {/* Radial gradient for center focus */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-primary-900/20 to-primary-950/40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md">
          {/* Logo/Brand Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl mb-4 shadow-2xl animate-pulse">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-200 to-primary-400 bg-clip-text text-transparent mb-2">
              Admin Panel
            </h1>
            <p className="text-primary-300/80 text-lg">Panel de Control Avanzado</p>
          </div>

          {/* Login Card */}
          <Card className="border-primary-800/50 bg-primary-950/90 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-primary-300/10 opacity-50"></div>
            <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-gradient-to-r from-primary-500/20 to-primary-300/20 blur-xl opacity-30 rounded-lg"></div>

            <CardHeader className="space-y-1 text-center relative z-10">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary-400 mr-2 animate-pulse" />
                <CardTitle className="text-2xl font-bold text-primary-100">Bienvenido de Vuelta</CardTitle>
              </div>
              <CardDescription className="text-primary-300/90 text-base">
                Accede a tu panel de administración
              </CardDescription>
            </CardHeader>

            <CardContent className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-primary-200 font-medium">
                    Correo Electrónico
                  </Label>
                  <div className="relative group">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-primary-400 group-focus-within:text-primary-300 transition-colors" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="admin@ejemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-11 h-12 bg-primary-900/60 border-primary-700/50 text-primary-100 placeholder:text-primary-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 backdrop-blur-sm"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-primary-200 font-medium">
                    Contraseña
                  </Label>
                  <div className="relative group">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-primary-400 group-focus-within:text-primary-300 transition-colors" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-11 pr-11 h-12 bg-primary-900/60 border-primary-700/50 text-primary-100 placeholder:text-primary-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 backdrop-blur-sm"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-primary-700 bg-primary-900/50 text-primary-500 focus:ring-primary-500/20"
                    />
                    <span className="text-sm text-primary-300">Recordarme</span>
                  </label>
                  <button type="button" className="text-sm text-primary-400 hover:text-primary-300 transition-colors">
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group relative overflow-hidden"
                  disabled={isLoading}
                >
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

                  {isLoading ? (
                    <div className="flex items-center relative z-10">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Iniciando sesión...
                    </div>
                  ) : (
                    <div className="flex items-center relative z-10">
                      Iniciar Sesión
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </Button>
              </form>

              {/* Demo Credentials */}
              <div className="mt-8 p-4 bg-primary-800/40 backdrop-blur-sm rounded-lg border border-primary-700/30">
                <p className="text-sm text-primary-300 text-center mb-2">
                  <span className="inline-flex items-center">
                    <Sparkles className="w-4 h-4 mr-1 animate-pulse" />
                    Credenciales de Demostración
                  </span>
                </p>
                <div className="text-xs text-primary-400 space-y-1">
                  <p>
                    <strong>Email:</strong> Cualquier dirección de correo válida
                  </p>
                  <p>
                    <strong>Contraseña:</strong> Cualquier contraseña
                  </p>
                </div>
              </div>

              {/* Social Login Options */}
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-primary-800/50"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-primary-950/90 text-primary-400">O continúa con</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="h-10 border-primary-700/50 bg-primary-900/40 backdrop-blur-sm text-primary-300 hover:bg-primary-800/60 hover:text-primary-200 transition-all duration-200"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button
                    variant="outline"
                    className="h-10 border-primary-700/50 bg-primary-900/40 backdrop-blur-sm text-primary-300 hover:bg-primary-800/60 hover:text-primary-200 transition-all duration-200"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                    Twitter
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-primary-400/60 text-sm">© 2024 Admin Panel. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>

      {/* Custom CSS for radial gradient */}
      <style jsx>{`
        .bg-radial-gradient {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  )
}
