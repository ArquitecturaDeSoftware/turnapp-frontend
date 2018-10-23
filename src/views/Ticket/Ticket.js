import React, { Component } from 'react';
import axios from 'axios';


import { Link } from 'react-router-dom';

//Components
import MenuInfoComponent from "../../components/MenuInfoComponent";
import PriceNTimeInfoComponent from "../../components/PriceNTimeInfoComponent";

//CSS
import "./Ticket.css";

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

class Ticket extends Component {

  info={
    price:5000,
    line:20,
    time:10
  }
  constructor(props){
    super(props)
    this.state={
      srcs : [geologia, comedor_central, biologia, cafe_campus, ciencias_agrarias, ciencias_economicas, ciencias_humanas,
        hemeroteca, matematicas, odontologia],
      id_ticket : 0,
      menu:{}
    };

    axios({
      url: 'http://35.229.97.157:5000/graphql/?',
      method: 'post',
      data: {
        query: `
            mutation{
              createTicket(ticket:{
                lunchroomId: "${this.props.location.state.id_lunchroom}"
                userId: ${(this.props.location.state.id_user)}
                price: ${(this.props.location.state.price_user)}
              }){
                id
              }
            }
          `
      }
    }).then(result => {
        this.setState({
          id_ticket: result.data.data.createTicket.id 
        });
    }).catch(error => {
      console.log(error)
    });
    
    axios({
      url: 'http://35.229.97.157:5000/graphql/?',
      method: 'post',
      data: {
        query: `
          query{
            menusByRestaurant(id_restaurant:"${this.props.location.state.id_lunchroom}"){
              soup
              appetizer
              main_course
              protein
              juice
              dessert
              salad
            }
          }
          `
      }
    }).then(result => {
        this.setState({
          menu: result.data.data.menusByRestaurant[0] 
        })
    }).catch(error => {
      console.log(error)
    });

  }

  handlerClick = (e) => {
    axios({
      url: 'http://35.229.97.157:5000/graphql/?',
      method: 'post',
      data: {
        query: `
            mutation{
              updateTicket(id_ticket: "${this.state.id_ticket}", ticket:{
                status: "ERROR"
              }){
                id
              }
            }
          `
      }
    }).then(result => {
    }).catch(error => {
      console.log(error)
    });
  }

  render() {
    return (
      <div className="Ticket">
        <div className="color">
          <h1 className="title">Turno solicitado en {this.props.location.state.name_l} </h1>
        </div>
        <div className="container">
          <div className="row" style={{marginTop:"2%"}}>
            <div className="col-md-4">
              <div className="thumbnail">
                <img src={ this.state.srcs[this.props.location.state.i] }
                className="small"
                alt={ this.props.name }/>
              </div>
            </div>
            <div className="col-md-4">

            </div>
            <div className="col-md-4">
              <div className="ticket-container">
                <h1 className="ticket-text">{"Turno: "+this.state.id_ticket}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="lunchroom-container">
          <div className="row">
            <div className="col-md-6">
              <MenuInfoComponent
              soup={this.state.menu.soup}
              appetizer={this.state.menu.appetizer}
              main_course={this.state.menu.main_course}
              protein={this.state.menu.protein}
              juice={this.state.menu.juice}
              dessert={this.state.menu.dessert}
              salad={this.state.menu.salad}
              />
            </div>
            <div className="col-md-6">
              <PriceNTimeInfoComponent
              price={this.props.location.state.price_user}
              line={this.info.line}
              currentTime={this.props.currentTime}
              />
              <Link to={{ pathname: `/lunchrooms`, state: { id_user:this.props.location.state.id_user} }}>
                <button type="button"
                className="btn btn-danger btn-lg btn-block"
                name="cancelar"
                style={{marginBottom:"2%"}}
                onClick={this.handlerClick}>
                  cancelar turno
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ticket;
