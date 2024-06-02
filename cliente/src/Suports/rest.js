let baseUrl = "http://localhost:5000",
    get = (url) => fetch(baseUrl + url)
        .then((e) => e.json())
        .catch((e) => console.log({ GET: e })),
    post = (url, data, ctype) => fetch(baseUrl + url, {
        method: "POST",
        headers: { "Content-Type": ctype || "application/json" },
        body: JSON.stringify(data)
    })
        .then((e) => e.json())
        .catch((e) => console.log({ POST: e })),
    postForm = (url, data) => fetch(baseUrl + url, {
        method: "POST",
        body: data
    })
        .then((e) => e.json())
        .catch((e) => console.log({ POST: e })),
    put = (url, data) => fetch(baseUrl + url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then((e) => e.json())
        .catch((e) => console.log({ PUT: e })),
    del = (url) => fetch(baseUrl + url, { method: "DELETE" })
        .then((e) => e.json())
        .catch((e) => console.log({ DELETE: e }));

export { get, post, postForm, put, del };