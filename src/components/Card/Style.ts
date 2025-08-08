const tw = (classes: string) => classes;

export const hoverImageStyle = tw("hover:scale-105 hover:cursor-pointer");

export const imageStyle = tw(
  "!max-w-none !w-80 h-auto !border-1 !border-primary !m-0"
);

export const mobileImageStyle = tw(
  "!max-w-none !w-60 h-auto !border-1 !border-primary !m-0 shadow-2xl"
);

export const divStyle = tw("flex justify-center items-center");
