<script lang="ts">
import { list } from '../store/todo';
import TodoAdd from './TodoAdd.svelte';

</script>

<TodoAdd/>

{#each $list as item} 
    {item}
{/each}