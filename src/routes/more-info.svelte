<script context="module">
  import Prismic from 'prismic-javascript';
  import SliceZone from '../components/SliceZone.svelte';

  let document = null;

  export async function preload(page, { env }) {
    const Client = Prismic.client(env.PRISMIC_ENDPOINT);
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
