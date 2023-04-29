import React, { useEffect } from "react";
import BuildForm from "../features/create-build/BuildForm";
import GridWrapper from "../components/grid/GridWrapper";
import BaseContainer from "../components/layout/BaseContainer";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getBuildById } from "../store/slices/buildSlice";
import { useParams } from "react-router-dom";

type Props = {};

function EditBuildPage({}: Props) {
  const dispatch = useAppDispatch();
  const build = useAppSelector((state) => state.builds.build);
  const { buildId } = useParams();

  useEffect(() => {
    dispatch(getBuildById(Number(buildId!)));
  }, []);
  return (
    <BaseContainer>{build && <BuildForm build={build!} edit />}</BaseContainer>
  );
}

export default EditBuildPage;
