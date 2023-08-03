import { Header } from 'components/Header';
import * as S from './style';
import { Button } from 'components/Button';
import { theme } from 'styles/theme';

interface ITeamDetail {
  description: string;
  keywords: string[];
  members: { nickname: string; image: string; age: number; mbti: string; address: string }[];
}

export const TeamDetail = (props: ITeamDetail) => {
  const { description, keywords, members } = props;
  return (
    <S.TeamWrapper>
      <Header title={description} previous />
      <S.Title>참여자</S.Title>
      {members.map((member) => {
        const { age, address, image, mbti, nickname } = member;
        return (
          <S.MemeberWrapper key={nickname}>
            <S.Image src={image} />
            <S.FlexColumn>
              <S.FlexRow>
                <S.Name>{nickname}&nbsp;</S.Name>
                <S.Age>{` · ${age}`}</S.Age>
              </S.FlexRow>
              <S.InfoText>{`${mbti} · ${address}`}</S.InfoText>
            </S.FlexColumn>
          </S.MemeberWrapper>
        );
      })}

      <S.Title>팀 성격</S.Title>
      {keywords.map((keyword) => {
        return (
          <S.KeywordWrapper key={keyword}>
            <S.Keyword>{keyword}</S.Keyword>
          </S.KeywordWrapper>
        );
      })}
      <S.Title>팀 한줄 소개</S.Title>
      <S.Description>{description}</S.Description>
      <Button title="팀원 초대하기" background={theme.colors.mainPink}></Button>
    </S.TeamWrapper>
  );
};
