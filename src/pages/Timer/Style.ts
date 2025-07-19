const tw = (classes: string) => classes;

export const timerButton = tw(
  "flex items-center justify-center border-1 rounded-sm p-3 leading-none hover:cursor-pointer"
);
export const minuteButton = tw(
  "flex items-center justify-center rounded-sm p-2 leading-none hover:cursor-pointer text-2xl"
);
export const timerButtonContainer = tw("flex gap-10 pt-10");

export const timerDisplay = tw("text-4xl");
