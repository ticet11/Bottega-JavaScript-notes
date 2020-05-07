const heading = document.getElementById('main-heading');

// heading.onclick = () => {
//     heading.classList.contains('active-heading') ?
//         heading.classList.remove('active-heading') 
//         & heading.classList.add('non-active-heading') 
//         : heading.classList.remove('non-active-heading') 
//         & heading.classList.add('active-heading');
// }

// // Will totally override all classes.
heading.onclick = () => {
    heading.classList.contains('active-heading') ?
        heading.className = 'non-active-heading'
        : heading.className = 'active-heading';
}