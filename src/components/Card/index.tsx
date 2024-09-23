import React from "react";
import { Image } from "react-native";
import { Container, TitlePercent, TextContent, ContainerImage } from "./styles";
//import { useNavigation } from "@react-navigation/native";

export const Card = () => {

  interface StatisticsScreenParams {
    headerTitle: string;
    headheaderSubTitle: string;
  }

  return (
    <Container >
      <ContainerImage>
        <Image source={require("../../../assets/icons/Open.png")} />
      </ContainerImage>
      <TitlePercent>90,86%</TitlePercent>
      <TextContent>das refeições dentro da dieta</TextContent>
    </Container>
  );
};
