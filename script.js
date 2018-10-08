var hello = "Bonjour ", firstName, point = " !", result;
firstName = prompt("Quel est votre prénom ?");
result = hello + firstName + point;
if (isNaN(firstName)) {
  alert(result);
}else{
  alert("Bonjour");
}
