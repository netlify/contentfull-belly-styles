# Diet Icon

This is how dietary restrictions can be designated on menu items.

## Implementation

### HTML

```html
<abbr title="Vegetarian" class="diet-icon">V</abbr>
```

## CSS

```css
.diet-icon {
  width: 32px;
  height: 32px;
  border: 1px solid #222;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
```

### JavaScript Sample

```ts
type Diets = 'Vegetarian' | 'Vegan' | 'Pescatarian' | 'Gluten-Free'

const props = defineProps<{ type: Diets }>()

const symbol = computed(() => {
  switch (props.type) {
    case 'Vegetarian':
      return 'V'
    case 'Vegan':
      return 'VE'
    case 'Pescatarian':
      return 'P'
    case 'Gluten-Free':
      return 'GF'
  }
})
```
