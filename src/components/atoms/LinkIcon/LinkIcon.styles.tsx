import styled from "styled-components";

import { LinkType } from "../Link/Link.styles";

export type LinkIconType = LinkType;

export const StyledLinkIcon = styled.a.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "hoverColor",
      "hoverWeight",
      "padding",
      "transition",
      "color",
      "opacity",
      "hoverOpacity",
    ].includes(prop),
})<LinkIconType>`
  text-decoration: none;
  color: ${({ theme }) => theme.color.textSecondary};
  transition: ${({ theme }) => theme.transition.easeInOut};

  &:hover {
    color: ${({ theme }) => theme.color.textPrimary};
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;
