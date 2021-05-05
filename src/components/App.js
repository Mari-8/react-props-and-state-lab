import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  

  changeType = (value) => {
    this.setState({
      filters: {
        type: value
      }
    }) 
  
  }

  findPets = (event) => {

    let filter  

    if (this.state.filters.type === 'all') {
      filter = ''
    } else {
      filter = `?type=${this.state.filters.type}`
    }

    fetch(`/api/pets${filter}`)
    .then(res => res.json())
    .then(res => {
          this.setState({
            pets: res
          })
    })
  } 

  onAdoptPet = (id) => {
    let updatedPets = this.state.pets.map(pet => {
      if (pet.id === id) {
        pet.isAdopted = true 
      }
      return pet
    })

    return this.setState({
      pets: updatedPets
    })

  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeType} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
