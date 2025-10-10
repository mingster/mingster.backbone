"use client"

import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { Modal } from "../ui/modal"

interface ConfirmModalProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => void
    loading: boolean
    title: string
    description: string
    cancelLabel?: string
    confirmLabel?: string
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    loading,
    title,
    description,
    cancelLabel = "Cancel",
    confirmLabel = "Continue"
}) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <Modal
            title={title}
            description={description}
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="flex w-full items-center justify-end space-x-2 pt-6">
                <Button disabled={loading} variant="outline" onClick={onClose}>
                    {cancelLabel}
                </Button>
                <Button
                    disabled={loading}
                    variant="destructive"
                    onClick={onConfirm}
                >
                    {confirmLabel}
                </Button>
            </div>
        </Modal>
    )
}
