<template>
    <counter
        @tick="count = $event.value"
        @tick-even="evens++"
        @tick-odd="odds++"
    ></counter>
    <div>
        Counter: {{count}}
    </div>
    <div>
        Evens Counter: {{evens}}
    </div>
    <div>
        Odd Counter: {{odds}}
    </div>
</template>

<script>
import Counter from './CounterComponent.vue';
export default {
    components: {
        Counter
    },
    data() {
        return {
            count: 0,
            evens: 0,
            odds: 0
        };
    }
}
</script>