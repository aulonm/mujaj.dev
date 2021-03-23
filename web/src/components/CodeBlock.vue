<template>
  <highlight-code :lang="language">{{ code }}</highlight-code>
</template>

<script>
export default {
  // Define the block object properties this component receives as props
  props: {
    code: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
  },
};
</script>
