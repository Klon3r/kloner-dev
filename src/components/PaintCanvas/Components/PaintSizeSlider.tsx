import { Slider } from "@/components/ui/slider";

type PaintSizeSliderType = {
  defaultValue: number[];
  onChange: React.Dispatch<React.SetStateAction<number[]>>;
};

const PaintSizeSlider = ({ defaultValue, onChange }: PaintSizeSliderType) => {
  return (
    <Slider
      defaultValue={defaultValue}
      max={100}
      min={5}
      step={1}
      orientation="vertical"
      onValueChange={(value) => onChange(value)}
    />
  );
};

export default PaintSizeSlider;
