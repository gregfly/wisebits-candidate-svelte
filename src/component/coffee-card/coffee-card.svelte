<script lang="ts">
  import { Tag } from 'src/component/tag';
  import type { Coffee } from 'src/store/coffee';
  import phImg from 'src/image/img-placeholder.png';
  export let model: Coffee;
</script>

<style>
.card-coffee {
  border: 1px solid #96969f;
  background-color: #fff;

  & > .head {
    position: relative;

    & > img {
      display: block;
      object-fit: cover;
      max-width: 100%;
      max-height: 250px;
      height: auto;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
    & > .label {
      position: absolute;
      color: #fff;
      right: 0;
      padding: 2px 10px;
      margin: 6px;
      background-color: rgb(0 0 0 / 50%);
    }
  }
  & > .body {
    padding: 5px 10px 0;
    margin: 0 0 10px;
    color: #000;

    & > * {
      padding: 2px 0;
    }
    & > .origin {
      color: #989898;
    }
  }
  & > .tags {
    white-space: nowrap;
    padding: 0 10px;
    margin: 0 0 17px;
    @media (hover: none) {
      overflow-x: auto;
    }
    @media (hover: hover) {
      overflow-x: hidden;
      &:hover {
        overflow-x: auto;
        margin-bottom: 0;
      }
    }
  }
}
</style>

<div class="card card-coffee">
  <div class="head">
    <span class="label fs-24">{model.intensifier}</span>
    <img src={model.img} loading="lazy" width="500" height="500" style="background-image: url({phImg});" alt={model.blend_name} />
  </div>
  <div class="body">
    <div class="origin">{model.origin}</div>
    <div class="fs-20"><b>{model.blend_name}</b></div>
    <div>{model.variety}</div>
  </div>
  <div class="tags">
    {#each model.notes as note}
      <Tag label={note} />
    {/each}
  </div>
</div>

