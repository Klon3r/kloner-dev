import { navigateTo } from "@/utils/navigate";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

type ContentCardType = {
  title: string;
  description: string;
  url: string;
  cardImage?: string;
};

const ContentCard = ({
  title,
  description,
  cardImage,
  url,
}: ContentCardType) => {
  const cardClick = () => {
    navigateTo(url);
  };

  return (
    <Card
      className="w-full max-w-sm border-primary hover:scale-105 transition-all duration-300"
      onClick={cardClick}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <img src={cardImage} className="rounded-2xl pt-2" />
      </CardHeader>
    </Card>
  );
};

export default ContentCard;
