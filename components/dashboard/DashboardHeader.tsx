'use client';

import { useAuthStore } from '@/store/authStore';
import { User } from 'lucide-react';
import Link from 'next/link';

export default function DashboardHeader() {
  const { user, bank } = useAuthStore();
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <header className="px-5 pt-5 pb-6 animate-fade-up">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{greeting},</p>
          <h1 className="text-2xl font-bold text-foreground">
            {user?.firstName} {user?.lastName}
          </h1>
          {bank && <p className="text-xs text-gray-500mt-0.5">{bank.name}</p>}
        </div>

        <div className="flex items-center gap-3">
          {/* <Link
            href="/notifications"
            className="relative p-2.5 rounded-full bg-white transition-shadow"
          >
            <Bell className="w-5 h-5 text-foreground" />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#006fcf] rounded-full border-2 border-card" />
          </Link> */}

          <Link
            href="/profile"
            className="p-2.5 rounded-full bg-white transition-shadow"
          >
            <User className="w-5 h-5 text-foreground" />
          </Link>
        </div>
      </div>
    </header>
  );
}
