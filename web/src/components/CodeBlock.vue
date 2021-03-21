<template>
  <highlight-code :lang="language">{{ code }}</highlight-code>
</template>

<script>
export default {
  // Define the block object properties this component receives as props
  props: {
    code: {
      type: String,
    },
    language: {
      type: String,
    }
  },
}
</script>