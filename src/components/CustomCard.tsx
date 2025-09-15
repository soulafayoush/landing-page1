"use client";

import React from "react";

interface CustomCardProps {
  children: React.ReactNode;
  className?: string;
  shadow?: boolean;
  color?: "white" | "gray" | "blue" | "transparent";
}

export function CustomCard({ 
  children, 
  className = "",
  shadow = false,
  color = "white"
}: CustomCardProps) {
  const colorClasses = {
    white: "bg-white",
    gray: "bg-gray-100",
    blue: "bg-blue-50",
    transparent: "bg-transparent"
  };

  return (
    <div className={`
      rounded-lg border border-gray-200 
      ${shadow ? "shadow-lg" : "shadow-md"}
      ${colorClasses[color]}
      ${className}
    `}>
      {children}
    </div>
  );
}


export default CustomCard;