module.exports = {

    ROOT_URL: '/',
    BASE_RELATIVE_URL: '',
    TEST_URL: 'test',

    getAbsoluteUrl: function (url) {
        return this.ROOT_URL + url;
    }
}
