# NgxParallaxScroll

[![License](https://badgen.net/npm/license/@boatzako/ngx-parallax-scroll)](https://badgen.net/npm/license/@boatzako/ngx-parallax-scroll)
[![Minified](https://badgen.net/bundlephobia/min/@boatzako/ngx-parallax-scroll)](https://badgen.net/bundlephobia/min/@boatzako/ngx-parallax-scroll)


Parallax scroll for Angular9+. [Demo](https://stackblitz.com/edit/boatzako-ngx-parallax-scroll-demo)

## Getting Started

You can install @boatzako/ngx-parallax-scroll by using npm.

```
npm install @boatzako/ngx-parallax-scroll --save
```

## Usage

Import `ngx-parallax-scroll` module

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { NgxParallaxScrollModule } from '@boatzako/ngx-parallax-scroll'; // <-- add

@NgModule({
  imports: [
    BrowserModule, 
    NgxParallaxScrollModule  // <-- add
  ],
  declarations: [ 
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

```

Then in HTML
```html
<ngx-parallax-scroll>
  <img parallax-img src="/assets/your-image.jpg" alt="">
</ngx-parallax-scroll>
```

## API.
### Component
Selector: `ngx-parallax-scroll`
#### Inputs
| Input      | Type     | Default | Required | Description                   |
| ---------- | -------- | ------- | -------- | ----------------------------- |
| styleClass | `string` |         | no       | Style class of the component. |

### Directive
Selector: `parallax-img`
#### Inputs
| Input | Type     | Default | Required | Description          |
| ----- | -------- | ------- | -------- | -------------------- |
| ratio | `number` | 1       | no       | speed when scrolling |

## Authors

* [BoatZako](https://github.com/BoatZako/) (boat_zako@hotmail.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
