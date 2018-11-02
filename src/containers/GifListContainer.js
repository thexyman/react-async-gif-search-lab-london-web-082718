import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            gifs: [],
            // searchTerm: ""
        }
    }

    // updateFilter = (e) => this.setState({ searchTerm: e.target.value })

    handleSubmit = (e) => {
        e.preventDefault()
        const searchTerm = e.target.value 
        const URL = `http://api.giphy.com/v1/gifs/search?q=` + `${searchTerm}` + `&api_key=dc6zaTOxFJmzC&rating=g`
        console.log(URL)
        fetch(URL)
            .then(resp => resp.json())
            .then(response => this.setState({ gifs: response.data.slice(0, 3) }))
    }


    render() {
        return(
        <div>
            <GifList gifs={this.state.gifs} /> 
            <GifSearch handleSubmit={this.handleSubmit} /> 
        </div>
            
 
        )
    }

}

export default GifListContainer



















// componentDidMount = () => {
    //     const searchTerm = "Fun"
    //     const URL = `http://api.giphy.com/v1/gifs/search?q=` + `${searchTerm}` + `&api_key=dc6zaTOxFJmzC&rating=g`
    //     fetch(URL)
    //         .then(resp => resp.json())
    //         .then(response => console.log(response.data.slice(0, 3)))
    // }