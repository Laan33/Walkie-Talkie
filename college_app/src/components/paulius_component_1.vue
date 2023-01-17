<script setup>
import { useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'
import { doc } from 'firebase/firestore'

const settings = useDocument(doc(db, 'settings', 'some_id'))

const todos = useCollection(collection(db, 'todos'))
</script>

<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
     <span>{{ todo.text }}</span>
    </li>
  </ul>
</template>