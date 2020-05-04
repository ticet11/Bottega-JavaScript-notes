class ApiError extends Error {
    constructor(msg = "An api error occurred", ...params) {
        super(...params);

        this.msg = msg;
    }
}

const request = new XMLHttpRequest();

request.open("GET", "http://api.dailysmarty.com/post", true);

request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
        try {
            const data = JSON.parse(request.responseText);
            console.log(data);
        } catch (e) {
            console.error("Error occured while parsing JSON.");
        }
    } else {
        throw new ApiError(
            "ApiError",
            `An API error occured with a status code of ${request.status}.`
        );
    }
};

request.send();
