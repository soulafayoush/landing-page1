"use client";

import React from "react";


import FeedbackCard from "@/components/feedback-card";

import { CustomTypography as Typography } from "@/components/CustomTypography";

const FEEDBACKS = [
  {
    feedback:
      "الدورة المتقدمة كانت نقطة تحول حقيقية! الشرح العملي والاستراتيجيات الفريدة مكنتني من تحقيق نتائج لم أكن أحلم بها. المدرب عبدالرحمن خبير بمعنى الكلمة.",
    client: "ليلى حسن",
    title: "خريجة باقة متقدم",
    //  img: "/image/students/student1.jpg",
  },
  {
    feedback:
      "خدمة التداول الآلي هي الأفضل لتوفير الوقت. أصبحت أحقق أرباحًا جيدة بشكل مستمر دون الحاجة لقضاء ساعات أمام الشاشات. أوصي بها لكل من يبحث عن دخل سلبي.",
    client: "فهد القحطاني",
    title: "مشترك خدمة التداول الآلي",
    // img: "/image/students/student2.jpg",
  },
  {
    feedback:
      "بدأت كليًا من الصفر وبفضل باقة Beginner، اكتسبت الثقة والمعرفة الأساسية. الآن أشعر بالقدرة على اتخاذ قرارات تداول مستنيرة. شكرًا للمدرب على صبره وشرحه الوافي.",
    client: "نور يوسف",
    title: "خريجة باقة مبتدأ",
    // img: "/image/students/student3.jpg",
  },
  {
    feedback:
      "التوجيه الشخصي الذي حصلت عليه كان لا يقدر بثمن. ساعدني في تجاوز التحديات وتطوير خطة تداول شخصية تناسب أهدافي تمامًا.",
    client: "سامي العلي",
    title: "مستفيد من الاستشارات الفردية",
    // img: "/image/students/student4.jpg",
  },
  {
    feedback:
      "المجتمع الداعم في المنتدى رائع! تبادل الخبرات مع المتداولين الآخرين والحصول على إجابات سريعة من الخبراء أضاف الكثير لتجربتي.",
    client: "مريم أحمد",
    title: "عضوة في مجتمع المتداولين",
    // img: "/image/students/student5.jpg",
  },
  {
    feedback:
      "منهجية التعليم واضحة ومنظمة جدًا، وهذا ما كنت أبحث عنه. لم تعد فوضى المعلومات عائقًا أمامي، والآن أستطيع رؤية طريق واضح للنجاح.",
    client: "طارق محمود",
    title: "خريج باقة متقدم",
    // img: "/image/students/student6.jpg",
  },
];

export function StudentsFeedback() {
  return (
       <section
     id="feedback" className="px-8 py-20 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/image/black.jpg')" }}
       >
     
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="container mx-auto relative z-10">
        {" "}
     
        <div className="mb-16 flex flex-col items-center w-full text-center">
          <Typography variant="h2" color="white" className="mb-2">
            ما يقوله طلابنا
          </Typography>
          <Typography variant="lead" className="mb-10 max-w-3xl !text-gray-200">
            لا تأخذ كلامنا فقط، استمع إلى تجارب طلابنا الذين حققوا النجاح في
            عالم التداول.
          </Typography>
        </div>

        <div className="grid gap-x-8 gap-y-12 lg:px-32 grid-cols-1 md:grid-cols-3">
          {FEEDBACKS.map((props, key) => (
              <FeedbackCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudentsFeedback;