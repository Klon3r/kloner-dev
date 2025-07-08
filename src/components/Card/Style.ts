const tw = (classes: string) => classes;

export const hoverImageStyle = tw("hover:rounded-2xl hover:cursor-pointer");

export const imageStyle = tw(
  "!max-w-none !w-80 !shadow-none h-auto !border-1 !border-purple-400 !m-0"
);

export const mobileImageStyle = tw(
  "!max-w-none !w-60 !shadow-none h-auto !border-1 !border-purple-400 !m-0"
);

export const divStyle = tw("flex justify-center items-center");
