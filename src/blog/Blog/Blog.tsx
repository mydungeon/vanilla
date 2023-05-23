import React from 'react'
import BlogProps from './Blog.types'
import './Blog.styles.scss'

export default function Blog({ children }: BlogProps) {
    return (
        <div className="blog" data-testid="blog">
            Blog Content
        </div>
    )
}
