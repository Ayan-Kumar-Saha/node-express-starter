const getTestReponse = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: 'This is a test response'
    })
}

module.exports = {
    getTestReponse
}