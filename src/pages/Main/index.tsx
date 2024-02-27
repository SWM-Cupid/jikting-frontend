import { Header } from 'components/Header';
import * as S from './style';
import { KeywordItem } from 'components/Keyword/KeywordItem';
import { useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';
import { ImageButton } from 'components/Button';
import Pass from 'assets/images/ignore.svg';
import Like from 'assets/images/mainheart.svg';
import { useRecommendTeamQuery } from 'hooks/useMainQuery';
import { SlideItem } from './SlideItem';
import { NavBar } from 'components/NavBar';
import { fetchSendLike, fetchSendPass } from 'api/main';
import { EmptyData } from 'components/EmptyData';
import { useQueryClient } from 'react-query';

export const Main = () => {
  const data = useRecommendTeamQuery();
  const [selected, setSelected] = useState(0);
  const slideContainerRef = useRef<HTMLDivElement>(null);
  const queryClient = useQueryClient();

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

  if (data?.length === 0) {
    return (
      <S.MainWrapper>
        <Header title="오늘의 추천" />
        <EmptyData>
          <p>더 이상 추천할 팀이 없습니다!</p>
        </EmptyData>
        <NavBar defaultActive="main" />
      </S.MainWrapper>
    );
  }

  if (data) {
    const { members, name, personalities, description, recommendId } = data[0];

    const handlePassClick = async () => {
      await fetchSendPass(recommendId);
      queryClient.invalidateQueries('recommendTeam');
    };

    const handleLikeClick = async () => {
      await fetchSendLike(recommendId);
      queryClient.invalidateQueries('recommendTeam');
    };
    return (
      <S.MainWrapper>
        <Header title="오늘의 추천" />

        <S.TeamInfo>
          <S.TeamName>{name}</S.TeamName>
          <S.TeamDescription>{description}</S.TeamDescription>
          <S.TeamKeyword>
            {personalities.map((personality) => (
              <KeywordItem key={personality} itemName={personality} selected />
            ))}
          </S.TeamKeyword>
        </S.TeamInfo>

        <S.SlideContainer ref={slideContainerRef}>
          {members.map((member) => {
            return <SlideItem key={member.nickname} member={member}></SlideItem>;
          })}
        </S.SlideContainer>

        <S.DotsWrapper>
          {members.map((member, idx) => (
            <S.Dot key={member.nickname} selected={idx === selected} />
          ))}
        </S.DotsWrapper>

        <S.Likeable>
          <ImageButton onClick={handlePassClick}>
            <Pass />
          </ImageButton>
          <ImageButton onClick={handleLikeClick}>
            <Like />
          </ImageButton>
        </S.Likeable>

        <NavBar defaultActive="main" />
      </S.MainWrapper>
    );
  }
};
