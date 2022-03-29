<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from 'svelte/transition';
  import { elasticOut } from 'svelte/easing';
  import { web3state, tryWait } from "../ts/stores"
  import { State } from "../ts/types"

  
  let tokens : any[] = [];
  let state : State = State.NotConnected;
  let error : string = "";


  onMount(async () => { 

    try {
      await tryWait(() => !web3state.connected, "Couldn't find Keplr", 3000);
    } catch (e : any) {
      state = State.Error
      error = e.message
      console.error(e)
      return
    }

    
    state = State.Loading

    web3state.getTokens().then(res => {
      tokens = res
      state = State.Ready
    })

  })


  let eater : any = null;
  let food : any = null;

  const onCardClick = (e : MouseEvent , index : number) => {
    if (eater === tokens[index]) eater = null;
    else if (food === tokens[index]) food = null;
    else if (eater === null) eater = tokens[index];
    else if (tokens.length > 1 && food === null) food = tokens[index];
  }


  function whoosh(node : any, params : any) {
		const existingTransform = getComputedStyle(node).transform.replace('none', '');

		return {
			delay: params.delay || 30,
			duration: params.duration || 400,
			easing: params.easing || elasticOut,
			css: (t : number) => `transform: ${existingTransform} scale(${t})`
		};
	}


  const hunt = () => {
    state = State.Loading;
    setTimeout(() => {
      tokens = tokens.filter((t) => t.id !== food.id )
      food = null;
      state = State.Ready
    }, 6000)
  }
  

  $: canHunt = eater && food && eater.level >= food.level && state === State.Ready



</script>


<article class="d-flex flex-column justify-content-center mt-3 mb-5" >

  <section class="my-3">

    <div class="horizontal-scroll rounded my-2">
      
      { #if tokens.length > 0 }

        { #each tokens as token, i }
          <div class="card-wrapper mx-5 my-2">

            <div class="card bg-dark text-white">
              <img class="card-img" 
                  src={token.image} 
                  alt="fish pic" 
                  on:click={(e) => onCardClick(e, i) }
              />
            </div>
          </div>
        {/each}

      { :else }
        <div class="d-flex align-items-center justify-content-center" style="color:black; height: 100px;">
          
          { #if state === State.Error }
            <span class="color-warning">{ error }</span>
          { :else if state === State.NotConnected }
            Not Connected
          { :else if state === State.Loading } 
            Loading
          { :else }
            No tokens
          { /if }

        </div>
      {/if}

      
  
    </div>
  </section>

  { #if tokens && tokens.length > 0 }
    <section class="row justify-content-around mt-5"
    transition:fade="{{delay: 100, duration: 800  }}"
    >

      <div class="col-4 col-sm-3 col-md-2">
        <div id="eater">
          <div class="card rounded bg-dark text-white">

            { #if eater }
              <img class="card-img"
                  class:hunting={state === State.Loading} 
                  in:whoosh
                  src={eater.image} 
                  alt="eater pic" 
                  on:click={e => onCardClick(e, eater.id) }
              />
            { :else }
              <div class="empty-card"></div>
            {/if}

          </div>
        </div>
      </div>

      
      { #if state === State.Ready && tokens.length > 1 }
        <div class="col-1 d-flex justify-content-center align-items-end">
          <button class="btn btn-dark"
            disabled={!canHunt}
            on:click={hunt}
          >
            Hunt
          </button>

        </div>
        <div class="col-4 col-sm-3 col-md-2">
          <div id="food">
            <div class="card rounded bg-dark text-white">

              { #if food }
                <img class="card-img"
                    in:whoosh
                    src={food.image} 
                    alt="food pic" 
                    on:click={e => onCardClick(e, food.id) }
                />
              { :else }
                <div class="empty-card"></div>
              {/if}

            </div>
          </div>
        </div>
      {/if}


    </section>

  { /if }


</article>


  
<style>


  .horizontal-scroll {
    overflow-x: auto;
    white-space: nowrap;
    background-color: rgb(10, 10, 200, 0.1);
  }


  .horizontal-scroll::-webkit-scrollbar {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  .horizontal-scroll::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
    background-color: #4a7dde;
  }


  .card-wrapper .card-img {
    max-height: 60px;
  }

  .card-wrapper {
    display: inline-block;
    float: none;
  }



  .empty-card {
    aspect-ratio: 1;
  }

  .hunting {
    animation: glow 3s forwards alternate;
  }


  @keyframes glow {
    from {
      box-shadow: 0 0 10px -10px #85cfe6;
    }
    to {
      box-shadow: 0 0 10px 10px #85cfe6;
    }
  }



</style>

