import PaintCanvas from "@/components/PaintCanvas/PaintCanvas";

const Paint = () => {
  return (
    <div className="bg-violet-100 border-2 ">
      <PaintCanvas height={500} width={500} />
    </div>
  );
};

export default Paint;
