import { Header } from 'components/Header';
import * as S from './style';
import { KeywordItem } from 'components/Keyword/KeywordItem';
import { useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';

export const Main = () => {
  const teamKeyword = ['재치만점', '유머러스', '다정한'];
  const images = ['src/assets/images/karina.jpeg', 'src/assets/images/an.jpeg', 'src/assets/images/minji.jpeg'];
  const [selected, setSelected] = useState(0);
  const slideContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const ImageCardwidth = innerWidth * 0.85 + 10;
    const scrollLeft = slideContainerRef.current?.scrollLeft;

    if (scrollLeft != undefined) {
      const imageIndex = scrollLeft / ImageCardwidth;
      setSelected(Math.floor(imageIndex));
    }
  };

  const debounceScroll = debounce(handleScroll, 100);

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
        {images.map((image, idx) => (
          <S.SlideItem key={idx} imageurl={image} />
        ))}
      </S.SlideContainer>

      <S.DotsWrapper>
        {images.map((image, idx) => (
          <S.Dot key={idx} selected={idx === selected ? true : false} />
        ))}
      </S.DotsWrapper>
    </S.MainWrapper>
  );
};
