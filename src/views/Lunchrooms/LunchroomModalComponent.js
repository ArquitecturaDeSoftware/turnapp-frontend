import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//components
import MenuInfoComponent from "../../components/MenuInfoComponent";
import PriceNTimeInfoComponent from "../../components/PriceNTimeInfoComponent";

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
      currentTime:this.info.line,
      menu:{}
    }

    axios({
      url: 'http://35.229.97.157:5000/graphql/?',
      method: 'post',
      data: {
        query: `
          query{
            menusByRestaurant(id_restaurant:"${this.props.id_lunchroom}"){
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
        console.log(this.state.menu)
    }).catch(error => {
      console.log(error)
    });

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
                  price={this.info.price}
                  line={this.info.line}
                  time={this.state.currentTime}
                />

    //En vez de "1", colocar el id del turno creado
                <Link to="tickets/1">
                  <button type="button"
                  className="btn btn-primary btn-lg btn-block"
                  name="button"
                  style={{marginBottom:"2%"}}>
                    pedir turno
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LunchroomModalComponent;
