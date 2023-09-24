import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 18,
    paddingTop: 32
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems:"center",
    marginBottom: 22
  },
  title: {
    color: "#FAFAFA",
    fontSize: 32,
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
  },
  list: {
    marginTop: 28,
    marginBottom: 22
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ceckContainer: {
    flexDirection: "row",
    alignItems:"center",
    gap: 12,
    flex: 1,
    paddingVertical: 4
  },
  listItemText: {
    fontSize: 20,
    color: "#FAFAFA",
  },
  listContentStyle: {
    height: "100%"
  },
  emptyListContainer: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center"
  },
  emptyListIcon: {
    color: '#3F3F46',
    fontSize:  72,
    marginBottom: 20
  },
  emptyListTitle: {
    color: '#3F3F46',
    fontSize:  28,
  },
  emptyListDescrption: {
    color: '#3F3F46',
    fontSize:  16,
    marginBottom: 100
  },
  listItemButtonRemove: {
    color: '#71717A',
    fontSize: 24
  },
  separator: {
    backgroundColor: "#3F3F46",
    height: 1,
    marginVertical: 8
  },
  checkCountContainer: {
    flexDirection: "row",
    alignItems:"center",
    gap: 4,
    textAlign: "right"
  },
  checkCountIcon: {
    color: "#22C55E",
    fontSize: 28
  },
  checkCountText: {
    color: "#22C55E",
    fontSize: 18
  }
});
