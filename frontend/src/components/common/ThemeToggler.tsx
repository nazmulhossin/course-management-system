"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button onClick={() => setTheme(isDark ? "light" : "dark")} className="p-2 rounded-md transition-transform hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-90 cursor-pointer" aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
      {theme === "light" ? (
        <Moon className="size-5.5" />
      ) : (
        <Sun className="size-5.5 text-gray-300 hover:text-gray-200" />
      )}
    </button>
  )
}
