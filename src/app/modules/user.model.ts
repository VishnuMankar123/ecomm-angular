export class User{
    //create a new user model 
    constructor(
        public name:string,
         public email: string,
         public password:string,
         public gender: string,
         public about:string){}
}