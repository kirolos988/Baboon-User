import React from "react";
import { Button } from "react-native";
import { changeLanguage } from "../I18n/i18n";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = async () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    await changeLanguage(newLang);
  };

  return <Button title={t("change_language")} onPress={toggleLanguage} />;
};

export default LanguageToggle;
