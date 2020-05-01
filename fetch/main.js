// // console.log('Starting fetch call!');
// const postPromise = fetch('https://api.dailysmarty.com/posts');
// // console.log('After fetch call.');
// // console.log(postPromise);
// // console.log('After program has run.');

// postPromise
//     .then(data => data.json())
//     .then(data => {
//         data.posts.forEach((item) => {
//             console.log(item.title);
//         });
//     })
        // .catch((err) => {
        //     console.error(err)
        // });


const namePromise = fetch('http://dummy.restapiexample.com/api/v1/employees');

namePromise
    .then(data => data.json())
    .then(data => {
        data.data.forEach((item) => {
            console.log(item.employee_name);
        });
    })
    .catch((err) => {
        console.error(err)
    });
