export default class PersonDTO {
    constructor(
        public id: number,
        public FirstName: string,
        public LastName: string,
        public Tz: string,
        public DateOfBirth:Date,
        public Gender:string,
        public HMO:string ) { }
}