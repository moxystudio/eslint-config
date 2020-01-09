<!-- `vue/return-in-computed-property` - enforce that a return statement is present in computed property -->
<!-- --------------------------------------------------------------------- -->
<script>
export default {
    computed: {
        /* ✓ GOOD */
        foo() {
            if (this.bar) {
                return this.baz;
            }

            return this.baf;
        },
        bar() {
            return false;
        },
        /* ✗ BAD */
        baz() {
            if (this.baf) {
                return this.baf;
            }
        },
        baf() {}
    }
};
</script>
