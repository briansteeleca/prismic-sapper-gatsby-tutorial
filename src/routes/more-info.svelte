<script context="module">
  import { Client } from '../../prismic-config.js';
  import SliceZone from '../components/SliceZone.svelte';

  let document = null;

  export async function preload({ params, query }) {
    document = await Client.getByUID('page', 'more-info');

    if (document) {
      return { document };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let document;
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="container">
  <SliceZone sliceZone={document.data.body} />
</div>
