import React from "react";

import { StyledProjectImage } from "./ProjectImage.styles";

type ImageType = {
  src: string;
  alt: string;
  hovered?: boolean;
};

export const ProjectImage: React.FC<ImageType> = ({ src, alt, hovered }) => {
  return (
    <StyledProjectImage
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      srcSet={`
      ${src}?w=256&q=75 1x, 
      ${src}?w=640&q=75 2x
    `}
      hovered={hovered}
    />
  );
};
