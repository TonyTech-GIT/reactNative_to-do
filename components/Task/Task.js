import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './task.style'

const Task = ({ task, onDelete }) => {
    return (
        <TouchableOpacity onPress={() => onDelete(task.id)} style={styles.item}>
            <View style={styles.itemLeft}>
                <Text >{task.text}</Text>
            </View>
        </TouchableOpacity>


    )
}

export default Task
