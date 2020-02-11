import React from 'react';

let id = 0
class CreateApet extends React.Component {
    state = {
        petlists: [],
        Name: '',
        Age: '',
        Gender: '',
        Size: '',
        Color: ''
    }
    render() {
        return (
            <div>
                <form onSubmit={this._hundleSubmit} >
                    <h5>List your pet</h5>
                    <div className="inputs">

                        <input type="text" value={this.state.Name} onChange={this._hudleChange1} placeholder="Name" />
                        <input type="submit" value="Submit" />
                        <input type="integer" value={this.state.Age} onChange={this._hudleChange2} placeholder="Age" />
                        <input type="submit" value="Submit" />
                        <input type="text" value={this.state.Gender} onChange={this._hudleChange3} placeholder="Gender" />
                        <input type="submit" value="Submit" />
                        <input type="text" value={this.state.Size} onChange={this._hudleChange4} placeholder="Size" />
                        <input type="submit" value="Submit" />
                        <input type="text" value={this.state.Color} onChange={this._hudleChange5} placeholder="Color" />
                        <input type="submit" value="Submit" />

                        <ul>
                            {
                                this.state.petlists.map(petlist => (
                                    <div key={petlist.id} style={{ display: 'flex' }}>
                                        <li>{`Name: ${petlist.name} `}</li>
                                        <button onClick={() => this._removeApet(petlist.id)}> Delete </button>
                                    </div>

                                )
                                )
                            }

                        </ul>

                        <ul>
                            {
                                this.state.petlists.map(petlist => (
                                    <div key={petlist.id} style={{ display: 'flex' }}>
                                        <li>{`Age: ${petlist.age} `}</li>
                                        <button onClick={() => this._removeApet(petlist.id)}> Delete </button>
                                    </div>

                                )
                                )
                            }

                        </ul>
                        <ul>
                            {
                                this.state.petlists.map(petlist => (
                                    <div key={petlist.id} style={{ display: 'flex' }}>
                                        <li>{`Gender: ${petlist.gender} `}</li>
                                        <button onClick={() => this._removeApet(petlist.id)}> Delete </button>
                                    </div>

                                )
                                )
                            }

                        </ul>

                        <ul>
                            {
                                this.state.petlists.map(petlist => (
                                    <div key={petlist.id} style={{ display: 'flex' }}>
                                        <li>{`Size: ${petlist.size} `}</li>
                                        <button onClick={() => this._removeApet(petlist.id)}> Delete </button>
                                    </div>

                                )
                                )
                            }

                        </ul>
                        <ul>
                            {
                                this.state.petlists.map(petlist => (
                                    <div key={petlist.id} style={{ display: 'flex' }}>
                                        <li>{`Color: ${petlist.color} `}</li>
                                        <button onClick={() => this._removeApet(petlist.id)}> Delete </button>
                                    </div>

                                )
                                )
                            }

                        </ul>

                    </div>
                </form>

            </div >

        )
    }

    _hundleSubmit = (event) => {
        event.preventDefault();
        this._addApetName()
        this._addApetAge()
        this._addApetGender()
        this._addApetSize()
        this._addApetColor()

    }



    _hudleChange1 = (event) => {
        this.setState({
            Name: event.target.value,
        })

    }
    _hudleChange2 = (event) => {
        this.setState({
            Age: event.target.value,
        })
    }
    _hudleChange3 = (event) => {
        this.setState({
            Gender: event.target.value,
        })
    }
    _hudleChange4 = (event) => {
        this.setState({
            Size: event.target.value,
        })
    }
    _hudleChange5 = (event) => {
        this.setState({
            Color: event.target.value,
        })
    }

    _addApetName = () => {
        id++
        if (this.state.Name.length > 0) {

            const newPets = this.state.petlists
            newPets.push({
                id,
                name: this.state.Name,

            })

            this.setState({
                petlists: newPets,
                Name: '',

            })
        }


    }
    _addApetAge = () => {
        id++
        if (this.state.Age.length > 0) {

            const newPets = this.state.petlists
            newPets.push({
                id,
                age: this.state.Age,

            })

            this.setState({
                petlists: newPets,
                Age: '',

            })
        }
    }
    _addApetGender = () => {
        id++
        if (this.state.Gender.length > 0) {

            const newPets = this.state.petlists
            newPets.push({
                id,
                gender: this.state.Gender,
            })

            this.setState({
                petlists: newPets,
                Gender: '',
            })
        }
    }
    _addApetSize = () => {
        id++
        if (this.state.Size.length > 0) {

            const newPets = this.state.petlists
            newPets.push({
                id,
                size: this.state.Size,
            })

            this.setState({
                petlists: newPets,
                Size: '',
            })
        }
    }
    _addApetColor = () => {
        id++
        if (this.state.Color.length > 0) {

            const newPets = this.state.petlists
            newPets.push({
                id,
                color: this.state.Color,

            })

            this.setState({
                petlists: newPets,
                Color: ''
            })
        }
    }

    _removeApet = (idToRemove) => {
        this.setState({
            petlists: this.state.petlists.filter(petlist => petlist.id !== idToRemove)
        })

    }

}

export default CreateApet;