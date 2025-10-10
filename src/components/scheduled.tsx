"use client"

import { useEffect, useState } from "react"

interface ScheduledProps {
    timestamp: number
    children: React.ReactNode
}

const Scheduled = ({ timestamp, children }: ScheduledProps) => {
    const [isEnabled, setEnabled] = useState(false)

    useEffect(() => {
        const diff = timestamp - Date.now()
        const timer = setTimeout(() => {
            setEnabled(true)
        }, diff)

        return () => {
            clearTimeout(timer)
        }
    }, [timestamp])

    return isEnabled ? <>{children}</> : null
}

export default Scheduled
