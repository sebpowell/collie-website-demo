import { TemplateInfo } from "@/packages/templates/legal";
import { Document } from "@contentful/rich-text-types";

export const PrivacyPage = ({
  content,
  lastUpdated,
}: {
  content: Document | undefined;
  lastUpdated: string | undefined;
}) => {
  return (
    <TemplateInfo.Page
      title="Privacy Policy"
      content={content}
      image="scroll"
      subheading={<TemplateInfo.LastUpdated lastUpdated={lastUpdated} />}
    />
  );
};
