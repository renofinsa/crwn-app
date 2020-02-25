import React from 'react'
import {Link, Route} from 'react-router-dom'
import './App.css'

const Home = (props) => (
    <div>
        <h1>Homepage</h1>
        <button onClick={() => props.history.push('/blog')}>Blog</button>
    </div>
)

const Blog = (props) => (
    <div>
        <h1>Blog Page</h1>
        <ul>
            <li><Link to={`${props.match.url}/1`}>Page 1</Link></li>
            <li><Link to={`${props.match.url}/1`}>Page 1</Link></li>
            <li><Link to={`${props.match.url}/2`}>Page 2</Link></li>
            <li><Link to={`${props.match.url}/3`}>Page 3</Link></li>
        </ul>
    </div>
)

const DetailBlog = props => {
    return (    
        <div>
            <h1>Detail Blog Page Number: {props.match.params.id} </h1>
        </div>
    )
}

function LearnRouter() {
    return (
        <div>
            <Route exact path='/' component={Home} />
            <Route path='/blog' component={Blog} />
            <Route path='/blog/:id' component={DetailBlog} />
        </div>
    )
}

export default LearnRouter
