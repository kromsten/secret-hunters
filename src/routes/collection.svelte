<script lang="ts">
  import { onMount } from "svelte";

  import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
  import { slide, fly } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import { cubicOut, elasticOut } from 'svelte/easing';
  
  import { web3state } from "../ts/stores"
  import { decryptPic } from "../ts/utils";
  
  
  import { State } from "../ts/types"

  
  const reloadMax = 20;
    
  let nfts : Array<object>  = [];
  
  let state : State = State.Loading;

  let selIndex : number | null = null;

  
  let error : string = "";

  
  let collection : Array<object> | string | null;
  let counter : string | null;
  
  

  const update = () => { 


    web3state.getTokens().then((tokens) => {
      
      
      for (const id of tokens.token_list.tokens) {
        
        if (nfts?.some(nft => nft.num === id.toString())) continue;
        

        web3state.getToken(id).then((token) => {
            
          const pub = token.nft_dossier.public_metadata.extension;
          const media = token.nft_dossier.private_metadata.extension.media;
          
          
          setTimeout(() => {if (selIndex == null) {
            selIndex = 0
            main_img = "data:image/jpg;base64," + nfts[selIndex].page;
          } }, 3000)
          
          
          const newNft = {
            num : pub.name,
            pub_image : pub.image,
            rarity : pub.attributes[0].value,
          }
          
          media.forEach((medium : any, i : number) => {
              
              if (i == 0) {

                state = State.Decrypting;

                decryptPic(medium.url, medium.authentication.key)
                .then(base64 => {
                  newNft.page = base64;
                  state = State.Ready;
                })
              }

              else {

                if (medium.authentication) {
                                    
                  decryptPic(medium.url, medium.authentication.key)
                  .then(base64 => {
                    newNft.land = base64;
                    state = State.Ready;
                  })
                } else {
                  newNft.ticket = medium.url;
                }
            }
          })

          nfts = [...nfts, newNft];
        })
      }

      setTimeout(() => { if (state == State.Loading) { state = State.Ready; }}, 5000)

      
      setTimeout( () => { 
        if (Number(counter) >= reloadMax) counter = "1"
        localStorage.setItem('collection', JSON.stringify(nfts))
        localStorage.setItem('counter', counter.toString())
      }, 15000)

    })
    
  }
    

  onMount(() => { 

    collection  = localStorage.getItem('collection');
    counter = localStorage.getItem('counter');

    if (collection) collection = JSON.parse(collection);

    if ( counter == null ) { counter = '1' }
    else { counter = (Number(counter) + 1).toString() }

    if (counter !== "1" && Number(counter) < reloadMax && collection?.length > 0) {
      nfts = collection
      localStorage.setItem('counter', counter)
      state = State.Ready;
      
    } else {
      update();
    }


  })


  const tokens = [
    {
      image: 'https://pbs.twimg.com/media/FMcBE6WXMAcVI-u?format=jpg&name=medium',
      id: '0'
    },

    { 
      image: 'https://pbs.twimg.com/media/FOdDDFjWYAEaZAh?format=jpg&name=large', 
      id: "1" 
    },

    { 
      image: 'https://pbs.twimg.com/media/FOaRnaSXoAUd-qB?format=jpg&name=large', 
      id: "2" 
    },

    { 
      image: 'https://pbs.twimg.com/media/FOyIu9fXMAUupxJ?format=jpg&name=large', 
      id: "3" 
    },

    { 
      image: 'https://pbs.twimg.com/media/FOuUAPzXoAEpozU?format=jpg&name=large', 
      id: "4" 
    },

    { 
      image: 'https://pbs.twimg.com/media/FNrsrWEVgAA9wHU?format=jpg&name=large', 
      id: "5" 
    },

    { 
      image: 'https://pbs.twimg.com/media/FNQiZBlXIAI_VGO?format=jpg&name=large', 
      id: "6" 
    }
  ]

  let eater : any = null;
  let food : any = null;

  let lastClicked : EventTarget | null = null;
  let lastX : number | null = null;
  let lastY : number | null = null;



  const onCardClick = (e : MouseEvent , index : number) => {
    if (eater === tokens[index]) eater = null;
    else if (food === tokens[index]) food = null;
    else if (eater === null) {
      eater = tokens[index];

      
      const {x, y} = (document?.getElementById("eater")!).getBoundingClientRect();
      //const {cx, cy} = e.target?.getBoundingClientRect();


      lastX = e.clientX - x;
      lastY = 500 //e.clientY //(e.clientY + y + 500);


      console.log("Last X: " + lastX)
      console.log("Last Y: " + lastY)
    } 
    else if (food === null) {
      food = tokens[index];

      const {x, y} = (document?.getElementById("eater")!).getBoundingClientRect();

      lastX = e.clientX - x;
      lastY = 500 // e.clientY //+ y + 500;

      console.log("Last X: " + lastX)
      console.log("Last Y: " + lastY)
    }
    

    lastClicked = e.target

    console.log("lastClicked: ", e.clientX, e.clientY)
    lastY = e.clientY;
  }

  function whoosh(node, params) {
		const existingTransform = getComputedStyle(node).transform.replace('none', '');

		return {
			delay: params.delay || 30,
			duration: params.duration || 400,
			easing: params.easing || elasticOut,
			css: (t, u) => `transform: ${existingTransform} scale(${t})`
		};
	}

  function whoosh2(node : any, params : any) {
		const existingTransform = getComputedStyle(node).transform.replace('none', '');

		return {
			delay: params.delay || 100,
			duration: params.duration || 800,
			//easing: params.easing || elasticOut,
			css: (t : number, u : number) => {
        //console.log(`x: ${lastX} * ${u} == ${lastX! * u}`);
        //console.log(`y: ${lastY} * ${u} == ${lastY! * u}`);

        return `transform: ${existingTransform} translate(${lastX! * u}px, -${lastY! * u}px) `
      } 
		};
	}



</script>


<article class="d-flex flex-column justify-content-center mt-3 mb-5" >

  <section>

    <h5 class="my-0 my-sm-2">My Fishes</h5>
  
    <div class="horizontal-scroll rounded my-2">
      
      { #each tokens as token, i }
        <div class="card-wrapper mx-5 my-2">

          <div class="card bg-dark text-white">
            <img class="card-img" 
                src={token.image} 
                alt="fish pic" 
                on:click={(e) => onCardClick(e, i) }
            />
            <!-- <div class="card-img-overlay d-flex justify-content-center align-items-end pb-0">
              { "Fish #" + token.id }
            </div> -->
          </div>

        </div>
      {/each}
  
    </div>
  </section>


  <section class="row justify-content-around mt-5">

    <div class="col-4 col-sm-3 col-md-2">
      <div id="eater">
        <div class="card rounded bg-dark text-white">

          { #if eater }
            <img class="card-img" 
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

    <div class="col-1 d-flex justify-content-center align-items-end">
      <button class="btn btn-outline-light">
        Eat
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

  </section>


  <!-- { #if state === State.Loading }
    <h5 class="mdc-typography--headline5">Loading collection</h5>
 
  { :else if state === State.Error }
    <div>
      <h6 class="mdc-typography--headline6">
        There was an error loading the collection:
      </h6>
      <p class="mdc-typography--body2">
        { error }
      </p>
      <p class="mdc-typography--body1">
        Check your Keplr account for messages and try reloading the page
    </div>
  {:else } 
    { #if nfts.length == 0 }
      <div>
        <h6 class="mdc-typography--headline6">
          Looks like you don't have any script pages yet
        </h6>
        <p class="mdc-typography--body1">
          Try <a href="/mint">minting</a>
           one or get one from <a href="https://stashh.co/" rel="nofollow noopener noreferrer" target="_blank">Stashh</a></p>
      </div>
    { :else }
      <div class="wrapper">
        
        {#if selIndex != null && nfts[selIndex] }

          <div class="center">
            You can import this token to Stashh using &nbsp
            ;<a href={"https://stashh.io/asset/collection address/" + nfts[selIndex].num} rel="nofollow noopener noreferrer" target="_blank"> this </a> &nbsp; link 
          </div>

      { /if}


      </div>
    {/if}
  
  
  {/if} -->

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

  /* #eater .card, #food .card  {
    min-height: 34vh;
  } */

  .empty-card {
    min-height: 110px;
  }


  /* .nft_wrapper {
    flex-direction: row;
  }

  .top_div {
    opacity: 1;
    z-index: 3;
  }

  .drawer_wrapper {
    display: flex;
  }
  
  .main-content {
    overflow: auto;
    padding: 16px;
    height: 100%;
    box-sizing: border-box;
  }

  .center {
    display: flex;
    justify-content:center;
    align-items: center
  }

  .rarity {
    width: 100%;
    justify-content: space-around!important;
  }

  .column {
    flex-direction:column!important;
  }

  h6 { 
    margin-bottom: 0
  }

  .btn_text {
    margin-right: 15%;
  }

  .btn_load {
    padding: 5%;
  } */



</style>

