<script lang="ts">

    const format = (secs : number) => {

        let c = secs;
        let s = "";


        if (c / (3600*24) > 1 ) {
            const days = Math.floor(c / (3600*24));
            c = c - (3600*24*days);
            s =+ days + " days"
        }

        if (c / (3600)) {
            const hours = Math.floor(c / (3600));
            c -= 3600 * hours;
            s += (s.length === 0 ? "" : ", ") +  hours + " hours"
        }

        if (c / (60)) {
            const minutes = Math.floor(c / (60));
            c -= 60 * minutes;
            s += (s.length === 0 ? "" : ", ") +  minutes + " minutes"
        }

        s += (s.length === 0 ? "" : ", ") +  c + " seconds"


        return s;
    }

    let timeDiff : any = Math.floor((new Date(2022, 3, 4) - new Date()) / 1000)
    $: time = format(timeDiff)


    const interval = setInterval(() => {
        timeDiff -= 1
    }, 1000)

    $: if (timeDiff <= 0) {
        clearInterval(interval)
    }

    import { onDestroy } from 'svelte';
    onDestroy(() => clearInterval(interval));


</script>

<article class="d-flex justify-content-center align-items-center">
    <div class="card p-4 d-flex flex-column align-items-center">
        <h4 class="d-flex">Time before launch</h4>
        { time }
    </div>
</article>

<style>
    article {
        height: 90vh;
    }

    .card {
        color: white;
        background-color: #3285b9c9;
    }
</style>