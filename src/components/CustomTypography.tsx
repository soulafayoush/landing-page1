"use client";

import React from "react";

interface CustomTypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "lead" | "paragraph" | "small";
  color?: string;
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

export function CustomTypography({ 
  variant = "paragraph", 
  color = "gray-900", 
  className = "", 
  children,
  as: Component = "p"
}: CustomTypographyProps) {
  const variantStyles = {
    h1: "text-4xl font-bold lg:text-5xl",
    h2: "text-3xl font-bold lg:text-4xl",
    h3: "text-2xl font-bold lg:text-3xl",
    h4: "text-xl font-bold lg:text-2xl",
    h5: "text-lg font-bold lg:text-xl",
    h6: "text-base font-bold lg:text-lg",
    lead: "text-xl font-normal",
    paragraph: "text-base font-normal",
    small: "text-sm font-normal"
  };

  return (
    <Component className={`text-${color} ${variantStyles[variant]} ${className}`}>
      {children}
    </Component>
  );
}

export default CustomTypography;