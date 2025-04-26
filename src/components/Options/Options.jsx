import styles from './Options.module.css';

export default function Options({
  updateFunction,
  resetButton,
  resetFunction,
}) {
  return (
    <>
      <button
        onClick={() => {
          updateFunction('good');
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          updateFunction('neutral');
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          updateFunction('bad');
        }}
      >
        Bad
      </button>
      {resetButton && (
        <button onClick={() => resetFunction({ good: 0, neutral: 0, bad: 0 })}>
          Reset
        </button>
      )}
    </>
  );
}
