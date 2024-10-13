'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { Search, User } from 'lucide-react'
import LoginModal from '@/components/Modals/LoginModal'
import { createClient } from '@/util/supabase/client'

export default function Navbar() {
    const supabase = createClient();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.auth.getUser();
            if (data) {
                setUser(data.user);
            }
        };
        
        fetchData();
    }, [supabase]);

    useEffect(() => {
        document.body.classList.toggle('overflow-hidden', isModalOpen);
        return () => {
          document.body.classList.remove('overflow-hidden');
        };
    }, [isModalOpen]);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        setUser(null);
        setIsDropdownOpen(false);
    };

    const handleUserIconClick = () => {
        if (user) {
            setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown for sign-out if user is signed in
        } else {
            setIsModalOpen(true); // Open login modal if user is not signed in
        }
    };

    return(
        <header className="sticky top-0 bg-white z-10 p-4 border-b flex justify-between items-center">
            <Image src="/Logo.jpg" alt="Campus Cart" width={150} height={50} />
            <div className="flex-grow mx-4 max-w-2xl">
                <div className="relative">
                    <Input
                        type="search"
                        placeholder="Search for items..."
                        className="w-full pl-10 pr-12 py-2 borderborder-gray-300 rounded-full " />
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
            </div>

            {isModalOpen && <LoginModal handleClose={handleCloseModal} />}

            <div className="relative">
                <Button size="icon" variant="ghost" onClick={handleUserIconClick}>
                    <User className="h-6 w-6" />
                </Button>

                {isDropdownOpen && user && (
                    <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg p-2">
                        <Button variant="ghost" onClick={handleSignOut}>
                            Sign Out
                        </Button>
                    </div>
                )}
            </div>
        </header>
    );
}
