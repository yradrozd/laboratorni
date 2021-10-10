//Завдання №2
document.write("Завдання 2", "<br \/>")
document.write(checkAnagram(["finder", "friend"]),"<br \/>")
document.write(checkAnagram(["filter", "bob"]),"<br \/>")
document.write(checkAnagram(["сатрап", "спарта"]),"<br \/>")
function checkAnagram(arr) {
  if (!arr || arr.length <= 1) return false;
  let first_word = arr[0].split("").sort().join("");
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].split("").sort().join("") != first_word) {
      return false;
    }
  }  
  return true;
}