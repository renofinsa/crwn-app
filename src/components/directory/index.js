import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from './../../redux/selector/directory'
import './index.scss'

import MenuItem from './../menu-item/'

const index = ({sections}) => (
    <div className='directory-menu'>
        {
            sections.map(({ id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps}/>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(index)