import { GameType } from "@/pages/GameLog";
import { Card, CardDescription, CardHeader } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useEffect, useState } from "react";
import clsx from "clsx";

type GameCardType = {
  gameList: GameType[];
};

const GameCard = ({ gameList }: GameCardType) => {
  const [hoverOver, setHoverOver] = useState(false);
  const [cardClicked, setCardClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const checkMobileDevice = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const gameCardHover = () => {
    if (!isMobile) setHoverOver(true);
  };

  const gameCardHoverOut = () => {
    if (!isMobile) setHoverOver(false);
  };

  const gameCardClick = () => {
    if (isMobile) {
      setCardClicked((prev) => !prev);
    }
  };

  const showBackOfCard = hoverOver || cardClicked;

  // Check for mobile sizing
  useEffect(() => {
    window.addEventListener("resize", checkMobileDevice);
    return () => {
      window.removeEventListener("resize", checkMobileDevice);
    };
  }, []);

  return (
    <Carousel className="w-full max-w-xs ">
      <CarouselContent>
        {gameList.map((game) => (
          <CarouselItem
            key={game.game_id}
            onMouseOut={gameCardHoverOut}
            onMouseOver={gameCardHover}
            onClick={gameCardClick}
          >
            <Card className="py-0 border-primary border-3 rounded-2xl">
              <img
                src={game.game_cover}
                className={clsx(
                  "rounded-2xl",
                  showBackOfCard ? "opacity-10" : ""
                )}
              />
              {showBackOfCard && (
                <GameCardHoverState
                  gameTitle={game.game_title}
                  completionDate={game.completion_date}
                  platform={game.platform}
                  notes={game.notes}
                />
              )}
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div onClick={() => setCardClicked(false)}>
        <CarouselPrevious className="hover:scale-105" />
      </div>
      <div onClick={() => setCardClicked(false)}>
        <CarouselNext className="hover:scale-105" />
      </div>
    </Carousel>
  );
};

type GameCardHoverInfoType = {
  gameTitle: string;
  completionDate: string;
  platform: string;
  notes?: string;
};

const GameCardHoverState = ({
  gameTitle,
  completionDate,
  platform,
  notes,
}: GameCardHoverInfoType) => {
  const formattedDate = new Date(completionDate).toLocaleDateString();

  return (
    <div className="absolute w-80 flex flex-col h-full justify-between transition-opacity duration-00 delay-500">
      <div>
        <CardHeader className="w-full pt-3 pl-4 text-2xl">
          {gameTitle}
        </CardHeader>
      </div>
      <div className="pb-10">
        <CardHeader className="pt-1 pl-2 text-xl">Platform</CardHeader>
        <CardDescription className="px-2 text-lg flex flex-wrap">
          {platform}
        </CardDescription>
        <CardHeader className="pt-1 pl-2 text-xl">Finished</CardHeader>
        <CardDescription className="px-2 text-lg flex flex-wrap">
          {formattedDate}
        </CardDescription>
        {notes && (
          <>
            <CardHeader className="pt-1 pl-2 text-xl">Notes</CardHeader>
            <CardDescription className="px-2 text-lg flex flex-wrap break-keep">
              {notes}
            </CardDescription>
          </>
        )}
      </div>
    </div>
  );
};

export default GameCard;
