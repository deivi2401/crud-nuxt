<script setup lang="ts">
import { useMyTestStoreStore } from '#imports'

const StorePrueba = useMyTestStoreStore()



</script>
<template>
  <div>
    <h2>Presupuesto</h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia non quas
      exercitationem fuga mollitia sit! Excepturi nisi illum asperiores. Cumque.
    </p>
    <p>
{{ StorePrueba.mensaje }}
    </p>
  </div>
</template>



<style scoped>
h2 {
  margin-bottom: 20p;
  font-size: 36px;
}
p{
    margin: 20px 0;
}
</style>
