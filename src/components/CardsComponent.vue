<template>
    <div class="container">
        <div class="flex flex-row w-4/5 mt-40 mx-auto">

            <div class="single-card"  v-for="content in contents" :key="content.id">
                 <img :src="getImage(content.logo)" alt="">
                   <h1> {{content.type}}</h1>
                   <p> {{content.description}}</p>
                <button class="border-white-500 border-2 rounded-full" type="button">Learn More</button>
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
    methods: {
        getImage(path){
            return require('@/assets/'+ path);
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
    html,
    body {
        height: 100%;
    }

    .container {
        height: 100%;
        overflow: hidden;
    }

    h1 {
          font-family: 'Big Shoulders Display', cursive;
    }
    
    p {
        font-family: 'Lexend Deca', sans-serif;

    }

    .single-card {
        color: hsla(0, 0%, 100%, 0.75);
    }

    .single-card:nth-of-type(1){
        background: hsl(31, 77%, 52%);
    }

    .single-card:nth-of-type(2) {
        background: hsl(184, 100%, 22%);
    }
    .single-card:nth-of-type(3){
        background: hsl(179, 100%, 13%);
    }

   
</style>