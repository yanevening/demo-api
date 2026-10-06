const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use((req, res, next) => { res.header('Access-Control-Allow-Origin', '*'); next(); });
app.get('/', (req, res) => { res.json({ message: 'hello from yanevening', time: new Date().toISOString() }); });
app.get('/yanwan', (req, res) => { res.json({ yan: '晏（yàn），天清日明之意', wan: '晚（wǎn），日暮夜至之时', from: 'yanevening' }); });
app.listen(PORT, () => console.log(`listening on ${PORT}`));
