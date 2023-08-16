import { Header } from 'components/Header';
import * as S from './style';
import { Button } from 'components/Button';
import { theme } from 'styles/theme';
import Company from 'assets/images/company.svg';
import Drink from 'assets/images/drink.svg';
import Smoke from 'assets/images/smoke.svg';
import { NavBar } from 'components/NavBar';

interface ITeamDetail {
  description: string;
  keywords: string[];
  name: string;
  members: {
    nickname: string;
    image: string;
    age: number;
    mbti: string;
    address: string;
    company: string;
    drinkStatus: string;
    smokeStatus: string;
    description: string;
  }[];
}

export const TeamDetail = (props: ITeamDetail) => {
  const { name, description, keywords, members } = props;
  return (
    <S.TeamWrapper>
      <Header title={name} previous />
      <S.SectionWrapper>
        <S.Title>참여자</S.Title>
        {members.map((member) => {
          const { age, address, image, mbti, nickname, company, drinkStatus, smokeStatus, description } = member;
          return (
            <S.MemeberWrapper key={nickname}>
              <S.MemberRowWrapper>
                <S.Image src={image} />
                <S.FlexColumn>
                  <S.FlexRow>
                    <S.Name>{nickname}&nbsp;</S.Name>
                    <S.Age>{` · ${age}`}</S.Age>
                  </S.FlexRow>
                  <S.InfoText>{`${mbti} · ${address}`}</S.InfoText>
                  <S.MemberDescription>{description}</S.MemberDescription>
                </S.FlexColumn>
              </S.MemberRowWrapper>
              <S.KeywordWrapper>
                <S.MemeberKeyword>
                  <Company />
                  {company}
                </S.MemeberKeyword>
                <S.MemeberKeyword>
                  <Drink />
                  {drinkStatus}
                </S.MemeberKeyword>
                <S.MemeberKeyword>
                  <Smoke />
                  {smokeStatus}
                </S.MemeberKeyword>
              </S.KeywordWrapper>
            </S.MemeberWrapper>
          );
        })}
      </S.SectionWrapper>

      <S.SectionWrapper>
        <S.Title>팀 성격</S.Title>
        <S.KeywordWrapper>
          {keywords.map((keyword) => {
            return <S.TeamKeyword key={keyword}>{keyword}</S.TeamKeyword>;
          })}
        </S.KeywordWrapper>
      </S.SectionWrapper>

      <S.SectionWrapper>
        <S.Title>팀 한줄 소개</S.Title>
        <S.TeamDescription>{description}</S.TeamDescription>
      </S.SectionWrapper>

      <Button title="팀원 초대하기" background={theme.colors.mainPink}></Button>

      <NavBar defaultActive="team" />
    </S.TeamWrapper>
  );
};
