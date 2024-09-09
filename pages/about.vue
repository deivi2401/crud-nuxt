<script>
import {AtomSpinner} from 'epic-spinners'

export default {
  components: {AtomSpinner},
}
</script>
<template>
  <div>
    <h2>Presupuesto</h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia non quas
      exercitationem fuga mollitia sit! Excepturi nisi illum asperiores. Cumque.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
      architecto sequi neque impedit, consectetur, atque eaque vel facere
      quaerat ratione facilis quis obcaecati magnam enim cum odit, dicta
      expedita consequatur.
    </p>
  </div>
  <div id="app">
    <AtomSpinner :animation-duration="1000" :size="60" color="#ff1d5e"/>
  </div>
  
</template>

<style scoped>
h2 {
  margin-bottom: 20p;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
