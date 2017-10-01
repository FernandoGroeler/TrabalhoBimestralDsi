"use strict";
let express = require('express');
let bodyParser = require('body-parser')
let pg = require('pg')

function getClient() {
  return new pg.Client({
    host: 'localhost',
    port: 5432,
    database: 'cadanimal',
    user: 'postgres',
    password: 'pr4gr1m1d4r'
  })
}

let app = express()

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('Aplicação executando')
});

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.post('/api/animal', (req, res) => {
  let nome = req.body.nome;
  let especie = req.body.especie;
  let raca = req.body.raca;
  let idade = req.body.idade;

  const client = getClient();

  client.connect()

  client.query("INSERT INTO animal(nome, especie, raca, idade) VALUES ($1, $2, $3, $4)", [nome, especie, raca, idade], (err, item) => {
    if (err) {
      res.json(err)
      return next(err)
    } else {
      res.status(200).json("adicionado")
    }

    client.end();
  })
})

app.get("/api/animal", (req, res) => {
  let client = getClient();

  client.connect();

  client.query("SELECT * FROM animal", (err, result) => {
    if (err) {
      res.json(err);
      return next(err);
    } else {
      res.status(200).json(result.rows);
    }

    client.end();
  })
})

app.put("/api/animal", (req, res) => {
  let id = req.body.id;
  let nome = req.body.nome;
  let especie = req.body.especie;
  let raca = req.body.raca;
  let idade = req.body.idade;

  let client = getClient();

  client.connect();

  client.query("UPDATE animal SET nome = $1, especie = $2, raca = $3, idade = $4 WHERE id = $5", [nome, especie, raca, idade, id], (err, item) => {
    if (err) {
      res.json(err);
      return next(err);
    } else {
      res.status(200).json("atualizado");
    }

    client.end();
  })
})

app.delete("/api/animal", (req, res) => {
  let id = req.body.id;

  let client = getClient();

  client.connect();

  client.query("DELETE FROM animal WHERE id = $1", [id], (err, item) => {
    if (err) {
      res.json(err);
      return next(err);
    } else {
      res.status(200).json("excluído");
    }
  })
})

app.listen(3000, function() {
  console.log('Servidor iniciado.')
});
