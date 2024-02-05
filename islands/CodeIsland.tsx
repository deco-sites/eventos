import { useState } from "preact/hooks";

export interface Props {
  /** @format textarea */
  code: string;
}

const CodeFormatter = ({ code }: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
  };

  return (
    <div class="lg:max-w-6xl lg:mx-auto mx-5 md:mx-10">
      <pre>{code}</pre>
      <button onClick={handleCopyClick}>
        {isCopied ? "Copied!" : "Copy to Clipboard"}
      </button>
    </div>
  );
};

export default CodeFormatter;
