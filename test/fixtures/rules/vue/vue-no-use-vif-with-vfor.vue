<!-- `vue/no-use-v-if-with-v-for` - disallow use v-if on the same element as v-for -->
<!-- --------------------------------------------------------------------- -->

<template>
    <!-- ✓ GOOD -->
    <ul v-if="complete">
        <div v-for="todo in todos" :key="todo" :todo="todo" />
    </ul>
    <div v-for="todo in shownTodos" :key="todo" :todo="todo" />

    <!-- ✗ BAD -->
    <TodoItem
        v-if="complete"
        v-for="todo in todos"
        :todo="todo"
    /><!-- ↑ In this case, the `v-if` should be written on the wrapper element. -->
    <TodoItem
        v-for="todo in todos"
        v-if="todo.shown"
        :todo="todo"
    /><!-- ↑ In this case, the `v-for` list variable should be replace with a computed property that returns your filtered list. -->
</template>
