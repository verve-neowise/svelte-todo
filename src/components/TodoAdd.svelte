<script lang="ts">
import {list} from '../store/todo'
import Button from './Button.svelte';

    let title = 'Hello'

    const add = () => {
        list.add({ title, id: new Date().valueOf(), created: new Date() })
    };

</script>

<input
    bind:value={title}
    type="text">

<Button
    on:click={add}
    type="">
    Add
</Button>