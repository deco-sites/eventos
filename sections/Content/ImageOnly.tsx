import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "$store/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  image?: ImageWidget;
}

export default function ImageSection({
  image,
}: Props) {
  return (
    <div class="w-full">
       {image && 
        <Image
          width={640}
          class="w-full lg:w-3/4 object-fit z-10"
          sizes="(max-width: 640px) 100vw, 30vw"
          src={image}
          alt={image}
          decoding="async"
          loading="lazy"
        />}
    </div>
  );
}
