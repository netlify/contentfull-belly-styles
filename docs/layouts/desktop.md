# Base layout and global styles

## HTML

```html
<div class="home-grid">
  <MainSidebar />
  <MenuPage />
</div>
```



```css

  * {
    margin:0;
    padding:0;
  }

  :root {
    --sansSerif: "Quicksand", "Segoe UI", Candara, "DejaVu Sans", "Bitstream Vera Sans", "Trebuchet MS", Verdana, "Verdana Ref", sans-serif;

    --primary-text-color: #333;
    --secondary-text-color: #555555;
    --primary-page-color: #f4f3f0;
    --accent-color: #fa33ab;
    --accent-color-faint: #fa33ab88;
    --accent-color-alternate: #00d9ff;
  }

  body {
    font-family: var(--sansSerif);
    color: var(--primary-text-color);
    background-color: var(--primary-page-color);
    font-size: 16px;
  }

  @media (min-width: 500px) {
    body {
      font-size: 18px;
    }
  }

  main {
    margin: 80px;
  }


  .home-grid {
    margin-left: 200px;
  }

  .section-title {
    margin: 0;
    font-size: 3.5em;
    margin-bottom: 4rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  .section-title::after {
    content: '';
    display: block;
    width: 150px;
    height: 10px;
    margin-top: 0.2em;
    margin-left: 1px;
    background-color: #c83030;
  }

  .section-intro {
    margin-bottom: 6rem;
  }

```
