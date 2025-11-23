import clsx from "clsx";
import { SetStateAction, useEffect, useState } from "react";

type PaintShapeSelector = {
  srcImg: string;
  shape: string;
  selected: string;
  setSelected: React.Dispatch<SetStateAction<string>>;
};

const PaintShapeSelector = ({
  srcImg,
  shape,
  selected,
  setSelected,
}: PaintShapeSelector) => {
  const [highlighted, setHighlighted] = useState(false);

  const onClickHandle = () => {
    setSelected(shape);
  };

  useEffect(() => {
    setHighlighted(selected === shape);
  }, [selected, shape]);

  return (
    <div
      className={clsx(
        "w-10 h-10",
        highlighted ? "outline-2 outline-primary outline-offset-[-2px]" : ""
      )}
    >
      <img
        src={srcImg}
        className={"p-1 invert"}
        onClick={() => onClickHandle()}
      />
    </div>
  );
};

export default PaintShapeSelector;
