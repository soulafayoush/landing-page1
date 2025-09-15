import React from "react";
import Image from "next/image";
import { CustomCardHeader as CardHeader } from "../components/CustomCardHeader";
import { SimpleButton as Button } from "../components/SimpleButton";
import { CustomCardBody as CardBody } from "../components/CustomCardBody";
import { CustomCard as Card } from "../components/CustomCard"; 
import { CustomTypography as Typography } from "../components/CustomTypography";
interface EventCardProps {
  img: string;
  title: string;
  desc: string;
  buttonLabel: string;
  onClick?: () => void; // Add this line
}

export function EventCard({ img, title, desc, buttonLabel, onClick }: EventCardProps) {
  return (
    <Card color="transparent" shadow={false}>
   <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-0">
        <Typography variant="h5" className="mb-2">
          {title}
        </Typography>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <Button color="gray" size="sm" onClick={onClick}> 
          {buttonLabel}
        </Button>
      </CardBody>
    </Card>
  );
}

export default EventCard;