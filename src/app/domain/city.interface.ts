export interface City {
  id: string,
  ime: string,
  attractions: {
    ime: string,
    desc: string,
    image: string
  } []
}
