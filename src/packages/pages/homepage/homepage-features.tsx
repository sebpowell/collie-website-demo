"use client";
import { Box } from "@/packages/components/box";
import { Container } from "@/packages/components/container";
import { Column, Grid } from "@/packages/components/grid";
import { Heading } from "@/packages/components/heading";
import { LandingPageSectionTitle } from "@/packages/components/landing-page-section";
import { Paragraph } from "@/packages/components/paragraph";
import { Stack } from "@/packages/components/stack";
import { Text } from "@/packages/components/text";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/packages/utils/cn";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { NavigationLinkIds } from "@/packages/components/navigation-link-ids.enum";

const features = [
  {
    title: "Better status updates",
    old: "You keep asking your team for status updates but never feel fully informed about exactly where things stand.",
    collie:
      "Every day you wake up and you know exactly how much progress your team has made and how they feel about it.",
    image: "/shot-1.png",
    imageClasses: "from-pink-100 to-purple-100",
  },
  // {
  //   title: "Answers at your fingertips",
  //   old: "You rely on memory and most of your notes and agendas are in very long Google Docs or scattered in different places.",
  //   collie:
  //     "Everything is centralized and fully searchable. All in the context of each conversation and each team member.",
  //     image: "/shot-2.png",
  //     imageClasses: "from-blue-100 to-red-100",
  // },
  {
    title: "One-on-ones that work",
    old: "People are still showing up to 1:1s unprepared and disengaged.",
    collie:
      "People are always prepared. They get agenda suggestions based on actual work in progress and previous conversations.",
    image: "/shot-2.png",
    imageClasses: "from-blue-100 to-red-100",
  },
  {
    title: "Better tracking and insights",
    old: "It's hard to know whether people have the right workload or if they are burning out.",
    collie:
      "Now, you have an over-time view of the feedback people are sharing. Now, it is easy to Identify signs of burnout and issues quickly.",
    image: "/shot-3.png",
    imageClasses: "from-green-100 via-red-100 to-orange-100",
  },
];

const FeatureItem = ({
  title,
  content,
  img,
  containerClassName,
  labelClassName,
}: any) => {
  return (
    <Box className={cn("p-8 flex space-x-5 items-center", containerClassName)}>
      <Box className="w-24 h-24 flex items-center justify-center aspect-square relative">
        <Image alt="" src={img} fill className="object-contain" sizes="100px" />
      </Box>
      <Box className="flex-1 space-y-3">
        <Box
          className={cn(
            "text-1 font-semibold  leading-none rounded-full px-4 inline-flex py-2",
            labelClassName
          )}
        >
          {title}
        </Box>
        <Paragraph className="text-1">{content}</Paragraph>
      </Box>
    </Box>
  );
};

const HomepageFeature = ({
  title,
  old,
  collie,
  image,
  imageClasses,
}: {
  title: string;
  old: string;
  collie: string;
  image: string;
  imageClasses: string;
}) => {
  const oldWayRef = useRef(null);

  const inView = useInView(oldWayRef, { margin: "0px 0px -500px 0px" });

  return (
    <motion.div
      className="flex lg:flex-row flex-col items-center"
      ref={oldWayRef}
    >
      <Stack spaceY={2} className="flex-1 order-1 lg:order-1">
        <Box className="max-w-lg mx-auto">
          <Heading
            as="h2"
            className="mb-4 text-center"
            textColor="strong"
            textSize={4}
          >
            <Balancer>{title}</Balancer>
          </Heading>
          <motion.div
            animate={{
              scale: inView ? 0.9 : 1, // Move down by 200px when not in view
            }}
            transition={{ duration: 0.45 }}
          >
            <FeatureItem
              title="The old way"
              img="/collie-sad.png"
              content={old}
              labelClassName="text-text-secondary bg-gray-4"
              containerClassName="bg-gray-2 bord rounded-2xl  mr-auto"
            />
          </motion.div>
          <motion.div
            initial={{
              y: -50,
              opacity: 0,
              boxShadow: "none",
            }}
            animate={{
              y: inView ? -14 : -50,
              opacity: inView ? 1 : 0,
              boxShadow: inView ? "0 2px 20px rgba(61, 170, 191,0.5)" : "none",
            }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl"
          >
            <FeatureItem
              title="The Collie way"
              img="/collie-chill.png"
              content={collie}
              labelClassName="text-primary-8 bg-primary-2"
              containerClassName="bg-white rounded-2xl -mt-2 z-10 relative"
            />
          </motion.div>
        </Box>
      </Stack>

      <Box
        className={cn(
          "justify-center flex-1 aspect-[4/3] bg-gradient-to-br rounded-2xl order-2 lg:order-2 relative overflow-hidden",
          imageClasses
        )}
      >
        <Image
          src={image}
          width={1200}
          height={300}
          alt=""
          className="top-[1px] relative"
        />
      </Box>
    </motion.div>
  );
};

const HomepageFeatures = () => {
  return (
    <Container id={NavigationLinkIds.FEATURES}>
      <Stack spaceY={5} className="text-center py-24">
        <Image
          alt=""
          src="/collie-chill.png"
          className="mx-auto"
          width={120}
          height={120}
        />
        <Stack spaceY={2}>
          <Text textSize={3} textColor="primary" fontWeight="semibold">
            <Balancer>Collie is fast, simple, and delightful</Balancer>
          </Text>
          <Text textSize={2}>Here&apos;s what you get.</Text>
        </Stack>
      </Stack>

      <Stack className="space-y-32">
        {features.map((feature, i) => {
          return <HomepageFeature key={i} {...feature} />;
        })}
      </Stack>
    </Container>
  );
};

export { HomepageFeatures };
