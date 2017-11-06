var express = require('express');
var axios = require('axios');
var router = express.Router();

router.get('/getArticleList', function (req, res, next) {
  axios.get('http://www.jianshu.com/mobile/trending/now', {
    params: req.query,
    headers: {
      'Accept': 'application/json',
    },
  })
    .then(data => {
      res.send({
        code: 0,
        msg: '成功',
        data: data.data
      })
    })
    .catch((e) => {
      console.log('失败');
      res.send({
        code: 1,
        msg: '获取列表失败',

      })
    })
});
router.get('/p/:id', function (req, res, next) {
  axios.get('http://www.jianshu.com/p/' + req.params.id)
    .then(data => {
      res.send({
        code: 0,
        msg: '成功',
        data: data.data
      })
    })
    .catch((e) => {
      console.log('失败');
      res.send({
        code: 1,
        msg: '获取列表失败',

      })
    })
})

module.exports = router;
