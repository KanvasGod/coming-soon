
function httpHardCode() {
    let host = window.location;
    // check for local host environment
    let locaction = host.hostname;

    if (locaction === 'localhost') {
        let port = process.env.API_PORT || 3001;

        if(port !== host.port) {
            return `${host.protocol}//localhost:${port}`;
        }
        // project environment is on production server
        return `${host.protocol}//localhost:${port}`;
    } 

    return host.origin;
}

export default httpHardCode;
