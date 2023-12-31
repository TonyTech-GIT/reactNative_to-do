import { StyleSheet, SafeAreaView, Text, TextInput, Button } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';


// import Task from './components/Task/Task'
import TaskList from './components/TaskList/TaskList'
import { useEffect, useState } from 'react';

const App = () => {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    retrieveTasks()
  }, [])

  const storeTasks = async (tasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks))
    } catch (error) {
      console.error('Error storing data:', error);
    }
  }

  const retrieveTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('tasks')
      if (storedTasks !== null) {
        setTasks(JSON.parse(storedTasks))
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  }

  const handleAddTask = () => {
    if (task.trim() !== '') {
      const newTask = { id: Date.now(), text: task };
      setTasks([...tasks, newTask])
      storeTasks([...tasks, newTask])
      setTask('')
    }
  }

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id)
    setTasks(updatedTasks)
    storeTasks(updatedTasks)
  }
  return (

    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>TO-DO LIST APP</Text>

      <TextInput
        style={styles.input}
        placeholder='Add a text...'
        value={task}
        onChangeText={(task) => setTask(task)}
      />

      <Button title='Add' onPress={handleAddTask} />

      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </SafeAreaView>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    marginTop: 40,
    padding: 20
  },

  titleText: {
    color: 'grey',
    textAlign: 'center',
    fontSize: 40,
    marginVertical: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  button: {
    borderRadius: 10
  }


});

export default App


