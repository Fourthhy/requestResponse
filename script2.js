const request = new XMLHttpRequest();
request.addEventListener('readystatechange', ()=> {
    if (request.readyState === 4){
        console.log(request.responseText);
    }
}); 
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
request.send();

const Task2 = (callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', ()=> {
        if (request.readyState === 4 && request.status === 200){
            callback(undefined, request.responseText);
        } else if (request.readyState === 4) {
            callback('could not fetch data', undefined);
        }
    });
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
    request.send();
}

Task2((err, data)=>{
    if (err){
        console.log(err)
    } else 
    console.log(data);
})

const Task3 = () => {
    return new Promise((resolve,reject)=> {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', ()=> {
            if (request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('could not fetch data');
            }
        });
        request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
        request.send();
    })
}

Task3()
.then(data => console.log('promise resolved', data))
.catch(err => console.log('promise rejected', err));

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response)=>{
    console.log('resolved', response);
    return data = response.json();
})
.catch((err)=>{
    console.log('rejected', err);
})

const Task5 = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (response.status !== 200){
        throw new Error('cannot fetch data');
    } 
    const data = response.json();
    return data
}

Task5()
.then(data => console.log('resolved', data))
.catch(err => console.log('rejected', err.message))