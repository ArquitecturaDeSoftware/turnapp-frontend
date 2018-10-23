import React, { Component } from 'react';
import axios from 'axios';

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
import geologia from '../../images/lunchrooms/geologia.png';

class Lunchrooms extends Component {
  constructor(){
    super()

    this.state = {
      all_lunchrooms : [],
      srcs : [geologia, comedor_central, biologia, cafe_campus, ciencias_agrarias, ciencias_economicas, ciencias_humanas,
        hemeroteca, matematicas, odontologia]
    };

    axios({
      url: 'http://35.229.97.157:5000/graphql/?',
      method: 'post',
      data: {
        query: `
          query{
            allLunchrooms{
              _id
              name
              numlunch
              openTime
              closeTime
              building
            }
          }
          `
      }
    }).then(result => {
        this.setState({
          all_lunchrooms: result.data.data.allLunchrooms 
        })
    }).catch(error => {
      console.log(error)
    });
  }
  

  render() {
    return (
      <div className="Lunchrooms">
        <div className="color">
          <h1 className="title">Restaurantes</h1>
        </div>
        <div className="container container-container">
          <div className="row">
            { this.state.all_lunchrooms.map((lunchroom, i) =>
            <LunchroomComponent
              key={lunchroom._id}
              id_lunchroom={lunchroom._id}
              name={lunchroom.name}
              src={this.state.srcs[i]}
              ed={"Edificio: "+lunchroom.building}/>) }
          </div>
        </div>
      </div>
    );
  }
}

export default Lunchrooms;
