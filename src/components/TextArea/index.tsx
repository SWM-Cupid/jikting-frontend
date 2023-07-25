import { forwardRef } from 'react';
import * as S from './style';

export const TextArea = forwardRef(({ title }: { title: string }, ref: React.Ref<HTMLTextAreaElement> | null) => {
  return (
    <S.TextAreaWrapper>
      <S.Title>{title}</S.Title>
      <S.TextArea placeholder="한줄소개를 입력해주세요." ref={ref}></S.TextArea>
    </S.TextAreaWrapper>
  );
});
TextArea.displayName = 'TextArea';
