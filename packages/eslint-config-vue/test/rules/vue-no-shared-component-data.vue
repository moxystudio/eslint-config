<!-- `vue/no-shared-component-data` - enforce component's data property to be a function -->
<!-- --------------------------------------------------------------------- -->
<script>
/* ✗ BAD */
import Vue from "vue";

Vue.component("some-comp", {
    data: {
        foo: "bar",
    },
});

export default {
    data() {
        return {
            foo: "bar",
        };
    },
};
</script>
