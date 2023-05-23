import React from 'react'
import { List as ListIcon } from 'react-bootstrap-icons'
import ListProps from './List.types'

export default function List({ children }: ListProps) {
    return (
        <div className="list" data-testid="list">
            <ListIcon className="iconOverride" size={50} />
        </div>
    )
}
