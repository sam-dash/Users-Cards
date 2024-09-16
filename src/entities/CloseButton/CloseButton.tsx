interface ClouseButtonProps {
  setAddUserToggle: (value: boolean) => void;
  className: string;
}

export const CloseButton = ({
  setAddUserToggle,
  className,
}: ClouseButtonProps) => {
  return (
    <button onClick={() => setAddUserToggle(false)} className={className}>
      <img src="/public/image/icons/clouseBtn.png" />
    </button>
  );
};
