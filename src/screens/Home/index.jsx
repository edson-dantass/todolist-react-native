import { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { styles } from "./styles";
import Icon from "@expo/vector-icons/Ionicons";

export function Home() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = () => {
    const existsTodo = !!todoList.find((todo) => todo.name === inputValue);

    if (existsTodo) {
      Alert.alert("Aviso", "Ooops! Essa tarefa já existe.");
      return;
    }

    setTodoList((prev) => [...prev, { name: inputValue }]);
    setInputValue("");
  };

  const handleRemoveTodo = (name) => {
    Alert.alert("Atenção", "Deseja realmente apagar esta tarefa?", [
      { text: "Não" },
      {
        text: "Sim, apagar.",
        onPress: () => {
          const todoListWithoutName = todoList.filter(
            (todo) => todo.name !== name
          );
          setTodoList(todoListWithoutName);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor="#71717A"
          placeholder="Nome da tarefa"
          style={styles.input}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
          <Icon name="add-outline" style={styles.iconAdd} />
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.list}
        ItemSeparatorComponent={<View style={styles.separator} />}
        data={todoList}
        renderItem={({ item: { name } }) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>{name}</Text>
            <TouchableOpacity onPress={() => handleRemoveTodo(name)}>
              <Icon name="trash-outline" style={styles.listItemButtonRemove} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
