<!-- `vue/no-template-key` - disallow key attribute on <template> -->
<!-- --------------------------------------------------------------------- -->

<template>
    <!-- ✓ GOOD -->
    <div key="foo">...</div>
    <template> ... </template>

    <!-- ✗ BAD -->
    <template key="foo"> ... </template>
    <template v-bind:key="bar"> ... </template>
    <template :key="baz"> ... </template>
</template>
