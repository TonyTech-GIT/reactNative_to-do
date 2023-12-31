import React from 'react'
import { Text, View } from 'react-native'

import Task from '../Task/Task'

import styles from './tasklist.style';

const TaskList = ({ tasks, onDelete }) => {
    if (tasks.length == 0) {
        return <Text style={styles.noTasksText}>No tasks yet...</Text>;
    }
    return (
        <View style={styles.taskListContainer}>
            {tasks.map((task, id) => (
                <Task key={id} task={task} onDelete={onDelete} />
            ))}

        </View>

    )
}

export default TaskList
