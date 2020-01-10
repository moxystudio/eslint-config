<!-- `vue/no-unused-components` - disallow registering components that are not used inside templates -->
<!-- --------------------------------------------------------------------- -->

<!-- ✓ GOOD -->
<template>
    <div>
        <h2>Lorem ipsum</h2>
        <the-modal>
            <component :is="TheInput" />
            <component :is="'TheDropdown'" />
            <TheButton>CTA</TheButton>
        </the-modal>
    </div>
</template>

<script>
import TheButton from "components/TheButton.vue";
import TheModal from "components/TheModal.vue";
import TheInput from "components/TheInput.vue";
import TheDropdown from "components/TheDropdown.vue";

export default {
    components: {
        TheButton,
        TheModal,
        TheInput,
        TheDropdown
    }
};
</script>

<!-- ✗ BAD -->
<template>
    <div>
        <h2>Lorem ipsum</h2>
        <TheModal />
    </div>
</template>

<script>
import TheButton from "components/TheButton.vue";
import TheModal from "components/TheModal.vue";

export default {
    components: {
        TheButton, // Unused component
        "the-modal": TheModal // Unused component
    }
};
</script>
