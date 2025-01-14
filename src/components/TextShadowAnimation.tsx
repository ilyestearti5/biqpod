export interface TextShadowAnimationProps {
  content?: string;
  time?: number;
}

export const TextShadowAnimation = ({ content = " " }: TextShadowAnimationProps) => {
  return (
    <span>
      <span>{content}</span>
    </span>
  );
};
