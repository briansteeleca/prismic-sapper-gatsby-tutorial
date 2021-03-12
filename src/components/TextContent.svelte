<script>
  export let content;
  export let columns;

  const columnClass =
    columns === '2 Columns' ? 'text-section-2col' : 'text-section-1col';
</script>

<section class="content-section {columnClass}">
  {@html content}
</section>
