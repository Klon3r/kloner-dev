import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { AvatarFallback } from "../ui/avatar";
import { linkButtonStyle } from "../HeaderBar/Style";
import mePhoto from "../../assets/me-grey.png";
import { getAge } from "@/utils/time";

const AboutMe = () => {
  const currentAge = getAge();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className={linkButtonStyle}>
          about me
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogTitle className="font-extrabold text-lg">About Me</DialogTitle>
        <DialogHeader>
          <div className="flex flex-col flex-wrap gap-5">
            <div className="flex flex-row gap-3">
              <Avatar>
                <AvatarImage
                  className="w-25 rounded-2xl "
                  src={mePhoto}
                  alt="Photo of Keiran"
                />
                <AvatarFallback className="min-w-25">ME</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-start items-start">
                <ul>
                  <li className="pb-1 text-lg font-bold">Keiran Bunyan</li>
                  <li className="pl-5 text-sm text-start">{currentAge}</li>
                  <li className="pl-5 text-sm text-start">He/Him</li>
                  <li className="pl-5 text-sm text-start">Brisbane</li>
                  <li className="pl-5 text-sm text-start">
                    Software Developer
                  </li>
                  <li className="pl-5 text-sm text-start">I use Arch btw</li>
                </ul>
              </div>
            </div>
          </div>
        </DialogHeader>
        <DialogDescription className="italic">
          {
            "One day I challenged myself to learn web development since I didn't know anything about it, fast forward ...well turns out that I fell in love with it."
          }
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default AboutMe;
