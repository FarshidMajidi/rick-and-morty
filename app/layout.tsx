import { ReactNode } from "react";
import type { Metadata } from "next";
import { CharacterContextProvider } from "@/context/character-ctx";
import { LocationContextProvider } from "@/context/location-ctx";
import RemoveFavorite from "@/components/character/favorite/remove-favorite";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "RickAndMorty",
  description: "powered by snapp!doctor",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/assets/favicon.ico",
  },
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const cookieStore = cookies();
  const character = cookieStore.get("character")?.value;

  return (
    <html lang="en">
      <body>
        <section className="flex flex-col h-screen items-center">
          <header className="flex w-full justify-between items-center shadow-lg h-[64px] px-4">
            <nav className="bg-white border-gray-200">
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div
                  className="hidden w-full md:block md:w-auto"
                  id="navbar-default"
                >
                  <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                    <li>
                      <Link
                        href="/"
                        className="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                        aria-current="page"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/character"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent"
                      >
                        Character
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/location"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent"
                      >
                        Location
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <div className="flex flex-col items-center">
              <h1 className="text-lg font-medium">{`Hello, ${
                character ? character : "Guest"
              }`}</h1>

              <RemoveFavorite />
            </div>
          </header>
          <div className="flex flex-col items-center h-[calc(100vh-64px)]">
            <div className="flex w-full items-center justify-center">
              <Image
                src="/assets/logo.png"
                width={300}
                height={44}
                alt="logo"
                className="w-auto h-auto"
              />
            </div>
            <main className="container flex flex-col">
              <CharacterContextProvider>
                <LocationContextProvider>{children}</LocationContextProvider>
              </CharacterContextProvider>
            </main>
          </div>
        </section>
      </body>
    </html>
  );
}
