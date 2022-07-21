interface UtilityPerson {
    age: number;
    firstName: string;
    lastName: string;
}
            
let kindPerson: Partial<UtilityPerson> = {};
let evilPerson: Required<UtilityPerson> = {
    age: 21,
    firstName: "Lucifer",
    lastName: "Evil"
};