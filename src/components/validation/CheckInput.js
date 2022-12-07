 //length 
 export function checkLength(value, len) {
    if(value.trim().length > len) {
        return true;
    } else {
        return false;
    }
  };
  
  //check password
export function validatePassword(password) {
    const regEx = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–[{}]:;',?/*~$^+=<>]).{8,20}$";
    const patternMatches = regEx.test(password);
    return patternMatches;
};