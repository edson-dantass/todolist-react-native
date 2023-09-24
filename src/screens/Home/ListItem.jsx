import { useState } from "react";
import { styles } from "./styles";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import Checkbox from "expo-checkbox";

export function ListItem({ name, onRemove }) {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.listItem}>
      <TouchableOpacity
        onPress={() => setChecked((prev) => !prev)}
        style={styles.ceckContainer}
      >
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#60A5FA" : undefined}
        />
        <Text
          style={{
            ...styles.listItemText,
            textDecorationLine: isChecked ? "line-through" : "none",
            color: isChecked ? "#A1A1AA" : "#FAFAFA",
          }}
        >
          {name}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onRemove(name)}>
        <Icon name="trash-outline" style={styles.listItemButtonRemove} />
      </TouchableOpacity>
    </View>
  );
}
