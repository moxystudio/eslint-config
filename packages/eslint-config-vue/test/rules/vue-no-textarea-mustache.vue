<!-- `vue/no-textarea-mustache` - disallow mustaches in <textarea> -->
<!-- --------------------------------------------------------------------- -->

<template>
    <!-- ✓ GOOD -->
    <textarea v-model="message" />

    <!-- ✗ BAD -->
    <textarea>{{ message }}</textarea>
</template>
