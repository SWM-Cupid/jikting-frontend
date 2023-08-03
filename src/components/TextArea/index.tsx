import { ComponentProps, forwardRef } from 'react';
import * as S from './style';

interface Props extends ComponentProps<'textarea'> {
  title: string;
}
export const TextArea = forwardRef(({ title, ...props }: Props, ref: React.Ref<HTMLTextAreaElement> | null) => {
  return (
    <S.TextAreaWrapper>
      <S.Title>{title}</S.Title>
      <S.TextArea placeholder="한줄소개를 입력해주세요." {...props} ref={ref}></S.TextArea>
    </S.TextAreaWrapper>
  );
});
TextArea.displayName = 'TextArea';
