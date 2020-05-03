function basicTeenager(age) {
  if(13 < age && age <= 19){
    return "You are a teenager!";
  }
}

function teenager(age) {
  var result = "";
  if(13 < age && age < 19){
    result = "You are a teenager!";
  } else {
    result = "You are not a teenager";
  }
  return result;
}

function ageChecker(age) {
  var result = "";
  if (age <= 12){
    result = "You are a kid";
  } else if(13 < age < 19){
    result = "You are a teenager";
  } else {
    result = "You are a grownup";
  }
  return result;
}

function ternaryTeenager(age) {
  return 13 < age && age < 19 ? "You are a teenager":"You are not a teenager";
}

function switchAge(age) {
  switch(age){
    case age === 13:
      return "You are a teenager";
    case age === 14:
      return "You are a teenager";
    case age === 15:
      return "You are a teenager";
    case age === 16:
      return "You are a teenager";
    case age === 17:
      return "You are a teenager";
    case age === 18:
      return "You are a teenager";
    case age === 19:
      return "You are a teenager";
    default:
      return "You have an age";
  }
}
