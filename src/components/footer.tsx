"use client";

import React from "react";
import { CustomTypography as Typography } from "@/components/CustomTypography";
import Image from "next/image"; 
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPaypal, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineLocalAtm } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";

const LINKS = [
  {
    title: "الخدمات",
    items: [
      { label: "الكورسات التعليمية", href: "#" },
      { label: "التداول الآلي", href: "#" },
      { label: "النتائج", href: "#" },
      { label: "آراء الطلاب", href: "#" },
    ],
  },
  {
    title: "روابط سريعة",
    items: [
      { label: "الرئيسية", href: "#" },
      { label: "المدرب", href: "#" },
      { label: "طرق الدفع", href: "#" },
      { label: "تواصل معنا", href: "#" },
    ],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer id="contact" className="px-8 pt-24 pb-8 bg-gray-50">
      <div className="container max-w-6xl flex flex-col mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 !w-full gap-10">
          {/* معلومات التواصل */}
          <div className="lg:col-span-1 text-right">
            <Typography variant="h6" color="blue-gray" className="mb-4">
              المدرب عبدالرحمن عبدالله
            </Typography>
            <Typography className="!text-gray-600 mb-4">
              خبرة أكثر من 5 سنوات في عالم التداول والاسواق المالية.
            </Typography>
            <div className="flex flex-col gap-2">
              <Typography className="!text-gray-600 flex items-center justify-end gap-2">
                +963 998 861 926
                <FaPhoneAlt className="h-4 w-4" />
              </Typography>
              <Typography className="!text-gray-600 flex items-center justify-end gap-2">
               abdalrhman9abdullah0@gmail.com
                <FaEnvelope className="h-4 w-4" />
              </Typography>
              <div className="flex justify-end gap-3 mt-4">
                <a href="https://wa.me/963998861926" target="_blank" rel="noopener noreferrer" className="text-gray-600 transition-colors hover:text-green-500">
                  <FaWhatsapp className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/a_fx901" target="_blank" rel="noopener noreferrer" className="text-gray-600 transition-colors hover:text-pink-500">
                  <FaInstagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* الروابط */}
          <div className="flex col-span-1 items-start gap-10 mb-10 lg:mb-0 lg:col-span-2 justify-center">
            {LINKS.map(({ title, items }) => (
              <ul key={title} className="text-right">
                <Typography variant="h6" color="blue-gray" className="mb-4">
                  {title}
                </Typography>
                {items.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="py-1 font-normal !text-gray-600 transition-colors hover:!text-gray-900 block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          {/* طرق الدفع */}
          <div className="lg:col-span-1 text-right">
            <Typography variant="h6" className="mb-3">
              طرق الدفع المتاحة
            </Typography>
            <Typography className="!text-gray-600 font-normal mb-4 text-base">
              للتسهيل على الطلاب من داخل وخارج سوريا.
            </Typography>

            <div className="flex flex-col gap-2 text-right">
              <Typography variant="h6" className="font-bold">
                داخل سوريا
              </Typography>
              <ul className="!text-gray-600 list-none space-y-2">
                <li className="flex items-center justify-end gap-2">
                  شام كاش
                  <MdOutlineLocalAtm className="w-5 h-5 text-green-700" />
                </li>
                <li className="flex items-center justify-end gap-2">
                  تحويل الهرم أو الفؤاد
                  <GiReceiveMoney className="w-5 h-5 text-orange-500" />
                </li>
                <li className="flex items-center justify-end gap-2">
                  عملات رقمية USDT
                  <Image
                    src="/image/logos/usdt.svg"
                    alt="USDT Icon"
                    width={20}
                    height={20}
                    className="w-5 h-5 text-yellow-500"
                  />
                </li>
              </ul>
              <Typography variant="h6" className="font-bold mt-4">
                خارج سوريا
              </Typography>
              <ul className="!text-gray-600 list-none space-y-2">
                <li className="flex items-center justify-end gap-2">
                  PAYPAL
                  <FaPaypal className="w-5 h-5 text-blue-500" />
                </li>
                <li className="flex items-center justify-end gap-2">
                  USDT
                  <Image
                    src="/image/logos/usdt.svg"
                    alt="USDT Icon"
                    width={20}
                    height={20}
                    className="w-5 h-5 text-yellow-500"
                  />
                </li>
                <li className="flex items-center justify-end gap-2">
                  PERFECT MONEY
                  <GiReceiveMoney className="w-5 h-5 text-blue-800" />
                </li>
                <li className="flex items-center justify-end gap-2">
                  MONEY GRAM
                  <GiReceiveMoney className="w-5 h-5 text-red-500" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Typography
          color="blue-gray"
          className="text-center mt-16 font-normal !text-gray-600"
        >
          &copy; {CURRENT_YEAR} المدرب عبدالرحمن عبدالله. جميع الحقوق محفوظة.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;