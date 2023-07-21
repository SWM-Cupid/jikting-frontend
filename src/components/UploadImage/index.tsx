import * as S from './style';
import Carmera from 'assets/images/camera.svg';
import { Plus } from 'assets/images/Plus';
import { useRef, useState } from 'react';

interface Props {
  size: 'medium' | 'small';
}

export const UploadImage = ({ size }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);
  const [isUploadImage, setIsUploadImage] = useState(false);

  const handleUploadImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    if (previewRef.current) {
      previewRef.current.style.backgroundImage = `url(${URL.createObjectURL(e.target.files[0])})`;
      setIsUploadImage(true);
    }
  };

  const handleUploadImageClick = () => {
    if (inputRef.current) inputRef.current.click();
  };

  return (
    <S.UploadImageWrapper size={size} ref={previewRef} onClick={handleUploadImageClick}>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleUploadImageChange}
        style={{ display: 'none' }}
      ></input>
      {isUploadImage || (
        <>
          <Plus
            width={size === 'medium' ? '6rem' : '4rem'}
            height={size === 'medium' ? '6rem' : '4rem'}
            fill="#FF5680"
          ></Plus>
          <S.Title>사진 추가</S.Title>
        </>
      )}

      <S.CarmeraWrapper>
        <Carmera />
      </S.CarmeraWrapper>
    </S.UploadImageWrapper>
  );
};
