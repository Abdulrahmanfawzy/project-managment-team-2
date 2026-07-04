import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"

export const description = "A bar chart"

const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
    { month: "July", desktop: 127 },
    { month: "August", desktop: 190 },
    { month: "September", desktop: 210 },
    { month: "October", desktop: 240 },
    { month: "October", desktop: 300 },
]

const chartConfig = {
    desktop: {
        label: "Tasks",
        color: "#005afb",
    },
} satisfies ChartConfig

export function BarChartCard() {
    return (
        <Card className="h-75 w-full ">
        <CardHeader>
            <CardTitle>Bar Chart</CardTitle>
        </CardHeader>
        <CardContent>
            <ChartContainer config={chartConfig} className="h-58 w-full">
            <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis
                    dataKey="desktop"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    width={45}
                />                  
                <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel/>}
                />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} spacing={110}/>
            </BarChart>
            </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex gap-2 leading-none font-medium">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
            </div>
        </CardFooter>
        </Card>
    )
}


