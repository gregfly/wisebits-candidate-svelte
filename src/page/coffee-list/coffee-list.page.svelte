<script lang="ts">
  import { onMount } from 'svelte';
  import { coffeeStore } from 'src/store/coffee';
  import { coffeeSource } from 'src/api/coffee';
  import { CoffeeCard, CoffeeCardSk } from 'src/component/coffee-card';
  import { BtnsCard } from 'src/component/btns-card';
  import type { ICoffee } from 'src/interface/icoffee.interface';
  import { waitFor, WaitForPromise  } from 'src/utils';
  import './coffee-list.page.less';

  let coffeePromise: Promise<ICoffee> = null;
  let waitPromise: WaitForPromise = null;
  function addCoffee() {
      coffeePromise = coffeeSource.loadOne().then((coffee: ICoffee) => {
          coffeeStore.add(coffee);
          return coffee;
      });
      waitPromise && waitPromise.cancel();
      waitPromise = waitFor(30000);
      waitPromise.then(() => addCoffee());
  }
  onMount(() => addCoffee());
</script>

<div class="coffee-list-page">
  {#each $coffeeStore as coffee}
    <CoffeeCard model={coffee} />
  {/each}
  {#await coffeePromise}
    <CoffeeCardSk />
  {:then}
    <BtnsCard on:append={addCoffee} />
  {:catch}
    <BtnsCard on:append={addCoffee} />
  {/await}
</div>