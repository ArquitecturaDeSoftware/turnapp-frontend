import React, { Component } from 'react';

//components
import EditMenuComponent from "./EditMenuComponent";
import PriceNTimeInfoComponent from "../../components/PriceNTimeInfoComponent";

//css
import './Admin.css';

class Admin extends Component {
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
      <div className="Admin">
        <div className="color">
          <h1 className="title">Administrador</h1>
        </div>
        <div className="container">
          <div className="row" style={{marginTop:"3%"}}>
            <div className="col-md-4">
              <div className="ticket-container">
                <h1 className="ticket-text">Turno 10</h1>
              </div>
            </div>
            <div
            className="col-md-4"
            style={{marginTop:"3%",marginLeft:"3%"}}>
              <button
              type="button"
              name="Siguiente"
              className="btn btn-danger btn-lg">
                Siguiente
              </button>
            </div>
          </div>
        </div>
        <div className="lunchroom-container">
          <div className="row">
            <div className="col-md-6">
              <EditMenuComponent
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
              <button
              type="button"
              name="estadisticas"
              className="btn btn-primary btn-lg btn-block"
              style={{marginTop:"2%", marginBottom:"2%"}}>
                estadisticas
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
