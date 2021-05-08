<template>
    <div>
        <footer>
           <p class="text-xs"> Challenge by <span> <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.</span> Coded by <span><a href="https://github.com/MoeRayo?tab=repositories" target="_blank">Moronfolu Olufunke</a>.</span>
               
            </p>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'footinfo'
}
</script>

<style>
    footer {
        position: fixed;
        bottom: 0;
        width: 100%;
    }

    footer p{
        background: hsl(179, 100%, 13%);
        color:hsl(0, 0%, 95%);
        padding: 1rem;
        text-align: center;
    }

    footer span{
        padding: 0.6rem 0;
        color: hsl(31, 77%, 52%) ;
    }

    footer span:nth-of-type(1):hover,
    footer span:nth-of-type(2):hover {
        background:  hsl(31, 77%, 52%);
        color: #fff ;
    }
</style>