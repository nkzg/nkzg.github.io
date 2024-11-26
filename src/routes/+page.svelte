<script>
  import { base } from "$app/paths";
  import Link from "$lib/Link.svelte";
</script>

<article class="mx-12 text-primary-100">
  <main>
    <p class="mt-[calc(3vh+3vw)] font-americas text-xl w-full sm:w-3/4 md:w-[420px]">
        <a 
          href="mailto:zhongxnicholas@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="font-freight text-2xl font-bold italic">
            nick zhong 
          </span>
        </a>
        is a software engineer searching for beautiful stories from around the world and of his own.
        he currently <Link text="freelances"/> and collaborates with <Link text="non-profits"/>.
        otherwise he might be
        learning olympic <Link text="weightlifting"/>,
        exploring <Link text="nature"/>, 
        or wandering around <Link text="museums"/> listening to <Link text="music"/> 
      <br>
      <br>
        currently bouncing around <Link text="pittsburgh"/>, <Link text="singapore"/>, and occasionally <Link text="san francisco"/>.
        soon-to-be graduate from <Link text="carnegie mellon"/>'s electrical and computer engineering program
      <br>
      <br>
    </p>
  </main>
</article>