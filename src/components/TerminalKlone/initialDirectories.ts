export type FileSystemNode = {
  [key: string]: FileSystemNode;
};

export const initialDirectories: FileSystemNode = {
  "/": {
    bin: {},
    dev: {},
    home: {},
    lib64: {},
    opt: {},
    root: {},
    sbin: {},
    sys: {},
    usr: {},
    boot: {},
    etc: {},
    lib: {},
    mnt: {},
    proc: {},
    run: {},
    srv: {},
    tmp: {},
    var: {},
  },
  home: {
    "kloner-dev": {},
  },
  "~": {
    Documents: {},
    Downloads: {},
    Music: {},
    Pictures: {},
    Videos: {},
  },
};
