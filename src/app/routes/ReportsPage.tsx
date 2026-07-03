import Card from '@/features/reports/components/Card'
import { AreaChartCard } from '@/features/reports/components/charts/AreaChart'
import { BarChartCard } from '@/features/reports/components/charts/BarChart'
import { LineChartCard } from '@/features/reports/components/charts/LineChart'
import { ReportForm } from '@/features/reports/components/ReportForm'
import { useProjectsReport } from '@/features/reports/hooks/useProjectsReport'
import { useTasksReport } from '@/features/reports/hooks/useTasksReport'
import { useTeamsReport } from '@/features/reports/hooks/useTeamsReport'
import { BarChart, LineChart } from 'lucide-react'
import React from 'react'

function ReportsPage() {

    const cardsData= [
        {title: "Task Complation Rate", percentage: 70, progress: +3},
        {title: "Projects Complation Rate", percentage: 88, progress: +6},
        {title: "Teams Complation Rate", percentage: 67, progress: +4},
    ]
    // const { data: projectsData } = useProjectsReport()
    // const { data: teamsData } = useTeamsReport()
    // const { data: tasksData } = useTasksReport()
    // console.log(projectsData, teamsData, tasksData)

    return (
        <div className='max-w-7xl mx-auto bg-background p-5 max-lg:px-5 flex flex-col gap-5'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {cardsData.map((card, index) => (
                    <Card key={index} title={card.title} percentage={card.percentage} progress={card.progress} />
                ))}
            </div>
            <div className="flex gap-8 justify-between">
                <BarChartCard/>
                <AreaChartCard/>
            </div>
            <div className="flex gap-8 justify-between">
                <LineChartCard/>
                <ReportForm/>
            </div>
        </div>
    )
}

export default ReportsPage
