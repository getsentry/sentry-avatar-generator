import classNames from "classnames";

function AvatarGridOptions<T>({
  values,
  currentValue,
  render,
  setValue,
}: {
  values: T[];
  currentValue: T;
  setValue: (value: T) => void;
  render: (value: T) => React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 bg-white mx-3 p-3 rounded-lg">
      {values.map(function (value, i) {
        const isSelected = value == currentValue;

        return (
          <button onClick={() => setValue(value)} key={i}>
            <div
              className={classNames("w-full aspect-square", {
                "border-gray-400 border-4": !isSelected,
                "border-purple-700 border-4": isSelected,
              })}
            >
              {render(value)}
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default AvatarGridOptions;
