# Home page

## HTML

```html
  <main>
    <h1 class="section-title">{{ info.name }}</h1>
    <p class="section-strapline">{{ info.strapline }}</p>
    <div class="section-intro" v-html=markdown(page.body)></div>
    <h2 class="section-title">Our diners say nice things</h2>

    <div v-for="item of testimonials" :key=item.date class="testimonial">
      <p class="testimonial-meta">On <time>{{ item.date | formatDate }}</time>, {{ item.displayName }} said: </p>
      <h3>{{ item.title }}</h3>
      <div v-html=item.body></div>
    </div>

    <h2 class="section-title">Opening hours</h2>
    <div class="hours">
      <p v-for="day in info.hours" :key="day">
        {{day}}
      </p>
    </div>
    <h2 class="section-title">We're ever so social</h2>
    <ul>
      <li v-for="item in info.social" :key="item.channel">
        {{item.channel}} : <a :href="item.url">{{ item.displayName}} </a>
      </li>
    </ul>
  </main>
```

## CSS

```css

.testimonial{
  margin: 1rem 0;
}
.testimonial-meta {
  font-size:1em;
  color:var(--secondary-text-color);
}
.testimonial h3 {
  margin: 0.5rem 0 0.5rem;
  font-size: 1.5rem;;
}
.testimonial div {
  margin: 0;
}


```

