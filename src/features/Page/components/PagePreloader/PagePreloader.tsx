import React from 'react'
import PagePreloaderProps from './PagePreloader.types'

export default function PagePreloader({ children }: PagePreloaderProps) {
    return (
        <div className="pagePreloader" data-testid="pagePreloader">
            {children}
        </div>
    )
}
