<!-- `vue/no-reserved-keys` - disallow overwriting reserved keys -->
<!-- --------------------------------------------------------------------- -->
<script>
/* ✗ BAD */
export default {
    props: {
        $el: String,
    },
    computed: {
        $on: {
            get() {},
        },
    },
    data() {
        return {
            _foo: null,
        };
    },
    methods: {
        $nextTick() {},
    },
};
</script>
