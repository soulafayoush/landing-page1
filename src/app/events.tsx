"use client";

import React from "react";

import EventCard from "@/components/event-card";
import { CustomTypography as Typography } from "@/components/CustomTypography";
// Update the EVENTS array to include a URL for each event
const EVENTS = [
  {
    img: "/image/events/award-achievement1.jpg",
    title: "جلسة تداول مباشرة مع المدرب عبدالرحمن",
    desc: "انضم إلى جلسة تداول حية حيث يقوم المدرب عبدالرحمن بتحليل السوق واتخاذ قرارات تداول في الوقت الحقيقي.",
    buttonLabel: "سجل مجاناً",
    url: "https://wa.me/963998861926", // Add the WhatsApp URL
  },
  {
    img: "/image/events/market-analysis.png",
    title: "تحليل الأسواق الأسبوعي",
    desc: "جلسة أسبوعية لتحليل اتجاهات الأسواق المالية وتحديد الفرص التداولية للأسبوع القادم.",
    buttonLabel: "سجل مجاناً",
    url: "https://wa.me/963998861926", // Add the WhatsApp URL
  },
  {
    img: "/image/events/qna-session.png",
    title: "جلسة أسئلة وأجوبة مع خبراء التداول",
    desc: "احصل على إجابات لأسئلتك من المدرب عبدالرحمن وفريق الخبراء. استفسر عن الاستراتيجيات وأساليب إدارة المخاطر.",
    buttonLabel: "احصل على تذكرة",
    url: "https://wa.me/963998861926", // Add the WhatsApp URL
  },
  {
    img: "/image/events/strategy-workshop.png",
    title: "ورشة عمل استراتيجيات التداول المتقدمة",
    desc: "تعلم استراتيجيات التداول المتقدمة بما في ذلك التحليل  وكيفية تطبيقها في الأسواق الحقيقية.",
    buttonLabel: "احصل على تذكرة",
    url: "https://wa.me/963998861926", // Add the WhatsApp URL
  },
];

export function Events() {
  // Define a function that handles the button click
  const handleButtonClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          الفعاليات القادمة
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          انضم إلى فعالياتنا التعليمية المصممة لمشاركة insights واتجاهات السوق
          وتجارب حقيقية من عالم التداول.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {EVENTS.map((props, idx) => (
          <EventCard
            key={idx}
            {...props}
            onClick={() => handleButtonClick(props.url)} // Pass the handler with the correct URL
          />
        ))}
      </div>
    </section>
  );
}

export default Events;