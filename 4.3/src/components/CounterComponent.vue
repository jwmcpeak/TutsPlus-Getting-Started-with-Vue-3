<script>
export default {
    emits: ['tick', 'tick-even', 'tick-odd'],
    data() {
        return {
            count: 0
        };
    },
    mounted() {
        setInterval(() => this.count++, 1000);
    },
    watch: {
        count(newValue, oldValue) {
            this.$emit('tick', {value: newValue});

            if (newValue % 2 === 0) {
                this.$emit('tick-even');
            } else {
                this.$emit('tick-odd');
            }
        }
    }
}
</script>