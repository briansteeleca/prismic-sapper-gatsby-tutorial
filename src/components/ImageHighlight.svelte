<script>
  export let highlightTitle = '';
  export let highlightDesc = '';
  export let featuredImage;
</script>

<section class="highlight content-section">
  <div class="highlight-left">
    <h2>{highlightTitle}</h2>
    <h3>{highlightDesc}</h3>
    <p><a href="/about">LEARN MORE</a></p>
  </div>
  <div class="highlight-right">
    <img src={featuredImage.url} alt={featuredImage.alt} />
  </div>
</section>
