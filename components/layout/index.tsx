import React from "react";
import Head from "next/head";
import { defaultPx } from "lib/utils/default-container-px";
import TryBanner from "components/core/try-banner";
import Navbar from "components/core/navbar";
import { Footer } from "components/core/footer";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import TimeSelectionTabs from "../core/time-selection-tabs";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  const router = useRouter();

  const isInBlogPage = router.pathname.startsWith("/changelogs/");

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Discover new features, improvements and bug fixes on Onboard." />
        <meta name="image" content="https://changelog.onboard.xyz/social.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://changelog.onboard.xyz" />
        <meta property="og:description" content="Discover new features, improvements and bug fixes on Onboard." />
        <meta property="og:image" content="https://changelog.onboard.xyz/social.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://changelog.onboard.xyz" />
        <meta name="twitter:description" content="Discover new features, improvements and bug fixes on Onboard." />
        <meta name="twitter:image" content="https://changelog.onboard.xyz/social.png" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Onboard Changelog"
          href="https://changelog.onboard.xyz/rss.xml"
        />
      </Head>
      <motion.div initial="hidden" animate="visible">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.6 } },
          }}
        >
          <Navbar />
        </motion.div>
        {!isInBlogPage && (
          <motion.div
            style={{
              position: "sticky",
              top: "32px",
              zIndex: 1,
              paddingBottom: "32px",
              opacity: 1,
            }}
          >
            <TimeSelectionTabs />
          </motion.div>
        )}
        <Box w="100vw" maxW={"100%"} zIndex="docked">
          <Container maxW="landingMax" display="flex" justifyContent="center" px={defaultPx(32)}>
            <VStack spacing={8} alignItems="center" w="full">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
                }}
              >
                <VStack display="flex" justifyContent="center" alignItems="start" gap={[8, 8, 14]}>
                  {!isInBlogPage && (
                    <VStack alignItems="start" width="100%">
                      <Text fontSize="xl" color="gray.700" textAlign={"start"}>
                        New features, improvements and bugs squashed on Onboard
                      </Text>
                      <Heading as="h1" fontSize={["5xl"]} color="black" textAlign={"start"}>
                        Changelog
                      </Heading>
                    </VStack>
                  )}
                  <VStack spacing={0} justifyContent="center">
                    {children}
                  </VStack>
                </VStack>
              </motion.div>
            </VStack>
          </Container>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 1, delay: 0.4 } },
            }}
          >
            <TryBanner _wrapper={{ my: [50, 50, 120] }} />

            <Footer _wrapper={{ mt: [50, 50, 120], mb: 20 }} />
          </motion.div>
        </Box>
      </motion.div>
    </>
  );
}
