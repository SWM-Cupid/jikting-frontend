import { Member } from 'api/main';
import * as S from './style';

export const SlideItem = ({ member, idx }: { member: Member; idx: number }) => {
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
    <S.SlideItem imageurl={images[idx].url}>
      <S.Member>
        <S.FlexRow>
          <S.Name>{`${nickname} ·`}&nbsp;</S.Name>
          <S.Age>{age}</S.Age>
        </S.FlexRow>
        <S.MemberInfo>{`${height}cm · ${mbti} · ${college} · ${address}`}</S.MemberInfo>
        <S.MemberDescription>{description}</S.MemberDescription>
        <S.MemeberKeywordWrapper>
          {[company, drinkStatus, smokeStatus, ...personalities, ...hobbies].map((keyword: string) => (
            <S.MemberKeyword key={keyword}>{keyword}</S.MemberKeyword>
          ))}
        </S.MemeberKeywordWrapper>
      </S.Member>
    </S.SlideItem>
  );
};
