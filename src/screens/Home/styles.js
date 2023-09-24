import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 18,
    paddingTop: 32
  },
  title: {
    color: "#FAFAFA",
    fontSize: 32,
    marginBottom: 22
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12
  },
  input: {
    height: 48,
    backgroundColor: "#3F3F46",
    paddingHorizontal: 12,
    borderRadius: 8,
    color: "#FAFAFA",
    flex: 1
  },
  button: {
    backgroundColor: "#60A5FA",
    justifyContent: "center",
    alignItems: "center",
    height: 38,
    width: 38,
    borderRadius: 30
  },
  iconAdd: {
    color:  "#FAFAFA",
    fontSize: 28,
    paddingLeft: 2
  }
});
