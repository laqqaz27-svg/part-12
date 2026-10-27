// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import Todo from './Todo'

describe('Todo component', () => {
  it('renders an unfinished todo and its action buttons', () => {
    const todo = {
      _id: '1',
      text: 'Learn Docker testing',
      done: false
    }

    render(
      <Todo
        todo={todo}
        deleteTodo={vi.fn()}
        completeTodo={vi.fn()}
      />
    )

    expect(screen.getByText('Learn Docker testing')).toBeInTheDocument()
    expect(screen.getByText('This todo is not done')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Set as done' })
    ).toBeInTheDocument()
  })
})