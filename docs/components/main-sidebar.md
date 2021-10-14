## Main Sidebar

```html
<aside class="sidebar">
  <a href="/">
    <img src="/logo.svg" alt="" />
  </a>
  <MainNav />
  <footer class="main-footer">
    <p class="main-footer-text">
      Repo:
      <a href="https://github.com/bencodezen/demo-restaurant-vue3-ts-contentful"
        >GitHub</a
      >
    </p>
    <p class="main-footer-text">
      Built with <a href="https://v3.vuejs.org">Vue 3</a> and
      <a href="https://www.netlify.com">Netlify</a>
    </p>
  </footer>
</aside>
```

## CSS

```css
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  display: grid;
  align-items: center;
  grid-template-rows: 200px 1fr 75px;
  border-right: 1px solid #222;
}

.main-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: end;
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

.main-footer-text {
  margin: 0;
}

.main-footer-text:first-child {
  margin-bottom: 0.5rem;
}
```
