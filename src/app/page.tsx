import { Nav } from '../components/ui/Nav'
import { IngredientBox } from '../components/ui/IngredientBox'
export default function Home() {
  return (
    <main>
      <div>
        <Nav />
        <h1>Hello World</h1>
        <h2>subheading</h2>
        <button className='btn btn-primary btn-hover'>Primary</button>
        <button className='btn btn-secondary btn-hover'>Secondary</button>
        <IngredientBox />
      </div>
    </main>
  )
}
