import { GameType } from "@/pages/GameLog";
import { Card, CardHeader } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useState } from "react";
import clsx from "clsx";

type GameCardType = {
  gameList: GameType[];
};

const GameCard = ({ gameList }: GameCardType) => {
  const [hoverOver, setHoverOver] = useState(false);
  const [cardClicked, setCardClicked] = useState(false);

  const gameCardHover = () => {
    setHoverOver(true);
  };

  const gameCardHoverOut = () => {
    setHoverOver(false);
  };

  const gameCardClick = () => {
    setCardClicked((prev) => !prev);
    if (cardClicked == false) {
      setHoverOver(false);
    }
  };

  const showBackOfCard = hoverOver || cardClicked;

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
                />
              )}
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hover:scale-105" />
      <CarouselNext className="hover:scale-105" />
    </Carousel>
  );
};

type GameCardHoverInfoType = {
  gameTitle: string;
  completionDate: string;
};

const GameCardHoverState = ({
  gameTitle,
  completionDate,
}: GameCardHoverInfoType) => {
  const formattedDate = new Date(completionDate).toLocaleDateString();

  return (
    <div className="absolute w-full">
      <CardHeader className="w-full pt-5 text-2xl">{gameTitle}</CardHeader>
      <CardHeader className="w-full pt-5 text-xl">{formattedDate}</CardHeader>
    </div>
  );
};

export default GameCard;
