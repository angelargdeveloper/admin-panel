"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface SalesData {
  month: string
  sales: number
  orders: number
  users: number
}

interface SalesChartProps {
  data: SalesData[]
}

export function SalesChart({ data }: SalesChartProps) {
  const [animatedData, setAnimatedData] = useState<SalesData[]>([])
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    // Animate bars on mount
    const timer = setTimeout(() => {
      setAnimatedData(data)
    }, 100)
    return () => clearTimeout(timer)
  }, [data])

  const maxSales = Math.max(...data.map((d) => d.sales))

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Ventas Mensuales</CardTitle>
        <CardDescription className="text-muted-foreground">Evolución de ventas en los últimos 6 meses</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80 p-4">
          <div className="flex items-end justify-between h-full space-x-2">
            {data.map((item, index) => {
              const height = animatedData.length > 0 ? (item.sales / maxSales) * 100 : 0
              const isHovered = hoveredIndex === index

              return (
                <div key={index} className="flex flex-col items-center flex-1 group">
                  <div className="w-full relative">
                    {/* Background bar */}
                    <div className="w-full h-64 bg-muted/30 rounded-t-md"></div>

                    {/* Animated bar */}
                    <div
                      className="absolute bottom-0 w-full bg-gradient-to-t from-primary-600 to-primary-400 rounded-t-md transition-all duration-1000 ease-out cursor-pointer hover:from-primary-500 hover:to-primary-300"
                      style={{
                        height: `${height}%`,
                        transform: isHovered ? "scaleY(1.05)" : "scaleY(1)",
                        transformOrigin: "bottom",
                      }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-400/20 to-primary-200/20 rounded-t-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Tooltip */}
                    {isHovered && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-popover border border-border rounded-lg shadow-lg z-10 min-w-max">
                        <div className="text-sm font-medium text-popover-foreground">{item.month}</div>
                        <div className="text-xs text-muted-foreground space-y-1">
                          <div>Ventas: ${item.sales.toLocaleString()}</div>
                          <div>Pedidos: {item.orders}</div>
                          <div>Usuarios: {item.users}</div>
                        </div>
                        {/* Arrow */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-border"></div>
                      </div>
                    )}
                  </div>

                  <span className="text-xs text-muted-foreground mt-2 font-medium">{item.month}</span>
                </div>
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
