"use client";

import { LOGIN_URL } from "@/config/site";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FFF7F4] text-[#1E2637] flex items-center justify-center p-4">
        <div className="max-w-md w-full rounded-2xl border border-[#EEE3DF] bg-white p-8 text-center shadow-lg">
          <h2 className="text-2xl font-extrabold text-[#1E2637]">Something went wrong</h2>
          <p className="mt-2 text-sm text-[#525D73]">
            An unexpected error occurred while loading this page.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => reset()}
              className="w-full sm:w-auto rounded-lg bg-gradient-to-r from-[#FF8C67] to-[#FF5A3D] px-4 py-2 text-sm font-bold text-white shadow-sm hover:opacity-95"
            >
              Try Again
            </button>
            <a
              href={LOGIN_URL}
              className="w-full sm:w-auto rounded-lg border border-[#EEE3DF] bg-[#FFF7F4] px-4 py-2 text-sm font-semibold text-[#1E2637] hover:border-[#FF5A3D] hover:text-[#FF5A3D]"
            >
              Go to Platform
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
