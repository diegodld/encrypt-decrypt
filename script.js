function writeTextEncrypted() {
  let text = document.querySelector(".text-box").value;
  if (text != "") {
    document.querySelector(".show-result").classList.add("invisible");
    console.log(text);
    document.querySelector(".text-result").value = encrypt(text);
    document
      .querySelector(".text-result-container")
      .classList.remove("invisible");
  } else {
    alert("Digite um texto!");
  }
}

function writeTextDecrypted() {
  let text = document.querySelector(".text-box").value;
  console.log(text);
  if (text != "") {
    document.querySelector(".text-result").value = decrypt(text);
    console.log(decrypt(text));
  } else {
    alert("Insira um texto Para descriptografar!");
  }
}

const encrypt = (codeToEncrypt) => {
  const substitutionMap = [
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["a", "ai"],
    ["u", "ufat"],
  ];
  let encryptedCode = codeToEncrypt;

  for (let i = 0; i < substitutionMap.length; i++) {
    encryptedCode = encryptedCode.replaceAll(
      substitutionMap[i][0],
      substitutionMap[i][1]
    );
  }

  return encryptedCode;
};

const decrypt = (encryptedCode) => {
  const substitutionMap = [
    ["enter", "e"],
    ["imes", "i"],
    ["ober", "o"],
    ["ai", "a"],
    ["ufat", "u"],
  ];
  let decryptedCode = encryptedCode;

  for (let i = 0; i < substitutionMap.length; i++) {
    decryptedCode = decryptedCode.replaceAll(
      substitutionMap[i][0],
      substitutionMap[i][1]
    );
  }

  return decryptedCode;
};

function copyText(){
    const text = document.querySelector('.text-result');
    text.select();
    text.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado para área de transferência")
}
