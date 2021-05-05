import React from 'react'

class Pet extends React.Component {

  getGender = () => {
    if (this.props.pet.gender === 'male') {
      return '♂'
    } else {
      return '♀'
    }
  }

  renderButton = () => {
    
    if (this.props.pet.isAdopted === true) {
      return <button className="ui disabled button">Already adopted</button>
    } else if(this.props.pet.isAdopted === false) {
      return <button className="ui primary button" onClick={() => {
        const petId = this.props.pet.id
        this.props.onAdoptPet(petId)
      }}>Adopt pet</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.getGender()}<br/>
            Name: {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}lbs</p>
          </div>
        </div>
        <div className="extra content">
          {this.renderButton()}
        </div>
      </div>
    )
  }
}

export default Pet
