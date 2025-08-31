import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

type GameCardType = {
  id: string;
  gameTitle: string;
  platform?: string;
  completionDate: string;
  notes?: string;
};

const GameCard = ({
  id,
  gameTitle,
  platform,
  completionDate,
  notes,
}: GameCardType) => {
  const formattedDate = new Date(completionDate).toLocaleDateString();

  return (
    <Card
      id={id}
      className="w-full max-w-sm border-primary hover:scale-105 transition-all duration-300"
    >
      <CardHeader>
        <CardTitle>{gameTitle}</CardTitle>
        <CardTitle>{formattedDate}</CardTitle>
        <CardTitle>{platform}</CardTitle>

        <CardContent>
          <CardDescription>{notes}</CardDescription>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default GameCard;
