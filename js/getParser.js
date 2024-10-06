function ParseGet(params) {
    let get = window.location.search.slice(1)
    console.log(get);
    
    let vals = get.split(",");
    console.log(vals);

    let data = {};

    for (let i = 0; i < vals.length; i++) {
        const str = vals[i];
        let kvp = str.split("=");
        data[kvp[0]] = kvp[1];
    }

    return data;
}