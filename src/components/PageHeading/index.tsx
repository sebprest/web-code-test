import * as S from "./styles";

function PageHeading({ children }: { children: React.ReactNode }) {
  return (
    <S.Container>
      <S.Headline>{children}</S.Headline>
      <S.Underline />
    </S.Container>
  );
}

export default PageHeading;
