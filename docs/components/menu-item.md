# Menu Item

## HTML

```html
<section class="menu-item">
  <div class="menu-item-header">
    <h2 class="menu-item-title">{{ props.item.title }}</h2>
    <span class="menu-item-price">{{ priceLabel }}</span>
    <ul class="menu-item-diet">
      <li
        v-for="diet in visibleDietaryIcons"
        :key="`${props.item.title}-${diet}`"
      >
        <DietIcon :type="diet" />
      </li>
    </ul>
  </div>
  <p class="menu-item-description">{{ props.item.description }}</p>
</section>
```

## CSS

```css
.menu-item {
  margin-bottom: 20px;
}

.menu-item-description {
  margin: 0;
}

.menu-item-diet {
  display: flex;
  margin: 0;
  padding: 0;
}

.menu-item-diet li {
  margin-left: 10px;
  list-style-type: none;
}

.menu-item-diet li:first-child {
  margin-left: 15px;
}

.menu-item-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.menu-item-price {
  margin-left: 15px;
  font-size: 18px;
}

.menu-item-title {
  margin: 0;
  font-size: 20px;
}
```

## JS

```js
import { computed } from 'vue'
import DietIcon from './DietIcon.vue'

interface MenuItem {
  category: string[]
  currency: string
  description: string
  title: string
  price: number
  dietary: object
}

const props = defineProps<{
  item: MenuItem
}>()

const priceLabel = computed(() => {
  return props.item.currency + props.item.price
})

const visibleDietaryIcons = computed(() => {
  const visibleIcons = []

  for (const diet in props.item.dietary) {
    if (props.item.dietary[diet]) {
      visibleIcons.push(diet)
    }
  }

  return visibleIcons
})
```
