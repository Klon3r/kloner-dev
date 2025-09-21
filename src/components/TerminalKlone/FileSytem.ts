type FileSystemType = {
  currentDirectory: string;
  listOfDirectories: string[][];
};

export class FileSystemClass {
  /** The current directory the user is in */
  currentDirectory: string;

  /** A 2d array mapping directory paths to their contents */
  listOfDirectories: string[][];

  constructor({ currentDirectory, listOfDirectories }: FileSystemType) {
    this.currentDirectory = currentDirectory;
    this.listOfDirectories = listOfDirectories;
  }

  /** Return the current directory contents */
  get listOfCurrentDirectory(): string[] {
    const list = this.listOfDirectories.find(
      (dir) => dir[0] === this.currentDirectory
    );
    return list ? list.slice(1) : [];
  }
}
