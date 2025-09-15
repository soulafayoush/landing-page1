"use client";

import Image from "next/image";

import { CustomTypography as Typography } from "@/components/CustomTypography";
import { CustomCard as Card } from "@/components/CustomCard"; 
function Hero() {
  return (
    <div className="!flex h-[55vh] w-full items-center justify-center px-10 text-center">
   <Image
  width={1200}
  height={1200}
  src="/image/profile.jpg"
  alt="trading-background"
  className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
  priority 
/>
      <div className="container mx-auto mt-28">
        <div className="grid grid-cols-12 justify-center">
          <Card className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7 mx-auto">
            
            {/* الصورة الشخصية */}
            <div className="flex justify-center mb-6">
              <Image
                width={120}
                height={120}
                src="/image/profile.jpg" 
                alt="المدرب عبدالرحمن عبدالله"
                className="rounded-full border-4 border-blue-500 shadow-lg"
              />
            </div>
            
            <Typography
              variant="h1"
              color="blue-gray"
              className="lg:text-4xl !leading-snug text-3xl font-bold"
            >
              المدرب عبدالرحمن عبدالله
            </Typography>
            
            <Typography variant="lead" className="mb-4 mt-6 !text-gray-900">
              خبرة أكثر من 5 سنوات في عالم التداول والأسواق المالية
            </Typography>
            
            <Typography variant="paragraph" className="mb-6 !text-gray-700">
              دربت أكثر من +5000 طالب وطالبة داخل وخارج سوريا
            </Typography>
            
            <div className="bg-amber-400 text-blue-900 px-6 py-2 rounded-full font-bold inline-block mt-2 mb-6">
              حائز على درع كأفضل مدرب لسنة 2023 في دبي
            </div>
            
            {/* <div className="mb-8 flex justify-center gap-4">
              <Button color="blue">خدماتنا</Button>
            </div>
             */}
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Hero;