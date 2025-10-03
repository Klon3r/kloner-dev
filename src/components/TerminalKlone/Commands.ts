import { FileSystemClass } from "./FileSystem";

export type CommandType = {
  fileSystem: FileSystemClass;
  directory?: string;
  setOutputText?: React.Dispatch<React.SetStateAction<string>>;
  setOutputTextColor?: React.Dispatch<React.SetStateAction<boolean>>;
  newDirectory?: string;
};

type HandleCommandType = {
  command: string;
  setOutputText: React.Dispatch<React.SetStateAction<string>>;
  setOutputTextColor: React.Dispatch<React.SetStateAction<boolean>>;
  fileSystem: FileSystemClass;
};

type CommandArgKeyType = keyof typeof COMMAND_ARGS;

export const COMMAND_LIST = ["clear", "help", "ls", "cd"];

const COMMAND_ARGS = {
  clear: { maxArgs: 0 },
  help: { maxArgs: 0 },
  ls: { maxArgs: 0 },
  cd: { maxArgs: 1 },
} as const;

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
export const cd = ({ fileSystem, directory, setOutputText }: CommandType) => {
  if (directory !== undefined) {
    const changeDirectory = fileSystem.changeDirectory?.(directory);
    if (!changeDirectory && setOutputText)
      setOutputText(`cd: no such file or directory: ${directory}`);
  }
};

export const runCommand = ({
  command,
  fileSystem,
  setOutputText,
  setOutputTextColor,
}: HandleCommandType) => {
  const commandSplit = command.split(" ");
  const commandPrefix = commandSplit[0];
  const commandSuffix = commandSplit[1];

  const argCheck = commandArgCheck(
    commandSplit.length,
    commandPrefix,
    setOutputText
  );

  if (!argCheck) return;

  switch (commandPrefix) {
    case "help":
      setOutputText(COMMAND_LIST.join(", "));
      break;
    case "ls":
      ls({ fileSystem, setOutputText, setOutputTextColor });
      break;
    case "cd":
      cd({ fileSystem, directory: commandSuffix, setOutputText });
  }
};

const commandArgCheck = (
  commandLength: number,
  commandPrefix: string,
  setOutputText: React.Dispatch<React.SetStateAction<string>>
) => {
  const argMapper = COMMAND_ARGS[commandPrefix as CommandArgKeyType];
  if (!argMapper) {
    setOutputText(`command not found: ${commandPrefix}`);
    return;
  }

  const commandArgLength = commandLength - 1; // Remove the command from the length

  if (commandArgLength > argMapper.maxArgs) {
    setOutputText(`${commandPrefix}: too many arguments`);
    return false;
  } else {
    return true;
  }
};
