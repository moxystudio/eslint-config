<!-- `vue/no-async-in-computed-properties` - disallow asynchronous actions in computed properties -->
<!-- --------------------------------------------------------------------- -->
<!-- Bad -->
<script>
export default {
    computed: {
        /* ✓ GOOD */
        foo() {
            let bar = 0;

            try {
                bar = bar / this.a;
            } catch (e) {
                return 0;
            }

            return 1;
        },

        /* ✗ BAD */
        pro() {
            return Promise.all([new Promise((resolve, reject) => {})]);
        },
        async foo1() {
            return this.tim();
        },
        bar() {
            return fetch("url").then(response => {});
        },
        tim() {
            setTimeout(() => {}, 0);
        },
        inter() {
            setInterval(() => {}, 0);
        },
        anim() {
            requestAnimationFrame(() => {});
        }
    }
};
</script>
<!-- `vue/no-dupe-keys` - disallow duplication of field names -->
<!-- --------------------------------------------------------------------- -->

<script>
/* ✗ BAD */
export default {
    props: {
        foo: String
    },
    computed: {
        foo: {
            get() {}
        }
    },
    data: {
        foo: null
    },
    methods: {
        foo() {}
    }
};
</script>

<!-- `vue/no-duplicate-attributes` - disallow duplication of attributes -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/no-parsing-error` - disallow parsing errors in template -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/no-reserved-keys` - disallow overwriting reserved keys -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/no-shared-component-data` - enforce component's data property to be a function -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/no-side-effects-in-computed-properties` - disallow side effects in computed properties -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/no-template-key` - disallow key attribute on <template> -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/no-textarea-mustache` - disallow mustaches in <textarea> -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/no-unused-components` - disallow registering components that are not used inside templates -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/no-unused-vars` - disallow unused variable definitions of v-for directives or scope attributes -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/no-use-v-if-with-v-for` - disallow use v-if on the same element as v-for -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/require-component-is` - require v-bind:is of <component> elements -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/require-prop-type-constructor` - require prop type to be a constructor -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/require-render-return` - enforce render function to always return value -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/require-v-for-key` - require v-bind:key with v-for directives -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/require-valid-default-prop` - enforce props default values to be valid -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/return-in-computed-property` - enforce that a return statement is present in computed property -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/use-v-on-exact` - enforce usage of exact modifier on v-on -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/valid-template-root` - enforce valid template root -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/valid-v-bind` - enforce valid v-bind directives -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/valid-v-cloak` - enforce valid v-cloak directives -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/valid-v-else-if` - enforce valid v-else-if directives -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/valid-v-else` - enforce valid v-else directives -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/valid-v-for` - enforce valid v-for directives -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/valid-v-html` - enforce valid v-html directives -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/valid-v-if` - enforce valid v-if directives -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/valid-v-model` - enforce valid v-model directives -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/valid-v-on` - enforce valid v-on directives -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/valid-v-once` - enforce valid v-once directives -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/valid-v-pre` - enforce valid v-pre directives -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/valid-v-show` - enforce valid v-show directives -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>

<!-- `vue/valid-v-text` - enforce valid v-text directives -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {};
</script>
