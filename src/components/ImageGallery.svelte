<script>
  export let galleryTitle = '';
  export let galleryItems;
</script>

<section class="image-gallery content-section">
  <h2>{galleryTitle}</h2>
  <div class="gallery">
    {#each galleryItems as galleryItem, i}
      <div class="gallery-item">
        <img src={galleryItem.image.url} alt={galleryItem.image.alt} />
        {#if galleryItem.image_description[0] !== undefined}
          <p>{galleryItem.image_description[0].text}</p>
        {/if}
        {#if galleryItem.link_label[0] !== undefined}
          <p class="gallery-link">
            <a
              href={galleryItem.link.uid === undefined
                ? '.'
                : `/${galleryItem.link.uid}`}
              >{galleryItem.link_label[0].text}</a
            >
          </p>
        {/if}
      </div>
    {/each}
  </div>
</section>
