import React, { Component } from 'react';

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
  menu={
    id_menu:1,
    id_lunchroom:"asdnkjh13u4982u3",
    date:"20/10/18",
    soup:"changua",
    appetizer:"lenteja",
    main_course:"arroz",
    protein:"pollo",
    juice:"maracuya",
    dessert:"piazza",
    salad:"ensalada de frutas"
    }
  info={
    price:5000,
    line:20,
    time:10
  }
  constructor(){
    super()
    this.state={
      srcs : [geologia, comedor_central, biologia, cafe_campus, ciencias_agrarias, ciencias_economicas, ciencias_humanas,
        hemeroteca, matematicas, odontologia]
    };
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
                <h1 className="ticket-text">{this.props.match.params.id}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="lunchroom-container">
          <div className="row">
            <div className="col-md-6">
              <MenuInfoComponent
              soup={this.menu.soup}
              appetizer={this.menu.appetizer}
              main_course={this.menu.main_course}
              protein={this.menu.protein}
              juice={this.menu.juice}
              dessert={this.menu.dessert}
              salad={this.menu.salad}
              />
            </div>
            <div className="col-md-6">
              <PriceNTimeInfoComponent
              price={this.info.price}
              line={this.info.line}
              currentTime={this.props.currentTime}
              />
              <button type="button"
              className="btn btn-danger btn-lg btn-block"
              name="button"
              style={{marginBottom:"2%"}}>
                cancelar turno
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ticket;
