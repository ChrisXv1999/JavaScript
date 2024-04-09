interface Person {
    name: string,
    age: number,
    hobby:string[]
}
type Optional<T,K extends keyof T> = Omit<T,K> & Partial<Pick<T,K>>
type searchPerson = Optional<Person,'age' | 'hobby'>

// const telPhoneReg:RegExp  = /1[3-9]\d{9}/

