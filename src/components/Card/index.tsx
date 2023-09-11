import Link from "next/link";

import * as S from "./styles";

function Card({
  id,
  title,
  description,
  wide,
}: {
  id: string;
  title: string;
  description: string;
  wide: boolean;
}) {
  return (
    <Link href={`/${id}`}>
      <S.Container wide={wide}>
        <S.Inner>
          <S.Headline>{title}</S.Headline>
          <S.Preface>{description}</S.Preface>
          <S.NextButton>→</S.NextButton>
        </S.Inner>
      </S.Container>
    </Link>
  );
}

export default Card;
