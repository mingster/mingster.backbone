"use client"

import { useEffect, useState } from "react"

interface props {
    timestamp: number
    children: React.ReactNode
}
export const Scheduled = ({ timestamp, children }: props) => {
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

    return isEnabled ? children : null
}