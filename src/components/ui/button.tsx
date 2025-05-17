import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function Button({
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "whitespace-nowrap rounded-md text-sm font-medium",
        "dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        "h-9 px-4 py-2",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}