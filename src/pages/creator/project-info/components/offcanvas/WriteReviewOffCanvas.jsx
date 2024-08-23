import { useState } from "react";
import useInput from "react-lite-input";
import { Offcanvas } from "react-bootstrap";
import LabelTextarea from "../../../../../components/ui/textareas/LabelTextarea";
import MediumSolidButton from "../../../../../components/ui/buttons/MediumSolidButton";
import Checkbox from "../../../../../components/ui/inputs/Checkbox";
import FilledStar from "../../../../../assets/icons/filled-star.svg";
import EmptyStart from "../../../../../assets/icons/outline-star.svg";
import ReactStars from "react-rating-star-with-type";

const WriteReviewOffCanvas = ({ show, handleClose, handleSendReviewToggled }) => {
  const [rating, setRating] = useState(0);

  const [agreeChecked, setAgreeChecked] = useState(false);

  const initialValue = {
    reviews: "",
  };

  const { values, handleLiteChange } = useInput(initialValue);

  const handleSave = () => {
    // handleClose();
    handleSendReviewToggled()
    console.log(values.reviews, rating, agreeChecked);
    // clearState();
  };

  const clearState = () => {
    values.reviews = "";
    setRating(0);
    setAgreeChecked(false);
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleAgreeChecked = () => {
    setAgreeChecked(!agreeChecked);
  };

  const offCanvasStyles = {
    backgroundColor: "#21232F",
  };
  const btnStyles = {
    marginTop: "0rem",
    width: "6rem",
  };

  return (
    <Offcanvas
      placement="end"
      style={offCanvasStyles}
      show={show}
      onHide={handleClose}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <h5 className="useAppWhite mb-0">Write Reviews</h5>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="d-flex flex-column gap-5">
          <LabelTextarea
            name="reviews"
            label="Reviews"
            value={values.reviews}
            onChange={handleLiteChange}
            id="reviews"
            placeholder="Write review here"
            rows={3}
          />
          <div className="d-flex flex-column gap-2">
            <p className="normalPTag fs-5 fw-medium mb-0">Rating</p>
            <ReactStars
              count={5}
              emptyIcon={<EmptyStart />}
              filledIcon={<FilledStar />}
              value={rating}
              isEdit={true}
              onChange={handleRating}
            />
            <Checkbox
              label={
                <span className="normalPTag fs-5 fw-medium">
                  By checking this box it means you are willing to release funds
                  to Oluwasegun
                </span>
              }
              type="checkbox"
              name="agreeChecked"
              checked={agreeChecked}
              onChange={handleAgreeChecked}
              className="d-flex gap-3 align-items-center ms-0"
            />
          </div>
          <MediumSolidButton
            disabled={!agreeChecked}
            type="button"
            text="Save"
            style={btnStyles}
            onClick={handleSave}
          />
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default WriteReviewOffCanvas;
