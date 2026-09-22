import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/content/navigation/')({
  beforeLoad: () => {
    throw redirect({ to: '/content/navigation/link' })
  },
})
