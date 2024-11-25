<script lang="ts">
  import '../app.css';
  import { base } from "$app/paths";
	import type { PageData } from './$types';
  import type { Snippet } from 'svelte';
	let { data, children }: { data: PageData, children: Snippet} = $props();
	const title = data?.seo?.title || 'Nick Zhong';
	const description = data?.seo?.description || 'A personal website for Nick Zhong';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
</svelte:head>

<header class="text-xl font-freight font-bold italic mt-[calc(5vh+5vw)] mx-12 text-primary-100">
  <nav class="flex w-full sm:w-3/4 md:w-[420px]">
    <ul class="flex flex-wrap gap-y-1 space-x-0.5">
      <li class="flex">
        <a href={`${base}/`} class="flex items-center">
            <img src="/favico.ico" alt="Icon" class="h-[calc(1.875rem+2px)] w-[calc(1.875rem+2px)] mr-0.5 hover:filter hover:hue-rotate-[65deg] hover:saturate-[0.8] hover:brightness-[1.3]">
        </a>
      </li>
      <li class="border-dense-dotted flex justify-center"><a href={`${base}/projects`}  class="px-3 py-1 hover:text-primary-300">projects</a></li>
      <li class="border-dense-dotted flex justify-center"><a href={`${base}/thoughts`}  class="px-3 py-1 hover:text-primary-300">thoughts</a></li>
      <li class="border-dense-dotted flex justify-center"><a href={`${base}/favorites`}  class="px-3 py-1 hover:text-primary-300">favorites</a></li>
      <li class="border-dense-dotted flex justify-center"><a href={`${base}/Nick_Zhong_CV.pdf`}  target="_blank" rel="noopener noreferrer" class="px-3 py-1 hover:text-primary-300">resume</a></li>
    </ul>
  </nav>
</header>


{@render children()}