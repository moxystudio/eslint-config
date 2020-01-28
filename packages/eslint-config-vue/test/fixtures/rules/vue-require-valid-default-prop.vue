<!-- `vue/require-valid-default-prop` - enforce props default values to be valid -->
<!-- --------------------------------------------------------------------- -->

<script>
export default {
    props: {
        /* ✓ GOOD */
        // basic type check (`null` means accept any type)
        propA: Number,
        // Multiple possible types
        propB: [String, Number],
        // A number with default value
        propD: {
            type: Number,
            default: 100
        },
        // Object/array defaults should be returned from a factory function
        propE: {
            type: Object,
            default() {
                return { message: "hello" };
            }
        },
        propF: {
            type: Array,
            default() {
                return [];
            }
        },
        /* ✗ BAD */
        propA: {
            type: String,
            default: {}
        },
        propB: {
            type: String,
            default: []
        },
        propC: {
            type: Object,
            default: []
        },
        propD: {
            type: Array,
            default: []
        },
        propE: {
            type: Object,
            default: { message: "hello" }
        }
    }
};
</script>
