function call(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(name);
            resolve(name);
        }, 1000);
    });
    
}

function back() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('back');
            resolve();
        }, 1000)
    });
    
}

function hell(cb) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            cb('callback hell');
            resolve();
        }, 1000);
    });
    
}

// call('kim')
//     .then((name) => {console.log(name + '반가워')})
//     .then(back)
//     .then(() => {console.log('back 을 실행했구나')})
//     .then(() => {hell((message) => {console.log('여기는' + message);})})

const exec = async () => {
    let name = await call('kim');
    console.log(name + '반가워');
    await back();
    console.log('back 을 실행했구나');
    (() => {hell((message) => {console.log('여기는' + message)})})();
}

exec();
