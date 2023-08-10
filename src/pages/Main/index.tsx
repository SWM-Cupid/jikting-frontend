import { Header } from 'components/Header';
import * as S from './style';
import { KeywordItem } from 'components/Keyword/KeywordItem';
import { useEffect, useRef } from 'react';
import { debounce } from 'lodash';

export const Main = () => {
  const teamKeyword = ['재치만점', '유머러스', '다정한'];

  const slideContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    console.log(slideContainerRef.current?.scrollLeft);
  };

  const debounceScroll = debounce(handleScroll, 300);

  useEffect(() => {
    const currentRef = slideContainerRef.current;

    if (currentRef) {
      currentRef.addEventListener('scroll', debounceScroll);
      return () => {
        currentRef.removeEventListener('scroll', debounceScroll);
      };
    }
  }, [debounceScroll]);

  return (
    <S.MainWrapper>
      <Header title="오늘의 추천" />

      <S.TeamInfo>
        <S.TeamName>큐피드 저격수들</S.TeamName>
        <S.TeamDescription>세상을 움직이는 최고급 SW 인재양성의 메카</S.TeamDescription>
        <S.TeamKeyword>
          {teamKeyword.map((keyword) => (
            <KeywordItem key={keyword} itemName={keyword} selected />
          ))}
        </S.TeamKeyword>
      </S.TeamInfo>

      <S.SlideContainer ref={slideContainerRef}>
        <S.SlideItem imageurl="src/assets/images/karina.jpeg" />
        <S.SlideItem imageurl="src/assets/images/karina.jpeg" />
        <S.SlideItem imageurl="src/assets/images/karina.jpeg" />
      </S.SlideContainer>
    </S.MainWrapper>
  );
};
