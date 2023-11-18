import { theme } from 'styles/theme';
import * as S from './style';
import CheckCircle from 'assets/images/checkcircle.svg';
import { Button } from 'components/Button';
import { useEffect, useState } from 'react';

export const TermsOfService = ({ handleNextClick }: { handleNextClick: () => void }) => {
  const TERMS_OF_SERVICE = `**제1조(목적)**

  이 약관은 큐피드가 제공하는 제반 서비스의 이용과 관련하여 회사와 회원과의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
  
  **제2조(정의)**
  
  이 약관에서 사용하는 주요 용어의 정의는 다음과 같습니다.
  
  1. '서비스'라 함은 구현되는 단말기(PC, TV, 휴대형단말기 등의 각종 유무선 장치를 포함)와 상관없이 '이용자'가 이용할 수 있는 회사가 제공하는 제반 서비스를 의미합니다.
  2. '이용자'란 이 약관에 따라 회사가 제공하는 서비스를 받는 '개인회원' , '기업회원' 및 '비회원'을 말합니다.
  3. '개인회원'은 회사에 개인정보를 제공하여 회원등록을 한 사람으로, 회사로부터 지속적으로 정보를 제공받고 '회사'가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.
  4. '기업회원'은 회사에 기업정보 및 개인정보를 제공하여 회원등록을 한 사람으로, 회사로부터 지속적으로 정보를 제공받고 회사가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.
  5. '비회원'은 회원가입 없이 회사가 제공하는 서비스를 이용하는 자를 말합니다.
  6. '아이디(ID)'라 함은 회원의 식별과 서비스이용을 위하여 회원이 정하고 회사가 승인하는 문자 또는 문자와 숫자의 조합을 의미합니다.
  7. '비밀번호'라 함은 회원이 부여받은 아이디와 일치되는 회원임을 확인하고 비밀의 보호를 위해 회원 자신이 정한 문자(특수문자 포함)와 숫자의 조합을 의미합니다.
  
  **제3조(약관 외 준칙)**
  
  이 약관에서 정하지 아니한 사항에 대해서는 법령 또는 회사가 정한 서비스의 개별약관, 운영정책 및 규칙 등(이하 세부지침)의 규정에 따릅니다. 또한 본 약관과 세부지침이 충돌할 경우에는 세부지침에 따릅니다.
  
  **제4조(약관의 효력과 변경)**
  
  1. 이 약관은 직팅(이)가 제공하는 모든 인터넷서비스에 게시하여 공시합니다. 회사는 '전자상거래등에서의 소비자보호에 관한 법률(이하 '전자상거래법'이라 함)', '약관의 규제에 관한 법률(이하' 약관규제법'이라 함)', '정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 '정보통신망법'이라 함)' 등 본 서비스와 관련된 법령에 위배되지 않는 범위에서 이 약관을 변경할 수 있으며, 회사는 약관이 변경되는 경우에 변경된 약관의 내용과 시행일을 정하여, 그 시행일로부터 최소 7일 (이용자에게 불리하거나 중대한 사항의 변경은 30일) 이전부터 시행일 후 상당한 기간 동안 공지하고, 기존 이용자에게는 변경된 약관, 적용일자 및 변경사유(변경될 내용 중 중요사항에 대한 설명을 포함)를 별도의 전자적 수단(전자우편, 문자메시지, 서비스 내 전자쪽지발송, 알림 메시지를 띄우는 등의 방법)으로 개별 통지합니다. 변경된 약관은 공지하거나 통지한 시행일로부터 효력이 발생합니다.
  2. 회사가 제1항에 따라 개정약관을 공지 또는 통지하는 경우 '변경에 동의하지 아니한 경우 공지일 또는 통지를 받은 날로부터 7일(이용자에게 불리하거나 중대한 사항의 변경인 경우에는 30일) 내에 계약을 해지할 수 있으며, 계약해지의 의사표시를 하지 아니한 경우에는 변경에 동의한 것으로 본다.' 라는 취지의 내용을 함께 통지합니다.
  3. 이용자가 제2항의 공지일 또는 통지를 받은 날로부터 7일(또는 이용자에게 불리하거나 중대한 사항의 변경인 경우에는 30일)내에 변경된 약관에 대해 거절의 의사를 표시하지 않았을 때에는 본 약관의 변경에 동의한 것으로 간주합니다.
  
  **제5조(이용자에 대한 통지)**
  
  1. 회사는 이 약관에 별도 규정이 없는 한 이용자에게 전자우편, 문자메시지(SMS), 전자쪽지, 푸쉬(Push)알림 등의 전자적 수단을 이용하여 통지할 수 있습니다.
  2. 회사는 이용자 전체에 대한 통지의 경우 7일 이상 회사가 운영하는 웹사이트 내의 게시판에 게시함으로써 제1항의 통지에 갈음할 수 있습니다. 다만, 이용자 본인의 거래와 관련하여 중대한 영향을 미치는 사항에 대하여는 제1항의 개별 통지를 합니다.
  3. 회사는 이용자의 연락처 미기재, 변경 후 미수정, 오기재 등으로 인하여 개별 통지가 어려운 경우에 한하여 전항의 공지를 함으로써 개별 통지를 한 것으로 간주합니다.
  
  **제6조(이용계약의 체결)**
  
  이용계약은 다음의 경우에 체결됩니다.
  
  1. 이용자가 회원으로 가입하고자 하는 경우 이용자가 약관의 내용에 대하여 동의를 한 다음 회원가입신청을 하고 회사가 이러한 신청에 대하여 승낙한 때
  2. 이용자가 회원 가입 없이 이용할 수 있는 서비스에 대하여 회원 가입의 신청없이 서비스를 이용하고자 하는 경우에는 회사 서비스 이용을 위해 결제하는 때
  3. 이용자가 회원가입 없이 이용할 수 있는 서비스에 대하여 회원가입의 신청없이 무료 서비스를 이용하고자 하는 경우에는 그 무료 서비스와 관련된 사항의 저장 등 부가서비스를 이용하면서 위 1호 및 2호의 절차를 진행한 때
  
  **제7조(회원가입에 대한 승낙)**
  
  1. 회사는 이용계약에 대한 요청이 있을 때 서비스 이용을 승낙함을 원칙으로 합니다.
  2. 제1항에 따른 신청에 있어 회사는 서비스 제공에 필요한 경우 전문기관을 통한 실명확인 및 본인인증을 요청할 수 있습니다.
  3. 회사는 서비스 관련 설비의 여유가 없거나, 기술상 또는 업무상 문제가 있는 경우에는 승낙을 유보할 수 있습니다.
  4. 제3항에 따라 서비스 이용을 승낙하지 아니하거나 유보한 경우, 회사는 원칙적으로 이를 서비스 이용 신청자에게 알리도록 합니다. 단, 회사의 귀책사유 없이 이용자에게 알릴 수 없는 경우에는 예외로 합니다.
  5. 이용계약의 성립 시기는 제6조 제1호의 경우에는 회사가 가입완료를 신청절차 상에서 표시한 시점, 제6조 제2호의 경우에는 결제가 완료되었다는 표시가 된 시점으로 합니다.
  6. 회사는 회원에 대해 회사정책에 따라 등급별로 구분하여 이용시간, 이용횟수, 서비스 메뉴 등을 세분하여 이용에 차등을 둘 수 있습니다.
  7. 회사는 회원에 대하여 '영화및비디오물의진흥에관한법률' 및 '청소년보호법' 등에 따른 등급 및 연령 준수를 위하여 이용제한이나 등급별 제한을 둘 수 있습니다.
  
  **제8조(회원정보의 변경)**
  
  1. 회원은 개인정보관리화면을 통하여 언제든지 본인의 개인정보를 열람하고 수정할 수 있습니다. 다만, 서비스 관리를 위해 필요한 실명, 아이디 등은 수정이 불가능합니다.
  2. 회원은 회원가입신청 시 기재한 사항이 변경되었을 경우 온라인으로 수정을 하거나 전자우편 기타 방법으로 회사에 대하여 그 변경사항을 알려야 합니다.
  3. 제2항의 변경사항을 회사에 알리지 않아 발생한 불이익에 대하여는 회원에게 책임이 있습니다.
  
  **제9조(회원정보의 관리 및 보호)**
  
  1. 회원의 아이디(ID)와 비밀번호에 관한 관리책임은 회원에게 있으며, 이를 제3자가 이용하도록 하여서는 안 됩니다.
  2. 회사는 회원의 아이디(ID)가 개인정보 유출 우려가 있거나, 반사회적 또는 공서양속에 어긋나거나, 회사 또는 서비스의 운영자로 오인할 우려가 있는 경우, 해당 아이디(ID)의 이용을 제한할 수 있습니다.
  3. 회원은 아이디(ID) 및 비밀번호가 도용되거나 제3자가 사용하고 있음을 인지한 경우에는 이를 즉시 회사에 통지하고 안내에 따라야 합니다.
  4. 제3항의 경우 해당 회원이 회사에 그 사실을 통지하지 않거나, 통지하였으나 회사의 안내에 따르지 않아 발생한 불이익에 대하여 회사는 책임지지 않습니다.
  
  **제10조(회사의 의무)**
  
  1. 회사는 계속적이고 안정적인 서비스의 제공을 위하여 설비에 장애가 생기거나 멸실된 때에는 이를 지체 없이 수리 또는 복구하며, 다음 각 호의 사유 발생 시 부득이한 경우 예고 없이 서비스의 전부 또는 일부의 제공을 일시 중지할 수 있습니다. 이 경우 그 사유 및 중지 기간 등을 이용자에게 지체 없이 사후 공지합니다.
      1. 시스템의 긴급점검, 증설, 교체, 시설의 보수 또는 공사를 하기 위하여 필요한 경우
      2. 새로운 서비스를 제공하기 위하여 시스템교체가 필요하다고 판단되는 경우
      3. 시스템 또는 기타 서비스 설비의 장애, 유무선 Network 장애 등으로 정상적인 서비스 제공이 불가능할 경우
      4. 국가비상사태, 정전, 불가항력적 사유로 인한 경우
  2. 회사는 이용계약의 체결, 계약사항의 변경 및 해지 등 이용자와의 계약관련 절차 및 내용 등에 있어 이용자에게 편의를 제공하도록 노력합니다.
  3. 회사는 대표자의 성명, 상호, 주소, 전화번호, 모사전송번호(FAX), 통신판매업 신고번호, 이용약관, 개인정보취급방침 등을 이용자가 쉽게 알 수 있도록 온라인 서비스 초기화면에 게시합니다.
  
  **제11조(개인정보보호)**
  
  1. 회사는 이용자들의 개인정보를 중요시하며, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법 등 관련 법규를 준수하기 위해 노력합니다. 회사는 개인정보보호정책을 통하여 이용자가 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
  2. 회사는 최종 사용일로부터 연속하여 1년 동안 서비스 사용 이력이 없는 경우 '개인정보보호법' 및 같은 법 시행령의 규정에 따라 이용자정보를 다른 이용자의 개인정보와 분리하여 별도로 저장 및 관리할 수 있습니다. 이때 분리 저장된 이용자의 개인정보는 이용자가 회원탈퇴신청 또는 개인정보삭제 요청을 할때까지 보관됩니다.
  3. 회사가 이용자의 개인정보의 보호 및 사용에 대해서 관련 법규 및 회사의 개인정보처리방침을 적용합니다. 다만, 회사에서 운영하는 웹 사이트 등에서 링크된 외부 웹페이지에서는 회사의 개인정보처리방침이 적용되지 않습니다.
  
  **제12조(이용자의 의무)**
  
  1. 이용자는 이용자가입을 통해 이용신청을 하는 경우 사실에 근거하여 신청서를 작성해야 합니다. 이용자가 허위, 또는 타인의 정보를 등록한 경우 회사에 대하여 일체의 권리를 주장할 수 없으며, 회사는 이로 인하여 발생한 손해에 대하여 책임을 부담하지 않습니다.
  2. 이용자는 본 약관에서 규정하는 사항과 기타 회사가 정한 제반 규정, 회사가 공지하는 사항을 준수하여야 합니다. 또한 이용자는 회사의 업무를 방해하는 행위 및 회사의 명예를 훼손하는 행위를 하여서는 안 됩니다.
  3. 이용자는 주소, 연락처, 전자우편 주소 등 회원정보가 변경된 경우 즉시 온라인을 통해 이를 수정해야 합니다. 이 때 변경된 정보를 수정하지 않거나 수정이 지연되어 발생하는 책임은 이용자가 지게 됩니다.
  4. 이용자는 이용자에게 부여된 아이디와 비밀번호를 직접 관리해야 합니다. 이용자의 관리 소홀로 발생한 문제는 회사가 책임을 부담하지 않습니다.
  5. 이용자가 아이디, 닉네임, 기타 서비스 내에서 사용되는 명칭 등을 선정할 때에는 다음 각 호에 해당하는 행위를 해서는 안 됩니다.
      1. 회사가 제공하는 서비스의 공식 운영자를 사칭하거나 이와 유사한 명칭을 사용하여 다른 이용자에게 혼란을 주는 행위
      2. 선정적이고 음란한 내용이 포함된 명칭을 사용하는 행위
      3. 제3자의 상표권, 저작권 등 권리를 침해할 가능성이 있는 명칭을 사용하는 행위
      4. 제3자의 명예를 훼손하거나, 그 업무를 방해할 가능성이 있는 명칭을 사용하는 행위
      5. 기타 반사회적이고 관계법령에 저촉되는 내용이 포함된 명칭을 사용하는 행위
  6. 이용자는 회사의 명시적 동의가 없는 한 서비스 이용 권한, 기타 이용 계약상의 지위에 대하여 매도, 증여, 담보제공 등 처분행위를 할 수 없습니다.
  7. 본 조와 관련하여 서비스 이용에 있어 주의사항 등 그 밖의 자세한 내용은 운영정책으로 정하며, 이용자가 서비스 이용약관 및 운영정책을 위반하는 경우 서비스 이용제한, 민형사상의 책임 등 불이익이 발생할 수 있습니다.
  
  **제13조(서비스의 제공)**
  
  1. 회사의 서비스는 연중무휴, 1일 24시간 제공을 원칙으로 합니다. 다만 회사 시스템의 유지 보수를 위한 점검, 통신장비의 교체 등 특별한 사유가 있는 경우 서비스의 전부 또는 일부에 대하여 일시적인 제공 중단이 발생할 수 있습니다.
  2. 회사가 제공하는 개별 서비스에 대한 구체적인 안내사항은 개별 서비스 화면에서 확인할 수 있습니다.
  
  **제14조(서비스의 제한 등)**
  
  1. 회사는 전시, 사변, 천재지변 또는 이에 준하는 국가비상사태가 발생하거나 발생할 우려가 있는 경우와 전기통신사업법에 의한 기간통신사업자가 전기통신서비스를 중지하는 등 부득이한 사유가 있는 경우에는 서비스의 전부 또는 일부를 제한하거나 중지할 수 있습니다.
  2. 무료서비스는 전항의 규정에도 불구하고, 회사의 운영정책 등의 사유로 서비스의 전부 또는 일부가 제한되거나 중지될 수 있으며, 유료로 전환될 수 있습니다.
  3. 회사는 서비스의 이용을 제한하거나 정지하는 때에는 그 사유 및 제한기간, 예정 일시 등을 지체없이 이용자에게 알립니다.
  4. 회사는 사전에 결제정보를 입력 받고, 무료로 제공중인 서비스를 유료로 전환할 경우, 그 사유와 유료 전환 예정 일시를 통지하고 유료 전환에 대한 이용자의 동의를 받습니다.
  
  **제15조(서비스의 해제·해지 및 탈퇴 절차)**
  
  1. 이용자가 이용 계약을 해지하고자 할 때는 언제든지 홈페이지 상의 이용자 탈퇴 신청을 통해 이용계약 해지를 요청할 수 있습니다. 단, 신규가입 후 일정 시간 동안 서비스 부정이용 방지 등의 사유로 즉시 탈퇴가 제한될 수 있습니다.
  2. 회사는 이용자가 본 약관에서 정한 이용자의 의무를 위반한 경우 등 비정상적인 이용 또는 부당한 이용과 이용자 금지프로그램 사용하는 경우 또는 타인의 명예를 훼손하거나 모욕하는 방송과 게시물을 작성한 경우 이러한 행위를 금지하거나 삭제를 요청하였음에도 불구하고 최초의 금지 또는 삭제 요청을 포함하여 2회 이상 누적되는 경우 이용자에게 통지하고, 계약을 해지할 수 있습니다.
  3. 회사는 이용자의 청약철회, 해제 또는 해지의 의사표시를 수신한 후 그 사실을 이용자에게 회신합니다. 회신은 이용자가 회사에 대하여 통지한 방법 중 하나에 의하고, 이용자가 회사에 대하여 통지한 연락처가 존재하지 않는 경우에는 회신하지 않을 수 있습니다.
  
  **제16조(손해배상)**
  
  1. 회사 또는 이용자는 상대방의 귀책에 따라 손해가 발생하는 경우 손해배상을 청구할 수 있습니다. 다만, 회사는 무료서비스의 장애, 제공 중단, 보관된 자료 멸실 또는 삭제, 변조 등으로 인한 손해에 대하여는 배상책임을 부담하지 않습니다.
  2. 회사가 제공하는 서비스의 이용과 관련하여 회사의 운영정책 및 개인 정보 보호정책, 기타 서비스별 이용약관에서 정하는 내용에 위반하지 않는 한 회사는 어떠한 손해에 대하여도 책임을 부담하지 않습니다.
  
  **제17조(면책사항)**
  
  1. 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임을 지지 않습니다.
  2. 회사는 이용자의 귀책사유로 인한 서비스 이용장애에 대하여 책임을 지지 지 않습니다.
  3. 회사는 이용자가 서비스를 이용하며 기대하는 수익을 얻지 못한 것에 대하여 책임 지지 않으며 서비스를 통하여 얻은 자료로 인한 손해 등에 대하여도 책임을 지지 않습니다.
  4. 회사는 이용자가 웹페이지에 게재한 내용의 신뢰도, 정확성 등 내용에 대해서는 책임지지 않으며, 이용자 상호간 또는 이용자와 제3자 상호간 서비스를 매개로 발생한 분쟁에 개입하지 않습니다.
  
  **제18조(권리의 귀속)**
  
  1. 회사가 제공하는 서비스에 대한 저작권 등 지식재산권은 회사에 귀속 됩니다.
  2. 회사는 서비스와 관련하여 이용자에게 회사가 정한 조건 따라 회사가 제공하는 서비스를 이용할 수 있는 권한만을 부여하며, 이용자는 이를 양도, 판매, 담보제공 하는 등 처분행위를 할 수 없습니다.
  
  **제19조(관할법원 및 준거법)**
  
  서비스와 관련하여 분쟁이 발생한 경우 관할법원은 민사소송법에 따른 관할법원으로 정하며, 준거법은 대한민국의 법령을 적용합니다.
  
  **부 칙**
  
  **제1조(시행일)**
  
  본 약관은 2023.11.16부터 시행됩니다.`;
  const PRIVACY_POLICY = `**제1조(목적)**

  직팅(이하 ‘회사'라고 함)는 회사가 제공하고자 하는 서비스(이하 ‘회사 서비스’)를 이용하는 개인(이하 ‘이용자’ 또는 ‘개인’)의 정보(이하 ‘개인정보’)를 보호하기 위해, 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 '정보통신망법') 등 관련 법령을 준수하고, 서비스 이용자의 개인정보 보호 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침(이하 ‘본 방침’)을 수립합니다.
  
  **제2조(개인정보 처리의 원칙)**
  
  개인정보 관련 법령 및 본 방침에 따라 회사는 이용자의 개인정보를 수집할 수 있으며 수집된 개인정보는 개인의 동의가 있는 경우에 한해 제3자에게 제공될 수 있습니다. 단, 법령의 규정 등에 의해 적법하게 강제되는 경우 회사는 수집한 이용자의 개인정보를 사전에 개인의 동의 없이 제3자에게 제공할 수도 있습니다.
  
  **제3조(본 방침의 공개)**
  
  1. 회사는 이용자가 언제든지 쉽게 본 방침을 확인할 수 있도록 회사 홈페이지 첫 화면 또는 첫 화면과의 연결화면을 통해 본 방침을 공개하고 있습니다.
  2. 회사는 제1항에 따라 본 방침을 공개하는 경우 글자 크기, 색상 등을 활용하여 이용자가 본 방침을 쉽게 확인할 수 있도록 합니다.
  
  **제4조(본 방침의 변경)**
  
  1. 본 방침은 개인정보 관련 법령, 지침, 고시 또는 정부나 회사 서비스의 정책이나 내용의 변경에 따라 개정될 수 있습니다.
  2. 회사는 제1항에 따라 본 방침을 개정하는 경우 다음 각 호 하나 이상의 방법으로 공지합니다.
      1. 회사가 운영하는 인터넷 홈페이지의 첫 화면의 공지사항란 또는 별도의 창을 통하여 공지하는 방법
      2. 서면·모사전송·전자우편 또는 이와 비슷한 방법으로 이용자에게 공지하는 방법
  3. 회사는 제2항의 공지는 본 방침 개정의 시행일로부터 최소 7일 이전에 공지합니다. 다만, 이용자 권리의 중요한 변경이 있을 경우에는 최소 30일 전에 공지합니다.
  
  **제5조(회원 가입을 위한 정보)**
  
  회사는 이용자의 회사 서비스에 대한 회원가입을 위하여 다음과 같은 정보를 수집합니다.
  
  1. 필수 수집 정보: 이메일 주소, 생년월일 및 휴대폰 번호
  
  **제6조(본인 인증을 위한 정보)**
  
  회사는 이용자의 본인인증을 위하여 다음과 같은 정보를 수집합니다.
  
  1. 필수 수집 정보: 휴대폰 번호, 이메일 주소, 이름, 생년월일 및 성별
  
  **제7조(회사 서비스 제공을 위한 정보)**
  
  회사는 이용자에게 회사의 서비스를 제공하기 위하여 다음과 같은 정보를 수집합니다.
  
  1. 필수 수집 정보: 아이디, 이메일 주소, 이름, 생년월일 및 연락처
  
  **제8조(서비스 이용 및 부정 이용 확인을 위한 정보)**
  
  회사는 이용자의 서비스 이용 및 부정이용의 확인 및 분석을 위하여 다음과 같은 정보를 수집합니다.
  
  1. 필수 수집 정보: 서비스 이용기록
  
  ※ 부정이용 : 회원탈퇴 후 재가입, 상품구매 후 구매취소 등을 반복적으로 행하는 등 회사가 제공하는 할인쿠폰, 이벤트 혜택 등의 경제상 이익을 불·편법적으로 수취하는 행위, 이용약관 등에서 금지하고 있는 행위, 명의도용 등의 불·편법행위 등을 말합니다. 수집되는 정보는 회사 서비스 이용에 따른 통계∙분석에 이용될 수 있습니다.
  
  **제9조(개인정보 수집 방법)**
  
  회사는 다음과 같은 방법으로 이용자의 개인정보를 수집합니다.
  
  1. 이용자가 회사의 홈페이지에 자신의 개인정보를 입력하는 방식
  
  **제10조(개인정보의 이용)**
  
  회사는 개인정보를 다음 각 호의 경우에 이용합니다.
  
  1. 공지사항의 전달 등 회사의 운영에 필요한 경우
  2. 이용문의에 대한 회신, 불만의 처리 등 이용자에 대한 서비스 개선을 위한 경우
  3. 회사의 서비스를 제공하기 위한 경우
  4. 이벤트 및 행사 안내 등 마케팅을 위한 경우
  5. 개인정보 및 관심에 기반한 이용자간 관계의 형성을 위한 경우
  6. 법령 및 회사 약관을 위반하는 회원에 대한 이용 제한 조치, 부정 이용 행위를 포함하여 서비스의 원활한 운영에 지장을 주는 행위에 대한 방지 및 제재를 위한 경우
  
  **제11조(개인정보의 보유 및 이용기간)**
  
  1. 회사는 이용자의 개인정보에 대해 개인정보의 수집·이용 목적이 달성을 위한 기간 동안 개인정보를 보유 및 이용합니다.
  2. 전항에도 불구하고 회사는 내부 방침에 의해 서비스 부정이용기록은 부정 가입 및 이용 방지를 위하여 회원 탈퇴 시점으로부터 최대 1년간 보관합니다.
  
  **제12조(법령에 따른 개인정보의 보유 및 이용기간)**
  
  회사는 관계법령에 따라 다음과 같이 개인정보를 보유 및 이용합니다.
  
  1. 전자상거래 등에서의 소비자보호에 관한 법률에 따른 보유정보 및 보유기간
      1. 계약 또는 청약철회 등에 관한 기록 : 5년
      2. 대금결제 및 재화 등의 공급에 관한 기록 : 5년
      3. 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년
      4. 표시•광고에 관한 기록 : 6개월
  2. 통신비밀보호법에 따른 보유정보 및 보유기간
      1. 웹사이트 로그 기록 자료 : 3개월
  3. 전자금융거래법에 따른 보유정보 및 보유기간
      1. 전자금융거래에 관한 기록 : 5년
  4. 위치정보의 보호 및 이용 등에 관한 법률
      1. 개인위치정보에 관한 기록 : 6개월
  
  **제13조(개인정보의 파기원칙)**
  
  회사는 원칙적으로 이용자의 개인정보 처리 목적의 달성, 보유·이용기간의 경과 등 개인정보가 필요하지 않을 경우에는 해당 정보를 지체 없이 파기합니다.
  
  **제14조(서비스 미이용자에 대한 개인정보처리)**
  
  1. 회사는 1년 동안 회사의 서비스를 이용하지 않은 이용자의 개인정보는 원칙적으로 이용자에게 사전통지하고 개인정보를 파기하거나 별도로 분리하여 저장합니다.
  2. 회사는 장기 미이용 이용자의 개인정보는 별도로 분리되어 안전하게 보관하게 되며, 해당 이용자의 통지는 분리 보관 처리 일을 기준으로 최소 30일 이전에 전자우편주소로 전송됩니다.
  3. 장기 미이용 이용자는 회사가 미이용자 DB를 별도로 분리하기 전에 계속 서비스를 이용하고자 하는 경우 웹사이트(이하 '모바일앱' 포함)에 로그인하시면 됩니다.
  4. 장기 미이용 이용자는 웹사이트에 로그인할 경우 이용자의 동의에 따라 본인의 계정을 복원할 수 있습니다.
  5. 회사는 분리 보관된 개인정보를 4년간 보관 후 지체없이 파기합니다.
  
  **제15조(개인정보파기절차)**

  1. 이용자가 회원가입 등을 위해 입력한 정보는 개인정보 처리 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기 되어집니다.
  2. 회사는 파기 사유가 발생한 개인정보를 개인정보보호 책임자의 승인절차를 거쳐 파기합니다.
  
  **제16조(개인정보파기방법)**
  
  회사는 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제하며, 종이로 출력된 개인정보는 분쇄기로 분쇄하거나 소각 등을 통하여 파기합니다.
  
  **제17조(광고성 정보의 전송 조치)**
  
  1. 회사는 전자적 전송매체를 이용하여 영리목적의 광고성 정보를 전송하는 경우 이용자의 명시적인 사전동의를 받습니다. 다만, 다음 각호 어느 하나에 해당하는 경우에는 사전 동의를 받지 않습니다
      1. 회사가 재화 등의 거래관계를 통하여 수신자로부터 직접 연락처를 수집한 경우, 거래가 종료된 날로부터 6개월 이내에 회사가 처리하고 수신자와 거래한 것과 동종의 재화 등에 대한 영리목적의 광고성 정보를 전송하려는 경우
      2. 「방문판매 등에 관한 법률」에 따른 전화권유판매자가 육성으로 수신자에게 개인정보의 수집출처를 고지하고 전화권유를 하는 경우
  2. 회사는 전항에도 불구하고 수신자가 수신거부의사를 표시하거나 사전 동의를 철회한 경우에는 영리목적의 광고성 정보를 전송하지 않으며 수신거부 및 수신동의 철회에 대한 처리 결과를 알립니다.
  3. 회사는 오후 9시부터 그다음 날 오전 8시까지의 시간에 전자적 전송매체를 이용하여 영리목적의 광고성 정보를 전송하는 경우에는 제1항에도 불구하고 그 수신자로부터 별도의 사전 동의를 받습니다.
  4. 회사는 전자적 전송매체를 이용하여 영리목적의 광고성 정보를 전송하는 경우 다음의 사항 등을 광고성 정보에 구체적으로 밝힙니다.
      1. 회사명 및 연락처
      2. 수신 거부 또는 수신 동의의 철회 의사표시에 관한 사항의 표시
  5. 회사는 전자적 전송매체를 이용하여 영리목적의 광고성 정보를 전송하는 경우 다음 각 호의 어느 하나에 해당하는 조치를 하지 않습니다.
      1. 광고성 정보 수신자의 수신거부 또는 수신동의의 철회를 회피·방해하는 조치
      2. 숫자·부호 또는 문자를 조합하여 전화번호·전자우편주소 등 수신자의 연락처를 자동으로 만들어 내는 조치
      3. 영리목적의 광고성 정보를 전송할 목적으로 전화번호 또는 전자우편주소를 자동으로 등록하는 조치
      4. 광고성 정보 전송자의 신원이나 광고 전송 출처를 감추기 위한 각종 조치
      5. 영리목적의 광고성 정보를 전송할 목적으로 수신자를 기망하여 회신을 유도하는 각종 조치
  
  **제18조(아동의 개인정보보호)**
  
  1. 회사는 만 14세 미만 아동의 개인정보 보호를 위하여 만 14세 이상의 이용자에 한하여 회원가입을 허용합니다.
  2. 제1항에도 불구하고 회사는 이용자가 만 14세 미만의 아동일 경우에는, 그 아동의 법정대리인으로부터 그 아동의 개인정보 수집, 이용, 제공 등의 동의를 그 아동의 법정대리인으로부터 받습니다.
  3. 제2항의 경우 회사는 그 법정대리인의 이름, 생년월일, 성별, 중복가입확인정보(ID), 휴대폰 번호 등을 추가로 수집합니다.
  
  **제19조(이용자의 의무)**
  
  1. 이용자는 자신의 개인정보를 최신의 상태로 유지해야 하며, 이용자의 부정확한 정보 입력으로 발생하는 문제의 책임은 이용자 자신에게 있습니다.
  2. 타인의 개인정보를 도용한 회원가입의 경우 이용자 자격을 상실하거나 관련 개인정보보호 법령에 의해 처벌받을 수 있습니다.
  3. 이용자는 전자우편주소, 비밀번호 등에 대한 보안을 유지할 책임이 있으며 제3자에게 이를 양도하거나 대여할 수 없습니다.
  
  **제20조(개인정보 유출 등에 대한 조치)**
  
  회사는 개인정보의 분실·도난·유출(이하 "유출 등"이라 한다) 사실을 안 때에는 지체 없이 다음 각 호의 모든 사항을 해당 이용자에게 알리고 방송통신위원회 또는 한국인터넷진흥원에 신고합니다.
  
  1. 유출 등이 된 개인정보 항목
  2. 유출 등이 발생한 시점
  3. 이용자가 취할 수 있는 조치
  4. 정보통신서비스 제공자 등의 대응 조치
  5. 이용자가 상담 등을 접수할 수 있는 부서 및 연락처
  
  **제21조(개인정보 유출 등에 대한 조치의 예외)**
  
  회사는 전조에도 불구하고 이용자의 연락처를 알 수 없는 등 정당한 사유가 있는 경우에는 회사의 홈페이지에 30일 이상 게시하는 방법으로 전조의 통지를 갈음하는 조치를 취할 수 있습니다.
  
  **제22조(이용자의 쿠키 설치 선택권)**
  
  1. 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서 이용자는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.
  2. 다만, 쿠키의 저장을 거부할 경우에는 로그인이 필요한 회사의 일부 서비스는 이용에 어려움이 있을 수 있습니다.
  
  **제23조(쿠키 설치 허용 지정 방법)**
  
  쿠키 설치 허용 여부를 지정하는 방법(Internet Explorer의 경우)은 다음과 같습니다.
  
  1. [도구] 메뉴에서 [인터넷 옵션]을 선택합니다.
  2. [개인정보 탭]을 클릭합니다.
  3. [고급] 설정에서 설정하시면 됩니다.
  
  **부칙**
  
  제1조 본 방침은 2023.11.16부터 시행됩니다.`;

  const [allAgree, setAllAgree] = useState(false);
  const [termsOfServiceAgree, setTermsOfServiceAgree] = useState(false);
  const [privacyPolicyAgree, setPrivacyPolicyAgree] = useState(false);

  useEffect(() => {
    if (termsOfServiceAgree && privacyPolicyAgree) {
      setAllAgree(true);
    } else {
      setAllAgree(false);
    }
  }, [termsOfServiceAgree, privacyPolicyAgree]);

  const handleToggleAllAgreeClick = () => {
    setAllAgree((allAgree) => !allAgree);
    setTermsOfServiceAgree(!allAgree);
    setPrivacyPolicyAgree(!allAgree);
  };

  return (
    <>
      <S.TermsofServiceBox>
        <S.Title>직팅 이용약관</S.Title>
        <S.CheckBox size="large" onClick={handleToggleAllAgreeClick}>
          <CheckCircle
            width="2.8rem"
            height="2.8rem"
            fill={allAgree ? theme.colors.mainPink : theme.colors.buttonGrey}
            stroke={allAgree ? 'white' : 'none'}
          />{' '}
          전체 동의하기
        </S.CheckBox>

        <S.DivideLine />

        <S.CheckBox onClick={() => setTermsOfServiceAgree((termsOfServiceAgree) => !termsOfServiceAgree)}>
          <CheckCircle
            width="2.6rem"
            height="2.6rem"
            fill={termsOfServiceAgree ? theme.colors.mainPink : theme.colors.buttonGrey}
            stroke={termsOfServiceAgree ? 'white' : 'none'}
          />
          이용약관 동의하기
        </S.CheckBox>

        <S.TermsContent>
          {TERMS_OF_SERVICE.split('\n').map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </S.TermsContent>

        <S.CheckBox onClick={() => setPrivacyPolicyAgree((privacyPolicyAgree) => !privacyPolicyAgree)}>
          <CheckCircle
            width="2.6rem"
            height="2.6rem"
            fill={privacyPolicyAgree ? theme.colors.mainPink : theme.colors.buttonGrey}
            stroke={privacyPolicyAgree ? 'white' : 'none'}
          />
          개인정보처리방침 동의하기
        </S.CheckBox>

        <S.TermsContent>
          {PRIVACY_POLICY.split('\n').map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </S.TermsContent>
      </S.TermsofServiceBox>
      <Button
        title="다음"
        onClick={handleNextClick}
        background={allAgree ? theme.colors.mainPink : theme.colors.buttonGrey}
      />
    </>
  );
};
