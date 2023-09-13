require('dotenv').config()
const express = require('express')

const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
	return res.json('Api está Ok!')
})

// instalara biblioteca dotenv


const port = process.env.PORT || 3000 // alé da port lá mo emvi vamos fazer um port aqui para evitar possiveis erro
                                      // PORT é uma variável de ambiente que chama PORT la do env SE ele nao funcionar chama o 3000(vnumero da rota)

app.listen(port, () => {
	console.log(`Servidor em pé na porta ${port}`)
})