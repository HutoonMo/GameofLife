import React from 'react';

export class Cell extends React.Component{
  render(){
    const color_ = this.props.color;
    const CELL_SIZE = this.props.CELL_SIZE;
    return (
      <td
        style={{

          backgroundColor:'black',
          color:'black',
          boarderColor: 'black',
          border:".5px solid green"
        }}
      onClick={this.props.handleClick} >
        <div
          style={{color:color_,
                  border:"1px solid",
                  backgroundColor: color_,
                  borderColor: color_,
                  height:CELL_SIZE}} >
        </div>
      </td>
    )
  }
}

