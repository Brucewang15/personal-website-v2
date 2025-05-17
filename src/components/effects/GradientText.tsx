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
                "inline-block bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text text-transparent",
                className,
            )}
        >
            {children}
        </span>
    );
}
