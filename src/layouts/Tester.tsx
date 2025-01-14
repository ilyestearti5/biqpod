import { allIcons } from "@/apis";
import { BlurOverlay, Card, CircleTip, Line, Translate } from "@/components";
import { visibilityTemp } from "@/hooks";
import { ReactElement } from "@/types";
export interface Tester {
  children?: ReactElement["children"];
}
export const Tester = (props: Tester) => {
  const visibility = visibilityTemp.getTemp<boolean>("test");
  return (
    <BlurOverlay hidden={!visibility}>
      <Card>
        <div className="flex justify-between items-center p-3">
          <h1 className="text-3xl">
            <Translate content="Test View" />
          </h1>
          <CircleTip
            icon={allIcons.solid.faXmark}
            onClick={() => {
              visibilityTemp.setTemp("test", false);
            }}
          />
        </div>
        <Line />
        <div className="p-3">{props.children || "No Content Ther Is"}</div>
      </Card>
    </BlurOverlay>
  );
};
