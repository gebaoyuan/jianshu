var express = require('express');
var axios = require('axios');
var router = express.Router();
var cheerio = require('cheerio');

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
      console.log('成功');
      var author = {}, article = {};
      try {
        var $body = cheerio.load(data.data)('body');
        $author = $body.find('.author').eq(0),
          $meta = $author.find('.meta');
        author.avator = $author.find('.avatar img').attr('src');
        author.id = ($author.find('.avatar').attr('href') || '').replace(/\/u\//, '');
        author.nickname = $author.find('.name a').text();
        // author.slug = '9d70440d2521';
        // console.log($author.html());
        article.contain = $body.find('.article').html();
        article.publishTime = $meta.find('.publish-time').html();
        article.wordsCount = ($meta.find('.wordage').text() || '').replace(/\D/g, '');
        // article.viewsCount = ($meta.find('.views-count').text() || '').replace(/\D/g, '');
        // article.commentsCount = ($meta.find('.comments-count').text() || '').replace(/\D/g, '');
        // article.likesCount = ($meta.find('.likes-count').text() || '').replace(/\D/g, '');
        res.send({
          code: 0,
          msg: '成功',
          data:{
            author:author,
            article:article,
          }
        })
      } catch (e) {
        console.log('解析失败');
        res.send({
          code: 2,
          msg: '获取文章详情失败',

        })
      }
    })
    .catch((e) => {
      console.log('失败');
      res.send({
        code: 1,
        msg: '获取文章详情失败',

      })
    })
})

module.exports = router;
