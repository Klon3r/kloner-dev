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
    const currentDirObj = this.getCurrentDirectoryObject;
    return Object.keys(currentDirObj);
  }

  /** Return the current directory object
   * @returns {FileSystemNode} The directory object of the current directory or empty object if path is not found
   */
  get getCurrentDirectoryObject(): FileSystemNode {
    let currentObj = this.listOfDirectories;

    if (this.currentDirectory === "/") {
      return currentObj;
    }

    const pathParts = this.fullPath.split("/").filter((path) => path !== "");
    currentObj = currentObj["/"];

    for (const part of pathParts) {
      if (currentObj && currentObj[part]) {
        currentObj = currentObj[part];
      } else {
        return {};
      }
    }

    return currentObj;
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
    } else {
      if (currentDirectoryList.includes(directory)) {
        this.addToFullPath(directory);
        this.currentDirectory = directory;
      } else {
        return `cd: no such file or directory: ${directory}`;
      }
    }
  }

  /**
   * Create a new folder in the current directory
   */
  createDirectory(newDirectory: string) {
    const currentDirObj = this.getCurrentDirectoryObject;
    const currentObjKeys = Object.keys(currentDirObj);

    if (currentObjKeys.includes(newDirectory)) {
      return `mkdir: cannot create directory '${newDirectory}' already exists`;
    } else {
      // Create new directory
      this.getCurrentDirectoryObject[newDirectory] = {};
    }
  }

  deleteDirectory(directory: string) {
    const currentDirObj = this.getCurrentDirectoryObject;
    const currentObjKeys = Object.keys(currentDirObj);

    if (currentObjKeys.includes(directory)) {
      // Check if directory is empty
      const directoryKeys = Object.keys(currentDirObj[directory]);
      if (directoryKeys.length === 0) {
        delete this.getCurrentDirectoryObject[directory];
      } else {
        return `rm: cannot remove '${directory}' not empty`;
      }
    } else {
      return `rm: directory '${directory}' doesn't exist`;
    }
  }
}
