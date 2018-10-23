import React, { Component } from 'react';


class CommentComponent extends Component {
  comments = [
    {
      id: 1,
      id_lunchroom: "234yuhgfe",
      score: 3,
      created_on: "20/10/10",
      text: "Este restaurante es la machera",
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
    }
  ]

  render() {
    return (
      <div className="CommentComponent">
        <div className="col-md-12" style={{marginTop:"2%"}}>
          <div className="media">
            <div className="media-left media-top">
              <img src={ this.props.avatar } alt="?" className="media-object" style={{width:"80px"}}/>
            </div>
            <div className="media-body">
              <h4 className="media-heading">
                <strong>{this.props.name}</strong>
              </h4>
              <p className="media-heading"><strong>{this.props.email}</strong></p>
              <p>{this.props.text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentComponent;
