import { asset, Head } from "$fresh/runtime.ts";
import { defineApp } from "$fresh/server.ts";
import Theme from "$store/sections/Theme/Theme.tsx";
import { Context } from "deco/deco.ts";

export default defineApp(async (_req, ctx) => {
  const revision = await Context.active().release?.revision();

  return (
    <>
      {/* Include default fonts and css vars */}
      <Theme />

      {/* Include Icons and manifest */}
      <Head>
        {/* Enable View Transitions API */}
        <meta name="view-transition" content="same-origin" />

        {/* Tailwind v3 CSS file */}
        <link
          href={asset(`/styles.css?revision=${revision}`)}
          rel="stylesheet"
        />

        {/* Web Manifest */}
        <link rel="manifest" href={asset("/site.webmanifest")} />
        <style>
        {`
                    html, body {
                      margin: 0;
                      padding: 0;
                      height: 100%;
                      overflow: hidden;
                  }

                    section {
                        width: 100vw;
                        height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        outline: none; /* Remove focus outline */
                    }
                `}
</style>
<script>
  {`
  window.addEventListener('load', function() {
        const sections = document.querySelectorAll('section');
        let currentSlideIndex = 0;

        function handleKeyDown(event) {
            if (event.key === 'ArrowDown') {
                event.preventDefault();
                currentSlideIndex = Math.min(currentSlideIndex + 1, sections.length - 1);
                scrollToSection(currentSlideIndex);
            } else if (event.key === 'ArrowUp') {
                event.preventDefault();
                currentSlideIndex = Math.max(currentSlideIndex - 1, 0);
                scrollToSection(currentSlideIndex);
            }

        }

        function scrollToSection(index) {
            const section = sections[index];
            section.scrollIntoView({ behavior: 'smooth' });
        }

        document.addEventListener('keydown', handleKeyDown);
      });
    `}
</script>
      </Head>
      {/* Rest of Preact tree */}
      <ctx.Component />
    </>
  );
});
