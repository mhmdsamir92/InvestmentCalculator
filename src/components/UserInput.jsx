export default function UserInput({ label, ...props }) {
  return (
    <>
      <label>
        {label}
        <input {...props} />
      </label>
    </>
  );
}
