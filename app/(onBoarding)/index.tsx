import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import LanguageToggle from "../../components/LanguageToggle";

const index = () => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => router.replace("/(tabs)/home")}>
        <Text style={{ color: "Black" }}>Home</Text>
      </TouchableOpacity>
      <Text>index</Text>
      <Text style={styles.text}>{t("welcome")}</Text>
      <LanguageToggle />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default index;
