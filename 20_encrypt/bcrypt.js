// bcrypt
// - 비밀번호 암호화 시 자주 사용하는 모듈
// - 외부 라이브러리이므로 설치 필요
// - 양방향 암호화는 지원X, 비밀번호 암호화에 특화된 모듈
// - 비밀번호 같은 민감한 정보는 복호화 필요 X, 복호화 가능성이 오히려 보안상 위험
const bcrypt = require('bcrypt');

const originalPw = '1234';
const saltRounds = 10;  // 2^10  (normally 10-12)
// bigger saltRounds -> slower hashing, but higher security level

const hashPw = (pw) => {
    return bcrypt.hashSync(pw, saltRounds);
}

const comparePw = (inputPw, originalPw) => {
    return bcrypt.compareSync(inputPw, originalPw);
}

// ---------
const hashedPw = hashPw(originalPw);
console.log(`hashedPw: ${hashedPw}`);

const isMatch = comparePw(originalPw, hashedPw);
console.log(`${isMatch ? 'matches' : 'does not matches'}`);

const isMatch2 = comparePw('12344', hashedPw);
console.log(`${isMatch2 ? 'matches' : 'does not matches'}`);
                