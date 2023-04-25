import React from 'react'
import BuildForm from '../features/create-build/BuildForm'
import GridWrapper from '../components/grid/GridWrapper'

type Props = {}

function CreateBuild({}: Props) {
  return (
    <GridWrapper spacing={5} justifyContent='center'>
        <BuildForm />
    </GridWrapper>
  )
}

export default CreateBuild