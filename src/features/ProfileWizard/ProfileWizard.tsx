import React, { createContext, useState } from 'react'
import { useFormikContext } from 'formik'
import Wizard from 'src/features/Wizard'
import Step from 'src/features/Wizard/components/Step'
import { MyProfile } from 'src/features/Forms/MyProfile'
interface Profile {
    dob: string
    zip: string
    gender: string
    sexualPreference: string
    pic: string
}
export const WizardContext = createContext({})
export default function ProfileWizard() {
    const { values } = useFormikContext() || {}
    const [value, setValue] = useState({})

    console.log('useFormikContext', values)

    function handleSetValue(input: any) {
        setValue({ ...value, ...input })
    }

    return (
        <div className="profileWizard">
            <WizardContext.Provider value={[value, handleSetValue] as any}>
                <Wizard>
                    <Step title="My birthday is">
                        <MyProfile.Bday />
                    </Step>
                    <Step title="My location is">
                        <MyProfile.Zipcode />
                    </Step>
                    <Step title="I am a">
                        <MyProfile.Gender />
                    </Step>
                    <Step title="I'm looking for a">
                        <MyProfile.Orientation />
                    </Step>
                    <Step title="My best pic is">
                        <MyProfile.Pics />
                    </Step>
                </Wizard>
            </WizardContext.Provider>
        </div>
    )
}
