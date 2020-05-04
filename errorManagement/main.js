function siteComponent(func) {
    return func();
}

widget = () => '<div>Hi there</div>';


try {
    console.log(siteComponent('widget'));
} catch(e) {
    // console.error('You got a problem, buddy.', e);
    document.getElementById('hello').innerHTML = 'You got a problem, buddy.';
}