"use client";

import React from "react";

interface CustomCardHeaderProps {
  children: React.ReactNode;
  className?: string;
  floated?: boolean;
}

export function CustomCardHeader({ 
  children, 
  className = "",
  floated = false
}: CustomCardHeaderProps) {
  return (
    <div className={`
      ${floated ? "float-left" : ""}
      ${className}
    `}>
      {children}
    </div>
  );
}