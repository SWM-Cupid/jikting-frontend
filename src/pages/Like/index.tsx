import { NavBar } from 'components/NavBar';
import * as S from './style';
import { useState } from 'react';
import { KeywordItem } from 'components/Keyword/KeywordItem';
import { useGetLikeListQuery, useSendLikeListQuery } from 'hooks/useLikeQuery';
import { fetchAcceptLike } from 'api/like';
import { useQueryClient } from 'react-query';

export const Like = () => {
  const [selected, setSelected] = useState('get');
  const getLikeList = useGetLikeListQuery(selected);
  const sendLikeList = useSendLikeListQuery(selected);
  const queryClient = useQueryClient();

  const handleTopNavButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelected(e.currentTarget.name);
    queryClient.invalidateQueries('getLike');
  };

  const handleAcceptClick = async (likeId: number) => {
    await fetchAcceptLike(likeId);
    queryClient.invalidateQueries('getLike');
  };

  const handleRejectClick = async (likeId: number) => {
    await fetchAcceptLike(likeId);
    queryClient.invalidateQueries('getLike');
  };

  if (getLikeList || sendLikeList) {
    const data = selected === 'get' ? getLikeList : sendLikeList;
    return (
      <S.LikeWrapper>
        <S.TopNavWrapper>
          <S.TopNavButton name="get" selected={selected === 'get' ? true : false} onClick={handleTopNavButtonClick}>
            받은 호감
          </S.TopNavButton>
          <S.TopNavButton name="send" selected={selected === 'send' ? true : false} onClick={handleTopNavButtonClick}>
            보낸 호감
          </S.TopNavButton>
        </S.TopNavWrapper>

        <S.Content>
          {data?.map((item) => {
            const { likeId, name, keywords, description, imageUrls } = item;
            return (
              <S.Team key={likeId}>
                <S.TeamFlexRow>
                  <S.TeamInfo>
                    <S.Title>{name}</S.Title>
                    <S.Description>{description}</S.Description>
                  </S.TeamInfo>
                  <S.ImagesWrapper>
                    {imageUrls.map((image, idx) => (
                      <S.Image key={idx} src={image}></S.Image>
                    ))}
                  </S.ImagesWrapper>
                </S.TeamFlexRow>
                <S.KeywordWrapper>
                  {keywords.map((keyword) => (
                    <KeywordItem key={keyword} itemName={keyword} selected></KeywordItem>
                  ))}
                </S.KeywordWrapper>
                {selected === 'get' ? (
                  <S.AcceptButtonWrapper>
                    <S.AcceptButton onClick={() => handleRejectClick(likeId)}>거절</S.AcceptButton>
                    <S.AcceptButton onClick={() => handleAcceptClick(likeId)}>수락</S.AcceptButton>
                  </S.AcceptButtonWrapper>
                ) : null}
              </S.Team>
            );
          })}
        </S.Content>

        <NavBar defaultActive="like" />
      </S.LikeWrapper>
    );
  }
};
