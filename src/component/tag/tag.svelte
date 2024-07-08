<script lang="ts">
  import './tag.less';
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

<span class="tag" style="--font-color:{curColor.font};--bg-color:{curColor.bg}">{label}</span>