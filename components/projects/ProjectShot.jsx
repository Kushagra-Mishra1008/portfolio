import { ViewTransition } from "react";
import Image from "next/image";

/**
 * The project screenshot. The same `name` is used on the list and detail
 * pages, so the browser morphs one into the other during navigation.
 */
export default function ProjectShot({ project, sizes, priority, aspect = "aspect-[16/10]" }) {
  return (
    <ViewTransition name={`shot-${project.slug}`} share="shot">
      <div className={`relative w-full overflow-hidden bg-crt ${aspect}`}>
        <Image
          src={project.image}
          alt={`${project.name} interface`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
      </div>
    </ViewTransition>
  );
}
