import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
export const metadata: Metadata = { title: 'GharSe | Homemade food from verified people', description: 'Discover fresh homemade meals from your community.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><Navbar />{children}<footer className="mt-24 border-t border-black/5 bg-white"><div className="container-shell flex flex-col gap-4 py-10 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between"><div><b className="text-lg text-[#1f6b4f]">GharSe</b><p className="mt-1">Good food. Made at home. Shared locally.</p></div><div className="flex gap-5"><a href="/safety">Safety & verification</a><a href="/legal">Terms</a><a href="/contact">Contact</a></div></div></footer></body></html>; }
