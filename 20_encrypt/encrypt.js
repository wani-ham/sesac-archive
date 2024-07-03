// crypto
//    - Node.js internal module
//    - provide encryption method 
//    - more general than bcrypt module

const crypto = require('crypto');

// createHash()
//    - 지정한 해시 알고리즘으로 해시 객체를 생성하는 암호화 함수

const createHashedPw = (pw) => {
    return crypto.createHash('sha512').update(pw).digest('base64');
}

console.log(createHashedPw('1234abc'));
console.log(createHashedPw('1234'));

//--------------
// pbkdf2
//   - 비밀번호 기반 키 도출 함수로 주로 비밀번호 저장할 때 사용

// 단방향 암호화 생성 함수
//  saltAndHashPw: - 임의의 salt값을 생성한 후, pbkdf2Sync 함수를 사용해서 해당 솔트와 비밀번호를 기반으로 해시를 생성
const saltAndHashPw = (pw) => {
    const salt = crypto.randomBytes(16).toString('base64');  // create salt
    const iterations = 100000;
    const keylen = 64;
    const digest = 'sha512';

    const hash = crypto
        .pbkdf2Sync(pw, salt, iterations, keylen, digest)
        .toString('base64');

    return {
        salt, hash
    }
}


// function for password compare
const comparePw = (inputPw, savedSalt, savedHash) => {
    const iterations = 100000;
    const keylen = 64;
    const digest = 'sha512';

    const hash = crypto
        .pbkdf2Sync(inputPw, savedSalt, iterations, keylen, digest)
        .toString('base64');
    
    return hash === savedHash;
}

const password = '1234!';
const { salt, hash } = saltAndHashPw(password);
console.log(`Salt: ${salt}, Hash: ${hash}`);

const inputPassword = '1234!#';
const isMatch = comparePw(inputPassword, salt, hash);
console.log(`password ${isMatch ? 'matches' : 'does not matches'}`);