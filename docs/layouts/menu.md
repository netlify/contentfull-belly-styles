# Menu page

## HTML

```html
  <main>
    <h1 class="section-title">{{ page.title }}</h1>
    <div class="section-intro" v-html=markdown(page.description)></div>
    <MenuItem v-for="item of menu" :key=item.title :item=item />
  </main>
```

## CSS

No page-specific CSS