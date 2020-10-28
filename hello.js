import http from 'http'
import url from 'url'

http
  .createServer(function (req, res) {

    var q = url.parse(req.url,true).query
var txt = ''
     import("mylibrary/dist/"  + q.module + ".js").then(widget => {
     if(q.method)
      txt = widget.default[q.method]()
      else
       txt = widget.default["default"]()
     
     

    res.writeHead(200, { "Content-Type": "text/html" })
    res.end(txt)


    })
    .catch((e)=>{
      res.end("err " + e)
    })
  })
  .listen(8081)
