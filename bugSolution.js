```javascript
// Solution: More explicit class names to control layout more precisely
<div class="flex flex-col md:flex-row items-center justify-center">
  <div class="md:basis-1/2">
    </div>
    <div class="md:basis-1/2">
    </div>
  </div>
// Or consider using a more concise and more efficient solution
<div class="flex flex-col sm:flex-row">
  <div class="basis-full sm:basis-1/2">
  </div>
  <div class="basis-full sm:basis-1/2">
  </div>
</div>
```