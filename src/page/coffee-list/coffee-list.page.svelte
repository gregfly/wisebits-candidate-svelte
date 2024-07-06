<script lang="ts">
    import { onMount } from 'svelte';
    import { coffeeStore } from 'src/store/coffee';
    import { coffeeSource } from 'src/api/coffee';
    import { AddButton } from 'src/component/add-button';
    import { CoffeeCard, CoffeeCardSk } from 'src/component/coffee-card';
    import type { ICoffee } from 'src/interface/icoffee.interface';
    import { waitFor, WaitForPromise  } from 'src/utils';

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
  
  <style>
  .coffee-list-page {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
    gap: 24px;
    align-items: center;
  }
  .card-btns {
    text-align: center;
  }
  </style>
  
  <div class="coffee-list-page">
    {#each $coffeeStore as coffee}
      <CoffeeCard model={coffee} />
    {/each}
    {#await coffeePromise}
      <CoffeeCardSk />
    {:then}
      <div class="card card-btns">
        <AddButton label="+" on:click={addCoffee} />
      </div>
    {:catch}
      <div class="card card-btns">
        <AddButton label="+" on:click={addCoffee} />
      </div>
    {/await}
    </div>
  