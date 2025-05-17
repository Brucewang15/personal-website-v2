"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import GradientText from "./effects/GradientText";

export default function Header() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const header_options = ['Experience', 'Projects', 'About Me', 'Contact', 'Resume'];

    return (
        <header className="
            fixed rounded-lg border border-gray-200/50 dark:border-gray-700/50 
            backdrop-blur-md z-50 top-4 md:top-8 md:left-8 md:right-8
            bg-white/80 dark:bg-stone-950/70 mx-auto
            flex flex-col 
            max-w-screen-xl
            "
        >
            <div className="flex h-12 w-fullitems-stretch justify-between px-4">
                <div className="flex items-center gap-x-4">
                    <Link
                        href="/"
                        className="font-display text-lg font-semibold"
                    >
                        <GradientText>Bruce Wang</GradientText>
                    </Link>

                    <div className="hidden lg:flex text-sm items-stretch gap-x-2 self-stretch text-zinc-400 font-medium">
                        {header_options.map((option, index) => (
                            <Link
                                key={index}
                                href={`/${option.toLowerCase()}`}
                                className="flex items-center justify-center rounded-md p-2"
                            >
                                {option}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="">hi</div>

            </div>
        </header>
    );
}
