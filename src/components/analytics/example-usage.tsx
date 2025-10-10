"use client"

import { useState } from "react"
import { analytics } from "../../lib/analytics"
import { TrackedButton } from "./tracked-button"
import { TrackedForm } from "./tracked-form"

/**
 * Example component demonstrating Google Analytics integration
 * This is for demonstration purposes - remove in production
 */
export function AnalyticsExample() {
    const [searchTerm, setSearchTerm] = useState("")

    const handleChannelSearch = () => {
        analytics.trackChannelSearch(searchTerm, 15)
    }

    const handleVideoPlay = () => {
        analytics.trackVideoPlay("Sample Video", "video-123", "Sample Channel")
    }

    const handleLanguageChange = () => {
        analytics.trackLanguageChange("en", "zh-TW")
    }

    const handleThemeChange = () => {
        analytics.trackThemeChange("dark")
    }

    const handleError = () => {
        analytics.trackError("demo_error", "This is a demo error", "/demo")
    }

    return (
        <div className="space-y-4 rounded-lg border p-6">
            <h3 className="font-semibold text-lg">Google Analytics Examples</h3>

            {/* Tracked Button Examples */}
            <div className="space-y-2">
                <h4 className="font-medium">Tracked Buttons:</h4>
                <div className="flex gap-2">
                    <TrackedButton
                        trackingEvent="demo_button_click"
                        trackingParameters={{ button_type: "primary" }}
                        onClick={handleVideoPlay}
                    >
                        Play Video
                    </TrackedButton>

                    <TrackedButton
                        trackingEvent="demo_button_click"
                        trackingParameters={{ button_type: "secondary" }}
                        onClick={handleLanguageChange}
                        variant="outline"
                    >
                        Change Language
                    </TrackedButton>
                </div>
            </div>

            {/* Tracked Form Example */}
            <div className="space-y-2">
                <h4 className="font-medium">Tracked Form:</h4>
                <TrackedForm formName="demo_search_form">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search channels..."
                            className="rounded border px-3 py-2"
                        />
                        <TrackedButton
                            type="submit"
                            trackingEvent="demo_search_submit"
                            trackingParameters={{ search_term: searchTerm }}
                            onClick={handleChannelSearch}
                        >
                            Search
                        </TrackedButton>
                    </div>
                </TrackedForm>
            </div>

            {/* Direct Analytics Examples */}
            <div className="space-y-2">
                <h4 className="font-medium">Direct Analytics Calls:</h4>
                <div className="flex gap-2">
                    <TrackedButton
                        onClick={handleThemeChange}
                        trackingEvent="demo_theme_change"
                        variant="secondary"
                    >
                        Change Theme
                    </TrackedButton>

                    <TrackedButton
                        onClick={handleError}
                        trackingEvent="demo_error_trigger"
                        variant="destructive"
                    >
                        Trigger Error
                    </TrackedButton>
                </div>
            </div>

            {/* Video Analytics Examples */}
            <div className="space-y-2">
                <h4 className="font-medium">Video Analytics:</h4>
                <div className="flex gap-2">
                    <TrackedButton
                        onClick={() =>
                            analytics.trackVideoPlay("Demo Video", "demo-123")
                        }
                        trackingEvent="demo_video_play"
                    >
                        Play Demo Video
                    </TrackedButton>

                    <TrackedButton
                        onClick={() =>
                            analytics.trackVideoComplete(
                                "Demo Video",
                                "demo-123"
                            )
                        }
                        trackingEvent="demo_video_complete"
                        variant="outline"
                    >
                        Complete Demo Video
                    </TrackedButton>
                </div>
            </div>

            {/* Device Analytics Examples */}
            <div className="space-y-2">
                <h4 className="font-medium">Device Analytics:</h4>
                <div className="flex gap-2">
                    <TrackedButton
                        onClick={() =>
                            analytics.trackDeviceRegistration(
                                "android_tv",
                                "device-123"
                            )
                        }
                        trackingEvent="demo_device_registration"
                    >
                        Register Android TV
                    </TrackedButton>

                    <TrackedButton
                        onClick={() =>
                            analytics.trackDeviceLinking("roku", true)
                        }
                        trackingEvent="demo_device_linking"
                        variant="outline"
                    >
                        Link Roku Device
                    </TrackedButton>
                </div>
            </div>

            <div className="text-gray-600 text-sm">
                <p>
                    Check your browser's developer tools console and Google
                    Analytics to see the events being tracked.
                </p>
            </div>
        </div>
    )
}
