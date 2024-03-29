import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "$store/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import { useEffect } from "preact/hooks";
import { animate, inView, stagger } from "motion";

export interface Props {
  title: string;
  /**
   * @format html
   */
  description: string;
  image?: ImageWidget;
  placement: "left" | "right";
  cta?: {
    href?: string;
    text?: string;
  };
  disableSpacing?: {
    top?: boolean;
    bottom?: boolean;
  };
  rounded?: boolean;
}

const PLACEMENT = {
  left: "flex-col lg:flex-row-reverse",
  right: "flex-col lg:flex-row",
};

export default function ImageSection({
  title,
  description,
  image,
  placement,
  disableSpacing,
  cta,
  rounded = false,
}: Props) {
  useEffect(() => {
    inView(".section-image", () => {
      animate(
        ".section-image, .section-title, .section-description, .section-cta",
        {
          opacity: [0, 1],
          transform: ["translateY(100px)", "translateY(0px)"],
        },
        {
          delay: stagger(0.1),
          duration: 1,
          easing: "ease",
        },
      );
    });
  }, []);

  return (
    <div class="w-full">
      <div
        class={`flex lg:container lg:max-w-6xl lg:mx-auto mx-5 md:mx-10 ${
          PLACEMENT[placement]
        } gap-12 md:gap-20 text-left items-center z-10 ${
          disableSpacing?.top ? "" : "pt-12 lg:pt-28"
        } ${disableSpacing?.bottom ? "" : "pb-12 lg:pb-28"}`}
      >
        {image && (
          <Image
            width={640}
            class={`section-image w-full lg:w-1/2 object-fit z-10 ${
              rounded ? "rounded-2xl" : ""
            }`}
            sizes="(max-width: 640px) 100vw, 30vw"
            src={image}
            alt={image}
            decoding="async"
            loading="lazy"
          />
        )}
        <div class="w-full lg:w-1/2 space-y-2 lg:space-y-4 lg:max-w-xl gap-4 z-10">
          <p class="section-title text-[40px] leading-[110%] font-semibold">
            {title}
          </p>
          <p
            class="section-description text-zinc-400 text-[16px] md:text-[18px] leading-[150%]"
            dangerouslySetInnerHTML={{ __html: description }}
          >
          </p>
          {cta?.href && cta?.text && (
            <a
              class="section-cta pt-4 flex gap-2 border-none text-secondary transition-colors duration-200 cursor-pointer"
              href={cta.href}
            >
              <span>{cta.text}</span>
              <Icon
                id="ChevronRight"
                width={24}
                height={24}
                strokeWidth={"2"}
                class="text-secondary"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
