"use client";

import { SimpleButton as Button } from "@/components/SimpleButton";

export function FixedPlugin() {
  return (
    <a href="https://www.material-tailwind.com" target="_blank">
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >
     اتصل بنا للاستفسار
      </Button>
    </a>
  );
}
