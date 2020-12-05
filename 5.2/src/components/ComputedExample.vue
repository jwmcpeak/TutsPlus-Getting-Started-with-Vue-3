<template>
    <div class="container">
        <div class="row">
            <form action="">
                <div class="form-group">
                    <label for="color-select">Select Text color</label>
                    <select 
                        name="color-select" 
                        id="color-select" 
                        class="form-control"
                        v-model="color"
                    >
                        <option value="blue">Blue</option>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                    </select>
                </div>
            </form>
        </div>
        <div class="row">
            <form action="">
                <div class="form-group">
                    <label for="bg-select">Select BG color</label>
                    <select 
                        name="bg-select" 
                        id="bg-select" 
                        class="form-control"
                        v-model="bgColor"
                    >
                        <option value="white">White</option>
                        <option value="gray">Gray</option>
                        <option value="black">Black</option>
                    </select>
                </div>
            </form>
        </div>
        <div class="row">
            <colored-text 
                :text-color="color" 
                :bg-color="bgColor"
                text="This is some text"
            ></colored-text>
        </div>
    </div>
</template>
<script>
import ColoredText from './ColoredTextComponent.vue';
export default {
    components: {ColoredText},
    data() {
        return {
            color: '',
            bgColor: ''
        }
    }
}
</script>