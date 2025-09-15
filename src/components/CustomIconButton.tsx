"use client";

import React from "react";

interface CustomIconButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  color?: "white" | "blue" | "gray";
  size?: "sm" | "md" | "lg";
}

export function CustomIconButton({ 
  children, 
  className = "", 
  onClick,
  color = "gray",
  size = "md"
}: CustomIconButtonProps) {
  const sizeClasses = {
    sm: "p-1",
    md: "p-2", 
    lg: "p-3"
  };

  const colorClasses = {
    white: "bg-white text-gray-900 hover:bg-gray-100",
    blue: "bg-blue-500 text-white hover:bg-blue-600", 
    gray: "bg-gray-500 text-white hover:bg-gray-600"
  };

  return (
    <button
      onClick={onClick}
      className={`
        rounded-full transition-colors
        ${sizeClasses[size]}
        ${colorClasses[color]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}