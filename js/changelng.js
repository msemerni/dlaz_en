const URL = "https://dlaz.online";

let selectLang = document.querySelector('.select-lang');

selectLang.addEventListener('change', changeLanguage);

function changeLanguage() {
  let lang = selectLang.value;
    location.href = `${URL}/${lang}`;
}
