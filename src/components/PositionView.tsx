import React from "react";
import { positionsHooks } from "@/data/system/positions.model";
import { useCopyState } from "@/hooks";
//
export interface PositionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  readonly positionId: string;
  onElement?(element: HTMLElement): void;
}
export interface ChangableComponentProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onContentChange?: (rect: DOMRect) => any;
  onElement?(element: HTMLElement): void;
}
/**
 *
 * For Local State
 */
export const ChangableComponent = ({ onContentChange, onElement, ...props }: ChangableComponentProps) => {
  // element ref
  const elementRef = React.createRef<HTMLDivElement>();
  const state = useCopyState<DOMRect | null>(null);
  // set positions if element resized
  React.useEffect(() => {
    const element = elementRef.current;
    if (element) {
      onElement?.(element);
      const callback = () => {
        const rect = element.getBoundingClientRect();
        state.set(rect);
      };
      const rObs = new ResizeObserver(callback);
      const mObs = new MutationObserver(callback);
      const iObs = new IntersectionObserver(callback);
      rObs.observe(element, { box: "border-box" });
      rObs.observe(element, { box: "content-box" });
      rObs.observe(element, { box: "device-pixel-content-box" });
      mObs.observe(element, { attributes: true, subtree: true, characterData: true, childList: true });
      iObs.observe(element);
      addEventListener("resize", callback);
      return () => {
        rObs.disconnect();
        mObs.disconnect();
        iObs.disconnect();
        removeEventListener("resize", callback);
      };
    }
  }, [elementRef.current]);
  React.useEffect(() => {
    state.get && onContentChange?.(state.get);
  }, [state.get]);
  return <div ref={elementRef} {...props} />;
};
/**
 *
 * for redux state Global
 */
export const PositionView = ({ positionId, onElement, ...props }: PositionProps) => {
  // get init positions
  const positionConfig = positionsHooks.getOne(positionId);
  // init the position view
  React.useEffect(() => {
    if (positionConfig) {
      return;
    }
    positionsHooks.upsert([
      {
        positionId,
      },
    ]);
  }, [positionConfig]);
  // set positions if element resized
  return (
    <ChangableComponent
      onContentChange={({ bottom, height, left, right, top, width, x, y }: DOMRect) => {
        const config = { bottom, height, left, right, top, width, x, y };
        positionsHooks.setOne(positionId, config);
      }}
      onElement={onElement}
      {...props}
    />
  );
};
