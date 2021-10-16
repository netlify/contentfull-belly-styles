# Main navigation


## HTML

```html
  <nav>
    <ul class="main-nav-list">
      <li class="nav-item">
        <a href="/" class="nav-item-link">
          <img src="/img/home-icon.svg" />
          <span>Home</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="/menu/" class="nav-item-link">
          <img src="/img/menu-icon.svg" />
          <span>Menu</span>
        </a>
      </li>
    </ul>
  </nav>
```

## CSS

```css
  .nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    list-style-type: none;
    border-top: 1px solid var(--secondary-accent-color)
  }
  .nav-item:last-child {
    border-bottom: 1px solid var(--secondary-accent-color);
  }
  .nav-item-link {
    display: grid;
    justify-items: center;
    grid-template-rows: 40px auto;
    grid-row-gap: 5px;
    font-weight: bold;
    text-decoration: none;
    color: var(--primary-text-color);
  }
```