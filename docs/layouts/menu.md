# Menu page

## HTML

```html
  <main class="menu-page">
    <h1 class="section-title">{{ page.title }}</h1>
    <div class="section-intro">
      {{ page.body }}
    </div>
    <MenuItem v-for="item of menu" :key=item.title :item=item />
  </main>
```


## No page-specific CSS