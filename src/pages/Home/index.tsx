import React from 'react'
import {Box, Paper, Switch, Typography} from '@mui/material'
import {useTranslation} from 'react-i18next'

const Home = () => {
  const {t, i18n} = useTranslation()

  return (
    <Box display='flex' alignItems='center' justifyContent='center' sx={{height: '100vh'}}>
      <Paper elevation={0}>
        <Box p={4}>
          <Typography variant='h6'>{t('mui_boilerplate')}</Typography>
          <Box>
            <Switch
              checked={i18n.language !== 'en-US'}
              onChange={(ev: React.ChangeEvent<{checked: boolean}>) =>
                i18n.changeLanguage(ev.target.checked ? 'zh-CN' : 'en-US')
              }
            />
            en/zh
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

export default Home
