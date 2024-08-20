import classes from "./avatar-color-options.module.css";
import { SliderPicker } from "react-color";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import classNames from "classnames";

function AvatarColorOptions({
  colors,
  currentColor,
  setColor,
}: {
  colors: string[];
  currentColor: string;
  setColor: (value: string) => void;
}) {
  const isCustomColorSelected = !colors.includes(currentColor);

  return (
    <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 bg-white mx-3 p-3 rounded-lg">
      {colors.map(function (color, i) {
        const isSelected = color === currentColor;

        return (
          <button onClick={() => setColor(color)} key={i}>
            <div
              className={classNames("w-full aspect-square", {
                "border-purple-700 border-4": isSelected,
              })}
              style={{ backgroundColor: color }}
            ></div>
          </button>
        );
      })}
      <Popover>
        <PopoverTrigger>
          <div
            className={classNames(
              classes.colorPicker,
              "w-full aspect-square rounded",
              { "border-purple-700 border-4": isCustomColorSelected }
            )}
          ></div>
        </PopoverTrigger>
        <PopoverContent>
          <SliderPicker
            className="w-full"
            color={currentColor}
            onChange={(color) => setColor(color.hex)}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default AvatarColorOptions;
