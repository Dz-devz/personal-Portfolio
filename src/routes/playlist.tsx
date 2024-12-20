import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/playlist')({
  component: Playlist,
})

function Playlist() {
  return <div>Playlist Page</div>
}