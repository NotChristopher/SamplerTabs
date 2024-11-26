import { Text, View } from "react-native";
import PadsSection from "@/components/ui/PadsSection";
import TopController from "@/components/ui/TopController";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <TopController />
     <PadsSection />
    </View>
  );
}
