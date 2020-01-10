<!-- `vue/no-duplicate-attributes` - disallow duplication of attributes -->
<!-- --------------------------------------------------------------------- -->

<template>
    <!-- ✓ GOOD -->
    <MyComponent :foo="abc" />
    <MyComponent foo="abc" />
    <MyComponent class="abc" :class="def" />

    <!-- ✗ BAD -->
    <MyComponent :foo="abc" foo="def" />
    <MyComponent foo="abc" :foo="def" />
    <MyComponent foo="abc" foo="def" />
    <MyComponent :foo.a="abc" :foo.b="def" />
    <MyComponent class="abc" class="def" />
</template>
