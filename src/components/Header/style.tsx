import { mergeStyleSets } from "@uifabric/merge-styles";

export const style = mergeStyleSets({
  headerContainer: {
    display: "flex",
    gap: "40px",
    borderBottom: "1px solid black",
    paddingBottom: "5px",
    // justifyContent: "space-between",
  },
  headerText: {
    padding: 0,
    margin: 0,
    fontFamily: "'Press Start 2P', cursive",
    color: "black",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "200px",
    alignItems: "center",
  },
  button: {
    cursor: "pointer",
    ":hover": {
      transform: "scale(1.1)",
    },
  },
});
