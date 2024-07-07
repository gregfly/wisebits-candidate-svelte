<script lang="ts">
  import './add-button.less';
  export let label: string = '';
</script>

<button class="btn btn-add" type="button" on:click>
  <span>{label}</span>
</button>
