export interface Person {
  id : number
  lastname : string
  firstname : string
  imageUrl : string
}

export interface InfoCasting {
  id : number
  idPerson : number
  idMovie : number
  role : string
}
