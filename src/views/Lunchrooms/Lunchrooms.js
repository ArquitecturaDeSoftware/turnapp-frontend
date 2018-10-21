import React, { Component } from 'react';

//Components
import LunchroomComponent from './LunchroomComponent';

//CSS
import "./Lunchrooms.css";

import biologia from '../../images/lunchrooms/biologia.png';
import cafe_campus from '../../images/lunchrooms/cafe-campus.png';
import ciencias_agrarias from '../../images/lunchrooms/ciencias-agrarias.png';
import ciencias_economicas from '../../images/lunchrooms/ciencias-economicas.png';
import ciencias_humanas from '../../images/lunchrooms/ciencias-humanas.png';
import comedor_central from '../../images/lunchrooms/comedor-central.png';
import hemeroteca from '../../images/lunchrooms/hemeroteca.png';
import matematicas from '../../images/lunchrooms/matematicas.png';
import odontologia from '../../images/lunchrooms/odontologia.png';

class Lunchrooms extends Component {
  lunchrooms = [
    {name:"Biología", ed:"Edificio: 421", src:biologia},
    {name:"Café Campus", ed:"Edificio: 212 parte posterior", src:cafe_campus},
    {name:"Ciencias Agrarias", ed:"Edificio: 500", src:ciencias_agrarias},
    {name:"Ciencias Económicas", ed:"Edificio: 310", src:ciencias_economicas},
    {name:"Ciencias Humanas", ed:"Edificio: 212", src:ciencias_humanas},
    {name:"Comedor Central", ed:"Edificio: 103", src:comedor_central},
    {name:"Hemeroteca", ed:"Edificio: 571", src:hemeroteca},
    {name:"Matemáticas", ed:"Edificio: 404", src:matematicas},
    {name:"Odontología", ed:"Edificio: 210", src:odontologia}
  ]
  render() {
    return (
      <div className="Lunchrooms">
        <div className="color">
          <h1 className="title">TurnApp</h1>
        </div>
        <div className="container container-container">
          <div className="row">
            { this.lunchrooms.map(lunchroom =>
              <LunchroomComponent
              key={lunchroom.name}
              name={lunchroom.name}
              src={lunchroom.src}
              ed={lunchroom.ed}/>) }

          </div>
        </div>
      </div>
    );
  }
}

export default Lunchrooms;
