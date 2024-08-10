<script setup>

defineProps({
    buttonText: String,
})

</script>

<template>
    <button class="px-2 py-2"> <!-- :class=" [isActive ? activeClass : '' , errorClass]" -->
        {{ buttonText }}
    </button>
</template>
