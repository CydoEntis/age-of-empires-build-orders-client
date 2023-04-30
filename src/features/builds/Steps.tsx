import { TableContainer, Table } from "@mui/material";
import StepTableHead from "../../components/table/StepTableHead";
import StepTableBody from "../../components/table/StepTableBody";
import StepTableRow from "../../components/table/StepTableRow";
import { Step } from "../../store/slices/buildSlice";

type Props = {
  steps: Step[];
  deleteStep?: (id: number) => void;
  isPreview?: boolean;
};

function Steps({ isPreview, steps, deleteStep }: Props) {
  return (
    <TableContainer sx={{marginTop: 5, scrollMarginBottom: 5}}>
      <Table>
        <StepTableHead isPreview={isPreview} />
        <StepTableBody>
          {steps.map((step) => (
            <StepTableRow
              id={step.id}
              key={step.id}
              villagers={step.villagers}
              food={step.food}
              wood={step.wood}
              gold={step.gold}
              stone={step.stone}
              step={step.step}
              isPreview={isPreview}
              deleteStep={deleteStep}
            />
          ))}
        </StepTableBody>
      </Table>
    </TableContainer>
  );
}

export default Steps;
