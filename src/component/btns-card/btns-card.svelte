<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { AddButton } from 'src/component/add-button';
  import './btns-card.less';

  const dispatch = createEventDispatcher();

  function append() {
    dispatch('append');
  }
</script>

<div class="card card-btns">
  <AddButton label="+" on:click={append} />
</div>