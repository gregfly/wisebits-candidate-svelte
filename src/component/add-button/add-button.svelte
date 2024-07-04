<script lang="ts">
  export let label: string = '';
</script>

<style>
  .btn-add {
    background-color: #f04623;
    color: #f1f8ea;
    padding: 10px;
    font-size: 48px;
    border-radius: 50%;
    border: 0;
    display: inline-flex;
    flex-direction: column;
    min-width: 75px;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: #e54322;
    }
  }
</style>

<button class="btn btn-add" type="button" on:click>
  <span>{label}</span>
</button>
