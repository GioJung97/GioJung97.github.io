// Has to be in the head tag, otherwise a flicker effect will occur.

// Toggle between English and Korean content.
let toggleLangSetting = () => {
  let langSetting = determineLangSetting();
  if (langSetting == "en") {
    setLangSetting("ko");
  } else {
    setLangSetting("en");
  }
};

// Change the language setting and apply it to the page.
let setLangSetting = (langSetting) => {
  localStorage.setItem("lang", langSetting);

  document.documentElement.setAttribute("data-lang-setting", langSetting);
  document.documentElement.setAttribute("lang", langSetting);
};

// Determine the expected language setting, which can be "en" or "ko".
// Default is "en".
let determineLangSetting = () => {
  let langSetting = localStorage.getItem("lang");
  if (langSetting != "en" && langSetting != "ko") {
    langSetting = "en";
  }
  return langSetting;
};

let initLang = () => {
  let langSetting = determineLangSetting();

  setLangSetting(langSetting);

  // Add event listener to the language toggle button.
  document.addEventListener("DOMContentLoaded", function () {
    const lang_toggle = document.getElementById("lang-toggle");
    if (!lang_toggle) return;

    lang_toggle.addEventListener("click", function () {
      toggleLangSetting();
    });
  });
};
