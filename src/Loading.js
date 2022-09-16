// import React from 'react'
// export default class Loading extends React.Component{}
import { Component } from 'react'
export default class Loading extends Component{
  render(){
    return (
      <>
        {/* // .d-flex.justify-content-center.align-items-center.border.rounded.p-3 */}
        <div className="d-flex flex-column justify-content-center align-items-center border rounded p-3">
          <div style={{width: '3rem', height: '3rem'}} className="spinner-border text-primary">
            <span className="visually-hidden">Carregando...</span>
          </div>
          {/* p.text-primary{Por favor, responda à solicitação de localização} */}
          {/* <p className="text-primary mt-2">Por favor, responda à solicitação de localização</p> */}
          <p className="text-primary mt-2">
            {this.props.mensagem}
          </p>
        </div>
      </>
    )
  }
}

Loading.defaultProps = {
  mensagem: 'Carregando...'
}