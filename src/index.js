import React from 'react';
import reactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './app';




reactDom.render(<App />, document.getElementById("root"));

//npm i bootstrap@5.1.0 - библиотека, которая при помощи названия классов подключает стили для компонентов
// после подключения нужно импортировать 
// import 'bootstrap/dist/css/bootstrap.css'
