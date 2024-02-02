import { Head } from "$fresh/runtime.ts";

export interface Props {
  enable?: boolean;
}

export default function SlidePresentation({ enable }: Props) {
  if (!enable) {
    return <></>;
  }
  return (
    <>
      <Head>
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
    </>
  );
}
