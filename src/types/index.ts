export interface Burger {
  id: number
  name: string
  price: number
  bun: string
  patty: string
  spice: 'Mild' | 'Medium' | 'Hot'
  prepTime: string
  calories: number
  protein: number
  image: string
  description: string
}

export interface Ingredient {
  id: number
  name: string
  description: string
  image: string
  number: string
}

export interface Location {
  city: string
  image: string
}
