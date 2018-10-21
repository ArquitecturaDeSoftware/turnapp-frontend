import React, { Component } from 'react';
import './Home.css';

//images
import biologia from '../../images/lunchrooms/biologia.png';
import cafe_campus from '../../images/lunchrooms/cafe-campus.png';
import ciencias_agrarias from '../../images/lunchrooms/ciencias-agrarias.png';
import ciencias_economicas from '../../images/lunchrooms/ciencias-economicas.png';
import ciencias_humanas from '../../images/lunchrooms/ciencias-humanas.png';
import comedor_central from '../../images/lunchrooms/comedor-central.png';
import hemeroteca from '../../images/lunchrooms/hemeroteca.png';
import matematicas from '../../images/lunchrooms/matematicas.png';
import odontologia from '../../images/lunchrooms/odontologia.png';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="color">
          <h1 className="title">TurnApp</h1>
        </div>
        <div className="container">
          <div className="row">

            <div className="col-md-6" style={{marginTop:"5%"}}>
              <div
              id="cr"
              className="carousel slide"
              data-ride="carousel"
              style={{boxShadow:"10px 10px 10px grey"}}>
                <ol className="carousel-indicators">
                  <li data-target="#cr" data-slide-to="0" className="active"></li>
                  <li data-target="#cr" data-slide-to="1"></li>
                  <li data-target="#cr" data-slide-to="2"></li>
                  <li data-target="#cr" data-slide-to="3"></li>
                  <li data-target="#cr" data-slide-to="4"></li>
                  <li data-target="#cr" data-slide-to="5"></li>
                  <li data-target="#cr" data-slide-to="6"></li>
                  <li data-target="#cr" data-slide-to="7"></li>
                  <li data-target="#cr" data-slide-to="8"></li>
                </ol>

                <div className="carousel-inner">
                  <div className="item active">
                    <img src={biologia}
                    className="img-responsive"
                    alt="biologia"/>
                  </div>
                  <div className="item">
                    <img src={cafe_campus}
                    className="img-responsive"
                    alt="cafe_campus"/>
                  </div>
                  <div className="item">
                    <img src={ciencias_agrarias}
                    className="img-responsive"
                    alt="ciencias_agrarias"/>
                  </div>
                  <div className="item">
                    <img src={ciencias_economicas}
                    className="img-responsive"
                    alt="ciencias_economicas"/>
                  </div>
                  <div className="item">
                    <img src={comedor_central}
                    className="img-responsive"
                    alt="comedor_central"/>
                  </div>
                  <div className="item">
                    <img src={hemeroteca}
                    className="img-responsive"
                    alt="hemeroteca"/>
                  </div>
                  <div className="item">
                    <img src={matematicas}
                    className="img-responsive"
                    alt="matematicas"/>
                  </div>
                  <div className="item">
                    <img src={odontologia}
                    className="img-responsive"
                    alt="odontologia"/>
                  </div>
                </div>

                <a className="left carousel-control" href="#cr" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#cr" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="cont">
                <h2 style={{color:"#337AB7"}}>Ingresar</h2>
                <hr/>
                <div
                class="input-group"
                style={{marginTop:"25%"}}>
                  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                  <input id="email" type="text" class="form-control" name="cedula" placeholder="Cédula"/>
                </div>
                <button
                type="button"
                name="ingresar"
                className="btn btn-success btn-lg btn-block"
                style={{marginTop:"5%"}}>
                  Ingresar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="black-cont">
          <h1 style={{color:"grey"}}>About</h1>
          <br/>
          <p style={{color:"#F8F8F8",fontSize:"15px",margin:"0% 15% 2% 5%"}}>
            TurnApp es una aplicación con la cual los usuarios de los
            restaurantes de la Universidad Nacional de Colombia pueden
            dejar a un lado las molestas filas que aquejan a toda la comunidad
            univeritaria. Los clientes pueden solicitar un turno en la caferetía de su
            preferencia, dependiendo del menú que en ésta se sirva, la cantidad
            de almuerzos disponibles y la cantidad de turnos que tiene asignada.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
