import React from 'react'

class GifSearch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ""
        }
    }

    updateSearchTerm = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render() {
        return (
        <div> 
            <form onSubmit={(e) => this.props.handleSubmit(e)} >
                <label htmlFor="search-input" >Search for Gif</label>
                <input
                    id="search-input"
                    type="text"
                    onKeyUp={(e) => this.updateSearchTerm(e)}
                    // value={this.state.searchTerm}
                />
                <input type="submit" />
            </form>
            
        </div>

        )
    }

}

export default GifSearch 

