"use client";

import React from "react";

interface SimpleButtonProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  color?: "white" | "blue" | "gray";
  className?: string;
  onClick?: () => void; 
}

export function SimpleButton({ 
  children, 
  size = "md", 
  color = "blue",
  className = "",
  onClick // أضف هذا
}: SimpleButtonProps) {
  const baseClasses = "rounded-lg font-medium transition-colors";
  
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base", 
    lg: "px-6 py-3 text-lg"
  };

  const colorClasses = {
    white: "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50",
    blue: "bg-blue-500 text-white hover:bg-blue-600",
    gray: "bg-gray-500 text-white hover:bg-gray-600"
  };

  return (
    <button
      onClick={onClick} 
      className={`${baseClasses} ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
    >
      {children}
    </button>
  );
}