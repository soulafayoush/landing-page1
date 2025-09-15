"use client";

import React from "react";
import { CustomTypography as Typography } from "../components/CustomTypography";
import {
  UserGroupIcon,
  AcademicCapIcon,
  ClockIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";

// تعريف مكون الإحصائيات الصغير
function StatsItem({ icon: Icon, count, title }: { icon: React.ElementType; count: string; title: string }) {
  return (
    <div className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <Icon className="h-10 w-10 text-gray-800 mx-auto mb-3" /> 
      <Typography variant="h3" color="blue-gray" className="mb-2 text-3xl font-bold">
        {count}
      </Typography>
      <Typography variant="small" className="!text-gray-700 font-semibold">
        {title}
      </Typography>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="px-8 py-16 bg-gray-50"> 
      <div className="container mx-auto">
        <div className="text-center mb-12"> 
          <Typography variant="h2" color="blue-gray" className="mb-4">
            إنجازاتنا بالأرقام
          </Typography>
          <Typography variant="lead" className="!text-gray-600 max-w-2xl mx-auto">
            أرقام تتحدث عن مسيرة نجاحنا في تدريب وتأهيل المتداولين
          </Typography>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8"> 
          <StatsItem icon={UserGroupIcon} count="+5000" title="طالب وطالبة" />
          <StatsItem icon={ClockIcon} count="5+" title="سنوات خبرة" />
          <StatsItem icon={AcademicCapIcon} count="3" title="باقات تدريبية" />
          <StatsItem icon={TrophyIcon} count="2023" title="أفضل مدرب في دبي" />
        </div>
      </div>
    </section>
  );
}

export default StatsSection;