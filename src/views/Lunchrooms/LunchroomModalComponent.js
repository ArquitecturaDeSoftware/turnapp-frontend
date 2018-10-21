import React, { Component } from 'react';

class LunchroomModalComponent extends Component {

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
  constructor( props ){
    super( props );
    this.state = {
      currentTime:this.info.line
    }
  }
  tick(){
    this.setState(( prevState, props ) => ({
      currentTime: prevState.currentTime - 1
    }));
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      60000
    );
  }

  render() {
    return (
      <div className="LunchroomModalComponent">
        <div className="color">
          <h1 className="title">{this.props.name}</h1>
        </div>
        <div className="container" style={{marginTop:"2%"}}>
          <div className="row">
            <div className="col-md-4">
              <div className="thumbnail">
                <img src={ this.props.src }
                className="small"
                alt={ this.props.name }/>
              </div>
            </div>
          </div>
          <div className="row lunchroom-container">
            <div className="col-md-12">
              <div className="col-md-6">
                <div className="menu-container">
                  <h3 style={{color:"#337AB7"}}>Menú</h3>
                  <table className="table table-striped">
                    <tbody>
                      <tr>
                        <th style={{color:"#32CD32"}}>Sopa</th>
                        <th>
                          <span className="label label-default">
                            {this.menu.soup}
                          </span>
                        </th>
                      </tr>
                      <tr>
                        <th style={{color:"#32CD32"}}>Principio</th>
                        <th>
                          <span className="label label-default">
                            {this.menu.appetizer}
                          </span>
                        </th>
                      </tr>
                      <tr>
                        <th style={{color:"#32CD32"}}>Seco</th>
                        <th>
                          <span className="label label-default">
                            {this.menu.main_course}
                          </span>
                        </th>
                      </tr>
                      <tr>
                        <th style={{color:"#32CD32"}}>Proteina</th>
                        <th>
                          <span className="label label-default">
                            {this.menu.protein}
                          </span>
                        </th>
                      </tr>
                      <tr>
                        <th style={{color:"#32CD32"}}>Jugo</th>
                        <th>
                          <span className="label label-default">
                            {this.menu.juice}
                          </span>
                        </th>
                      </tr>
                      <tr>
                        <th style={{color:"#32CD32"}}>Postre</th>
                        <th>
                          <span className="label label-default">
                            {this.menu.dessert}
                          </span>
                        </th>
                      </tr>
                      <tr>
                        <th style={{color:"#32CD32"}}>Ensalada</th>
                        <th>
                          <span className="label label-default">
                            {this.menu.salad}
                          </span>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-6">
                <div className="menu-container">
                  <h3 style={{color:"#337AB7"}}>Información</h3>
                  <table className="table table-striped">
                    <tbody>
                      <tr>
                        <th style={{color:"#32CD32"}}>Precio</th>
                        <th>
                        <span className="label label-info">
                          {this.info.price} pesos
                        </span>
                        </th>
                      </tr>
                      <tr>
                        <th style={{color:"#32CD32"}}>Turnos restantes</th>
                        <th>
                          <span className="label label-info">
                            {this.info.line}
                          </span>
                        </th>
                      </tr>
                      <tr>
                        <th style={{color:"#32CD32"}}>Tiempo de espera</th>
                        <th>
                          <span className="label label-info">
                          {this.state.currentTime>=0 ? this.state.currentTime : 0}
                          {this.state.currentTime>=1 ? " minutos" : " minuto"}
                          </span>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button type="button"
                className="btn btn-primary btn-lg btn-block"
                name="button">
                  pedir turno
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LunchroomModalComponent;
