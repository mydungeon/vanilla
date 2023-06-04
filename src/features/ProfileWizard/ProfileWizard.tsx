import React from 'react'
import Wizard from 'src/features/Wizard'
import Step from 'src/features/Wizard/components/Step'
import { MyProfile } from 'src/features/Forms/MyProfile'

export default function ProfileWizard() {
    return (
        <div className="profileWizard">
            <Wizard>
                <Step title="My birthday is">
                    <MyProfile.Bday />
                </Step>
                <Step title="I am a">
                    <MyProfile.Gender />
                </Step>
                <Step title="I am looking for a">
                    <MyProfile.Orientation />
                </Step>
                <Step title="My profile pic is">
                    <MyProfile.Pics />
                </Step>
            </Wizard>
        </div>
    )
}
