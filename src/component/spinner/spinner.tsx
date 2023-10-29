import { SpinnerProps } from "./spinner.interface";
import "./spinner.style.css";
const Spinner: React.FC<SpinnerProps> = (props: SpinnerProps) => {
  return (
    <>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Spinner;
