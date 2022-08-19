import styled from "styled-components";

const StyledIcon = styled.img<{ active: boolean }>`
  opacity: ${(props) => (props.active ? 1 : 0.5)};
`;

export const Icon = ({
  iconName,
  active = true,
}: {
  iconName: "shot" | "cocktail";
  active?: boolean;
}) => {
  const icon = `/icon/${iconName}`;
  return (
    <StyledIcon
      src={`${icon}.png`}
      srcSet={`${icon}.png 1x, ${icon}@2x.png 2x, ${icon}@3x.png 3x,`}
      active={active}
    />
  );
};
