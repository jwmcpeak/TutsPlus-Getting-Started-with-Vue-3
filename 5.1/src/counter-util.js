import {ref, watch} from 'vue';

export default function(context) {
    let count = ref(0); // .value

    setInterval(() => count.value++, 1000);

    watch(count, (newValue, oldValue) => {
        context.emit('tick', {value: newValue});

        if (newValue % 2 === 0) {
            context.emit('tick-even');
        } else {
            context.emit('tick-odd');
        }
    });
}