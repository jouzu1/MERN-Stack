/**
 * server.js ini berfungsi untuk membuat server dengan menggunakan port 3001 
 * untuk menjalankan di localhost.
 * Memerlukan express agar   pembuatan aplikasi lebih cepat.
 * Disini akan gw terangkan masing2 penggunaan code2 nya line per line
 */


//Diperlukan deklarasi variabel untuk memerlukan framework express utk pembuatan appnya
const express = require('express');


//Body parser ini kepake buat POST method, sehingga dia akan ngeparsing data JSON yang lu bikin untuk post method
//Intinya ini kepake banget
const bodyParser = require('body-parser');


//Disini gw memerlukan MongoDB sebagai database tetapi namanya mongoose,
const mongoose = require('mongoose');


//const db ini berisi string yang tujuannya berisi semacam url untuk nyambungin app ini ke database kita
const db = require('./config').mongoURI;


//const app ini artinya kita menggunakan functionnya express dimana kita mengunakan framework express sebagai
//pembuatan appnya
const app = express();

// routes berisi endpoint untuk mWebservice REST API
const routes = require('./routes/index')


//Teknikal untuk menyambungkan ke DB menggunakan string koneksi dari const db
//Terdapat pesan untuk apabila berhasil tersambung ke database
mongoose.connect(db,{ 
    useNewUrlParser: true,
    useCreateIndex: true
  }).then((rs) => {
    console.log(`MongoDB Terkoneksi`)
}).catch((err) => {console.log(err)})

//2 line code ini untuk ngeparsin data JSON untuk post dan get
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//endpoint untuk REST API
app.use('/api/',routes);


//Cara menggunakan port yang kita mau, bisa diganti 3030, 8080 
//Jadi gak perlu nyalain server kayak nyalin apachenya dulu dll, ribet lah pokoknya
const PORT = process.env.APP_PORT || 3001;


//Cuma info kalo server bisa berjalan di port 3001, sehingga
//cara aksesnya itu localhost:3001
app.listen(PORT,()=>{
    console.log(`Server berjalan di ${PORT}`)
});