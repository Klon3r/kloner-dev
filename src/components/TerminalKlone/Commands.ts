import { FileSystemClass } from "./FileSytem";

/** List the contents of the current directory */
export const ls = (
  fileSystem: FileSystemClass,
  setOutputText: React.Dispatch<React.SetStateAction<string>>,
  setOutputTextColor: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const directoryContents = fileSystem.getCurrentDirectoryContents;
  const directoryNames = Object.keys(directoryContents);
  const directoryNameJoined = directoryNames.join(" ");

  setOutputTextColor(true);
  setOutputText(directoryNameJoined);
};
