const express = require('express')
const HelloController = require('../controllers/HelloController')
const WorldController = require('../controllers/WorldController')
const router = express.Router()
const StudentController = require('../controllers/StudentController')
const TokenIssueController = require('../controllers/TokenIssueController')
const Jwt = require('../controllers/Jwt')
const JwtAuthMiddleware = require('../middleware/JwtAuthMiddleware')

router.get('/hello-get', HelloController.Hello)
router.post('/hello-post', HelloController.Hello)
router.get('/hello-world', WorldController.World)


router.post("/TokenIssue", TokenIssueController.TokenIssue)

router.post("/InsertStudent", JwtAuthMiddleware.JwtAuthentication, StudentController.InsertStudent)
router.get("/ReadStudent", JwtAuthMiddleware.JwtAuthentication, StudentController.ReadStudent)

router.post("/UpdateStudent/:id", JwtAuthMiddleware.JwtAuthentication, StudentController.UpdateStudent)
router.post("/DeleteStudent/:id", JwtAuthMiddleware.JwtAuthentication, StudentController.DeleteStudent)

router.post("/CreateToken", Jwt.CreateToken)
router.post("/DecodeToken", Jwt.DecodeToken)



module.exports = router