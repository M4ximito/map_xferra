const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});

const map = L.map('map').setView([55.753215, 37.622504], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(map);


const marker1 = L.marker([55.753215, 37.622504]).addTo(map);
marker1.bindPopup("<b>Москва</b><br>Столица России.").openPopup();

const marker2 = L.marker([59.9386300, 30.3141300]).addTo(map);
marker2.bindPopup("<b>Санкт-Петербург</b><br>Культурная столица России.").openPopup();
