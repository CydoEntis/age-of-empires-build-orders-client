import React from "react";
import BuildForm from "../features/create-build/BuildForm";
import GridWrapper from "../components/grid/GridWrapper";
import BaseContainer from "../components/layout/BaseContainer";

type Props = {};

function CreateBuildPage({}: Props) {
  return (
    <BaseContainer>
      <BuildForm />
    </BaseContainer>
  );
}

export default CreateBuildPage;
