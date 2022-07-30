import styled from 'styled-components'

export const ContainerSideNav = styled.div<{
  collapsed: boolean
}>`
  display: flex;
  transition: all 0.5s ease;
  margin-right: ${(props) => (props.collapsed ? '96px' : '200px')};

  .pro-sidebar {
    position: fixed;
    width: 200px;
    min-width: 96px !important;
  }

  .pro-sidebar-inner {
    background: #2779f5;
    max-width: 200px;
  }

  .pro-menu-item {
    &:hover {
      .pro-icon-wrapper {
        .pro-icon {
          animation: none !important;
        }
      }
    }
  }

  .pro-menu-item > .pro-inner-item {
    padding: 8px !important;
    color: #f5ebdc;

    &:hover {
      background: gray;
    }

    a {
      color: var(--color-secondary-first-main);
      font-size: var(--font-size-medium);
      font-weight: var(--font-weight-large);
    }
  }

  /* Apply if menu item is active */
  .pro-menu-item.active.displayColapsed > .pro-inner-item,
  .pro-menu-item.active > .pro-inner-item {
    a {
      color: gray;
    }

    &::after {
      position: absolute;
      content: '';
      width: 3px;
      height: 28px;
      right: 0;
      border-radius: var(--border-radius-medium);
      background: gray;
    }
  }

  .pro-menu-item.displayColapsed > .pro-inner-item {
    .pro-icon-wrapper {
      width: 28px;
      min-width: 28px;
      height: 28px;
      line-height: 28px;
      margin-bottom: 10px;
      color: #f5ebdc;
    }

    a {
      text-transform: uppercase;
      font-size: var(--font-size-nano);
    }
  }

  .pro-menu-item.active > .pro-inner-item {
    background-color: white;

    &:hover {
      background-color: none;
    }

    .pro-icon-wrapper {
      svg {
        path {
          fill: gray;
        }
      }
    }
  }

  .pro-menu-item.displayColapsed > .pro-inner-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: var(--font-size-nano);
    padding: 10px;
    color: #f5ebdc;

    .pro-icon-wrapper {
      margin-right: 0;
    }

    a {
      color: var(--color-secondary-first-main);
      font-weight: var(--font-weight-standard);
      font-size: var(--font-size-nano);
    }
  }
`

export const ContainerButtonToogle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
`

export const ButtonToogleSidebar = styled.button`
  background: none;
  cursor: pointer;
  border: none;
`

export const HeaderSidebar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
`
