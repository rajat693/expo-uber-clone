import { Link, Stack } from "expo-router";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 items-center justify-center p-5">
        <Text size="2xl" className="font-bold">
          This screen doesn't exist.
        </Text>

        <Link href="/" className="mt-15 p-5">
          <Text className="text-green-600" size="sm">
            Go to home screen!
          </Text>
        </Link>
      </View>
    </>
  );
}
