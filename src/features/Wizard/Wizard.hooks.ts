import { useState, useEffect } from "react";

export default function useWizardContext(values: any) {
  const [stepValues, setStepValues] = useState({});

  useEffect(() => {
    setStepValues({ ...stepValues, ...values });
  }, []);

  return [stepValues, setStepValues];
}
