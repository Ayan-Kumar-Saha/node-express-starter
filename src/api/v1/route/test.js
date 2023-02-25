const ReqMapper = require('../../../service/request-mapper');
const testController = require('../controller/test');

const router = require('express').Router();

router
    .route(ReqMapper.getAbsoluteUrl(ReqMapper.TEST_URL))
    .get(
        [],
        testController.getTestReponse
    )

module.exports = router;