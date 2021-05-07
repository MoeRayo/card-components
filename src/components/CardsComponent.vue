<template>
    <div class="container w-3/4 mx-auto">
        <div class="flex md:flex-row   flex-col p-3">

            <div class="flex flex-col  h-3/4  single-card p-8 " v-for="content in contents" :key="content.id">
                    <div class="my-4">
                        <img :src="getImage(content.logo)" alt="">
                    </div>
                   <h1 class="text-4xl my-6"> {{content.type}}</h1>
                   <p class="mt-4 mb-12 text-sm"> {{content.description}}</p>
                   <div>
                    <button class="text-xs py-1 px-4 text-white border-white-500 border-2 rounded-full bottom-0 justify-self-end hover:text-current" type="button">Learn More</button>
                   </div>
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
    }

    h1 {
          font-family: 'Big Shoulders Display', cursive;
          color: hsl(0, 0%, 95%);

    }
    
    p {
        font-family: 'Lexend Deca', sans-serif;
        color: hsla(0, 0%, 100%, 0.75);
    }

    .single-card {
        color: hsl(0, 0%, 95%);
    }

    .single-card:nth-of-type(1) {
        background: hsl(31, 77%, 52%);
        color: hsl(31, 77%, 52%);
    }

    .single-card:nth-of-type(2) {
        background: hsl(184, 100%, 22%);
        color: hsl(184, 100%, 22%);
    }

    .single-card:nth-of-type(3){
        background: hsl(179, 100%, 13%);
        color:hsl(179, 100%, 13%);
    }

    div button{
        font-family: 'Lexend Deca', sans-serif;
    }

    button:hover {
        background: hsl(0, 0%, 95%);
    }
   
</style>