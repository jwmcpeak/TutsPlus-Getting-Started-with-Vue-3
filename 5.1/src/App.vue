<template>
  
  <div>
    <h2>List Component</h2>

    <h4>Guitars</h4>
    <list :items="guitars"></list>

    <h4>Fruits</h4>
    <list :items="fruit"></list>
  </div>

  <div>
    <counter-output></counter-output>
  </div>

</template>

<script>
import List from './components/ListComponent.vue';
import CounterOutput from './components/CounterOutputComponent.vue';


export default {
  name: 'App',
  components: {
    List,
    CounterOutput
  },
  data() {
      return {
          guitars: [
              'Gibson Les Paul',
              'Fender Strat',
              'Gibson Explorer',
              'PRS Vela',
              'PRS Starla'
          ],
          fruit: [
              'apple',
              'orange',
              'banana'
          ]
      }
  }
}
</script>