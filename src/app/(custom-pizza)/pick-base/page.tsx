// pick-base/page.tsx
import { useRouter } from 'next/router'

const PickBase = () => {
  const router = useRouter()

  const handleNext = () => {
    router.push('/pick-toppings') // This navigates to the pick-toppings page
  }

  return (
    <div>
      <h1>Pick your base</h1>
      {/* Content for base selection */}
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default PickBase
