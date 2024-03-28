const LikeAnimations = {
  NEW_YEAR: {
    hashTags: ['#HappyNewYear', '#HappyNewChineseYear'],
    animationClassName: 'animate-pulse',
  },
  MERRY_CHRISTMAS: {
      hashTags: ['#MerryChristmas'],
    animationClassName: 'font-bold text-red-300',
  },
};

const getAnimationClassNameFromTextOrEmpty = (text) => {
  return (
    Object.values(LikeAnimations).find(({ hashTags }) =>
        hashTags.some(hashTag => text.toLowerCase().includes(hashTag.toLowerCase()))
    )?.animationClassName || ''
  );
};

const Tweet = ({ text }) => {
  const animationClassNameOrEmpty = getAnimationClassNameFromTextOrEmpty(text);
  let a = /#(\w+)/g;
  const b = text.replace(a, '<span class="text-blue-500 font-bold">#$1</span>');
  return (
    <div className="mt-10 flex flex-col items-start gap-2 border-b pb-2 text-xl font-light">
      <div dangerouslySetInnerHTML={{ __html: b }} />
      <button
        className={`btn btn-primary rounded bg-blue-700 p-2 text-white ${animationClassNameOrEmpty}`}
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
      <Tweet text="Hey #MerryChristmas X." />
      <Tweet text="X Happy! #HappyNewYear" />
      <Tweet text="From China! #HappyNewChineseYear" />
      <Tweet text="What is going on?" />
      <Tweet text="2024 is going to be amazing! #HappyNewYear" />
    </div>
  );
}
