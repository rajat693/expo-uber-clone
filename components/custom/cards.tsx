import React from "react";
import { Pressable } from "../ui/pressable";
import { Badge, BadgeText } from "../ui/badge";
import { VStack } from "../ui/vstack";
import { Image } from "../ui/image";
import { Text } from "../ui/text";

export const Card1 = ({
  title,
  img_path,
  promo,
  img_className,
}: {
  title: string;
  img_path: any;
  promo?: boolean;
  img_className?: string;
}) => {
  return (
    <Pressable className="flex flex-row relative bg-background-50 rounded-xl justify-between p-3 h-28 flex-1">
      {promo && (
        <Badge className="absolute -top-4 left-[40%] bg-green-700 rounded-md">
          <BadgeText className="text-white capitalize">Promo</BadgeText>
        </Badge>
      )}

      <VStack className="justify-end">
        <Text className="text-typography-800 font-medium">{title}</Text>
      </VStack>
      <Image source={img_path} alt="image" className={`${img_className}`} />
    </Pressable>
  );
};

export const Card2 = ({
  title,
  img_path,
}: {
  title: string;
  img_path: any;
}) => {
  return (
    <Pressable className="items-center p-3 bg-background-50 rounded-xl h-32 flex-1">
      <Image source={img_path} alt="image" />
      <Text className="text-typography-800 font-medium">{title}</Text>
    </Pressable>
  );
};
