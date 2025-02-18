'use client'

import * as ChannelService from '@channel.io/channel-web-sdk-loader'
import { useEffect } from 'react'

export default function ChannelTalk() {
  useEffect(() => {
    ChannelService.loadScript()
    ChannelService.boot({
      pluginKey: process.env.NEXT_PUBLIC_CHANNEL_PLUGIN_KEY!
    })
  }, [])
  return <div />
}
