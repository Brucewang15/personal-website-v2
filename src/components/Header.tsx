"use client";

import Link from "next/link";
import { useState } from "react";
import GradientText from "@/components/effects/GradientText";
import { useTheme } from "next-themes";

export default function Header() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <header className="flex items-center justify-between p-4">
            
        </header>
        
    )
