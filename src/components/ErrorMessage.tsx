import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: '15px',
      border: '1px solid #f44336',
      color: '#f44336',
      backgroundColor: '#ffcdd2',
      borderRadius: '5px',
      padding: '5px'
    }
  })
)

const BarChart = ({ text }: { text: string }) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Typography>{text}</Typography>
    </div>
  )
}

export default BarChart
