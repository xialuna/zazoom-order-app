// pick-toppings/page.tsx
import { useRouter } from 'next/router'

const PickToppings = () => {
  const router = useRouter()

  const handleNext = () => {
    router.push('/customer-info') // Navigates to the customer info page
  }

  return (
    <div>
      <h1>Pick your toppings</h1>
      {/* Content for toppings selection */}
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default PickToppings
