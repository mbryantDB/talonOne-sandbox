const getApplicationName = (): any => {
    return process.env.npm_package_name
}

module.exports = {
    getApplicationName
}