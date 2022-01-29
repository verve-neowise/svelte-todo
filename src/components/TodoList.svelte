<script lang="ts">
import { list, selection } from '../store/todo';
import Button from './Button.svelte';
import TodoAdd from './TodoAdd.svelte';
import TodoItem from './TodoItem.svelte';

const removeSelected = () => {
    $selection.forEach(list.remove)
}

</script>

<h1 class="title">Todos</h1>

<div class="header">

    <TodoAdd/>
    <div>
        {#if $list.length}
            <Button
                disabled={!$selection.length}
                on:click={removeSelected}
                type='danger'
            >
                Remove
                {#if $selection.length}
                ({$selection.length})
                {/if}
            </Button>

            <Button 
                on:click={list.removeAll}
                type='danger'
            >
                Remove all
                ({$list.length})
            </Button>
        {/if}
    </div>

</div>

{#if $list.length}

    {#each $list as item} 
        <TodoItem {item}/>
    {/each} 

{:else}
    <div class="empty">
        Empty
    </div>
{/if}

<style lang="scss">
    .title {
        font-size: 100px;
        margin: 0;
    }
    .header {
        display: flex;
        justify-content: space-between;
    }

    .header div {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .empty {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50vh;
    }
</style>