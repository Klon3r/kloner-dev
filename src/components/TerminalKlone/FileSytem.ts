import { FileSystemNode } from "./initialDirectories";

type FileSystemType = {
  currentDirectory: string;
  listOfDirectories: FileSystemNode;
};

export class FileSystemClass {
  constructor({ currentDirectory, listOfDirectories }: FileSystemType) {
    this.currentDirectory = currentDirectory;
    this.listOfDirectories = listOfDirectories;
  }

  /** The current directory the user is in */
  currentDirectory: string;

  /** A 2d array mapping directory paths to their contents */
  listOfDirectories: FileSystemNode;

  /** Return the current directory contents */
  get getCurrentDirectoryContents(): FileSystemNode {
    return this.listOfDirectories[this.currentDirectory];
  }
}
