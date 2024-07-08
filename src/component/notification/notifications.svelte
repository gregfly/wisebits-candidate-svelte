<script lang="ts">
  import { notificationStore } from 'src/store/notification';
  import Notification from './notification.svelte';
  import './notifications.less';
</script>

{#if $notificationStore.size > 0}
  <div class="notifications">
    {#each [...$notificationStore] as notification (notification.id)}
      <Notification model={notification} />
    {/each}
  </div>
{/if}