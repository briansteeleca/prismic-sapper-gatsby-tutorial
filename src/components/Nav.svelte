<script>
  export let segment;
  export let navigation;
</script>

<header class="site-header {segment}">
  <a aria-current="page" class="" href="/"
    ><div class="logo">Example Site</div></a
  >
  <nav>
    <ul>
      {#each navigation as navigationItem}
        {#if navigationItem.link_label[0].text !== undefined}
          <li>
            <a
              rel="prefetch"
              aria-current={segment === undefined ? 'page' : undefined}
              href={navigationItem.link.uid === undefined
                ? '.'
                : `/${navigationItem.link.uid}`}
              >{navigationItem.link_label[0].text}</a
            >
          </li>
        {/if}
      {/each}
    </ul>
  </nav>
</header>
