import { Header } from 'components/Header';
import * as S from './style';
import { KeywordItem } from 'components/Keyword/KeywordItem';
import { useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';
import { ImageButton } from 'components/Button';
import Ignore from 'assets/images/ignore.svg';
import MainHeart from 'assets/images/mainheart.svg';
import { useRecommendTeamQuery } from 'hooks/useMainQuery';
import { SlideItem } from './SlideItem';

export const Main = () => {
  const { isLoading, data } = useRecommendTeamQuery();
  const [selected, setSelected] = useState(0);
  const slideContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const ImageCardwidth = innerWidth * 0.85 + 9;
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

  if (isLoading) return <div>로딩중..!</div>;

  if (data) {
    const { members, personalities } = data.data[0];
    return (
      <S.MainWrapper>
        <Header title="오늘의 추천" />

        <S.TeamInfo>
          <S.TeamName>큐피드 저격수들</S.TeamName>
          <S.TeamDescription>세상을 움직이는 최고급 SW 인재양성의 메카</S.TeamDescription>
          <S.TeamKeyword>
            {personalities.map((personality) => (
              <KeywordItem key={personality} itemName={personality} selected />
            ))}
          </S.TeamKeyword>
        </S.TeamInfo>

        <S.SlideContainer ref={slideContainerRef}>
          {members.map((member, idx) => {
            return <SlideItem key={idx} member={member} idx={idx}></SlideItem>;
          })}
        </S.SlideContainer>

        <S.DotsWrapper>
          {members.map((member, idx) => (
            <S.Dot key={member.nickname} selected={idx === selected ? true : false} />
          ))}
        </S.DotsWrapper>

        <S.Likeable>
          <ImageButton>
            <Ignore />
          </ImageButton>
          <ImageButton>
            <MainHeart />
          </ImageButton>
        </S.Likeable>
      </S.MainWrapper>
    );
  }
};
