import { FileSystemClass } from "./FileSystem";

export type CommandType = {
  fileSystem: FileSystemClass;
  directory?: string;
  setOutputText?: React.Dispatch<React.SetStateAction<string>>;
  setOutputTextColor?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const commandList = ["clear", "help", "ls", "cd"];

/** List the contents of the current directory */
export const ls = ({
  fileSystem,
  setOutputText,
  setOutputTextColor,
}: CommandType) => {
  const directoryContents = fileSystem.getCurrentDirectoryContents;
  const directoryNames = directoryContents.join(" ");

  setOutputTextColor?.(true);
  setOutputText?.(directoryNames);
};

/** Change the current directory
 * @returns false if directory doesn't exit
 */
export const cd = ({ fileSystem, directory }: CommandType) => {
  if (directory !== undefined) return fileSystem.changeDirectory?.(directory);
};
