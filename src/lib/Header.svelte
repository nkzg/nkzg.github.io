<script>
  import { base } from '$app/paths';
</script>


<header class="text-xl w-full sm:w-3/4 md:w-[420px]">
  <nav class="">
    <ul class="flex flex-wrap gap-y-1 space-x-0.5">
      <li class="border-dense-dotted flex justify-center"><a href={`${base}/`}  class="px-1 py-1 hover:text-primary-300">nkzg</a></li>
      <li class="border-dense-dotted flex justify-center"><a href={`${base}/projects`}  class="px-1 py-1 hover:text-primary-300">projects</a></li>
      <li class="border-dense-dotted flex justify-center"><a href={`${base}/thoughts`}  class="px-3 py-1 hover:text-primary-300">thoughts</a></li>
      <li class="border-dense-dotted flex justify-center"><a href={`${base}/favorites`}  class="px-3 py-1 hover:text-primary-300">favorites</a></li>
      <li class="border-dense-dotted flex justify-center"><a href={`${base}/Nick_Zhong_CV.pdf`}  target="_blank" rel="noopener noreferrer" class="px-3 py-1 hover:text-primary-300">resume</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    font-family: 'Freight';
    font-weight: bold;
    font-style: italic;
  }
</style>