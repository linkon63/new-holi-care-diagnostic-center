import { RefObject } from "react";

export function scrollCarousel(
  ref: RefObject<HTMLDivElement | null>,
  direction: "left" | "right"
) {
  if (ref.current) {
    const { scrollLeft, clientWidth } = ref.current;
    const scrollTo =
      direction === "left"
        ? scrollLeft - clientWidth / 2
        : scrollLeft + clientWidth / 2;
    ref.current.scrollTo({ left: scrollTo, behavior: "smooth" });
  }
}
