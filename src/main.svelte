<script lang="ts">
  import { coffeeStore } from 'src/store/coffee';
  import { AddButton } from 'src/component/add-button';
  import { CoffeeCard } from 'src/component/coffee-card';

  import '@uiw/reset.css/reset.less';
  import 'src/global.less';

  function addCoffee() {
    coffeeStore.add(3417, "9c772363-8362-48a2-b871-cdbbea018b86", "Blue Enlightenment", "Chiriqui, Panama", "Ethiopian Heirloom", ["crisp", "coating", "black-tea", "peanut", "tobacco"], "juicy", "https://loremflickr.com/500/500/coffee_bean");
  }
  addCoffee();
</script>

<style>
main {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  gap: 24px;
}
</style>

<main>
  {#each $coffeeStore as coffee}
    <CoffeeCard model={coffee} />
  {/each}
  <div class="card">
    <AddButton label="+" on:click={addCoffee} />
  </div>
</main>
