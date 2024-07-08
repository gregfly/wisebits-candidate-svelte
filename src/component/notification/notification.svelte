<script lang="ts">
	import { fade, slide } from 'svelte/transition'
    import { notificationStore } from 'src/store/notification';
    import type { INotification } from 'src/interface/inotification.interface';
    import { sleep } from 'src/utils';
    import './notification.less';
    export let model: INotification;

    if (model.duration > 0) {
        sleep(model.duration).then(() => notificationStore.remove(model));
    }
  </script>
  
  <div class="notification fs-20" role="alert" in:fade out:slide>
    {model.message}
  </div>