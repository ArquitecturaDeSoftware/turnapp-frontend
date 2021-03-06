import React, { Component } from 'react';
import Modal from 'react-modal';

import LunchroomModalComponent from './LunchroomModalComponent';

class LunchroomComponent extends Component {
  constructor(){
    super();
    this.state = {
      isActive:false,
    }

  }

  componentWillMount(){
    Modal.setAppElement('body');
  }

  toggleModal = () => {
    this.setState({
      isActive:!this.state.isActive
    })
  }

  

  render() {
    return (
      <div className="LunchroomComponent">
        <div className="col-md-3">
          <div className="hovereffect">
            <div className="thumbnail">
              <img src={ this.props.src }
              onClick={this.toggleModal}
              className="small"
              alt={ this.props.name }/>
              <div className="caption">
                <h4 style={{color:"#337ab7"}}>{ this.props.name }</h4>
                <p>{ this.props.ed }</p>
                <Modal isOpen={this.state.isActive}
                onRequestClose={this.toggleModal}>
                  <LunchroomModalComponent
                    id_lunchroom={this.props.id_lunchroom}
                    name={this.props.name}
                    src={this.props.src}
                    i={this.props.i}
                    id_user={this.props.id_user}/>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LunchroomComponent;
