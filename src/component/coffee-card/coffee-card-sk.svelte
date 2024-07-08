<script lang="ts">
  import { fade } from 'svelte/transition'
  import './coffee-card.less';
</script>

<div class="card card-coffee" in:fade={{duration: 100}}>
  <div class="head">
    <img width="500" height="500" alt="" />
  </div>
  <div class="body">
    <div class="sk-line" style="--sk-width: 50%;"></div>
    <div class="sk-line" style="--sk-width: 80%;"></div>
    <div class="sk-line" style="--sk-width: 20%;"></div>
  </div>
  <div class="tags">
    <span class="sk-line" style="--sk-width: 40%;"></span>
    <span class="sk-line" style="--sk-width: 40%;"></span>
    <span class="sk-line" style="--sk-width: 40%;"></span>
  </div>
</div>

