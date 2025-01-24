import React from "react";
import { closeApplications, useColorMerge, useTemp, viewTemps } from "@/hooks";
import { Card, CircleTip, ClickedView, DownOverlay, Line, Scroll, Translate } from "@/components";
import { allIcons, getMainCloud } from "@/apis";
import { ProjectConfig } from "@/types";
// Example usage
export const ApplicationsLayout = () => {
  const visibility = viewTemps.getTemp("applications");
  const apps = useTemp<ProjectConfig[]>("list.applications");
  React.useEffect(() => {
    return getMainCloud()?.app.nosql.onCollectionSnapshot<ProjectConfig>("projects", (props) => {
      apps.set(
        props.map(({ id, data }) => {
          return {
            label: data.label,
            imageUrl: data.imageUrl,
            id: id,
          };
        }),
      );
    });
  }, []);
  const colorMerge = useColorMerge();
  return (
    <DownOverlay hidden={!visibility}>
      <Card className="w-[90vw] max-h-[90vh]">
        <div className="flex justify-between items-center p-2">
          <h1 className="text-3xl capitalize">Biq Pod applications</h1>
          <span>
            <CircleTip
              icon={allIcons.solid.faXmark}
              onClick={() => {
                closeApplications();
              }}
            />
          </span>
        </div>
        <Line />
        <Scroll>
          <div className="flex flex-wrap justify-center gap-2 p-2">
            {apps.get && !apps.get.length && <Translate content="no project's detected" />}
            {apps.get?.map(({ label, imageUrl }, index) => {
              return (
                <a className="inline-block max-md:w-full" target="_blank" key={index} rel="noreferrer">
                  <Card className="w-full overflow-hidden">
                    <ClickedView className="flex max-md:flex-row flex-col max-md:items-center w-full">
                      <div className="flex justify-center items-center p-3">
                        <div
                          className="flex justify-center items-center border border-transparent border-solid rounded-full w-[100px] h-[100px] overflow-hidden"
                          style={{
                            ...colorMerge("primary.background", {
                              borderColor: "borders",
                            }),
                          }}
                        >
                          <img loading="lazy" src={imageUrl ?? undefined} className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <span className="max-md:hidden">
                        <Line />
                      </span>
                      <div className="p-3">
                        <p className="text-center text-xl max-md:text-md">{label}</p>
                      </div>
                    </ClickedView>
                  </Card>
                </a>
              );
            })}
          </div>
        </Scroll>
      </Card>
    </DownOverlay>
  );
};
