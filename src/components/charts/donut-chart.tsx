"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface DonutData {
  label: string
  value: number
  color: string
}

interface DonutChartProps {
  data: DonutData[]
  title: string
  description: string
}

export function DonutChart({ data, title, description }: DonutChartProps) {
  const [animatedData, setAnimatedData] = useState<DonutData[]>([])
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedData(data)
    }, 200)
    return () => clearTimeout(timer)
  }, [data])

  const total = data.reduce((sum, item) => sum + item.value, 0)
  let cumulativePercentage = 0

  const radius = 80
  const strokeWidth = 20
  const normalizedRadius = radius - strokeWidth * 2
  const circumference = normalizedRadius * 2 * Math.PI

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center">
          <div className="relative">
            <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
              {animatedData.map((item, index) => {
                const percentage = (item.value / total) * 100
                const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`
                const strokeDashoffset = (-cumulativePercentage * circumference) / 100

                cumulativePercentage += percentage

                return (
                  <circle
                    key={index}
                    stroke={item.color}
                    fill="transparent"
                    strokeWidth={hoveredIndex === index ? strokeWidth + 4 : strokeWidth}
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                    className="transition-all duration-300 cursor-pointer hover:opacity-80"
                    style={{
                      strokeLinecap: "round",
                      transition: "stroke-dasharray 1s ease-in-out, stroke-width 0.3s ease",
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  />
                )
              })}
            </svg>

            {/* Center text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{total.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Total</div>
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 space-y-2">
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-2 rounded-lg transition-colors cursor-pointer ${
                hoveredIndex === index ? "bg-muted/50" : "hover:bg-muted/30"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-foreground">{item.value.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">{((item.value / total) * 100).toFixed(1)}%</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
