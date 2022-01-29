<script lang="ts">

  import dayjs from 'dayjs'
  import type ITodo from '../interfaces/ITodo';
  import { selection } from '../store/todo'

  export let item: ITodo


  const toggle = () => {
    if ($selection.includes(item.id)) {
      selection.remove(item.id)
    }
    else {
      selection.add(item.id)
    }
  }
</script>

<div 
  class="todo-item"
  on:click={toggle}
  class:todo-item--selected={$selection.includes(item.id)}
  >

  <input type="checkbox" class="todo-item__checkbox"
    checked={$selection.includes(item.id)}
    >

  <h2 class="todo-item__title">
    {item.title}
  </h2>

  <div class="todo-item__date">
    { dayjs(item.created).format('DD.MM.YYYY HH:mm') }
  </div>
</div>

<style lang="scss">
  .todo-item {
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid rgba(#000, 0.1);

    &--selected {
      background-color: #f8f8f8;
    }

    &__checkbox {
      flex: 0 0 40px;
    }

    &__title {
      flex: 1;
      font-size: 20px;
      font-weight: 400;
    }

    &__date {
      flex: 0 0 150px;
      font-size: 12px;
      color: #bbb;
      text-align: right;
    }

  }

</style>