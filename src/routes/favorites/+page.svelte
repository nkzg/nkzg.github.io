<script lang="ts">
  import favJson from '$lib/fav.json';
  import goodJson from '$lib/good.json'
  
  // Use `any` for simplicity
  const favs: any = favJson; 
  const good: any = goodJson;

  // Helper function to render items
  const renderItems = (items: any[]) => {
    return items
      .map((item) => {
        if (typeof item.value === 'string') {
          // render directly if `value` is a simple string
          return `
            <li class="mt-2 text-base custom-bullet">
              <span class="font-semibold">${item.category}</span>:&nbsp; 
              <a class="hover:underline hover:italic" ${item.link ? `href="${item.link}" target="_blank"` : ''}>
                ${item.value}
              </a>
            </li>
          `;
        } else if (typeof item.value === 'object' && item.value !== null) {
          // handle structured value (title, artist)
          return `
            <li class="mt-2 text-base custom-bullet">
              <span class="font-semibold">${item.category}</span>:&nbsp;
              <a class="hover:underline hover:italic" ${item.link ? `href="${item.link}" target="_blank"` : ''}> 
                ${item.value.title} 
                ${item.value.artist ? `- ${item.value.artist}` : ''}
              </a>
            </li>
          `;
        }
        return '';
      })
      .join('');
  };

  const renderSections = (data: Record<string, any>) => {
    return Object.entries(data)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          return `
            <details class="mb-2">
              <summary class="">${key.replace(/_/g, ' ')}</summary>
              <ul class="list-none sm:px-8 mt-2 mb-2">
                ${renderItems(value)}
              </ul>
            </details>
          `;
        } else {
          return '';
        }
      })
      .join('');
  };

  const renderMisc = (songs: Record<string, any[]>) => {
    return Object.entries(songs)
      .map(([key, items]) => {
        return `
          <details class="mb-1">
            <summary class="ml-2">${key}</summary>
            <ul class="list-none px-8 mt-2 mb-2">
              ${items
                .map(
                  (item) =>
                    `<li class="custom-bullet text-base">
                      <a ${item.link ? `href="${item.link}" target="_blank"` : ''}>
                        ${item.value}
                      </a>
                      
                    </li>`
                )
                .join('')}
            </ul>
          </details>
        `;
      })
      .join('');
  };
</script>

<article class="mx-12 text-primary-100 font-americas text-lg">
  <main class="">
    <div class="mt-[calc(3vh+3vw)] mb-4 w-full sm:w-3/4 lg:w-[420px]">
      <p>
        i put a lot of stock in other people's favorites.. <br>
        here's a list of some of mine
      </p>
    </div>
  <div class="text-lg mt-4">
    <div>{@html renderSections(favs)}</div>
    <details>
      <summary class="mb-2">not my fav but still good™</summary>
      <div class="px-4">
        {@html renderMisc(good)}
      </div>
    </details>
  </div>
  </main>
</article>
