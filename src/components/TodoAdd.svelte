<script lang="ts">
  import { list } from "../store/todo";
  import Button from "./Button.svelte";
  import Input from "./Input.svelte";

  let title = "Hello";

  const add = () => {
    if (!title) {
      return undefined;
    }
    list.add({ title, id: new Date().valueOf(), created: new Date() });
    title = "";
  };
</script>

<div class="todo-add">

  <Input bind:value={title} on:enter={add} />

  <Button on:click={add} disabled={!title}>Add</Button>

</div>


<style lang="scss">
    .todo-add {
        :global(.input) {
            width: 300px;
        }
    }
</style>