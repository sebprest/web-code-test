import styled from "styled-components";

export const NextButton = styled.button`
  margin-top: auto;
  border: none;
  background: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  color: inherit;
  outline: none;
  width: 32px;
  align-self: flex-end;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 100%;
`;

export const Headline = styled.h2`
  font-size: ${({ theme }) => theme.typography.headline};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 8px;
  margin-top: 0px;
`;

export const Preface = styled.p`
  margin-top: 0;
  font-size: ${({ theme }) => theme.typography.body_large};
`;

export const Container = styled.article<{ wide: boolean }>`
  width: ${({ wide }) => (wide ? "60%" : "26%")};
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.white}};
  margin-top: 32px;
  padding: 32px;
  box-shadow: 0px 4px 12px 0px rgba(11, 15, 103, 0.04), 0px 2px 4px 0px rgba(11, 15, 103, 0.06);

  :hover {
    cursor: pointer;
    box-shadow: 0px 4px 12px 0px rgba(11, 15, 103, 0.04), 0px 2px 4px 0px rgba(11, 15, 103, 0.06), 0px 4px 24px 0px rgba(11, 15, 103, 0.20);
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0px 4px 12px 0px rgba(11, 15, 103, 0.04), 0px 2px 4px 0px rgba(11, 15, 103, 0.06), 0px 4px 24px 0px rgba(11, 15, 103, 0.20);
  }

    @media (max-width: 964px) {
        width: 100%;
    }
`;
