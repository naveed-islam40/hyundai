interface LoaderProps {
  isVisible: boolean;
  hig?: string;
}

export default function Loader({ isVisible, hig }: LoaderProps) {
  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 ${
        hig ? hig : "h-[80%]"
      }`}
    >
      <div className="relative flex flex-col items-center">
        <img src="img/loader.svg" alt="Loading" className="" />
      </div>
    </div>
  );
}
