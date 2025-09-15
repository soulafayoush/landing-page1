"use client";

import React from "react";
import Image from "next/image";
import { CustomTypography as Typography } from "@/components/CustomTypography";

const ACHIEVEMENTS = [
  {
    icon: "/image/achievements/students-achievemen.png",
    label: "+5000 طالب",
    description: "داخل وخارج سوريا"
  },
  {
    icon: "/image/achievements/experience-achievement.png",
    label: "5+ سنوات",
    description: "خبرة في التداول والأسواق المالية"
  },
  {
    icon: "/image/achievements/award-achievement.jpg",
    label: "أفضل مدرب 2023",
    description: "حائز على درع أفضل مدرب في دبي"
  },
  {
    icon: "/image/achievements/certificate-achievement.png",
    label: "شهادات معتمدة",
    description: "في التحليل الفني والاسواق المالية"
  },
  {
    icon: "/image/achievements/support.png",
    label: "دعم مستمر",
    description: "متابعة مستمرة واستشارات"
  },
  {
    icon: "/image/achievements/success-achievement.png",
    label: "نجاح الطلاب",
    description: "أكثر من 80% يحققون أرباح "
  }
];

function TrustedCompany() {
  return (
    <section className="py-8 px-8 lg:py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Typography variant="h6" className="mb-4 uppercase !text-gray-500">
            إنجازاتنا ونجاحاتنا
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-4">
            ثقة أكثر من 5000 طالب وطالبة
          </Typography>
          <Typography variant="lead" className="!text-gray-600 max-w-2xl mx-auto">
            نحن نفخر بمسيرة النجاح التي حققناها مع طلابنا في عالم التداول والأسواق المالية
          </Typography>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
          {ACHIEVEMENTS.map((achievement, key) => (
    
            <div 
              key={key} 
              className="text-center bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <Image
                  width={64}
                  height={64}
                  src={achievement.icon}
                  alt={achievement.label}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <Typography variant="h4" color="blue-gray" className="mb-2 font-bold">
                {achievement.label}
              </Typography>
              <Typography variant="small" className="!text-gray-600">
                {achievement.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedCompany;