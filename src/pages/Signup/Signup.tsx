import React from 'react'
import SignupForm from 'src/features/Forms/components/Signup'
import Layout from 'src/features/Layout'

export default function Signup() {
    return (
        <div className="signup" data-testid="signup">
            <Layout isDarkTheme={false} hasLogo={true} main={<SignupForm />} />
        </div>
    )
}
