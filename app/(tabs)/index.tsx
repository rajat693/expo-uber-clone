import React from "react";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="font-bold" size="xl">
        home screen
      </Text>
    </View>
  );
}
