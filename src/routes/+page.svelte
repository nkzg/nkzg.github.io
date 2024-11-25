<script>
  import { base } from "$app/paths";
  import Header from "$lib/Header.svelte";
  import Link from "$lib/Link.svelte";
</script>

<article class="mt-8 lg:mt-36 mx-12 text-primary-100">
  <Header/>
  <main>
    <p class="mt-12 font-americas text-xl w-full sm:w-3/4 md:w-[420px]">
        <a 
          href="mailto:zhongxnicholas@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="font-freight text-2xl font-bold italic">
            nick zhong 
          </span>
        </a>
        is a software engineer and aspiring designer
        who currently <Link text="freelances"/> and works with <Link text="non-profits"/>.
        otherwise he might be
        learning olympic <Link text="weightlifting"/>,
        exploring <Link text="nature"/>, 
        and wandering around <Link text="museums"/> listening to <Link text="music"/> 
      <br>
      <br>
        currently bouncing around <Link text="pittsburgh"/>, <Link text="singapore"/>, and occasionally <Link text="san francisco"/>.
        soon-to-be graduate from <Link text="carnegie mellon"/>'s electrical and computer engineering program
      <br>
      <br>
    </p>
  </main>

  <footer class="font-americas mt-16 lg:mt-36">
    <a href="https://github.com/nkzg" target="_blank" rel="noopener noreferrer" class="hover:underline">
      github
    </a>
    <br>
    —
    <br>
    <p>
      zhongxnicholas [a] gmail [dot] com
    </p>
  </footer>
</article>