const truncatePath = (path: string): string | null => {
    const regex = /^(\/news|\/announcements|\/weekly|\/projects|\/rules|\/story)/;

    const match = path.match(regex);
    if (match) {
        return match[0];
    }

    return null;
}

const isBuildInPath = (path: string): boolean => {
    switch (path.trim()) {
        case '/':
        case '/all-ncc':
        case '/wechat-open-ncc':
        case '/conduct':
        case '/faq':
        case '/about/who-we-are':
        case '/about/join':
        case '/about/contact':
        case '/people/project-management-committee':
        case '/people/technical-oversight-committee':
        case '/top-level-projects':
        case "/archived-projects":
        case "/community-online":
        case "/brand-guidelines":
        case "/participation-guidelines":
        case "/website-source-code-usage-guidelines":
            return true;
        default:
            return false;
    }
}

const isExtensionPath = (path: string): boolean => {
    const regex = /^(\/news|\/announcements|\/weekly|\/projects|\/rules|\/story)/;
    const match = path.match(regex);
    return !!match;
}

const isLegitimatePage = (path: string): boolean => {
    return isBuildInPath(path) || isExtensionPath(path);
}

export {
    truncatePath,
    isBuildInPath,
    isExtensionPath,
    isLegitimatePage
};