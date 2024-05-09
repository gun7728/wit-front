import React from 'react';
import { useThemeStore } from '../../../store/theme';
import styled from 'styled-components';

type ThemeProps = {
  children: JSX.Element;
};

const ThemeWrapper = styled.article`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;
export const Theme = ({ children }: ThemeProps) => {
  const { theme } = useThemeStore();

  return <ThemeWrapper data-theme={theme}>{children}</ThemeWrapper>;
};
