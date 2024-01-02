const Tweet = ({ text }) => {
  const animationClassName = text.includes('#HappyNewYear')
    ? 'animate-pulse'
    : '';
  const textWithHighlightedHashtag = text.replace(
    /#(\w+)/g,
    '<span class="text-blue-500 font-bold">#$1</span>'
  );
  return (
    <div className="mt-10 flex flex-col items-start gap-2 border-b pb-2 text-xl font-light">
      <div dangerouslySetInnerHTML={{ __html: textWithHighlightedHashtag }} />
      <button
        className={`btn btn-primary rounded bg-blue-700 p-2 text-white ${animationClassName}`}
      >
        Like ❤️
      </button>
    </div>
  );
};

export function App() {
  return (
    <div className="m-20 flex flex-col">
      <h1 className="text-3xl font-bold underline">Minimalist X!</h1>
      <Tweet text="Hey Twitter? Ops, X." />
      <Tweet text="X Happy! #HappyNewYear" />
        <Tweet text="What is going on?" />
        <Tweet text="2024 is going to be amazing! #HappyNewYear" />
    </div>
  );
}
