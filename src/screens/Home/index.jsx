import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Icon from "@expo/vector-icons/Ionicons";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor="#71717A"
          placeholder="Nome da tarefa"
          style={styles.input}
        />
        <TouchableOpacity style={styles.button}>
          <Icon name="add-outline" style={styles.iconAdd} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
