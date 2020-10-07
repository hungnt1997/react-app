
import React, { Component } from 'react';
class App extends React.Component {
    state = {
        data: [],
        characters: [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ]
        ,
    }
    fetchData(){
        const url =  'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'
        fetch(url).then(
            (result) => result.json()
        ).then((result) => {
            this.setState({
                data : result,
            })
        })
    }
    componentDidMount(){
        this.fetchData()
    }

    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
      }
    render() {

        const {data} = this.state
        const result = data.map((entry, index) => { 
            return <li key={index}>{entry}</li>
        })

        return (
            // <ul> {result}</ul>
            <div>
                
            <Table
                charactersData={this.state.characters}
                removeCharactor={this.removeCharactor}
            />
            <Form   handleSubmit={this.handleSubmit}/> 
            </div>
         
        )
    }
    removeCharactor = (index) => {
        const { characters } = this.state
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            })
        })
    }
}
class Table extends Component {
    render() {
        const charactersData = this.props.charactersData
        const removeCharacter = this.props.removeCharactor
        return (
            <table>
                <TableHeader />
                <TableBody
                    charactersData={charactersData}
                    removeCharactor={removeCharacter}
                />
            </table>)

    }
}
const TableBody = (props) => {
    const { charactersData, removeCharactor } = props
    const rows = charactersData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => removeCharactor(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}
class Form extends Component {
    initialState = {
        name: '',
        job: '',
      }
    state = {
        name: '',
        job: '',
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value,
        })
    }
    render() {
        const { name, job } = this.state;
        return (
            <form>
                <label htmlFor="name">
                    Name
                 </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange}
                />
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange} />
                <button type='button' onClick={this.submitForm}>submit</button> 
            </form>

        )
    }
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
}

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}


export default App