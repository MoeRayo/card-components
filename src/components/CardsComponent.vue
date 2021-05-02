<template>
    <div class="container">
        <div class="flex flex-row">

            <div  v-for="content in contents" :key="content.id">
                <div class="title">
                    {{content.type}}
                </div>
                <div class="content">
                    {{content.description}}
                </div>
                <button class="border-red-500 border-2 rounded-full" type="button">Learn More</button>
            </div>

        </div>
    </div>
</template>

<script>

import content from '@/api/cardcontent'

export default {
    name: 'cardcomponent',
    data(){
        return {
            contents: []
        }
    },
    mounted(){
        content.getContents(contents => {
            this.contents = contents
            console.log(this.contents[0])
        })
    }
}
</script>

<style >
    .title {
        font-family: 'Big Shoulders Display', cursive;;
    }
    .content {
        font-family: 'Lexend Deca', sans-serif;
    }
</style>