import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { addTask } from '../utils/api';

export default function ParentScreen() {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = async () => {
    try {
      await addTask({ title: task, description });
      alert('Tarea añadida con éxito');
      setTask('');
      setDescription('');
    } catch (error) {
      console.error('Error al añadir tarea:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Nueva Tarea</Text>
      <TextInput
        style={styles.input}
        placeholder="Título de la tarea"
        value={task}
        onChangeText={setTask}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Agregar Tarea" onPress={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
});
