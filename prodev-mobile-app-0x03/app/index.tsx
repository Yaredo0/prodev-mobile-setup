import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { styles } from "@/styles";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.navGroup}>
          <Ionicons name="arrow-back" size={25} />
          <Image source={require("@/assets/images/logo.png")} />
        </View>

        <Text style={styles.largeText}>Sign in to your</Text>
        <Text style={styles.largeText}>Account</Text>
        <Text style={styles.smallText}>
          Enter your email and password to sign in.
        </Text>

        {/* Email + Password Inputs */}
        <View style={styles.formGroup}>
          <Text style={styles.placeholderText}>Email</Text>
          <TextInput keyboardType="email-address" style={styles.inputField} />

          <Text style={styles.placeholderText}>Password</Text>
          <View style={styles.passwordGroup}>
            <TextInput style={{ flex: 1 }} />
            <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
          </View>
        </View>

        {/* Divider */}
        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider}></View>
        </View>

        {/* Social Buttons */}
        <TouchableOpacity style={styles.socialMediaButton}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Image source={require("@/assets/images/google.png")} />
            <Text style={styles.socialMediaButtonText}>Continue with Google</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialMediaButton}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Image source={require("@/assets/images/facebook.png")} />
            <Text style={styles.socialMediaButtonText}>Continue with Facebook</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}