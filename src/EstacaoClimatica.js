import React from 'react'
import ReactDOM from 'react-dom'
export class EstacaoClimatica extends React.Component {

  timer = null

  state = {
    data: null
  }

  constructor(props){
    super(props)
    console.log('constructor')
  }

  componentDidMount(){
    console.log('componentDidMount')
    this.timer = setInterval(() => {
      this.setState({data: new Date().toLocaleString()})
    }, 1000)
  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
    clearInterval(this.timer)
  }

  render() {
    console.log('render')
    return (
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center border rounded mb-2" style={{ height: '6rem' }}>
            <i className={`fas fa-5x ${this.props.icone}`}></i>
            <p className="w-75 ms-3 text-center fs-1">
              {this.props.estacao}
            </p>
          </div>
          <div>
            <p className="text-center">
              {
                this.props.latitude ?
                  `Coordenadas: ${this.props.latitude}, ${this.props.longitude}. Data: ${this.state.data}`
                  : 
                `Clique no botão para saber a sua estação climática`
              }
            </p>
          </div>
          <button className="btn btn-outline-primary w-100 mt-2" onClick={this.props.obterLocalizacao}>
            Qual é a minha estação?
          </button>
          {/* button.btn.btn-outline-danger.w-100.mt-2 */}
          <button
            className="btn btn-outline-danger w-100 mt-2"
            onClick={() => ReactDOM.unmountComponentAtNode(document.querySelector('#root'))}>
            Unmount
          </button>
        </div>
      </div>
    )
  }
}
