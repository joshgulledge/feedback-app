const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;


/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/

// import pool to do the query
const pool = require('./modules/pool');

app.get('/getFeedback', (req, res) => {  
  const SQLtext = `
  SELECT * FROM "feedback";
  `;

  pool.query(SQLtext)
  .then(dbRes => {
    res.send(dbRes.rows);
  })
  .catch(err => console.log(err))

});

app.post('/addFeedback', (req,res) => {
  // console.log('in the post', req.body);

  const SQLtext = `
  INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
  VALUES ($1, $2, $3, $4);
  `;

  const info = req.body;
  const feedback = [info.feeling, info.understanding, info.support, info.comments];

  // make the pool query
  pool.query(SQLtext, feedback)
  .then(dbRes => {
    console.log("dbRes", dbRes);
    res.sendStatus(200);
  }).catch(err => console.log(err)); // end pool query

}); // end post route



/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});