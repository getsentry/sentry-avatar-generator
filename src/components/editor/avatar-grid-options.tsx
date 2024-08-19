function AvatarGridOptions<T>({
  values,
  render,
  setValue,
}: {
  values: T[];
  setValue: (value: T) => void;
  render: (value: T) => React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
      {values.map(function (value) {
        return (
          <button onClick={() => setValue(value)}>
            <div className="bg-slate-900 rounded">{render(value)}</div>
          </button>
        );
      })}
    </div>
  );
}

export default AvatarGridOptions;
