
let employeeId:number = 12;
let firstName: string = "Nasri";
let lastname:string = "Ladaaa";
let cost  = 4000 as any
cost = "terst"


//accept string
let userId: number  | string  = "123123123"

userId = 
//reassgin value as number
userId = 123123123


type userIdtype = string | number;

let test1:userIdtype = "1231";

enum Nasri{
    test = "test", 
    bug = "bug"
}

interface inverntoryItem{
    firstname:string,
    lastname: Nasri ,
    password:string,
    username?:string

}

function getInverntory(inverntory : string) : inverntoryItem {

return null;
}
function saveInventoryItem( itemObj : inverntoryItem) : inverntoryItem{

    return null;
}

let nasri = getInverntory("Nasri");

let test = saveInventoryItem(
{
    firstname:"ttt",
    lastname:Nasri.bug,
    password:"444444",

}

)
