"use client"

import { sendGAEvent } from "@next/third-parties/google"
import { useEffect, useState } from "react"

declare global {
    interface Window {
        // biome-ignore lint/suspicious/noExplicitAny: Google Analytics gtag accepts variable arguments
        gtag: (...args: any[]) => void
    }
}

/**
 * Test component to verify Google Analytics is working correctly
 * Remove this component in production
 */
export function GATest() {
    const [gaStatus, setGaStatus] = useState<{
        dataLayer: boolean
        gtag: boolean
    }>({
        dataLayer: false,
        gtag: false
    })

    useEffect(() => {
        const checkGAStatus = () => {
            const dataLayer =
                typeof window !== "undefined" && Array.isArray(window.dataLayer)
            const gtag =
                typeof window !== "undefined" &&
                typeof window.gtag === "function"

            setGaStatus({ dataLayer, gtag })
        }

        // Check immediately
        checkGAStatus()

        // Check again after a delay to allow GA to load
        const timer = setTimeout(checkGAStatus, 2000)

        return () => clearTimeout(timer)
    }, [])

    const testEvent = () => {
        if (process.env.NODE_ENV === "production") {
            sendGAEvent({
                event: "ga_test",
                test_parameter: "test_value",
                timestamp: new Date().toISOString()
            })
        } else {
            console.log("GA Test Event (dev mode, not sent to GA)")
        }
    }

    const testPageView = () => {
        if (process.env.NODE_ENV === "production") {
            sendGAEvent({
                event: "page_view",
                page_title: document.title,
                page_location: window.location.href
            })
        } else {
            console.log("GA Test Page View (dev mode, not sent to GA)")
        }
    }

    return (
        <div className="rounded-lg border bg-gray-50 p-4 dark:bg-gray-800">
            <h3 className="mb-4 font-semibold text-lg">
                Google Analytics Status Check
            </h3>

            <div className="mb-4 space-y-2">
                <div className="flex items-center gap-2">
                    <span
                        className={`h-3 w-3 rounded-full ${gaStatus.dataLayer ? "bg-green-500" : "bg-red-500"}`}
                    />
                    <span>Data Layer: {gaStatus.dataLayer ? "✅" : "❌"}</span>
                </div>

                <div className="flex items-center gap-2">
                    <span
                        className={`h-3 w-3 rounded-full ${gaStatus.gtag ? "bg-green-500" : "bg-red-500"}`}
                    />
                    <span>GTAG Function: {gaStatus.gtag ? "✅" : "❌"}</span>
                </div>
            </div>

            <div className="space-y-2">
                <button
                    onClick={testEvent}
                    className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                    type="button"
                >
                    Test Event
                </button>

                <button
                    onClick={testPageView}
                    className="ml-2 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
                    type="button"
                >
                    Test Page View
                </button>
            </div>

            <div className="mt-4 text-gray-600 text-sm">
                <p>
                    Environment Variable:{" "}
                    {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "Not set"}
                </p>
                <p>Check browser console and Google Analytics for events.</p>
            </div>
        </div>
    )
}
