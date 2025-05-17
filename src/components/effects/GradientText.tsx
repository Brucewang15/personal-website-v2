import { cn } from "@/../utils/tailwind";

interface GradientTextProps {
    children: React.ReactNode;
    className?: string;
}

export default function GradientText({
    children,
    className,
}: GradientTextProps) {
    return (
        <span
            className={cn(
                "inline-block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent",
                className,
            )}
        >
            {children}
        </span>
    );
}
