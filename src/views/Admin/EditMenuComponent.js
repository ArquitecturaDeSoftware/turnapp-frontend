import React, { Component } from 'react';

class EditMenuComponent extends Component {
  render() {
    return (
      <div className="EditMenuComponent">
        <div className="menu-container">
          <h3 style={{color:"#337AB7"}}>Menú</h3>
          <form>
            <div className="form-group">
              <label htmlFor="soup" style={{color:"#32CD32"}}>Sopa</label>
              <input
              type="text"
              className="form-control"
              id="soup"
              value={this.props.soup}/>
            </div>
            <div className="form-group">
              <label htmlFor="appetizer" style={{color:"#32CD32"}}>Principio</label>
              <input
              type="text"
              className="form-control"
              id="appetizer"
              value={this.props.appetizer}/>
            </div>
            <div className="form-group">
              <label htmlFor="main_course" style={{color:"#32CD32"}}>Seco</label>
              <input
              type="text"
              className="form-control"
              id="main_course"
              value={this.props.main_course}/>
            </div>
            <div className="form-group">
              <label htmlFor="protein" style={{color:"#32CD32"}}>Proteina</label>
              <input
              type="text"
              className="form-control"
              id="protein"
              value={this.props.protein}/>
            </div>
            <div className="form-group">
              <label htmlFor="juice" style={{color:"#32CD32"}}>Jugo</label>
              <input
              type="text"
              className="form-control"
              id="juice"
              value={this.props.juice}/>
            </div>
            <div className="form-group">
              <label htmlFor="dessert" style={{color:"#32CD32"}}>Postre</label>
              <input
              type="text"
              className="form-control"
              id="dessert"
              value={this.props.dessert}/>
            </div>
            <div className="form-group">
              <label htmlFor="salad" style={{color:"#32CD32"}}>Ensalada</label>
              <input
              type="text"
              className="form-control"
              id="salad"
              value={this.props.salad}/>
            </div>
            <button
            type="submit"
            className="btn btn-success btn-lg btn-block"
            style={{marginTop:"2%", marginBottom:"2%"}}>
              guardar cambios
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default EditMenuComponent;
