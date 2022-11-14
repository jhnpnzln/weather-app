import { Button } from "react-bootstrap";

export const Buttons = ({ text, styling, handleOnClick, ...props }) => {
  return (
    <Button type="button" className="btn btn-primary" onClick={handleOnClick}>
      {text}
    </Button>
  );
};

export default Buttons;
