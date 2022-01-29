<script lang="ts">
import { list } from '../store/todo';
import TodoAdd from './TodoAdd.svelte';
import TodoItem from './TodoItem.svelte';

</script>

<TodoAdd/>

{#each $list as item} 
    <TodoItem {item}/>
{/each} 