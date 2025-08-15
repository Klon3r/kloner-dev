import { Avatar } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { AvatarFallback, AvatarImage } from "../ui/avatar";

type CardHoverTypes = {
  linkName: string;
  heading: string;
  avatarImage: string;
  avatarFallback?: string;
  onClick?: () => void;
  buttonClassName?: string;
  text?: string;
  alt?: string;
};

const CardHover = ({
  linkName,
  onClick,
  buttonClassName,
  text,
  heading,
  avatarFallback = "N/A",
  avatarImage,
  alt,
}: CardHoverTypes) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className={buttonClassName} onClick={onClick}>
          {linkName}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between gap-4">
          <div>
            <Avatar>
              <AvatarImage src={avatarImage} alt={alt} />
              <AvatarFallback>{avatarFallback}</AvatarFallback>
            </Avatar>
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{heading}</h4>
            <p className="text-sm">{text}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default CardHover;
