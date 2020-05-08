import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, CircularProgress, Divider } from '@material-ui/core'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

import { getDataRequest } from '../../lib/requests'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'center',
      height: '100vh'
    },
    loading: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
)

const Admin = () => {
  const classes = useStyles()

  const [loading, setLoading] = useState(true)

  const adminCookie = document.cookie.replace(
    /(?:(?:^|.*;\s*)tmp-admin-cookie\s*=\s*([^;]*).*$)|^.*$/,
    '$1'
  )

  useEffect(() => {
    const getData = async () => {
      const data = await getDataRequest()
      setLoading(false)
    }
    
    if (adminCookie !== '3eca4bc9-fa7a-427a-9639-3e674cf51178') {
      window.location.href = '/'
    } else {
      getData()
    }
  }, [])

  return (
    <div className={classes.container}>
      {loading ? (
        <div className={classes.loading}>
          <CircularProgress size={75} />
        </div>
      ) : (
        <div>
          <p>Revenue (Active Subscriptions) [Stripe]</p>
          <Divider />
          <p>Bank Statement [Chase]</p>
          <p>CC Statement [Chase]</p>
          <Divider />
          <p>Active App users [Segment]</p>
          <p>Active Web Users [Segment]</p>
          <Divider />
          <p>App downloads [Google Play]</p>
          <p>App downloads [Apple]</p>
          <Divider />
          <p># providers [DB]</p>
          <p># of user accounts [DB]</p>
          <p># Thoughts [DB]</p>
          <p># Surveys [DB]</p>
          <Divider />
          <p>TMP website traffic per day [GCP]</p>
          <Divider />
          <p>AWS calls per day [AWS]</p>
        </div>
      )}
    </div>
  )
}

export default Admin
