"use client"

import { useCallback, useEffect, useState } from "react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"

interface RokuAnalyticsEvent {
    event_name: string
    timestamp: number
    device_info: {
        model: string
        roku_os_version: string
        country_code: string
        language: string
    }
    session_info: {
        session_id: string
        session_start_time: number
        current_screen: string
    }
    event_data: Record<string, any>
}

interface AnalyticsSummary {
    total_events: number
    unique_devices: number
    unique_sessions: number
    top_events: Array<{ event_name: string; count: number }>
    device_models: Array<{ model: string; count: number }>
    recent_events: RokuAnalyticsEvent[]
}

export function RokuAnalyticsDashboard() {
    const [analyticsData, setAnalyticsData] = useState<AnalyticsSummary | null>(
        null
    )
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchAnalyticsData = useCallback(async () => {
        try {
            setLoading(true)
            setError(null)

            // This would typically fetch from your analytics database
            // For now, we'll simulate some data
            const mockData: AnalyticsSummary = {
                total_events: 1250,
                unique_devices: 45,
                unique_sessions: 89,
                top_events: [
                    { event_name: "video_play", count: 320 },
                    { event_name: "channel_view", count: 280 },
                    { event_name: "screen_view", count: 250 },
                    { event_name: "device_linking", count: 45 },
                    { event_name: "user_logout", count: 12 }
                ],
                device_models: [
                    { model: "Roku Ultra", count: 15 },
                    { model: "Roku Streaming Stick+", count: 12 },
                    { model: "Roku Express", count: 8 },
                    { model: "Roku Premiere", count: 6 },
                    { model: "Roku TV", count: 4 }
                ],
                recent_events: [
                    {
                        event_name: "video_play",
                        timestamp: Date.now() / 1000 - 300,
                        device_info: {
                            model: "Roku Ultra",
                            roku_os_version: "12.0.0",
                            country_code: "US",
                            language: "en_US"
                        },
                        session_info: {
                            session_id: "session_1234567890",
                            session_start_time: Date.now() / 1000 - 1800,
                            current_screen: "MainScene"
                        },
                        event_data: {
                            video_title: "Channel News",
                            video_id: "channel-123",
                            channel_name: "News Channel"
                        }
                    },
                    {
                        event_name: "channel_view",
                        timestamp: Date.now() / 1000 - 600,
                        device_info: {
                            model: "Roku Streaming Stick+",
                            roku_os_version: "11.5.0",
                            country_code: "CA",
                            language: "en_CA"
                        },
                        session_info: {
                            session_id: "session_0987654321",
                            session_start_time: Date.now() / 1000 - 2400,
                            current_screen: "GridScreen"
                        },
                        event_data: {
                            channel_name: "Sports Channel",
                            channel_id: "sports-456"
                        }
                    }
                ]
            }

            setAnalyticsData(mockData)
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Failed to fetch analytics data"
            )
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchAnalyticsData()
    }, [fetchAnalyticsData])

    const formatTimestamp = (timestamp: number) => {
        return new Date(timestamp * 1000).toLocaleString()
    }

    const getEventColor = (eventName: string) => {
        const colors: Record<string, string> = {
            video_play: "bg-green-500",
            video_pause: "bg-yellow-500",
            video_complete: "bg-blue-500",
            channel_view: "bg-purple-500",
            device_linking: "bg-indigo-500",
            user_login: "bg-emerald-500",
            user_logout: "bg-red-500",
            error: "bg-red-600",
            screen_view: "bg-gray-500"
        }
        return colors[eventName] || "bg-gray-400"
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center p-8">
                <div className="text-center">
                    <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-blue-500 border-b-2" />
                    <p>Loading analytics data...</p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex items-center justify-center p-8">
                <div className="text-center">
                    <p className="mb-4 text-red-500">Error: {error}</p>
                    <Button onClick={fetchAnalyticsData}>Retry</Button>
                </div>
            </div>
        )
    }

    if (!analyticsData) {
        return (
            <div className="flex items-center justify-center p-8">
                <p>No analytics data available</p>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-3xl">Roku Analytics Dashboard</h1>
                <Button onClick={fetchAnalyticsData} variant="outline">
                    Refresh Data
                </Button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="font-medium text-sm">
                            Total Events
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="font-bold text-2xl">
                            {analyticsData.total_events.toLocaleString()}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="font-medium text-sm">
                            Unique Devices
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="font-bold text-2xl">
                            {analyticsData.unique_devices}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="font-medium text-sm">
                            Active Sessions
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="font-bold text-2xl">
                            {analyticsData.unique_sessions}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="font-medium text-sm">
                            Avg Events/Device
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="font-bold text-2xl">
                            {Math.round(
                                analyticsData.total_events /
                                    analyticsData.unique_devices
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Tabs defaultValue="events" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="events">Top Events</TabsTrigger>
                    <TabsTrigger value="devices">Device Models</TabsTrigger>
                    <TabsTrigger value="recent">Recent Events</TabsTrigger>
                </TabsList>

                <TabsContent value="events" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Most Common Events</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                {analyticsData.top_events.map(
                                    (event, index) => (
                                        <div
                                            key={event.event_name}
                                            className="flex items-center justify-between rounded-lg border p-3"
                                        >
                                            <div className="flex items-center space-x-3">
                                                <Badge
                                                    className={getEventColor(
                                                        event.event_name
                                                    )}
                                                >
                                                    {index + 1}
                                                </Badge>
                                                <span className="font-medium">
                                                    {event.event_name}
                                                </span>
                                            </div>
                                            <span className="text-gray-500 text-sm">
                                                {event.count} events
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="devices" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Device Models</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                {analyticsData.device_models.map(
                                    (device, index) => (
                                        <div
                                            key={device.model}
                                            className="flex items-center justify-between rounded-lg border p-3"
                                        >
                                            <div className="flex items-center space-x-3">
                                                <Badge variant="outline">
                                                    {index + 1}
                                                </Badge>
                                                <span className="font-medium">
                                                    {device.model}
                                                </span>
                                            </div>
                                            <span className="text-gray-500 text-sm">
                                                {device.count} devices
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="recent" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Events</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {analyticsData.recent_events.map(
                                    (event, index) => (
                                        <div
                                            key={index}
                                            className="rounded-lg border p-4"
                                        >
                                            <div className="mb-2 flex items-center justify-between">
                                                <Badge
                                                    className={getEventColor(
                                                        event.event_name
                                                    )}
                                                >
                                                    {event.event_name}
                                                </Badge>
                                                <span className="text-gray-500 text-sm">
                                                    {formatTimestamp(
                                                        event.timestamp
                                                    )}
                                                </span>
                                            </div>

                                            <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-3">
                                                <div>
                                                    <span className="font-medium">
                                                        Device:
                                                    </span>{" "}
                                                    {event.device_info.model}
                                                </div>
                                                <div>
                                                    <span className="font-medium">
                                                        OS:
                                                    </span>{" "}
                                                    {
                                                        event.device_info
                                                            .roku_os_version
                                                    }
                                                </div>
                                                <div>
                                                    <span className="font-medium">
                                                        Country:
                                                    </span>{" "}
                                                    {
                                                        event.device_info
                                                            .country_code
                                                    }
                                                </div>
                                            </div>

                                            {Object.keys(event.event_data)
                                                .length > 0 && (
                                                <div className="mt-2">
                                                    <span className="font-medium text-sm">
                                                        Event Data:
                                                    </span>
                                                    <pre className="mt-1 overflow-x-auto rounded bg-gray-100 p-2 text-xs">
                                                        {JSON.stringify(
                                                            event.event_data,
                                                            null,
                                                            2
                                                        )}
                                                    </pre>
                                                </div>
                                            )}
                                        </div>
                                    )
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
