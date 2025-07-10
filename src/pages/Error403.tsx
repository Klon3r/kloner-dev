import clsx from "clsx";
import { flexCenter, flexCol, textColor } from "../StyleGlobal";

const Error403 = () => {
  return (
    <div className={clsx(flexCenter, flexCol)}>
      <h1 className={clsx(textColor, "text-lg")}>Error! page does not exist</h1>
    </div>
  );
};

export default Error403;
