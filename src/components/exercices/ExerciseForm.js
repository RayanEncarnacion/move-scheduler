import { Fragment } from "react";
import ExercisesFormButtons from "./ExercisesFormButtons";
import Form from "./StyledForm";
import ExerciseFormLogic from "./ExerciseFormLogic";

const ExerciseForm = () => {
  const { submitHandler, hideForm, refs, formIsShown, type, changeType } =
    ExerciseFormLogic();

  return (
    <Fragment>
      {formIsShown && (
        <Form onSubmit={submitHandler}>
          <div>
            <label>Type</label>
            <select
              onChange={changeType}
              defaultValue={type}
              ref={refs.typeRef}
            >
              <option value="Running">Running</option>
              <option value="Cycling">Cycling</option>
            </select>
          </div>

          <div>
            <label>Day</label>
            <input required={true} ref={refs.dateRef} type="datetime-local" />
          </div>

          <div>
            <label>Distance</label>
            <input
              required={true}
              ref={refs.distanceRef}
              type="number"
              min="1"
              placeholder="km"
              name="distance"
            />
          </div>
          <div>
            <label>Duration</label>
            <input
              required={true}
              ref={refs.durationRef}
              type="number"
              min="1"
              placeholder="min"
              name="min"
            />
          </div>
          <div>
            <label>{type === "Running" ? "Cadence" : "Elev Gain"}</label>
            <input
              required={true}
              ref={refs.cadenceRef}
              type="number"
              min="1"
              placeholder={type === "Running" ? "step/min" : "meters"}
              name="step/min"
            />
          </div>
          <ExercisesFormButtons onCancel={hideForm} />
        </Form>
      )}
    </Fragment>
  );
};

export default ExerciseForm;
