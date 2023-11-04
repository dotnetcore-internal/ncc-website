const version = "20231104002";

const needUpdate = (current?: string): boolean => {
    if (current === null) {
        return true;
    }
    return current !== version;
}

export {
    version,
    needUpdate
}