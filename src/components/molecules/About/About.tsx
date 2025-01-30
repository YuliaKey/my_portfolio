import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "styled-components";

import { Typography } from "@atoms";

import { AboutContainer, StickyContainer } from "./About.styles";

export const About: React.FC = () => {
  const theme = useTheme();

  const { t }: { t: (key: string) => string } = useTranslation();

  const isSmallScreen = useMediaQuery({ query: "(max-width: 1024px)" });

  // TODO: Add real content
  return (
    <AboutContainer id="about" aria-label="About me">
      <StickyContainer className={"sr-only"}>
        <Typography
          as="h2"
          fontSize={theme.fontSize.medium}
          fontWeight={theme.fontWeight.bold}
          letterSpacing={theme.letterSpacing.sm}
          lineHeight={theme.lineHeight.sm}
          display={isSmallScreen ? "block" : "none"}
        >
          {t("ABOUT")}
        </Typography>
      </StickyContainer>
      <Typography
        as="p"
        fontSize={theme.fontSize.body}
        lineHeight={theme.lineHeight.md}
        color={theme.textSecondary}
        margin="0 0 1rem 0"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit
        leo, rutrum vel elementum eget, sodales eget ipsum. Mauris bibendum
        auctor odio, sed tristique tellus. Vivamus sit amet augue lobortis,
        rhoncus nibh a, consectetur tellus. Etiam at tincidunt est, ac facilisis
        diam. Suspendisse potenti. Cras metus lacus, dapibus ut pretium eu,
        rutrum in justo. Quisque gravida leo enim, a blandit felis placerat
        viverra. Vestibulum lacinia dui non lacus porta, nec dapibus magna
        laoreet. Proin ac ex neque. Nunc augue tellus, tristique nec ornare eu,
        vulputate ut nisl. Vivamus at placerat sapien, ut convallis dolor.
      </Typography>
      <Typography
        as="p"
        fontSize={theme.fontSize.body}
        lineHeight={theme.lineHeight.md}
        color={theme.textSecondary}
        margin="0 0 1rem 0"
      >
        Nulla facilisi. Maecenas eleifend mi in risus finibus eleifend. Donec at
        massa scelerisque sem euismod accumsan. Mauris tristique urna in nisl
        pharetra, et tempor libero finibus. Suspendisse pretium molestie nisi,
        quis interdum felis fringilla vitae. In ut aliquam neque, ut ullamcorper
        lacus. Nunc dui tellus, finibus quis massa ut, maximus gravida tellus.
        Vestibulum orci odio, aliquam eu placerat ac, condimentum nec velit.
        Aenean sit amet euismod diam.
      </Typography>

      <Typography
        as="p"
        fontSize={theme.fontSize.body}
        lineHeight={theme.lineHeight.md}
        color={theme.textSecondary}
        margin="0 0 1rem 0"
      >
        Nunc porttitor imperdiet sapien sit amet posuere. Integer non viverra
        ipsum. Donec suscipit blandit urna, vitae mattis ipsum ultricies et.
        Quisque volutpat turpis in aliquam condimentum. In maximus, lacus
        sollicitudin egestas vestibulum, mauris mauris viverra diam, a sagittis
        massa lorem at sapien. Sed eleifend porta facilisis. Vestibulum eu mi
        est.
      </Typography>
      <Typography
        as="p"
        fontSize={theme.fontSize.body}
        lineHeight={theme.lineHeight.md}
        color={theme.textSecondary}
      >
        Donec et ante magna. Donec id massa orci. Morbi viverra, dui at sodales
        volutpat, sem turpis placerat metus, vitae tempus mauris risus lacinia
        quam. Aliquam convallis mi quis accumsan egestas. Nulla id libero sit
        amet lectus placerat vestibulum ac eu ipsum. Sed non commodo urna, vitae
        sagittis leo. Aliquam sapien risus, viverra vel tristique commodo,
        viverra eget nisl.
      </Typography>
    </AboutContainer>
  );
};
