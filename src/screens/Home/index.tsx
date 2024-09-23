import React from "react";
import {
  Container,
  ContainerButton,
  Content,
  TextTitle,
  ViewDaily,
  TextDaily,
} from "./styles";
import { HourDaily } from "../../components/HourDaily";
import ScreenContainer from "../../components/ScreenContainer";
import { Entypo } from "@expo/vector-icons";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { useNavigation } from "@react-navigation/native";

export const Home = () => {
    const navigation = useNavigation();
  return (
    <Container>
      <Header />
      <Content>
        <Card />
      </Content>
      <TextTitle>Refeições</TextTitle>
      <ContainerButton>
        <Button
          title="Nova Refeição"
          size="m"
          type="primary"
          icon={<Entypo name="plus" size={18} color="white" />}
          onPress={() => navigation.navigate(
          "NewFood"
          )}
        />
      </ContainerButton>
      <ScreenContainer>
        <ViewDaily>
          <TextDaily>29.09.24</TextDaily>
        </ViewDaily>
        <HourDaily hour="20:00" content="X-Tudo" status="APROVED" />
        <HourDaily hour="16:00" content="Whey" status="WARNING" />
        <HourDaily hour="16:00" content="Whey" status="WARNING" />
        <HourDaily hour="20:00" content="X-Tudo" status="APROVED" />
        <HourDaily hour="20:00" content="X-Tudo" status="APROVED" />
      </ScreenContainer>
    </Container>
  );
};
