import styled from 'styled-components'

export const Container = styled.label``

export const Label = styled.p`
  padding: 0 0 4px 8px;
  color: var(--color-neutral-500);
  font-family: var(--font-system-primary);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-standard);
  letter-spacing: 0em;
  text-align: left;
`

export const InputDefault = styled.input`
  height: 48px;
  width: 100%;
  padding: 14px 12px;
  border-radius: var(--border-radius-small);
  border: 1px solid var(--color-neutral-500);

  overflow: hidden;
  text-overflow: ellipsis;

  font-size: var(--font-size-medium);

  &:hover::placeholder {
    color: var(--color-neutral-500);
  }

  &:hover {
    border-color: var(--color-neutral-black);
  }

  &::placeholder {
    color: var(--color-neutral-400);
  }

  &:focus {
    border: var(--border-width-small) solid var(--color-neutral-black);
  }
`

export const Error = styled.div`
  color: var(--color-primary-first-light);
  margin: 5px 0 0 5px;
`
