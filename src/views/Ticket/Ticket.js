import React, { Component } from 'react';

import { Link } from 'react-router-dom';

//Components
import MenuInfoComponent from "../../components/MenuInfoComponent";
import PriceNTimeInfoComponent from "../../components/PriceNTimeInfoComponent";

//CSS
import "./Ticket.css";

import biologia from '../../images/lunchrooms/biologia.png';

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

  render() {
    return (
      <div className="Ticket">
        <div className="color">
          <h1 className="title">Turnos</h1>
        </div>
        <div className="container">
          <div className="row" style={{marginTop:"2%"}}>
            <div className="col-md-4">
              <div className="thumbnail">
                <img src={ biologia }
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
              <Link to="/lunchrooms">
                <button type="button"
                className="btn btn-danger btn-lg btn-block"
                name="cancelar"
                style={{marginBottom:"2%"}}>
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
