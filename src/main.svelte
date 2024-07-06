<script lang="ts">
  import { coffeeStore } from 'src/store/coffee';
  import { coffeeSource } from 'src/api/coffee';
  import { AddButton } from 'src/component/add-button';
  import { CoffeeCard, CoffeeCardSk } from 'src/component/coffee-card';
  import type { ICoffee } from 'src/interface/icoffee.interface';

  import '@uiw/reset.css/reset.less';
  import 'src/global.less';

  let coffeePromise: Promise<ICoffee> = null;
  function addCoffee() {
    coffeePromise = coffeeSource.loadOne().then((coffee: ICoffee) => {
      coffeeStore.add(coffee);
      return coffee;
    });
    // coffeeStore.add(new Coffee(3417, "9c772363-8362-48a2-b871-cdbbea018b86", "Blue Enlightenment", "Chiriqui, Panama", "Ethiopian Heirloom", ["crisp", "coating", "black-tea", "peanut", "tobacco"], "juicy", "https://loremflickr.com/500/500/coffee_bean"));
  }
  addCoffee();
</script>

<style>
main {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  gap: 24px;
  align-items: center;
}
.card-btns {
  text-align: center;
}
</style>

<main>
  <CoffeeCardSk />
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
</main>
