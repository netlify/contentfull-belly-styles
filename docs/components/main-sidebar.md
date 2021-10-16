# Main Sidebar

## HTML

```html
  <aside class="sidebar">
    <header>
      <a href="/" class="logo-home" title="Restaurant info and reviews">
        <img src="~/assets/img/logo.svg" />
      </a>
      <MainNav />
    </header>
  </aside>
```

## CSS

```css
  .sidebar {
    background-color:#fff;
    border-right: solid 1px var(--secondary-accent-color);
  }

  .logo-home {
    display:block;
    background-color: #000;
    text-align: center;
  }

  @media (min-width: 800px) {
    .sidebar {
      width: 35%;
      max-width: 400px;
      min-height: 100vh;
    }
    header {
      position: sticky;
      top:0;
    }
  }
```
