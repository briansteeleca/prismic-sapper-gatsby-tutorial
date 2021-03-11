<script context="module">
  import { Client } from '../../prismic-config.js';

  let navigation = null;

  export async function preload({ params, query }) {
    navigation = await Client.getSingle('navigation');

    if (navigation) {
      return { navigation };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Nav from '../components/Nav.svelte';

  export let segment;
  export let navigation;
</script>

<Nav {segment} navigation={navigation.data.top_navigation} />

<main>
  <slot />
</main>
