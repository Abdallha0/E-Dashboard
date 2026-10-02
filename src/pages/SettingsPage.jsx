import React from 'react'
import OverviewSec from '../components/overview-sec'

function SettingsPage() {
  return (
    <main className='flex flex-col p-4'>
      <OverviewSec title="Settings" subtitle="Preferences and integrations" description="Theme mode, API credentials, and dashboard preferences are managed here." />
    </main>
  )
}

export default SettingsPage