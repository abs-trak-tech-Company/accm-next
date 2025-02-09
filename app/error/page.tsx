"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function ErrorPage() {
  // Use URL API for safer parameter handling
  const [errorMessage, setErrorMessage] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Safely get URL parameters after component mounts
    const params = new URLSearchParams(window.location.search);
    const message = params.get("message");
    setErrorMessage(message ? decodeURIComponent(message) : "");
    setMounted(true);
  }, []);

  // Early return for non-mounted state
  if (!mounted) {
    return null; // Or a loading skeleton if preferred
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Site gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />

      {/* Subtle animated accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded-full blur-3xl opacity-20 animate-pulse" />

      {/* Content container with glass effect */}
      <div className="relative max-w-md w-full mx-4 p-8 rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-xl transform translate-y-0 opacity-100">
        {/* Error icon */}
        <div className="flex justify-center mb-6">
          <AlertCircle className="w-16 h-16 text-blue-500 dark:text-blue-400 animate-bounce" />
        </div>

        <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Oops! Something went wrong
        </h1>

        {errorMessage && (
          <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-6 break-words">
            {errorMessage}
          </p>
        )}

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/" passHref>
            <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 hover:from-blue-600 hover:to-purple-600 dark:hover:from-blue-700 dark:hover:to-purple-700 transition-all text-white">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
