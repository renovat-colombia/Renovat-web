export default function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <svg
        viewBox="0 0 40 34"
        aria-hidden="true"
        className="h-8 w-auto shrink-0 lg:h-9"
      >
        <path
          d="M3 17 20 4l17 13"
          fill="none"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-acero"
        />
        <path
          d="M15 17h4.5v4.5H15zM20.5 17H25v4.5h-4.5zM15 22.5h4.5V27H15zM20.5 22.5H25V27h-4.5z"
          className="fill-white"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-2xl font-extrabold tracking-tight text-white lg:text-[1.65rem]">
          Renova<span className="text-oro">T</span>
        </span>
        <span className="mt-1 text-[0.58rem] font-bold uppercase tracking-[0.52em] text-oro">
          Colombia
        </span>
      </span>
    </span>
  );
}