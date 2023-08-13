export const validIdCheck = (input: string) => {
  const validIdPattern = /^[a-z]{1}[a-z0-9]{5,19}$/;
  return validIdPattern.test(input) ? true : '6-20자의 영문 소문자, 숫자를 입력해주세요';
};

export const validPasswordCheck = (input: string) => {
  const validPasswordPattern = /^[a-zA-Z0-9!@#$%^&*]{10,}$/;
  return validPasswordPattern.test(input) ? true : '10자이상 영문 대/소문자,숫자,특수문자를 입력해주세요';
};

export const validNickNameCheck = (input: string) => {
  const validNickNamePattern = /^[ㄱ-힣a-zA-Z]{2,15}$/;
  return validNickNamePattern.test(input) ? true : '2-15자의 한글, 소문자, 대문자를 입력해주세요';
};

export const validNameCheck = (input: string) => {
  const validNamePattern = /^[ㄱ-힣]{2,6}$/;
  return validNamePattern.test(input) ? true : '2-6자의 한글을 입력해주세요';
};

export const validPhoneNumberCheck = (input: string) => {
  const validPhoneNumberPattern = /^[0-9]{11}$/;
  return validPhoneNumberPattern.test(input) ? true : '올바른 휴대폰 번호를 입력해주세요';
};

export const validBirthCheck = (input: string) => {
  const validBirthPattern = /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/;
  return validBirthPattern.test(input) ? true : '올바른 생년월일을 입력해주세요.';
};
