"use client";

import React, { useState, useEffect } from "react";

interface CustomCollapseProps {
  children: React.ReactNode;
  open: boolean;
  className?: string;
}

export function CustomCollapse({ 
  children, 
  open, 
  className = "" 
}: CustomCollapseProps) {
  const [height, setHeight] = useState(open ? "auto" : "0px");
  const [opacity, setOpacity] = useState(open ? 1 : 0);

  useEffect(() => {
    if (open) {
      setHeight("auto");
      setOpacity(1);
    } else {
      setHeight("0px");
      setOpacity(0);
    }
  }, [open]);

  return (
    <div
      className={`overflow-hidden transition-all duration-300 ${className}`}
      style={{
        height: height,
        opacity: opacity
      }}
    >
      {children}
    </div>
  );
}