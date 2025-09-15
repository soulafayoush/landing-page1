import { CustomCardHeader as CardHeader } from "@/components/CustomCardHeader";
import { SimpleButton as Button } from "@/components/SimpleButton";
import { CustomCardBody as CardBody } from "@/components/CustomCardBody";
import { CustomCard as Card } from "@/components/CustomCard"; 
import Image from "next/image";
import { CustomTypography as Typography } from "@/components/CustomTypography";

interface CourseCardProps {
  img: string;
  tag: string;
  title: string;
  desc: string;
  label: string;
}

export function CourseCard({ img, tag, title, desc, label }: CourseCardProps) {
  return (
    <Card className="border">
      <CardHeader className="h-64">
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full object-cover scale-[1.1]"
        />
      </CardHeader>
      <CardBody>
        <div className="flex items-center gap-2">
          <Typography
            variant="small"
            color="blue"
            className="mb-2 font-normal text-gray-500"
          >
            {tag}
          </Typography>
        </div>
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-900"
        >
          <Typography variant="h5" className="mb-2 normal-case">
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-bold !text-gray-500">
          {desc}
        </Typography>
        <Button color="gray">{label}</Button> 
      </CardBody>
    </Card>
  );
}

export default CourseCard;