import React from "react";
import NextImage from "next/image";
import { defaultPx } from "lib/utils/default-container-px";
import {
  Box,
  chakra,
  Container,
  ContainerProps,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FooterTitle } from "./footer-title";
import { FooterLink } from "./footer-link";
import { NextResponsiveImage } from "../next-responsive-image";

const LINK_GAPS = [2, 2, 8];

interface FooterProps {
  _wrapper?: ContainerProps;
  mode?: "light" | "dark";
}

export function Footer(props: FooterProps) {
  return (
    <Container maxW="landingMax" px={defaultPx(32)} {...props._wrapper}>
      <Grid
        gap={[6, 6, 4]}
        templateColumns={["repeat(1, 1fr)"]}
        gridTemplateAreas={[
          "' legal '",
        ]}
      >
        <GridItem gridArea="legal" alignSelf={"center"} justifySelf={"center"}>
          <VStack align="start" spacing={LINK_GAPS}>
            <FooterLink
              mode={props.mode}
              title={`Copyright © ${new Date().getFullYear().toString()} Onboard`}
              type="text"
            />
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  );
}
