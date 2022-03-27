import initialize from "./initialize.js";

export default async function () {
    const requestURL = "https://private-dcbb75-lampshop.apiary-mock.com/lamps";

    let json = await fetch(requestURL)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        })
        .catch((err) => console.error(`Fetch problem: ${err.message}`));

    initialize(json);

    return json;
}
