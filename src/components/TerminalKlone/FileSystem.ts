import { FileSystemNode } from "./initialDirectories";

type FileSystemType = {
  currentDirectory: string;
  fullPath: string;
  listOfDirectories: FileSystemNode;
};

export class FileSystemClass {
  currentDirectory: string;
  listOfDirectories: FileSystemNode;
  fullPath: string;

  constructor({ currentDirectory, listOfDirectories }: FileSystemType) {
    this.currentDirectory = currentDirectory;
    this.listOfDirectories = listOfDirectories;
    this.fullPath = "/home/kloner";
  }

  /** Return the current directory contents */
  get getCurrentDirectoryContents(): string[] {
    let currentObj = this.listOfDirectories;

    if (this.currentDirectory === "/") {
      return Object.keys(currentObj["/"]);
    }

    const pathParts = this.fullPath.split("/").filter((path) => path !== "");
    currentObj = currentObj["/"];

    for (const part of pathParts) {
      if (currentObj && currentObj[part]) {
        currentObj = currentObj[part];
      } else {
        // Cannot find directory
        return [];
      }
    }

    return Object.keys(currentObj);
  }

  /**
   * Appends a new directory to the end of the full path.
   * @param newPathName - The name of the directory to add to the path
   */
  addToFullPath(newPathName: string) {
    let splitFullPath = this.fullPath.split("/").filter((path) => path !== "");
    splitFullPath.push(newPathName);

    this.fullPath = "/" + splitFullPath.join("/");
  }

  /**
   * Moves up one directory in the full path.
   * If already at root ("/"), stays at root.
   * @returns The new current directory name after moving up
   */
  goUpOneDirectory() {
    let splitFullPath = this.fullPath.split("/").filter((path) => path !== "");
    splitFullPath.unshift("/");

    if (splitFullPath.length > 1) splitFullPath.pop();

    const newDirectory = splitFullPath[splitFullPath.length - 1];
    this.fullPath = "/" + splitFullPath.join("/");

    return newDirectory;
  }

  /** Change directory if directory exists */
  changeDirectory(directory: string) {
    const currentDirectoryList = this.getCurrentDirectoryContents;

    if (directory === "..") {
      this.currentDirectory = this.goUpOneDirectory();
      return true;
    } else {
      if (currentDirectoryList.includes(directory)) {
        this.addToFullPath(directory);
        this.currentDirectory = directory;

        return true;
      } else {
        return false;
      }
    }
  }
}
