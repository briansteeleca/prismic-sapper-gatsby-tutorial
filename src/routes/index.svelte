<script context="module">
  import Prismic from 'prismic-javascript';
  import SliceZone from '../components/SliceZone.svelte';

  let homepage = null;

  export async function preload(page, { env }) {
    const Client = Prismic.client(env.PRISMIC_ENDPOINT);
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
