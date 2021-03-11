<script>
  import PrismicDOM from 'prismic-dom';

  export let bannerContent;

  let homeBanner = '../../images/home-banner.jpg';
</script>

<section
  class="homepage-banner"
  style="background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${homeBanner})"
>
  <div class="banner-content container">
    <h2 class="banner-title">
      {PrismicDOM.RichText.asText(bannerContent.banner_title)}
    </h2>
    <p class="banner-description">
      {PrismicDOM.RichText.asText(bannerContent.banner_description)}
    </p>
  </div>
</section>
