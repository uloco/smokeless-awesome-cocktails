import styled from "styled-components";

const StyledIcon = styled.img``;

export const Icon = ({ iconName }: { iconName: "shot" | "cocktail" }) => {
  const icon = `/icon/${iconName}`;
  console.log(icon);
  return (
    <StyledIcon
      src={`${icon}.png`}
      srcSet={`${icon}.png 1x, ${icon}@2x.png 2x, ${icon}@3x.png 3x,`}
    />
  );
};
