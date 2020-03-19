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
            get() {
                return null;
            }
        }
    },
    data() {
        return {
            foo: null
        };
    },
    methods: {
        foo() {}
    }
};
</script>
