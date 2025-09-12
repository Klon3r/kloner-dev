import { navigateTo } from "@/utils/navigate";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

type ContentCardType = {
  title: string;
  description: string;
  url: string;
  cardImage?: string;
  newCard?: boolean;
};

const ContentCard = ({
  title,
  description,
  cardImage,
  url,
  newCard,
}: ContentCardType) => {
  const cardClick = () => {
    navigateTo(url);
  };

  return (
    <Card
      className="w-full max-w-sm border-primary hover:scale-105 transition-all duration-300 bg-slate-50 dark:bg-zinc-900"
      onClick={cardClick}
    >
      <CardHeader>
        <CardTitle>
          <div className="flex flex-row gap-2">
            {title} {newCard && <ContentCardNewIcon />}
          </div>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
        <img src={cardImage} className="rounded-2xl pt-2" />
      </CardHeader>
    </Card>
  );
};

const ContentCardNewIcon = () => {
  return (
    <span className="relative flex ml-2">
      <span className="absolute inline-flex size-2 animate-ping dark:bg-pink-400 bg-pink-600 opacity-75 rounded-full"></span>
      <span className="relative inline-flex size-2 rounded-full dark:bg-pink-400 bg-pink-600">
        <div className="ml-2.5 dark:text-pink-400 text-pink-600">new</div>
      </span>
    </span>
  );
};

export default ContentCard;
