interface propType {
  placeholder: string;
}

export function TextInput({ placeholder }: propType) {
  return (
    <input
      placeholder={placeholder}
      style={{
        padding: 10,
        margin: 10,
        borderColor: "black",
        borderWidth: 1,
      }}
    />
  );
}
