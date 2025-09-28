const idadeStr = prompt("Qual a sua idade?");
if (idadeStr !== null) {
  const idade = parseInt(idadeStr, 10);
  if (isNaN(idade)) {
    alert("Por favor, digite um número válido.");
  } else if (idade < 18) {
    alert("Você é menor de idade.");
  } else {
    alert("Bem-vindo! Você é maior de idade.");
  }
}