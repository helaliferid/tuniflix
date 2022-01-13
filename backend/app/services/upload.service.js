const multer=require('multer')
const upload = multer({ dest: 'public/uploads/images/' })

module.exports=upload