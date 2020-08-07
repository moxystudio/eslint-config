<!-- `vue/no-side-effects-in-computed-properties` - disallow side effects in computed properties -->
<!-- --------------------------------------------------------------------- -->
<script>
/* ✗ BAD */
export default {
    computed: {
        fullName() {
            this.firstName = "lorem"; // <- side effect

            return `${this.firstName} ${this.lastName}`;
        },
        reversedArray() {
            return this.array.reverse(); // <- side effect - orginal array is being mutated
        },
    },
};
</script>

<script>
/* ✓ GOOD */
export default {
    computed: {
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        reversedArray() {
            return this.array.slice(0).reverse(); // .slice makes a copy of the array, instead of mutating the orginal
        },
    },
};
</script>
