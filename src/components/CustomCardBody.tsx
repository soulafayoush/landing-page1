"use client";

import React from "react";

interface CustomCardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export function CustomCardBody({ 
  children, 
  className = "" 
}: CustomCardBodyProps) {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
}

