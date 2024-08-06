import { useState } from "react";
import { Container, Col, Button } from "react-bootstrap";
import PureSelect from "../../../../../components/ui/selects/PureSelect";
import InputField from "../../../../../components/ui/inputs/InputField";
import CancelTalent from "../../../../../assets/icons/cancle-talent.svg";

const SelectTalents = ({ onUpdateTalents }) => {
  const [talentEntries, setTalentEntries] = useState([
    { talent: "", budget: "$" },
  ]);

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

  const selectTalents = [
    { value: "", label: "Select Role" },
    { value: "frontend developer", label: "Frontend Developer" },
    { value: "backend developer", label: "Backend Developer" },
    { value: "product designer", label: "Product Designer" },
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
              Invite your team or hire directly from the Buidl Job Marketplace —
              it's your choice
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
          </div>
        </div>
      </Col>
    </Container>
  );
};

export default SelectTalents;
