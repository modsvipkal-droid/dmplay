import Link from "next/link";
import { siteConfig, LOGIN_URL } from "@/config/site";
import { Home, Gamepad2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFF7F4] text-[#1E2637] flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full rounded-2xl border border-[#EEE3DF] bg-white p-8 text-center shadow-lg">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0EC] text-[#FF5A3D]">
          <Gamepad2 className="h-6 w-6" />
        </div>
        <span className="mt-4 block font-mono text-4xl font-extrabold text-[#FF5A3D]">404</span>
        <h1 className="mt-2 text-xl font-extrabold text-[#1E2637]">Page Not Found</h1>
        <p className="mt-2 text-sm text-[#525D73]">
          The requested page could not be located on {siteConfig.name}. Please check the URL or return to the homepage.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#FF8C67] to-[#FF5A3D] px-4 py-2 text-sm font-bold text-white shadow-sm hover:opacity-95"
          >
            <Home className="h-4 w-4" />
            <span>Homepage</span>
          </Link>
          <a
            href={LOGIN_URL}
            target="_self"
            rel="noopener noreferrer"
            className="w-full sm:w-auto rounded-lg border border-[#EEE3DF] bg-[#FFF7F4] px-4 py-2 text-sm font-semibold text-[#1E2637] hover:border-[#FF5A3D] hover:text-[#FF5A3D]"
          >
            Platform Login
          </a>
        </div>
      </div>
    </div>
  );
}
