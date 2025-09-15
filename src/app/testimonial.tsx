"use client";

import Image from "next/image";
import { CustomCardBody as CardBody } from "../components/CustomCardBody";
import { CustomCard as Card } from "../components/CustomCard"; 
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { CustomTypography as Typography } from "../components/CustomTypography";
function TradingBotSection() {
  return (
    <section id="ai-trading" className="px-8 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Typography variant="h2" color="blue-gray" className="my-3 font-bold"> 
            خدمة التداول الآلي بالذكاء الاصطناعي
          </Typography>
          <Typography
            variant="lead"
            className="!text-gray-500 lg:w-8/12 mx-auto font-semibold" 
          >
            بوت تداول ذكي يعمل نيابة عنك، يحقق أرباحًا يومية مضمونة دون الحاجة لأي تدخل منك.
          </Typography>
        </div>
        <Card color="transparent" shadow={false}>
          <CardBody className="col-span-full gap-10 place-items-center overflow-visible grid grid-cols-1 lg:grid-cols-2">
            
            <div className="col-span-1 w-full text-right">
              <Typography variant="h4" color="blue-gray" className="mb-4 font-extrabold"> 
                كيف يعمل البوت؟
              </Typography>
              <Typography className="mb-4 w-full font-medium text-gray-500 lg:w-8/12 mx-auto font-semibold"> 
                يعمل البوت على دخول الصفقات والخروج منها بوقت زمني قصير، باتباع استراتيجيات التحليل الفني  ، بالإضافة إلى مراعاة إدارة رأس المال والمخاطر.
              </Typography>
              
              <div className="mt-8">
                <Typography variant="h5" color="blue-gray" className="mb-4 font-bold">
                  أسعار الاشتراك:
                </Typography>
                <ul className="list-disc list-inside space-y-2 text-right">
                  <li className="flex items-center justify-end">
                    <Typography className="!text-gray-600 font-semibold"> 
                      $اشتراك شهري: 99.99
                    </Typography>
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end">
                    <Typography className="!text-gray-600 font-semibold"> 
                      $اشتراك ثلاث أشهر: 199.99
                    </Typography>
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                  </li>
                  <li className="flex items-center justify-end">
                    <Typography className="!text-gray-600 font-semibold"> 
                      $اشتراك مدى الحياة: 299.99
                    </Typography>
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full xl:w-[600px] flex items-center overflow-hidden rounded-xl justify-center col-span-1 h-full">
              <Image
                width={768}
                height={768}
                src="/image/ai-trading-bot.png" 
                alt="بوت تداول"
                className="w-full h-full object-cover"
              />
            </div>
            
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default TradingBotSection;