import { Header } from 'components/Header';
import * as S from './style';
import { KeywordItem } from 'components/Keyword/KeywordItem';
import { useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';
import { ImageButton } from 'components/Button';
import Ignore from 'assets/images/ignore.svg';
import MainHeart from 'assets/images/mainheart.svg';

export const Main = () => {
  const teamKeyword = ['재치만점', '유머러스', '다정한'];
  const images = ['src/assets/images/karina.jpeg', 'src/assets/images/an.jpeg', 'src/assets/images/minji.jpeg'];
  const userInfo = {
    nickname: '리나',
    age: 25,
    mbti: 'ENFP',
    address: '서울 강남구',
    company: '회사',
    drinkStatus: '안마심',
    height: 170,
    description: '운동과 여행을 좋아하는 대학생입니다!',
    personalities: ['SM엔터', '진짜 가끔 마심', '비흡연'],
    hobbies: ['활발한', '재치있는', '사려깊은', '클라이밍'],
    college: '대학',
    smoke: true,
  };

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
          <S.SlideItem key={idx} imageurl={image}>
            <S.Member>
              <S.FlexRow>
                <S.Name>{`${userInfo.nickname} ·`}&nbsp;</S.Name>
                <S.Age>{userInfo.age}</S.Age>
              </S.FlexRow>
              <S.MemberInfo>{`${userInfo.height} · ${userInfo.mbti} · ${userInfo.address}`}</S.MemberInfo>
              <S.MemberDescription>{userInfo.description}</S.MemberDescription>
              <S.MemeberKeywordWrapper>
                {userInfo.personalities.concat(userInfo.hobbies).map((keyword) => (
                  <S.MemberKeyword key={keyword}>{keyword}</S.MemberKeyword>
                ))}
              </S.MemeberKeywordWrapper>
            </S.Member>
          </S.SlideItem>
        ))}
      </S.SlideContainer>

      <S.DotsWrapper>
        {images.map((image, idx) => (
          <S.Dot key={idx} selected={idx === selected ? true : false} />
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
};
