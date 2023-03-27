import Grid from '@mui/material/Grid'
import React from 'react'

type Props = {}

function AuthImage({}: Props) {
  return (
    <Grid
    item
    md={6}
    sx={{
      background: "url(https://static.vecteezy.com/system/resources/previews/002/859/091/original/world-map-background-in-navy-blue-and-gold-free-vector.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
  ></Grid>
  )
}

export default AuthImage