import { navigateTo } from "@/utils/navigate";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import clsx from "clsx";
import { SetStateAction } from "react";

type ContentCardType = {
  title: string;
  description: string;
  url: string;
  cardImage?: string;
  newCard?: boolean;
  isHovered: boolean;
  setIsHovered?: React.Dispatch<SetStateAction<boolean>>;
};

const ContentCard = ({
  title,
  description,
  cardImage,
  url,
  newCard,
  isHovered,
  setIsHovered,
}: ContentCardType) => {
  const cardClick = () => {
    navigateTo(url);
    setIsHovered?.(false);
  };

  return (
    <Card
      className={clsx(
        "w-full max-w-xs min-w-xs drop-shadow-2xl border-primary hover:scale-105 transition-all duration-300 bg-slate-50 dark:bg-zinc-900 rounded-2xl border-2 hover:cursor-pointer hover:opacity-100",
        cardImage ? "h-60" : "h-35",
        isHovered ? "opacity-40" : "opacity-100"
      )}
      onClick={cardClick}
    >
      <CardHeader>
        <CardTitle>
          <h1 className="flex flex-row gap-2 h-7 text-shadow-black text-shadow-2xs text-lg">
            {title} {newCard && <ContentCardNewIcon />}
          </h1>
        </CardTitle>
        <CardDescription className="h-15">{description}</CardDescription>
        {cardImage && (
          <img src={cardImage} className="mt-2 opacity-80 rounded-2xl h-20" />
        )}
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
