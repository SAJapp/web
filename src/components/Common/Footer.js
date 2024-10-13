"use client";

import { Bookmark, House } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-2 flex justify-around">
            <Link href="/" passHref>
                <Button variant="ghost">
                    <House />
                </Button>
            </Link>

            <Link href="/upload" passHref>
                <Button variant="ghost">
                    <Bookmark />
                </Button>
            </Link>

            <Link href="/upload" passHref>
                <Button variant="ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                </Button>
            </Link>

        </div>
    );
}
