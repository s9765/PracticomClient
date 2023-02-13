import Person from "./Person";

export default class Child {
    constructor(
        public Name: string,
        public DateOfBirth: Date,
        public Tz: string,
        public ParentId:number,
   ) { }
}
