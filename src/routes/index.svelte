<script context="module">
  import { Client } from '../../prismic-config.js';
  import SliceZone from '../components/SliceZone.svelte';

  let homepage = null;

  export async function preload({ params, query }) {
    homepage = await Client.getSingle('homepage');

    if (homepage) {
      return { homepage };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import HomepageBanner from '../components/HomepageBanner.svelte';

  export let homepage;
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<HomepageBanner bannerContent={homepage.data} />

<div class="container">
  <SliceZone sliceZone={homepage.data.body} />
</div>
