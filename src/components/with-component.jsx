import React from 'react'

const WithComponent = (WrappedComponent) => {
  class WithComponent extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        data: [],
      }
    }

    componentDidMount() {
      setTimeout(() => {
        fetch(this.props.dataSource)
          .then((response) => response.json())
          .then((data) => this.setState({data: data.slice(0, 5)}))
      }, 1500)
    }

    render() {
      const {dataSource, ...otherProps} = this.props

      return this.state.data.length < 1 ? (
        <h1>LOADING</h1>
      ) : (
        <WrappedComponent data={this.state.data} {...otherProps} />
      )
    }
  }
  return WithComponent
}

export default WithComponent
