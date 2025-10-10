"use client"

import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import remarkGfm from "remark-gfm"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"

// display markdown content
//
export default function DisplayMarkDown({ content }: { content: string }) {
    if (!content) {
        return ""
    }

    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkRehype, remarkParse]}
            rehypePlugins={[rehypeHighlight]}
            components={{
                p: ({ ...props }) => (
                    <p className="pt-2 pb-5 text-base" {...props} />
                ),
                h1: ({ ...props }) => (
                    <h1 className="pt-2 pb-5 font-bold text-2xl" {...props} />
                ),
                h2: ({ ...props }) => (
                    <h2 className="pt-2 pb-2 font-bold text-xl" {...props} />
                ),
                h3: ({ ...props }) => (
                    <h3 className="pt-2 pb-2 font-bold text-lg" {...props} />
                ),
                h4: ({ ...props }) => (
                    <h4 className="pt-2 pb-2 font-bold text-base" {...props} />
                ),
                h5: ({ ...props }) => (
                    <h5 className="pt-2 pb-5 font-bold text-base" {...props} />
                ),
                h6: ({ ...props }) => (
                    <h6 className="pt-2 pb-2 font-bold text-base" {...props} />
                ),
                a: ({ ...props }) => (
                    <a
                        className="text-amber-700 hover:backdrop-contrast-200 dark:text-amber-100"
                        {...props}
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                ),
                code: ({ ...props }) => (
                    <code {...props} className="rounded-md p-1 font-mono" />
                )
            }}
        >
            {content}
        </ReactMarkdown>
    )
}
