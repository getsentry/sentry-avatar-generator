import classNames from "classnames";
import { CircleBackslashIcon } from "@radix-ui/react-icons";

function AvatarGridOptions<T>({
  values,
  currentValue,
  render,
  setValue,
  allowNullValue = false,
}: {
  values: T[];
  currentValue: T;
  setValue: (value: T | null) => void;
  render: (value: T) => React.ReactNode;
  allowNullValue: boolean;
}) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 bg-white m-3 rounded-lg">
      {values.map(function (value, i) {
        const isSelected = value == currentValue;

        return (
          <button onClick={() => setValue(value)} key={i}>
            <div
              className={classNames("w-full aspect-square relative", {
                "border-gray-400 border-4": !isSelected,
                "border-purple-700 border-4": isSelected,
              })}
            >
              {render(value)}
            </div>
          </button>
        );
      })}
      {allowNullValue && (
        <button onClick={() => setValue(null)}>
          <div
            className={classNames(
              "w-full aspect-square flex justify-center items-center",
              {
                "border-gray-400 border-4": currentValue !== null,
                "border-purple-700 border-4": currentValue === null,
              }
            )}
          >
            <CircleBackslashIcon
              className={classNames("w-14 h-14", {
                "text-gray-400": currentValue !== null,
                "text-primary/80": currentValue === null,
              })}
            />
          </div>
        </button>
      )}
    </div>
  );
}

export default AvatarGridOptions;
