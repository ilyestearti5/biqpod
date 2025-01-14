import { useColorMerge } from "@/hooks";
import { tw } from "@/utils";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { JoinComponentBy } from "./JoinComponentBy";
import { faApple } from "@fortawesome/free-brands-svg-icons";

import { Translate } from "./Translate";
import { ReactElement } from "@/types";
export interface KeyPandingProps extends ReactElement<HTMLSpanElement> {
  shortcut: string | string[];
}
export interface SinglePandingProps {
  content: string;
}
export function SinglePanding({ content }: SinglePandingProps) {
  const colorMerge = useColorMerge();
  const isMac = /mac/gi.test(navigator.platform);
  const styles = {
    ...colorMerge({
      backgroundColor: "gray.opacity",
      borderColor: "gray.opacity.2",
    }),
  };
  return (
    <div style={styles} className={tw(`border-x px-1 border-t border-transparent border-b-4 border-solid rounded-[4px] capitalize`)}>
      {/control/gi.test(content) && (isMac ? <FontAwesomeIcon icon={faApple} /> : "ctrl")}
      {/shift/gi.test(content) && (isMac ? <FontAwesomeIcon icon={faAngleUp} /> : "shift")}
      {[/control/gi, /shift/gi].every((s) => !s.test(content)) && content}
    </div>
  );
}
export function KeyPanding({ shortcut = [], className, ...props }: KeyPandingProps) {
  const list = typeof shortcut == "string" ? [shortcut] : shortcut;
  return (
    <span {...props} className={tw(`items-center gap-x-2 mx-1 truncate capitalize`, className)}>
      <JoinComponentBy
        list={list.map((short, i) => {
          const ary = short.split("+");
          return (
            <span className="inline-flex items-center gap-x-[1px]" key={i}>
              <JoinComponentBy
                list={ary.map((string, j) => (
                  <SinglePanding key={j} content={string} />
                ))}
                joinComponent={<span>+</span>}
              />
            </span>
          );
        })}
        joinComponent={
          <span className="mx-1">
            <Translate content="or" />
          </span>
        }
      />
    </span>
  );
}
