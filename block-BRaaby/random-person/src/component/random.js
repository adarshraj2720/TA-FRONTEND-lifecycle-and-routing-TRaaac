import React from 'react'

class Random extends React.Component {
    constructor(props) {
        super()
        this.state = ({
            data: null,
            isdisplay: false,
            name: "",
            user: '',
            loading: "Random User",
        })
    }
    componentDidMount() {
        fetch('https://randomuser.me/api/')
            .then((res) => res.json())
            .then((data) => this.setState({ data }))


        // .then((res) => res.json())
        // .then((data) => console.log(data.results[0].id.name) )
    }

    handleclick = (event) => {
        let value = event.target.id
        let info = event.target.innerText
        this.setState({
            user: value,
            name: info,
            isdisplay: true
        })
    }

    handlesubmit = (event) => {
        let ab = event.target.value
        this.setState({
            loading: "Loading..",
        })
    }

    render() {
        if (!this.state.data) {
            return (
                <>
                    <h1>Loading...</h1>
                </>
            )
        }
        return (
            <>
                <img src={this.state.data.results[0].picture.thumbnail} alt="/"></img>
                {
                    this.state.isdisplay ?
                        <div>
                            <h2>My {this.state.name} is:</h2>
                            <p>{this.state.user}</p>
                        </div>
                        :
                        <div>
                            <h2>  My Name is:</h2>
                            <p>{this.state.data.results[0].name.first}</p>
                        </div>

                }
                <button onClick={(event) => { this.handleclick(event) }} id={this.state.data.results[0].name.first}>Name</button>
                <button onClick={(event) => { this.handleclick(event) }} id={this.state.data.results[0].email}>Email</button>
                <button onClick={(event) => { this.handleclick(event) }} id={this.state.data.results[0].dob.age}>Age</button>
                <button onClick={(event) => { this.handleclick(event) }} id={this.state.data.results[0].location.street.name}>Street</button>
                <button onClick={(event) => { this.handleclick(event) }} id={this.state.data.results[0].phone}>Phone</button>
                <button onClick={(event) => { this.handleclick(event) }} id={this.state.data.results[0].login.password}>Password</button><br/>
                <a onClick={(event) => { this.handlesubmit(event) }} href='/'><button type='submit'>{this.state.loading}</button></a>
            </>
        )
    }

}

export default Random