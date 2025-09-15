import React from "react";
import { CustomCard as Card } from "../components/CustomCard"; 
import { CustomTypography as Typography } from "../components/CustomTypography";
interface StatsCardProps {
  icon: React.ElementType;
  count: string;
  title: string;
  description: string;
}

export function StatsCard({ icon: Icon, count, title, description }: StatsCardProps) {
  return (
    <Card shadow={true} className="items-center border border-gray-200 p-6 rounded-lg">
      <Icon className="h-7 w-7 text-gray-900" />
      <Typography variant="h1" color="blue-gray" className="mb-2 mt-4 text-5xl">
        {count}
      </Typography>
      <Typography variant="h6" className="mb-2 font-normal text-blue-gray-500">
        {title}
      </Typography>
      <Typography variant="paragraph" className="!text-gray-600 font-normal text-center">
        {description}
      </Typography>
    </Card>
  );
}

export default StatsCard;