import { KeywordItem } from './KeywordItem';
import * as S from './style';
import Plus from 'assets/images/plus.svg';

interface Props {
  title: '성격' | '취미';
  keywordList: string[];
}

export const Keyword = ({ title, keywordList }: Props) => {
  return (
    <S.KeyWordWrapper>
      <S.Title>{title}</S.Title>
      <S.AddBox>
        <S.PlaceHolder>{title === '취미' ? '취미를' : '성격을'} 추가해주세요.</S.PlaceHolder>
        <Plus />
      </S.AddBox>
      <S.KeywordList>
        {keywordList.map((item) => (
          <KeywordItem key={item} itemName={item} handleDeleteClick={() => console.log('delete..')}></KeywordItem>
        ))}
      </S.KeywordList>
    </S.KeyWordWrapper>
  );
};
