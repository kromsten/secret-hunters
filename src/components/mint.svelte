<script lang="ts">
    import MintDialog from "./mintDialog.svelte";

    import { web3state } from "../ts/stores"
    import { State } from "../ts/types"

    let state : State = State.Ready;
    let error : string = "";


</script>



<article class="d-flex justify-content-center align-items-center m-3">
    <div class="card p-1 py-3 d-flex flex-column align-items-center gap-2">
        <h6>Whitelisted (-10%)</h6>

        <div class="row d-flex gap-2 align-items-center justify-content-center">
            <button 
                type="button"
                class="col-5 btn btn-dark"
                data-bs-toggle="tooltip" data-bs-placement="bottom" title="24 sSCRT"
            >
                Mint 1
            </button>

            <button 
                type="button"
                class="col-5 btn btn-dark"
                data-bs-toggle="tooltip" data-bs-placement="bottom" title="36 sSCRT"
            >
                Mint 3
            </button>

            <button 
                type="button"
                class="col-5 btn btn-dark"
                data-bs-toggle="tooltip" data-bs-placement="bottom" title="49 sSCRT"
            >
                Mint 5
            </button>

            <button 
                type="button"
                class="col-5 btn btn-dark"
                data-bs-toggle="tooltip" data-bs-placement="bottom" title="52 sSCRT"
            >
                Mint 10
            </button>


            
        </div>
    </div>
</article>


<MintDialog />

<style>
    article {
        height: 90vh;
    }

    .card {
        color: white;
        background-color: #3285b9c9;
    }

</style>

<!-- 

    



<div class="wrapper center">

    <div class="center">

        { #if state !== State.Minted }

            <Button color="primary" variant="raised"  
                class={state != State.Minting ? "" : "disabled"} 
                ripple={state != State.Minting ? true : false}
                on:click={() => { 
                    if (state != State.Minting) {
                        
                        state = State.Minting;
                        web3state.mint()
                        .then((res) => {
                            nft = res;
                            const data = Buffer.from(nft.data).toString()
                            return JSON.parse(data)
                        })
                        .then((response) => {
                            
                            if (response?.send?.status == "success") {
                                state = State.Minted;
                            } else {
                                state = State.Error;
                                error = "Unknown error. Try again.";
                            }
                        })
                        .catch(e => {
                            state = State.Error

                            if (e.message.includes("fees")) {
                                error = "Fees you set are unsufficent"
                            }
                            else if (e.message.includes("balance")) {
                                error = "Not enough funds in the wallet. Make sure you have at least N sSCRT"
                            } else if (e.message.includes("All tokens")) {
                                error = "All tokens have been minted"
                            }
                             else {
                                error = e.message
                            }

                        })
                    }
                }}>
                Mint
            </Button>

        {/if}
    
        <div class="center mdc-typography--body1">
            <div class="center">
                { #if state == State.Minting }  
                    Minting...
                { :else if state == State.Minted }
                    <h6 class="mdc-typography--headline6">You got an NFT!</h6>
                    See it in your <a href="/collection">collection</a> 
                { :else if state == State.Error }
                    { error } 
                {/if}
            </div>
        </div>

    </div>


</div>


<style>
    .wrapper {
      min-height: 42vh;
      min-width: 100%;
    }

    .wrapper > .center {
      gap: 7vh;
    }
    
    .center {
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
    }

    :global(.disabled) {
        background-color:grey!important;
    }
</style> -->