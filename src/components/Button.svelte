<script lang="ts">

    import { createEventDispatcher } from "svelte"

    export let type = undefined
    export let disabled = false
    let dispatch = createEventDispatcher()
 
    const onclick = (e: any) => {
        dispatch('click', e)
    }
</script>

<button
    on:click={onclick}
    class="button"
    {type}
    {disabled}
    >
    <slot/>
</button>

<style lang="scss">

.button {
        cursor: pointer;
        background-color: #0077ff;
        color: #fff;
        padding: 10px 20px;
        border: 0;
        border-radius: 5px;
        outline: none;

        &[type="danger"] {
            background-color: #da4444;
        }

        &[disabled] {
            cursor: default;
            opacity: 0.7;
        }
    }

</style>