const express = require('express');
const libgen = require('libgen');
const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/atomic', function(req, res){
  

  (async () => {

    const options = {
      mirror: 'http://libgen.is',
      query: 'atomic habits',
      count: 5
    }
    const results = [];
  
    try {

      const data = await libgen.search(options)
      let n = data.length;
      // console.log('top ' + n + ' results for "' +
      //             options.query + '"');
      while (n--){
        // console.log('***********');
        // console.log('Title: ' + data[n].title);
        // console.log('Author: ' + data[n].author);
        // console.log('Download: ' +
        //             'http://gen.lib.rus.ec/book/index.php?md5=' +
        //             data[n].md5.toLowerCase());

        const searchResult = {
          title: data[n].title,
          author: data[n].author,
          download: 'http://gen.lib.rus.ec/book/index.php?md5=' + data[n].md5.toLowerCase()
        }
        results.push(searchResult);
      }
      res.send(results);
    } catch (err) {
      return console.error(err)
    }
  })();

} );


app.get('/:search', function(req, res){
  
  const searchQuery = req.params.search;

  (async () => {

    const options = {
      mirror: 'http://libgen.is',
      query: searchQuery,
      count: 5
    }
    const results = [];
  
    try {

      const data = await libgen.search(options)
      let n = data.length;

      while (n--){

        const searchResult = {
          title: data[n].title,
          author: data[n].author,
          download: 'http://gen.lib.rus.ec/book/index.php?md5=' + data[n].md5.toLowerCase()
        }
        results.push(searchResult);
      }
      res.send(results);
    } catch (err) {
      return console.error(err)
    }
  })();

} );

let port = process.env.PORT;
if(port == null || port == "") {
	port = 5000;
}
app.listen(port, function() {
	console.log("Server started successfully");
});
