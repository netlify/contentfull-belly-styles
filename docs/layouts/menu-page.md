# Menu Page

## HTML

```html
<main class="menu-page">
  <h1 class="section-title">Menu</h1>
  <menuitem v-for="item in menuData" :key="item.title" :item="item" />
</main>
```

## CSS

```css
.menu-page {
  margin: 80px;
}

.section-title {
  margin: 0;
  margin-bottom: 30px;
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
}

.section-title::after {
  content: '';
  display: block;
  width: 150px;
  height: 10px;
  margin-top: 20px;
  margin-left: 1px;
  background-color: #c83030;
}
```
