import React from 'react'
import { useGetUsersQuery } from 'src/appState/usersApi'
import Layout from 'src/features/Layout'

export default function SearchPage() {
    const { data, error, isLoading } = useGetUsersQuery([])
    console.log('data', data)
    return (
        <div className="searchPage" data-testid="searchPage">
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <Layout
                    isDarkTheme={false}
                    hasLogo={true}
                    main={
                        <>
                            {data.map((user: any) => (
                                <div>{user.email}</div>
                            ))}
                        </>
                    }
                />
            ) : null}
        </div>
    )
}
