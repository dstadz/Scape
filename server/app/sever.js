const cors = require('cors')
const helmet = require('helmet')
const express = require('express')
const sessions = require('express-session')

const tweetRouter = require('../routes/tweets.js');
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/tweets', tweetRouter);
server.get('/', (req,res) => { res.send({api: 'running like wind'}) })

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`\n\n ** API running on port: ${PORT} ** \n\n`);
});
