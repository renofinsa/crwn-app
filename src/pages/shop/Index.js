import React from 'react'
import { Route } from 'react-router-dom'
import CollectionOverview from './../../components/collection-overview'
import CallectionPage from './../callection'

import './index.scss'

const index = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CallectionPage} />
    </div>
)

export default index