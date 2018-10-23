import React, { Component } from 'react';

//components
import CommentComponent from "./CommentComponent";
//css
import './Comments.css';

//images
import avatar from '../../images/avatar.png'

class Comments extends Component {
  comments = [
    {
      id: 1,
      id_lunchroom: "234yuhgfe",
      score: 3,
      created_on: "20/10/10",
      text: "Este restaurante es la machera. El almuerzo muy rico y la compañía inigualable. Totalmente recomendado (Y)",
      author_name: "Edgar",
      author_email: "edgar@gmail.com"
    },
    {
      id: 2,
      id_lunchroom: "nretdffdr",
      score: 4,
      created_on: "20/10/10",
      text: "Este restaurante es feo",
      author_name: "Miguel",
      author_email: "miguel@gmail.com"
    },
    {
      id: 3,
      id_lunchroom: "dfvbgdtyj",
      score: 5,
      created_on: "20/12/10",
      text: "El mejor comedor de todo el campus",
      author_name: "Manuela",
      author_email: "manuela@gmail.com"
    }
  ]

  render() {
    return (
      <div className="Comments">
        <div className="color">
          <h1 className="title">Comentarios</h1>
        </div>
        <div className="max-container">
          <div className="row">
            { this.comments.map(comment =>
              <CommentComponent
              key={comment.id}
              text={comment.text}
              name={comment.author_name}
              email={comment.author_email}
              avatar={avatar}/>) }
            <div className="col-md-6" style={{marginTop:"5%"}}>
            <h3>Publicar un comentario</h3>
            <form>
              <div className="form-group">
               <label htmlFor="name">Nombre</label>
               <input type="text" className="form-control" id="nombre"/>
              </div>
              <div className="form-group">
               <label htmlFor="email">Correo</label>
               <input type="text" className="form-control" id="email"/>
              </div>
              <div className="form-group">
               <label htmlFor="msg">Mensaje</label>
               <textarea className="form-control" rows="5" id="msg"></textarea>
              </div>
              <button type="submit" className="btn btn-default">Publicar</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;
