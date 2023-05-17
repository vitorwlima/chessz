'use client'

import { useGameState } from '@/hooks/useGameState'
import { useRef } from 'react'

export default function Home() {
  const { emitEvent } = useGameState()
  const roomIdInputRef = useRef<HTMLInputElement>(null)
  const nameInputRef = useRef<HTMLInputElement>(null)

  const handleCreateRoom = async () => {
    const data = { name: nameInputRef.current!.value }
    emitEvent('create-room', data)
  }

  const handleJoinRoom = async () => {
    const data = {
      roomId: roomIdInputRef.current!.value,
      name: nameInputRef.current!.value,
    }
    emitEvent('join-room', data)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Chess</h1>
      <button onClick={() => handleCreateRoom()}>Create room</button>
      <button onClick={() => handleJoinRoom()}>Join room</button>
      <div>
        <span>room-id</span>
        <input ref={roomIdInputRef} name="room-id" />
      </div>
      <div>
        <span>name</span>
        <input ref={nameInputRef} name="name" />
      </div>
    </main>
  )
}
