import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface IStyledTextProps extends HTMLAttributes<HTMLParagraphElement> {
  fontSize: number;
  fontWeight?: number;
  transform?: string;
  color?: string;
  text: string;
  lineHeight?: number;
  align?: string;
  isSerif?: boolean;
}
type IStyledText = Omit<IStyledTextProps, 'text'>;

const Text = styled.p<IStyledText>`
  display: flex;
  font-family: ${({ isSerif }) =>
    !isSerif ? `"Roboto", sans-serif` : `'VT323', sans-serif`};
  color: ${({ color, theme }) => color || theme.colors.black};
  font-size: ${({ fontSize }) => `${fontSize}rem`};
  transform: ${({ transform }) => transform};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  line-height: ${({ lineHeight }) => lineHeight && `${lineHeight}rem`};
  text-align: ${({ align }) => align || 'center'};
`;

export const StyledText: React.FC<IStyledTextProps> = ({
  fontSize,
  fontWeight,
  transform,
  color,
  text,
  lineHeight,
  align,
  isSerif,
  ...rest
}) => {
  return (
    <Text
      color={color}
      fontWeight={fontWeight}
      transform={transform}
      fontSize={fontSize}
      lineHeight={lineHeight}
      align={align}
      isSerif={isSerif}
      {...rest}
    >
      {text}
    </Text>
  );
};
