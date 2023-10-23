import { useState } from 'react';
import { KeywordItem } from './KeywordItem';
import * as S from './style';
import { Plus } from 'assets/images/Plus';
import { ModalBottomSheet } from 'components/Modal';
import { Header } from 'components/Header';
import { Button } from 'components/Button';
import { theme } from 'styles/theme';
import ModalPortal from 'components/Modal/ModalPortal';

interface Props {
  title: '성격' | '취미';
  defaultKeywordList: string[];
  keywordList: string[];
  getKeywordList(selectedKeywords: string[]): void;
}

export const Keyword = ({ title, keywordList, defaultKeywordList, getKeywordList }: Props) => {
  const [keywordModalOpen, setKeywordModalOpen] = useState(false);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>(defaultKeywordList);

  const handleAddKeywordClick = () => {
    setKeywordModalOpen(true);
  };

  const handleKeywordModalClose = () => {
    getKeywordList(selectedKeywords);
    setKeywordModalOpen(false);
  };

  const handleKeywordItemClick = (itemName: string) => {
    if (selectedKeywords.includes(itemName)) {
      setSelectedKeywords(selectedKeywords.filter((item) => item !== itemName));
    } else {
      setSelectedKeywords([...selectedKeywords, itemName]);
    }
  };
  return (
    <>
      <S.KeyWordWrapper>
        <S.Title>{title}</S.Title>
        <S.AddBox onClick={handleAddKeywordClick}>
          <S.PlaceHolder>{title === '취미' ? '취미를' : '성격을'} 추가해주세요.</S.PlaceHolder>
          <Plus width="2.4rem" height="2.4rem" fill="#999999" />
        </S.AddBox>
        <S.KeywordList>
          {defaultKeywordList.map((item) => (
            <KeywordItem key={item} itemName={item} selected></KeywordItem>
          ))}
        </S.KeywordList>
      </S.KeyWordWrapper>

      {keywordModalOpen && (
        <ModalPortal>
          <ModalBottomSheet>
            <Header title={title} />
            <S.KeywordList>
              {keywordList.map((item) => (
                <KeywordItem
                  key={item}
                  itemName={item}
                  selected={selectedKeywords.includes(item)}
                  handleKeywordItemClick={() => handleKeywordItemClick(item)}
                ></KeywordItem>
              ))}
            </S.KeywordList>
            <Button
              size="large"
              title="적용하기"
              background={theme.colors.mainPink}
              onClick={handleKeywordModalClose}
            ></Button>
          </ModalBottomSheet>
        </ModalPortal>
      )}
    </>
  );
};
