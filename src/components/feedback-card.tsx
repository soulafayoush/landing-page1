"use client";

import React from "react";
import Image from "next/image"; // أضف هذا الاستيراد
import { CustomCardBody as CardBody } from "../components/CustomCardBody";
import { CustomTypography as Typography } from "../components/CustomTypography";

interface FeedbackCardProps {
  img?: string;
  feedback: string;
  client: string;
  title: string;
}

export function FeedbackCard({ img, feedback, client, title }: FeedbackCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm p-6 hover:shadow-md transition-shadow">
      <CardBody className="p-0">
        {/* صورة العميل */}
        {img && (
          <div className="flex justify-center mb-4">
            <Image 
              src={img} 
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
              alt={client}
            />
          </div>
        )}

        {/* اسم العميل */}
        <Typography variant="h6" color="blue-gray" className="mb-1 text-center font-semibold">
          {client}
        </Typography>

        {/* وظيفة/منصب العميل */}
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-4 text-center block font-normal text-gray-600"
        >
          {title}
        </Typography>

        {/* التقييم بالنجوم */}
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-amber-400 text-lg">★</span>
          ))}
        </div>

        {/* نص الشهادة */}
        <Typography
          variant="paragraph"
          className="text-gray-700 text-center leading-relaxed italic"
        >
          &quot;{feedback}&quot;
        </Typography>
      </CardBody>
    </div>
  );
}

export default FeedbackCard;