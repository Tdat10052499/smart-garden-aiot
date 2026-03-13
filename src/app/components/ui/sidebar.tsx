"use client";

import * as React from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, LayoutDashboard, FlaskConical, BookOpen, Settings } from 'lucide-react';
import { cn } from './utils';
import { Link, useLocation } from 'react-router';

export function Sidebar() {
  const [isExpanded, setIsExpanded] = React.useState(true);
  const location = useLocation();

  const navigationItems = [
    { id: 'home', path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'ai-lab', path: '/ai-lab', icon: FlaskConical, label: 'AI Lab' },
    { id: 'care-guide', path: '/care-guide', icon: BookOpen, label: 'Care Guide' },
    { id: 'settings', path: '/settings', icon: Settings, label: 'Settings' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className={cn(
      'flex flex-col h-[calc(100vh-2rem)] m-4 rounded-3xl bg-surface border-r border-border shadow-sm transition-[width] duration-300 ease-in-out flex-shrink-0',
      isExpanded ? 'w-64' : 'w-[88px]'
    )}>
      {/* Toggle Button (now relative since parent is flex item) */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-3 top-10 z-50 w-6 h-6 rounded-full bg-surface border border-border text-secondary hover:text-primary shadow-sm flex items-center justify-center cursor-pointer hover:bg-accent-secondary/20 transition-colors"
        title="Toggle Sidebar"
      >
        {isExpanded ? (
          <ChevronLeft size={14} className="rotate-180 transition-transform duration-300" />
        ) : (
          <ChevronRight size={14} />
        )}
      </button>

      {/* Logo */}
      <div className="p-5 pt-6 flex items-center justify-center md:justify-start">
        <div className="w-10 h-10 bg-accent-primary text-accent-text rounded-3xl flex items-center justify-center shadow-sm">
          <span className="font-bold text-sm">S</span>
        </div>
      </div>

      {/* MAIN Label */}
      <div className={cn(
        'text-[10px] font-bold tracking-wider text-secondary uppercase px-5 mb-2 mt-4 opacity-0 w-0 transition-all duration-300 ease-in-out',
        isExpanded && 'opacity-100 w-auto'
      )}>
        MAIN
      </div>

      {/* Nav Links */}
      <div className="flex-1 mt-6 flex flex-col gap-2 px-3 overflow-y-auto overflow-x-hidden pb-4">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              to={item.path}
              className={cn(
                'flex items-center p-3 rounded-xl text-secondary hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary transition-colors',
                isActive(item.path) && 'bg-accent-secondary/15 text-accent-primary font-semibold rounded-xl'
              )}
            >
              <Icon size={24} />
              <span className={cn(
                'whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ml-3',
                isExpanded ? 'w-auto opacity-100' : 'w-0 opacity-0 ml-0'
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* User Profile */}
      <div className="mt-auto p-3">
        <div className={cn(
          'flex items-center p-2 gap-3 rounded-2xl border border-border/50 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer transition-colors mx-1',
          !isExpanded && 'justify-center p-2 w-10 h-10 mx-auto border-0 rounded-full'
        )}>
          <div className="w-8 h-8 bg-accent-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="font-bold text-accent-primary text-sm">A</span>
          </div>
          <div className={cn('min-w-0',
            isExpanded ? 'opacity-100 block' : 'opacity-0 w-0 hidden'
          )}>
            <div className="text-primary font-semibold text-sm truncate">Admin User</div>
            <div className="text-secondary text-[10px] uppercase tracking-wide">Farm Manager</div>
          </div>
          <ChevronDown className={cn(
            'h-4 w-4 text-secondary ml-auto opacity-0 transition-opacity',
            isExpanded && 'opacity-100',
            !isExpanded && 'hidden'
          )} />
        </div>
      </div>
    </div>
  );
}

