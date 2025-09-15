"use client";

import { CustomTypography as Typography } from "@/components/CustomTypography";
import CourseCard from "@/components/course-card";

const COURSES = [
  {
    img: "/image/courses/beginner.jpg",
    tag: "باقة Beginner",
    title: "التداول للمبتدئين",
    label: "29.99$",
    desc: "باقة مخصصة للأشخاص المبتدئين في مجال التداول وليس لديهم أدنى فكرة. تشمل: تعليم الأساسيات، التحليل الأساسي، والتحليل الفني. المميزات: شهادة، ودخل يومي إضافي. المدة: شهر (15 جلسة).",
  },
  {
    img: "/image/courses/intermediate.png",
    tag: "باقة Intermediate ",
    title: "التداول المتوسط",
    label: "59.99$",
    desc: "باقة مخصصة للأشخاص الذين لديهم اطلاع بسيط عن المجال. تشمل: التحليل الأساسي والفني، إدارة المخاطر ورأس المال، واستراتيجيات ربح تراكمي. المميزات: شهادة، دخل يومي، وقناة توصيات خاصة لمدة شهر مجاناً. المدة: شهرين (30 جلسة).",
  },
  {
    img: "/image/courses/advanced.png",
    tag: "باقة Advanced",
    title: "التداول للمحترفين",
    label: "99.99$",
    desc: "باقة مخصصة لمن يريدون احتراف التداول بشكل كامل. تشمل: تحليل  إدارة المخاطر، استراتيجيات ، والمزيد. المميزات: شهادة، دخل يومي، قناة توصيات مدى الحياة، استشارات خبراء، وتحليل أسبوعي. المدة: 3 أشهر (45 جلسة + جلسة استشارية).",
  },
];

export function ExploreCourses() {
  return (
    <section id="courses" className="px-8 py-20 text-center">
      <div className="container mx-auto mb-16">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          الباقات التعليمية
        </Typography>
        <Typography
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-8/12 lg:px-8"
        >
          اختر الباقة المناسبة لمستواك وابدأ رحلتك في عالم التداول المحترف.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        {COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default ExploreCourses;