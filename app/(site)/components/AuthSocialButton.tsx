import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({ 
  icon: Icon,
  onClick,
}) => {
  return ( 
    <button
      type="button"
      onClick={onClick}
      className="
        inline-flex
        w-full 
        justify-center 
        rounded-md 
        bg-white 
        px-4 
        py-2 
        text-gray-500 
        hover:text-sky-500
        shadow-sm 
        ring-1 
        ring-inset 
        duration-500
        ring-gray-300 
        hover:ring-sky-500
        hover:bg-gray-50 
        focus:outline-offset-0
      "
    >
      <Icon />
    </button>
   );
}
 
export default AuthSocialButton;
