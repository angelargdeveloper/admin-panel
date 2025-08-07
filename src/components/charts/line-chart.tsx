"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface LineData {
  label: string
  value: number
}

interface LineChartProps {
  data: LineData[]
  title: string
  description: string
  color?: string
}

export function LineChart({ data, title, description, color = "#914D21" }: LineChartProps) {
  const [animatedData, setAnimatedData] = useState<LineData[]>([])
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedData(data)
    }, 300)
    return () => clearTimeout(timer)
  }, [data])

  const maxValue = Math.max(...data.map((d) => d.value))
  const minValue = Math.min(...data.map((d) => d.value))
  const range = maxValue - minValue

  const getY = (value: number) => {
    return 200 - ((value - minValue) / range) * 160 + 20
  }

  const pathData =
    animatedData.length > 0
      ? animatedData
          .map((point, index) => {
            const x = (index / (data.length - 1)) * 400 + 50
            const y = getY(point.value)
            return `${index === 0 ? "M" : "L"} ${x} ${y}`
          })
          .join(" ")
      : `M 50 ${getY(data[0]?.value || 0)}`

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64 w-full">
          <svg width="100%" height="100%" viewBox="0 0 500 240" className="overflow-visible">
            {/* Grid lines */}
            <defs>
              <pattern id="grid" width="50" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M 50 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-muted/20"
                />
              </pattern>
            </defs>
            <rect width="400" height="200" x="50" y="20" fill="url(#grid)" />

            {/* Area under curve */}
            <defs>
              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                <stop offset="100%" stopColor={color} stopOpacity="0.05" />
              </linearGradient>
            </defs>

            {animatedData.length > 0 && (
              <path
                d={`${pathData} L 450 220 L 50 220 Z`}
                fill="url(#areaGradient)"
                className="transition-all duration-1000 ease-out"
              />
            )}

            {/* Main line */}
            <path
              d={pathData}
              fill="none"
              stroke={color}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-1000 ease-out"
              style={{
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
              }}
            />

            {/* Data points */}
            {animatedData.map((point, index) => {
              const x = (index / (data.length - 1)) * 400 + 50
              const y = getY(point.value)
              const isHovered = hoveredIndex === index

              return (
                <g key={index}>
                  <circle
                    cx={x}
                    cy={y}
                    r={isHovered ? 8 : 6}
                    fill={color}
                    stroke="white"
                    strokeWidth="2"
                    className="transition-all duration-200 cursor-pointer hover:r-8"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
                    }}
                  />

                  {/* Tooltip */}
                  {isHovered && (
                    <g>
                      <rect
                        x={x - 30}
                        y={y - 35}
                        width="60"
                        height="25"
                        rx="4"
                        fill="currentColor"
                        className="text-popover"
                        stroke="currentColor"
                        strokeWidth="1"
                        style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.15))" }}
                      />
                      <text
                        x={x}
                        y={y - 18}
                        textAnchor="middle"
                        className="text-xs font-medium fill-popover-foreground"
                      >
                        {point.value.toLocaleString()}
                      </text>
                    </g>
                  )}
                </g>
              )
            })}

            {/* X-axis labels */}
            {data.map((point, index) => {
              const x = (index / (data.length - 1)) * 400 + 50
              return (
                <text key={index} x={x} y={235} textAnchor="middle" className="text-xs fill-muted-foreground">
                  {point.label}
                </text>
              )
            })}
          </svg>
        </div>
      </CardContent>
    </Card>
  )
}
