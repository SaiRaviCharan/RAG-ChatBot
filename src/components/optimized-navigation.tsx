"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";

interface BackButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function BackButton({ href, children, className = "" }: BackButtonProps) {
  const [isNavigating, setIsNavigating] = useState(false);

  const handleClick = () => {
    setIsNavigating(true);
    // Reset after navigation (cleanup in case of navigation cancellation)
    setTimeout(() => setIsNavigating(false), 2000);
  };

  return (
    <Link href={href} prefetch={true} onClick={handleClick}>
      <Button 
        variant="ghost" 
        className={`hover:bg-gray-100 transition-colors ${className}`}
        disabled={isNavigating}
      >
        {isNavigating ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <ArrowLeft className="mr-2 h-4 w-4" />
        )}
        {children}
      </Button>
    </Link>
  );
}

interface NavLinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export function NavLinkButton({ 
  href, 
  children, 
  className = "", 
  size = "default",
  variant = "default"
}: NavLinkButtonProps) {
  const [isNavigating, setIsNavigating] = useState(false);

  const handleClick = () => {
    setIsNavigating(true);
    // Reset after navigation (cleanup in case of navigation cancellation)
    setTimeout(() => setIsNavigating(false), 2000);
  };

  return (
    <Link href={href} prefetch={true} onClick={handleClick}>
      <Button 
        size={size}
        variant={variant}
        className={`transition-colors ${className}`}
        disabled={isNavigating}
      >
        {isNavigating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </Button>
    </Link>
  );
}