"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { initializeParse } from "./services/ParseService";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MoonIcon, SunIcon, UserCircle } from "lucide-react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    initializeParse();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/next.svg"
                alt="Logo"
                width={100}
                height={24}
                className="dark:invert"
              />
            </Link>

            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-rose-500 to-indigo-700 p-6 no-underline outline-none focus:shadow-md"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium text-white">
                              App Features
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Discover all the powerful features our application
                              offers.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <Link href="/feature-1" legacyBehavior passHref>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900">
                            <div className="text-sm font-medium leading-none">
                              Feature 1
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                              Description of feature 1
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/feature-2" legacyBehavior passHref>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900">
                            <div className="text-sm font-medium leading-none">
                              Feature 2
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                              Description of feature 2
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="mr-2"
            >
              {theme === "light" ? (
                <MoonIcon className="h-5 w-5" />
              ) : (
                <SunIcon className="h-5 w-5" />
              )}
            </Button>
            <Link href="/auth/login">
              <Button variant="outline" className="hidden sm:flex gap-2">
                <UserCircle className="h-4 w-4" />
                Login
              </Button>
            </Link>
            <Link  href="/auth/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-4 py-20 md:py-32 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
            Build Amazing Applications with Next.js & Parse
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10">
            Create powerful, scalable web applications with modern tools and
            frameworks. Get started in minutes and deploy with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Learn More
            </Button>
          </div>

          {/* App Screenshot/Preview */}
          <div className="mt-16 relative mx-auto max-w-4xl">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
              <div className="h-8 bg-slate-100 dark:bg-slate-700 flex items-center px-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="p-4">
                <div className="aspect-video bg-slate-200 dark:bg-slate-600 rounded-lg flex items-center justify-center">
                  <p className="text-slate-500 dark:text-slate-400">
                    Application Preview
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="mb-4 md:mb-0">
            <Image
              src="/next.svg"
              alt="Logo"
              width={80}
              height={20}
              className="dark:invert"
            />
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              © 2024 Your Company. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <Link
              href="/"
              className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            >
              About
            </Link>
            <Link
              href="/privacy"
              className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            >
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
