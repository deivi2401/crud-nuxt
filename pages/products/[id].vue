<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
      consectetur quasi repudiandae dignissimos inventore esse quis voluptates
      optio debitis. Saepe?
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params

</script>

<style lang="scss" scoped></style>
