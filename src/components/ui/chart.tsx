import * as React from "react"
import * as RechartsPrimitive from "recharts"
import type { TooltipProps, LegendProps } from "recharts"

import { cn } from "@/lib/utils"

/* ---------------------------------- */
/* Theme */
/* ---------------------------------- */

const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k: string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }
  return context
}

/* ---------------------------------- */
/* Container */
/* ---------------------------------- */

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"]
}) {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        className={cn(
          "flex aspect-video justify-center text-xs",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

/* ---------------------------------- */
/* Styles */
/* ---------------------------------- */

function ChartStyle({ id, config }: { id: string; config: ChartConfig }) {
  const colorConfig = Object.entries(config).filter(
    ([, c]) => c.color || c.theme
  )

  if (!colorConfig.length) return null

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, item]) => {
    const color =
      item.theme?.[theme as keyof typeof item.theme] || item.color
    return color ? `--color-${key}: ${color};` : ""
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  )
}

/* ---------------------------------- */
/* Tooltip */
/* ---------------------------------- */

const ChartTooltip = RechartsPrimitive.Tooltip

function ChartTooltipContent<
  TValue extends number = number,
  TName extends string = string
>({
  active,
  payload,
  label,
  className,
  hideLabel,
}: TooltipProps<TValue, TName> & {
  className?: string
  hideLabel?: boolean
}) {
  const { config } = useChart()

  if (!active || !payload || !payload.length) return null

  return (
    <div
      className={cn(
        "rounded-lg border bg-background px-2.5 py-1.5 text-xs shadow",
        className
      )}
    >
      {!hideLabel && (
        <div className="mb-1 font-medium">
          {typeof label === "string"
            ? config[label]?.label ?? label
            : label}
        </div>
      )}

      {payload.map((item, index) => {
        const key = String(item.dataKey ?? item.name ?? index)
        const itemConfig = getPayloadConfigFromPayload(config, item, key)

        return (
          <div key={key} className="flex justify-between gap-2">
            <span className="text-muted-foreground">
              {itemConfig?.label ?? item.name}
            </span>
            <span className="font-mono tabular-nums">
              {item.value?.toLocaleString()}
            </span>
          </div>
        )
      })}
    </div>
  )
}

/* ---------------------------------- */
/* Legend */
/* ---------------------------------- */

const ChartLegend = RechartsPrimitive.Legend

function ChartLegendContent({
  payload,
  verticalAlign = "bottom",
  className,
}: Pick<LegendProps, "payload" | "verticalAlign"> & {
  className?: string
}) {
  const { config } = useChart()

  if (!payload?.length) return null

  return (
    <div
      className={cn(
        "flex justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
    >
      {payload.map((item) => {
        const key = String(item.dataKey ?? item.value)
        const itemConfig = getPayloadConfigFromPayload(config, item, key)

        return (
          <div key={key} className="flex items-center gap-1.5">
            <div
              className="h-2 w-2 rounded"
              style={{ backgroundColor: item.color }}
            />
            {itemConfig?.label}
          </div>
        )
      })}
    </div>
  )
}

/* ---------------------------------- */
/* Helpers */
/* ---------------------------------- */

function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) return undefined

  const inner =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined

  const resolvedKey =
    (inner && (inner as any)[key]) ||
    (payload as any)[key] ||
    key

  return config[resolvedKey] ?? config[key]
}

/* ---------------------------------- */

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}
