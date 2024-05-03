{

// Type assesrtion

let anything : any;
anything
type CustomErr = {
    message: string;
}

try{

}catch(error){
    console.log((error as CustomErr).message);
}

}