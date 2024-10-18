import { Box } from "@/packages/components/box";
import { Container } from "@/packages/components/container";
import { Divider } from "@/packages/components/divider";
import { Heading } from "@/packages/components/heading";
import { Paragraph } from "@/packages/components/paragraph";
import { RichText } from "@/packages/components/rich-text";
import { Stack } from "@/packages/components/stack";
import { getImage, images } from "@/packages/utils/images";
import { Document } from "@contentful/rich-text-types";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import { ReactNode } from "react";

const TemplateInfo = {
  LastUpdated: ({ lastUpdated }: { lastUpdated: string | undefined }) => {
    return lastUpdated ? (
      <Paragraph textSize={2}>Last updated {format(parseISO(lastUpdated), "dd MMM yyyy")}</Paragraph>
    ) : (
      <></>
    );
  },

  Page: ({
    title,
    subheading,
    content,
    image,
  }: {
    title: string;
    content: Document | undefined;
    subheading?: ReactNode;
    image: keyof typeof images;
  }) => {
    return (
      <Container>
        <Box className="pt-32 mx-auto" maxWidth="longForm">
          <Stack spaceY={10}>
            <Stack as="header" className="text-center" spaceY={2}>
              <Image
                width={120}
                height={120}
                src={getImage(image)}
                className="mx-auto"
                alt=""
              />
              <Heading as="h1" textSize={5} textColor="primary">
                {title}
              </Heading>
              {subheading && <>{subheading}</>}
            </Stack>
            <Divider gradient="center" />
            <RichText content={content} />
          </Stack>
        </Box>
      </Container>
    );
  },
};

export { TemplateInfo };
