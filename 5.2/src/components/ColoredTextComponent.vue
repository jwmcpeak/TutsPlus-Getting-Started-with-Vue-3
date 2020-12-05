<template>
    <p :style="styleObj">{{text}}</p>
</template>
<script>
import {computed, toRefs} from 'vue';
export default {
    props: ['textColor', 'bgColor', 'text'],
    setup(props) {

        let {textColor, bgColor, text} = toRefs(props);
        
        let styleObj = computed(() => ({
            color: textColor.value,
            backgroundColor: bgColor.value
        }));

        return {
            styleObj,
            text
        };
    }
}
</script>