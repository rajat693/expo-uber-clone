import React from "react";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { Card1, Card2 } from "@/components/custom/cards";
import { HStack } from "@/components/ui/hstack";
import { Divider } from "@/components/ui/divider";

export default function ServicesScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <VStack>
        <Heading className="text-typography-700 my-4" size="3xl">
          Services
        </Heading>
        <Text className="font-semibold" size="2xl">
          Go anywhere, get anything
        </Text>

        <HStack className="mt-11 w-full gap-4">
          <Card1
            title={"Trip"}
            img_path={require("../../assets/images/car.png")}
            promo
          />
          <Card1
            title={"Intercity"}
            img_path={require("../../assets/images/car_people.png")}
            promo
          />
        </HStack>

        <HStack className="gap-4 mt-4 w-full">
          <Card2
            title="Rentals"
            img_path={require("../../assets/images/cars2.png")}
          />
          <Card2
            title="Reserve"
            img_path={require("../../assets/images/calender.png")}
          />
          <Card2
            title="Group Ride"
            img_path={require("../../assets/images/car.png")}
          />
        </HStack>
      </VStack>

      <Divider className="h-1.5 bg-typography-50 my-7" />

      <VStack className="px-4">
        <Text className="font-semibold" size="2xl">
          Get anything done
        </Text>
        <HStack className="gap-4 mt-7 w-full">
          <Card1
            title="Package"
            img_path={require("../../assets/images/box.png")}
            img_className="h-12 w-12 self-center mr-4"
          />
          <Card1
            title="Store pick-up"
            img_path={require("../../assets/images/store.png")}
          />
        </HStack>
      </VStack>
    </SafeAreaView>
  );
}
