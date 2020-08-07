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
            return fetch("url").then((response) => {});
        },
        tim() {
            setTimeout(() => {}, 0);
        },
        inter() {
            setInterval(() => {}, 0);
        },
        anim() {
            requestAnimationFrame(() => {});
        },
    },
};
</script>
