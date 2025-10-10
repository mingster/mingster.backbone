"use client"

import { IconSortAscending } from "@tabler/icons-react"
import type { Column } from "@tanstack/react-table"
import { cn } from "../lib/utils"
import { Button } from "./ui/button"

interface DataTableColumnHeaderProps<TData, TValue>
    extends React.HTMLAttributes<HTMLDivElement> {
    column: Column<TData, TValue>
    title: string
}

export function DataTableColumnHeader<TData, TValue>({
    column,
    title,
    className
}: DataTableColumnHeaderProps<TData, TValue>) {
    if (!column.getCanSort()) {
        return <div className={cn(className)}>{title}</div>
    }

    return (
        <div className="flex items-center gap-1">
            <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === "asc")
                }
            >
                <div className="text-xs capitalize">{title}</div>
                <IconSortAscending className="ml-1 size-4" />
            </Button>
        </div>
    )
}
