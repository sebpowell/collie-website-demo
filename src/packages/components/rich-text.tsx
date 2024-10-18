import { Box } from "@/packages/components/box";
import { Heading } from "@/packages/components/heading";
import { Paragraph } from "@/packages/components/paragraph";
import {
  Options,
  documentToReactComponents,
} from "@contentful/rich-text-react-renderer";
import {
  BLOCKS,
  INLINES,
  Block,
  Document,
  Inline,
} from "@contentful/rich-text-types";

function isExternalURL(url: string) {
  try {
    const urlObj = new URL(url);
    return urlObj.host !== window.location.host;
  } catch (e) {
    return false;
  }
}

export const RichTextConfigBase: Options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node: Block | Inline, children) => {
      const isExternal = isExternalURL(node.data.uri);

      return (
        <Box
          as="a"
          target={isExternal ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="underline underline-offset-4"
          href={node.data.uri}
          textColor="brandPrimary"
        >
          {children}
        </Box>
      );
    },
    [BLOCKS.HEADING_2]: (node: Block | Inline, children) => {
      return (
        <Heading
          as="h2"
          className="mb-2 mt-12"
          textColor="primary"
          textSize={3}
        >
          {children}
        </Heading>
      );
    },
    [BLOCKS.HEADING_3]: (node: Block | Inline, children) => {
      return (
        <Heading
          as="h3"
          className="mb-2 mt-12"
          textColor="primary"
          textSize={2}
        >
          {children}
        </Heading>
      );
    },
    [BLOCKS.PARAGRAPH]: (node: Block | Inline, children) => {
      return (
        <Paragraph className="mb-6 last-of-type:mb-0" textSize={2}>
          {children}
        </Paragraph>
      );
    },
    [BLOCKS.UL_LIST]: (node: Block | Inline, children) => {
      return (
        <Box as="ul" className="list-disc">
          {children}
        </Box>
      );
    },
  },
};

export type IRichTextProps = {
  content: Document | undefined;
  options?: Options | undefined;
};

export const RichText = (props: IRichTextProps) => {
  const {
    content = { nodeType: BLOCKS.DOCUMENT, content: [], data: [] },
    options = RichTextConfigBase,
  } = props;

  return <Box>{documentToReactComponents(content, options)}</Box>;
};
