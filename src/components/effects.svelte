<script>
</script>

<article class="water"> 
{#each Array(11) as _, i}
    <img class="bubble" style={
        `--delay: ${i*3 + Math.floor(Math.random() * 15)}s;
        --w: ${Math.floor(Math.random() * 5)}vw;
        --x: ${Math.random() * 95}vw;
    `} src="bubble.svg" alt="bubble"
        width="50" height="50">
{/each}

{#each Array(7) as _, i}
    <img class={"fish " + (Math.random() < 0.5 ? "left" : "right")} style={
        `--delay: ${i*3 + Math.floor(Math.random() * 15)}s;
        --w: ${50 + Math.floor(Math.random() * 50)}px;
        --y: ${5 + Math.random() * 90}vh;
    `} src="fish.svg" alt="fish"
        width="50"
        >
{/each}

{#each Array(2) as _, i}
    <img class={"shark " + (Math.random() < 0.5 ? "left" : "right")} style={
        `--delay: ${5 + i*3 + Math.floor(Math.random() * 15)}s;
        --w: ${90 + Math.floor(Math.random() * 100)}px;
        --y: ${5 + Math.random() * 90}vh;
    `} src="shark.svg" alt="fish"
        width="100"
        >
{/each}

<img class={"whale " + (Math.random() < 0.5 ? "left" : "right")} style={
    `--delay: ${15 + Math.floor(Math.random() * 15)}s;
    --w: ${150 + Math.floor(Math.random() * 150)}px;
    --y: ${5 + Math.random() * 90}vh;
`} src="whale.svg" alt="fish"
    width="100"
>


</article>



<style >

    @keyframes floatUp {
        from {
            bottom: -50px;
        }
        to {
            bottom: 100vh;
        }
    }

    @keyframes swimLeft {
        from {
            right: -300px;
        }
        to {
            right: 110vw;
        }
    }

    @keyframes swimRight {
        from {
            left: -300px;
        }
        to {
            left: 110vw;
        }
    }

    @keyframes floatSideWays { 
        0% {
            transform: translateX(-2vw); 
        }
        100% { 
            transform: translateX(2vw); 
        }
    }

    .left {
        position: absolute;
        transform: scaleX(-1);
        width: var(--w);
        animation: swimLeft 20s linear infinite;
        animation-delay: var(--delay);
        top: var(--y);
        right: -300px;
    }

  

    .right {
        position: absolute;
        width: var(--w);
        animation: swimRight 20s linear infinite;
        animation-delay: var(--delay);
        top: var(--y);
        left: -300px;
    }

    .water {
        position: fixed;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-image: linear-gradient(0deg, #2bb3f2, #b3ecff);
        z-index: -1;
        /* background-image: linear-gradient(0deg, #182848, #2980b9); */
    }

    .bubble {
        position: absolute;
        width: var(--w);
        animation: floatUp 30s linear infinite, floatSideWays 5s ease-in-out infinite alternate;
        animation-delay: var(--delay);
        left: var(--x);
        bottom: -50px;
        z-index: 1;
    }



</style>