import * as S from './style';

export const TextArea = ({ title }: { title: string }) => {
  return (
    <S.TextAreaWrapper>
      <S.Title>{title}</S.Title>
      <S.TextArea placeholder="한줄소개를 입력해주세요."></S.TextArea>
    </S.TextAreaWrapper>
  );
};
