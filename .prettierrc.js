module.exports =
  {
    arrowParens:
      'avoid', // 화살표 함수에서 매개변수를 감싸는 괄호 어떻게 처리 할지 => avoid는 가능할 때 괄호 생략
    bracketSameLine: true, // jsx에서 마지막 '>'를 다음 줄로 내릴지 여부 결정
    bracketSpacing: false, // 객체 리터럴에서 중괄호 사이에 공백을 넣을지 여부 결정
    singleQuote: true, // 문자열을 작성할 때 단일 인용부호(')를 사용할지 여부 결정
    trailingComma:
      'all', // 여러 줄을 가진 객체나 배열, 함수 매개변수 목록의 끝에 쉼표를 추가할지 여부 결정 => all은 모든 곳에 쉼표를 추가
    semi: true, // 각 문의 끝에 세미콜론을 사용할지 여부 결정
    printWidth: 120, // 한 줄의 길이 // 보토 80~120 사이를 많이 사용 함
  };
