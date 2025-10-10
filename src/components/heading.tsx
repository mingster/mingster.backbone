import { cn } from "../lib/utils"

interface HeadingProps {
    title: string
    badge?: number
    description?: string
    className?: string
}

export const Heading: React.FC<HeadingProps> = ({
    title,
    badge,
    description,
    className
}) => {
    if (!badge) badge = 0
    //console.log(`badge:${badge}`);

    // lg:font-extrabold

    return (
        <div className={cn("", className)}>
            <strong className="relative inline-flex items-center rounded">
                {badge !== null && badge !== undefined && badge !== 0 && (
                    <span className="-top-1 -right-4 absolute flex size-5 items-center justify-center rounded-full bg-green-800 pb-1 text-slate-100 text-xs">
                        <span>{badge}</span>
                    </span>
                )}
                <h1 className="text-slate-900 text-xl uppercase tracking-tight dark:text-gray-200">
                    {title}
                </h1>
            </strong>
            <div className="p-0 text-muted-foreground text-xs">
                {description}
            </div>
        </div>
    )
}
