<script lang="ts">
    export let error : string = "";
    
    let modalElement : any;
    $: modal = modalElement ? (new bootstrap.Modal(modalElement)) : null

    import { onDestroy } from 'svelte';
    onDestroy(() => { if (modal) modal.hide()});

</script>

<div class="modal fade" id="mintDialog" data-bs-keyboard="false" tabindex="-2" aria-labelledby="mintDialogLabel" aria-hidden="true" bind:this={modalElement}>
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content ">

            <div class="modal-body d-flex flex-column justify-content-center align-items-center">
                { #if error.length }
                    { error }
                { :else }
                    <h6>Success</h6>
                    <div>See your token on 
                        <a href="/collection">
                            Collection
                        </a>
                        Page
                    </div>
                {/if}
            </div>

        </div>
    </div>
</div>
