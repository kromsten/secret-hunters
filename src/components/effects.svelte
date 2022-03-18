<script>
    const bubbles = Array.from(Array(5)) 
</script>

<article class="water"> 
{#each Array(10) as _, i}
        <img style={
            `--delay: ${i + Math.floor(Math.random() * 10)}s;
            --w: ${Math.floor(Math.random() * 5)}vw;
            --x: ${Math.random() * 95}vw;
        `} src="bubble.svg" alt="bubble"
            width="50" height="50">
{/each}
</article>



<style >

    @keyframes floatUp {
        from {
            bottom: -100px;
        }
        to {
            bottom: 100vh;
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

    .water {
        position: relative;
        width: 100vw;
        height: 100vh;
        background-image: linear-gradient(0deg, #182848, #2980b9)
    }

    img {
        position: absolute;
        width: var(--w);
        animation: floatUp 30s linear infinite, floatSideWays 5s ease-in-out infinite alternate;
        animation-delay: var(--delay);
        left: var(--x);
        bottom: -100px;
    }



</style>