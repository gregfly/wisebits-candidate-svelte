<script lang="ts">
  import { Tag } from 'src/component/tag';
  import type { ICoffee } from 'src/interface/icoffee.interface';
  import './coffee-card.less';
  export let model: ICoffee;
</script>

<div class="card card-coffee">
  <div class="head">
    {#if model.intensifier }
      <span class="label fs-24">{model.intensifier}</span>
    {/if}
    <img src={model.img} loading="lazy" width="500" height="500" alt={model.blend_name} />
  </div>
  <div class="body">
    {#if model.origin }
      <div class="origin">{model.origin}</div>
    {/if}
    {#if model.blend_name }
      <div class="fs-20"><b>{model.blend_name}</b></div>
    {/if}
    {#if model.variety }
      <div>{model.variety}</div>
    {/if}
  </div>
  {#if model.notes?.length }
    <div class="tags">
      {#each model.notes as note}
        <Tag label={note} />
      {/each}
    </div>
  {/if}
</div>

