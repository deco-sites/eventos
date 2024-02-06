import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "$store/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import { useEffect } from "preact/hooks";
import { animate, inView } from "motion";

export interface Props {
  image?: ImageWidget;
}

export default function ImageSection({ image }: Props) {
  useEffect(() => {
    inView(".image-only", () => {
      animate(
        ".image-only",
        {
          opacity: [0, 1],
          transform: ["translateY(100px)", "translateY(0px)"],
        },
        {
          duration: 1,
          easing: "ease",
        },
      );
    });
  }, []);

  return (
    <div class="w-full">
      {image && (
        <Image
          width={640}
          class="image-only w-full lg:w-3/4 object-fit z-10 mx-auto rounded-2xl"
          sizes="(max-width: 640px) 100vw, 30vw"
          src={image}
          alt={image}
          decoding="async"
          loading="lazy"
        />
      )}
    </div>
  );
}
