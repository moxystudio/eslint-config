<!-- `vue/valid-v-bind` - enforce valid v-bind directives -->
<!-- --------------------------------------------------------------------- -->

<template>
    <!-- ✓ GOOD -->
    <div v-bind="foo" />
    <div v-bind:aaa="foo" />
    <div :aaa="foo" />
    <div :aaa.prop="foo" />

    <!-- ✗ BAD -->
    <div v-bind />
    <div :aaa />
    <div v-bind:aaa.bbb="foo" />
</template>

<!-- `vue/valid-v-cloak` - enforce valid v-cloak directives -->
<!-- --------------------------------------------------------------------- -->

<template>
    <!-- ✓ GOOD -->
    <div v-cloak />

    <!-- ✗ BAD -->
    <div v-cloak:aaa />
    <div v-cloak.bbb />
    <div v-cloak="ccc" />
</template>

<!-- `vue/valid-v-else-if` - enforce valid v-else-if directives -->
<!-- --------------------------------------------------------------------- -->

<template>
    <!-- ✓ GOOD -->
    <div v-if="foo" />
    <div v-else-if="bar" />

    <!-- ✗ BAD -->
    <div v-else-if />
    <div v-else-if:aaa="foo" />
    <div v-else-if.bbb="foo" />
</template>

<!-- `vue/valid-v-else` - enforce valid v-else directives -->
<!-- --------------------------------------------------------------------- -->

<template>
    <!-- ✓ GOOD -->
    <div v-if="foo" />
    <div v-else />

    <!-- ✗ BAD -->
    <div v-else="foo" />
    <div v-else:aaa />
    <div v-else.bbb />
</template>

<!-- `vue/valid-v-for` - enforce valid v-for directives -->
<!-- --------------------------------------------------------------------- -->

<template>
    <!-- ✓ GOOD -->
    <div v-for="todo in todos" />
    <MyComponent v-for="todo in todos" :key="todo.id" />
    <div v-for="todo in todos" :is="MyComponent" :key="todo.id" />

    <!-- ✗ BAD -->
    <div v-for />
    <div v-for:aaa="todo in todos" />
    <div v-for.bbb="todo in todos" />
    <div v-for="todo in todos" is="MyComponent" />
    <MyComponent v-for="todo in todos" />
    <MyComponent v-for="todo in todos" :key="foo" />
</template>

<!-- `vue/valid-v-html` - enforce valid v-html directives -->
<!-- --------------------------------------------------------------------- -->

<template>
    <!-- ✓ GOOD -->
    <div v-html="foo" />

    <!-- ✗ BAD -->
    <div v-html />
    <div v-html:aaa="foo" />
    <div v-html.bbb="foo" />
</template>

<!-- `vue/valid-v-if` - enforce valid v-if directives -->
<!-- --------------------------------------------------------------------- -->

<template>
    <!-- ✓ GOOD -->
    <div v-if="foo" />
    <div v-else-if="bar" />
    <div v-else />

    <!-- ✗ BAD -->
    <div v-if />
    <div v-if:aaa="foo" />
    <div v-if.bbb="foo" />
    <div v-if="foo" v-else />
    <div v-if="foo" v-else-if="bar" />
</template>

<!-- `vue/valid-v-model` - enforce valid v-model directives -->
<!-- --------------------------------------------------------------------- -->

<template>
    <!-- ✓ GOOD -->
    <input v-model="foo" />
    <input v-model.lazy="foo" />
    <textarea v-model="foo" />
    <MyComponent v-model="foo" />
    <div v-for="todo in todos" :key="todo">
        <input v-model="todo.name" />
    </div>

    <!-- ✗ BAD -->
    <input v-model />
    <input v-model:aaa="foo" />
    <input v-model.bbb="foo" />
    <input v-model="foo + bar" />
    <div v-model="foo" />
    <div v-for="todo in todos">
        <input v-model="todo" />
    </div>
</template>

<!-- `vue/valid-v-on` - enforce valid v-on directives -->
<!-- --------------------------------------------------------------------- -->

<template>
    <!-- ✓ GOOD -->
    <div v-on="foo" />
    <div v-on:click="foo" />
    <div @click="foo" />
    <div @click.left="foo" />
    <div @click.prevent />
    <div @click.stop />

    <!-- ✗ BAD -->
    <div v-on />
    <div v-on:click />
    <div v-on:click.aaa="foo" />
    <div @click />
</template>

<!-- `vue/valid-v-once` - enforce valid v-once directives -->
<!-- --------------------------------------------------------------------- -->

<template>
    <!-- ✓ GOOD -->
    <div v-once />

    <!-- ✗ BAD -->
    <div v-once:aaa />
    <div v-once.bbb />
    <div v-once="ccc" />
</template>

<!-- `vue/valid-v-pre` - enforce valid v-pre directives -->
<!-- --------------------------------------------------------------------- -->

<template>
    <!-- ✓ GOOD -->
    <div v-pre />

    <!-- ✗ BAD -->
    <div v-pre:aaa />
    <div v-pre.bbb />
    <div v-pre="ccc" />
</template>

<!-- `vue/valid-v-show` - enforce valid v-show directives -->
<!-- --------------------------------------------------------------------- -->

<template>
    <!-- ✓ GOOD -->
    <div v-show="foo" />

    <!-- ✗ BAD -->
    <div v-show />
    <div v-show:aaa="foo" />
    <div v-show.bbb="foo" />
</template>

<!-- `vue/valid-v-text` - enforce valid v-text directives -->
<!-- --------------------------------------------------------------------- -->

<template>
    <!-- ✓ GOOD -->
    <div v-text="foo" />

    <!-- ✗ BAD -->
    <div v-text />
    <div v-text:aaa="foo" />
    <div v-text.bbb="foo" />
</template>
