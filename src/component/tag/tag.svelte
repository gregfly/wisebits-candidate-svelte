<script lang="ts">
  export let label: string;
  const COLORS = [
    {font: '#000', bg: '#e6e6e6'},
    {font: '#000', bg: '#faf591'},
    {font: '#000', bg: '#ebffdc'},
    {font: '#fff', bg: '#9b3223'},
    {font: '#fff', bg: '#237f9b'},
    {font: '#fff', bg: '#4a4ed1'},
  ];
  const curColor = COLORS[Math.floor(Math.random() * COLORS.length)];
</script>

<style>
span {
  display: inline-block;
  color: var(--font-color, #000);
  background-color: var(--bg-color, #e6e6e6);
  border-radius: 5px;
  padding: 2px 3px;
  margin: 0 5px 0 0;
  min-width: 100px;
  text-align: center;
  white-space: nowrap;
}
</style>

<span style="--font-color:{curColor.font};--bg-color:{curColor.bg}">{label}</span>