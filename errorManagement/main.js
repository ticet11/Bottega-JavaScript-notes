class DevcampError extends Error {
    constructor(message = "An error occured!", ...params) {
        super(...params);

        this.message = message;
    }
}

function siteComponent(func) {
    return func();
}

widget = () => "<div>Hi there</div>";

try {
    console.log(siteComponent(widget));
} catch (e) {
    throw new DevcampError("DevcampError", e);
    // console.error('You got a problem, buddy.', e);
    // document.getElementById('hello').innerHTML = 'You got a problem, buddy.';
}


