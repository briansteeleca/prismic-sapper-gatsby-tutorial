<script>
  import PrismicDOM from 'prismic-dom';
  import TextContent from './TextContent.svelte';
  import Quote from './Quote.svelte';
  import FullWidthImage from './FullWidthImage.svelte';
  import ImageHighlight from './ImageHighlight.svelte';
  import ImageGallery from './ImageGallery.svelte';

  export let sliceZone;
</script>

{#each sliceZone as slice, i}
  {#if slice.slice_type === 'text'}
    <TextContent
      content={PrismicDOM.RichText.asHtml(slice.primary.content)}
      columns={slice.primary.columns}
    />
  {:else if slice.slice_type === 'quote'}
    <Quote quote={PrismicDOM.RichText.asText(slice.primary.quote)} />
  {:else if slice.slice_type === 'full_width_image'}
    <FullWidthImage fullWidthImage={slice.primary.full_width_image} />
  {:else if slice.slice_type === 'image_highlight'}
    {#if slice.primary.title[0].text !== undefined}
      <ImageHighlight
        highlightTitle={slice.primary.title[0].text}
        highlightDesc={slice.primary.title[0].text}
        featuredImage={slice.primary.featured_image}
      />
    {:else}
      <ImageHighlight featuredImage={slice.primary.featured_image} />
    {/if}
  {:else if slice.slice_type === 'image_gallery'}
    {#if slice.primary.gallery_title[0].text !== undefined}
      <ImageGallery
        galleryTitle={slice.primary.gallery_title[0].text}
        galleryItems={slice.items}
      />
    {:else}
      <ImageGallery galleryItems={slice.items} />
    {/if}
  {/if}
{/each}
