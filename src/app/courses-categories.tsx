"use client";
import { SimpleButton as Button } from "@/components/SimpleButton";
import { CustomCardBody as CardBody } from "@/components/CustomCardBody";
import { CustomCard as Card } from "@/components/CustomCard"; 
import { CustomTypography as Typography } from "@/components/CustomTypography";
import Image from "next/image";
import Link from "next/link";
function Services() { 
  return (
    <section id="services" className="container mx-auto px-8 py-20 text-center">
      <div className="mb-16 grid place-items-center">
        <Typography variant="h2" color="blue-gray" className="my-3">
          خدماتي
        </Typography>
        <Typography variant="lead" className="!text-gray-500 lg:w-8/12">
          مجموعة شاملة من الباقات والخدمات المصممة لتمكينك من إتقان عالم التداول وتحقيق أرباح مستمرة.
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* الكورسات التعليمية */}
        <Card className="relative grid h-full w-full place-items-center overflow-hidden text-center cursor-pointer hover:scale-105 transition-transform">
          {/* الصورة الخلفية */}
          <Image
            src="/image/education.jpg"
            alt="الكورسات التعليمية"
            width={1200}
            height={800}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 h-full w-full bg-black/50" />
          <CardBody className="relative w-full">
            <Typography variant="h4" className="mt-9" color="white">
              الكورسات التعليمية
            </Typography>
            <Typography color="white" className="mt-4 mb-14 font-normal opacity-50">
              اختر الباقة المناسبة لمستواك وابدأ رحلتك في عالم التداول.
            </Typography>
            <Link href="#courses" passHref> 
              <Button size="sm" color="white">
                عرض التفاصيل
              </Button>
            </Link> 
          </CardBody>
        </Card>

        {/* خدمة التداول الآلي */}
        <Card className="relative grid h-full w-full place-items-center overflow-hidden text-center cursor-pointer hover:scale-105 transition-transform">
          {/* الصورة الخلفية */}
          <Image
            src="/image/ai-trading.jpg"
            alt="خدمة التداول الآلي"
            width={1200}
            height={800}
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* تم تعديل الشفافية هنا من /75 إلى /40 */}
          <div className="absolute inset-0 h-full w-full bg-black/55" />
          <CardBody className="relative w-full">
            <Typography variant="h4" className="mt-9" color="white">
              خدمة التداول الآلي بالذكاء الاصطناعي
            </Typography>
            <Typography color="white" className="mt-4 mb-14 font-normal opacity-50">
              اجعل البوت يتداول عنك ويحقق أرباحًا يومية مضمونة.
            </Typography>
            <Link href="#ai-trading" passHref>
              <Button size="sm" color="white">
                عرض التفاصيل
              </Button>
            </Link> 
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Services;