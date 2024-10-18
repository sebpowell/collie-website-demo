import { TemplateInfo } from "@/packages/templates/legal";
import { Document } from "@contentful/rich-text-types";

export const ManifestoPage = ({
  content,
}: {
  content: Document | undefined;
}) => {
  return (
    <TemplateInfo.Page title="Manifesto" content={content} image="scroll" />
  );
};
