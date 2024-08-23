import { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import PureSelect from "../../../../components/ui/selects/PureSelect";
import InputField from "../../../../components/ui/inputs/InputField";
import CancelTalent from "../../../../assets/icons/cancle-talent.svg";
import MediumOutlineButton from "../../../../components/ui/buttons/MediumOutlineButton";
import MediumSolidButton from "../../../../components/ui/buttons/MediumSolidButton";

const SelectTalents = ({
  onUpdateTalents,
  onPrev,
  onNext,
  talentBudgets,
  handleCreateProject,
}) => {
  const [talentEntries, setTalentEntries] = useState([
    { talent: "", budget: "$" },
  ]);

  // Ensure the state persists when coming back to this step
  useEffect(() => {
    if (talentBudgets.length > 0) {
      setTalentEntries(talentBudgets);
    }
  }, [talentBudgets]);

  const handleTalentsChange = (index, value) => {
    const newTalentEntries = [...talentEntries];
    newTalentEntries[index].talent = value;
    setTalentEntries(newTalentEntries);
    onUpdateTalents(newTalentEntries);
  };

  const handleBudgetChange = (index, value) => {
    const newTalentEntries = [...talentEntries];
    newTalentEntries[index].budget = `$${value.replace(/[^0-9.]/g, "")}`;
    setTalentEntries(newTalentEntries);
    onUpdateTalents(newTalentEntries);
  };

  const addTalentEntry = () => {
    setTalentEntries([...talentEntries, { talent: "", budget: "$" }]);
  };

  const removeTalentEntry = (index) => {
    if (talentEntries.length > 1) {
      const newTalentEntries = talentEntries.filter((_, i) => i !== index);
      setTalentEntries(newTalentEntries);
      onUpdateTalents(newTalentEntries);
    }
  };

  // Validation function for enabling the Proceed button
  const canProceed = talentEntries.every(
    (entry) => entry.talent && entry.budget !== "$"
  );

  const selectTalents = [
    { value: "", label: "Select Role" },
    { value: "Frontend Developer", label: "Frontend Developer" },
    { value: "Backend Developer", label: "Backend Developer" },
    { value: "Product Designer", label: "Product Designer" },
  ];

  const bodyStyles = {
    paddingBottom: "5rem",
  };
  const colStyles = {
    background: "#272A38",
    padding: "1rem",
    paddingBottom: "10rem",
    borderRadius: "14px",
  };

  return (
    <Container style={bodyStyles}>
      <Col style={colStyles}>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div style={{ width: "100%" }} className="centerForm">
            <h2 className="strongH2Tag">Select Talents</h2>
            <p className="normalPTag">
              Select your preferred option to move forward
            </p>
            {talentEntries.map((entry, index) => (
              <div key={index} className="w-100 pt-3">
                <div className="d-flex align-items-center gap-3">
                  <PureSelect
                    id={`talents-${index}`}
                    name="talents"
                    options={selectTalents}
                    value={entry.talent}
                    onChange={(e) => handleTalentsChange(index, e.target.value)}
                  />
                  <InputField
                    id={`budget-${index}`}
                    name="budget"
                    type="text"
                    required={true}
                    value={entry.budget}
                    onChange={(e) => handleBudgetChange(index, e.target.value)}
                  />
                  {talentEntries.length > 1 && (
                    <div
                      onClick={() => removeTalentEntry(index)}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <CancelTalent />
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div className="w-100 pt-2">
              <span
                className="normalPTag fw-semibold"
                style={{
                  cursor: "pointer",
                }}
                onClick={addTalentEntry}
              >
                Add more talents
              </span>
            </div>
            <div className="pt-5 d-flex gap-2">
              <MediumOutlineButton
                type="button"
                text="Previous"
                style={{
                  marginTop: "0rem",
                  width: "6rem",
                }}
                onClick={onPrev}
              />
              <MediumSolidButton
                disabled={!canProceed}
                type="button"
                text="Proceed"
                style={{
                  marginTop: "0rem",
                  width: "6rem",
                }}
                onClick={onNext}
              />
            </div>
          </div>
        </div>
      </Col>
    </Container>
  );
};

export default SelectTalents;
