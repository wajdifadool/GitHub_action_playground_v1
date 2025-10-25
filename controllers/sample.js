const asyncHandler = require('../middleware/async')

exports.getSample = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true, message: 'Sample endpoint working!' })
})

exports.getSamples = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: 'Sample endpoint working!',
    data: [{ id: '00102', object: 'sample data' }],
  })
})
exports.postSample = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: 'added sample',
  })
})
