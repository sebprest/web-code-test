import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin: 32px 0;
`;

export const Headline = styled.h1`
  font-size: ${({ theme }) => theme.typography.headline_small};
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 32px;
`;

export const Underline = styled.hr`
  border: unset;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  flex: 1;
  height: 1px;
  width: 100%;
  padding: 0;
`;
