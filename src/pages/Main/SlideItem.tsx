import { Member } from 'api/main';
import Company from 'assets/images/company.svg';
import Drink from 'assets/images/drink.svg';
import Smoke from 'assets/images/smoke.svg';
import * as S from './style';

export const SlideItem = ({ member }: { member: Member }) => {
  const {
    nickname,
    age,
    mbti,
    address,
    company,
    drinkStatus,
    height,
    description,
    personalities,
    hobbies,
    college,
    smokeStatus,
    images,
  } = member;
  return (
    <S.SlideItem imageurl={images[0].url}>
      <S.Member>
        <S.FlexRow>
          <S.Name>{`${nickname} ·`}&nbsp;</S.Name>
          <S.Age>{age}</S.Age>
        </S.FlexRow>
        <S.MemberInfo>{`${height}cm · ${mbti} · ${college} · ${address}`}</S.MemberInfo>
        <S.MemberDescription>{description}</S.MemberDescription>
        <S.MemeberKeywordWrapper>
          <S.MemberKeyword>
            <Company fill="white" />
            {company}
          </S.MemberKeyword>
          <S.MemberKeyword>
            <Drink fill="white" />
            {drinkStatus}
          </S.MemberKeyword>
          <S.MemberKeyword>
            <Smoke fill="white" />
            {smokeStatus}
          </S.MemberKeyword>
        </S.MemeberKeywordWrapper>
        <S.MemeberKeywordWrapper>
          {[...personalities, ...hobbies].map((keyword: string) => (
            <S.MemberKeyword key={keyword}>{keyword}</S.MemberKeyword>
          ))}
        </S.MemeberKeywordWrapper>
      </S.Member>
    </S.SlideItem>
  );
};
