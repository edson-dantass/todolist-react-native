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
import Checkbox from "expo-checkbox";

export function Home() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = () => {
    const existsTodo = !!todoList.find((todo) => todo.name === inputValue);

    if (!inputValue.trim()) return;

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

  const handleCheckTodo = (name) => {
    const currentTodoList = todoList.map((todo) => {
      if (todo.name === name) {
        todo.checked = !todo.checked;
      }

      return todo;
    });

    setTodoList(currentTodoList);
  };

  const countChecked = todoList.filter((todo) => todo.checked).length;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Lista de Tarefas</Text>
        {countChecked > 0 && (
          <View style={styles.checkCountContainer}>
            <Text style={styles.checkCountText}>{countChecked}</Text>
            <Icon
              name="checkmark-circle-outline"
              style={styles.checkCountIcon}
            />
          </View>
        )}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor="#71717A"
          placeholder="Nome da tarefa"
          style={styles.input}
          value={inputValue}
          enterKeyHint="done"
          onSubmitEditing={() => handleAddTodo()}
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
        contentContainerStyle={styles.listContentStyle}
        ListEmptyComponent={
          <View style={styles.emptyListContainer}>
            <Icon name="trash-bin-outline" style={styles.emptyListIcon} />
            <Text style={styles.emptyListTitle}>Lista Vazia</Text>
            <Text style={styles.emptyListDescrption}>
              Cadastre uma tarefa para começar
            </Text>
          </View>
        }
        renderItem={({ item: { name, checked } }) => (
          <View style={styles.listItem}>
            <TouchableOpacity
              onPress={() => handleCheckTodo(name)}
              style={styles.ceckContainer}
            >
              <Checkbox
                value={checked}
                onPress={() => handleCheckTodo(name)}
                color={checked ? "#60A5FA" : undefined}
              />
              <Text
                style={{
                  ...styles.listItemText,
                  textDecorationLine: checked ? "line-through" : "none",
                  color: checked ? "#A1A1AA" : "#FAFAFA",
                }}
              >
                {name}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleRemoveTodo(name)}>
              <Icon name="trash-outline" style={styles.listItemButtonRemove} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
