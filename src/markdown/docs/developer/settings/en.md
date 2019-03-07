--- 
path: /en/docs/developer/settings
title: Settings
components: true
---

## measurements

The measurements to draft for. The pattern configuration lists all required measurements.

```js
import brian from "@freesewing/brian";

let pattern = new Brian({
  measurements: {
    chestCircumference: 1080
    shoulderSlope: 55
  }
})
```

> ###### Try our models while developing
>
> When designing a pattern, you want to test it with a bunch of different,
> yet realistic, measurements.
> 
> We publish the [@freesewing/models](https://github.com/freesewing/models)
> package exactly for this purpose. It comes with a set of models (with and 
> without breasts) with (probaly) all the measurements you need.

> ###### Validation is optional
>
> By default, patterns won't complain when measurements are missing, and simply try to 
> draft the pattern with the information available. 
> 
> That often goes off the rails, so you might want to consider using 
> [the validate plugin](https://github.com/freesewing/plugin-validate)
> to validate all measurements are provided prior to attemping a draft.
> 
> Then again, if you already do this validation in your front-end, you can
> skip that extra check.

## options

The pattern options as specified in the pattern configuration.

Unlike measurements, options come with defaults.

```js
import brian from "@freesewing/brian";

let pattern = new Brian({
  options: {
    chestEase: 120
  }
})
```

## complete

Set this to `false` to draft a base outline of the pattern, rather than a fully detailed pattern.
This has different uses, such as generating patterns to be cut out with a laser cutter.

The default is `true`.  Setting this to `false` will force [sa](#sa) to be set to `false`.

```js
import brian from "@freesewing/brian";

let pattern = new Brian({
  complete: false
})
```

## paperless

Set this to `true` to draft a paperless pattern. The default is `false`;

```js
import brian from "@freesewing/brian";

let pattern = new Brian({
  paperless: true
})
```

## sa

The seam allowance in mm.

Not setting this, setting it to `false`, or to zero, will draft a pattern without seam allowance.


```js
import brian from "@freesewing/brian";

let pattern = new Brian({
  sa: 10
})
```

> This is ignored if [settings.complete](#complete) is `false`

## units

Either `metric` (the default) or `imperial`.

Note that this is only used to format the output. Freesewing expects mm.

```js
import brian from "@freesewing/brian";

let pattern = new Brian({
  units: "imperial"
})
```

## locale

A 2-letter language code that indicates what language the user wants.

This will be used to set the `xml:lang` attribute in the `svg` tag when rendering to SVG,
and by [the i18n plugin](https://github.com/freesewing/plugin-i18n) to translate the pattern.

```js
import brian from "@freesewing/brian";

let pattern = new Brian({
  locale: "es"
})
```

## only

Allows you to specify one or more parts to draft/render, rather than the entire pattern.

Accepts a part name as string, or an array of part names.

```js
import brian from "@freesewing/brian";

let pattern = new Brian({
  only: ["front", "sleeve"]
})
```

## margin

Allows you to specify a part margin (in mm). The default is 2mm.  
Each part will have this margin applied. This means that:

 - At the edge of the SVG, the margin will be `margin * 1` (2mm by default)
 - Between parts, the margin will be `margin * 2` (4mm by default)
 
Note that setting the margin to zero (or below) will cause parts to overlap.

```js
import brian from "@freesewing/brian";

let pattern = new Brian({
  margin: 5
})
```

> ###### For paperless, the minimal margin is 10mm
>
> In paperless mode, the margin will not go below 10mm. 
> 
> That is because text is not taken into account when calculating the bounding box of the part.
> Since dimensions are typically the outermost elements in a paperless part, 
> a too narrow margin would cause the dimension text to get cut off.

## embed

Set to `true` to make SVG output suitable for embedding in a web page.

This removes the `width` and `height` attributes from the SVG tag, which allows
you to inject the SVG into an HTML document, and it will responsively scale.

```js
import brian from "@freesewing/brian";

let pattern = new Brian({
  embed: true
})
```

> Do **not** use this for SVGs you want to print.


## idPrefix

Prefixes all IDs in the SVG with the string you pass it. (defaults to `fs-`).

When you embed multiple SVGs on a single page, the IDs can and will conflict,
especially when using `xlink:href` references (such as for text on paths and snippets).

This allows you to specify an ID prefix so you can sidestep ID collisions.

```js
import brian from "@freesewing/brian";

let pattern = new Brian({
  idPrefix: "something-else"
})
```

## layout

Allows you to control the way pattern parts are laid out on the pattern.
There are 3 scenarios:

###### layout is true

This is the default behaviour. Parts will be laid without overlap in 
a space that's a small as possible. 

<pattern-example pattern="aaron"></pattern-example>

###### layout is false

This will cause all parts to be laid out on top of each other.

It is almost certainly not what you want, but having all parts piled
on top of each other in the top left corner can be a good starting
point for a custom layout.

<pattern-example pattern="aaron" layout="false"></pattern-example>

###### layout is a layout object

This allows you to control the layout by passing a layout object.
This object should be structures as such:

```js
import aaron from "@freesewing/brian";

let pattern = new Brian({
  layout: {
    parts: {
      front: {
        move: {
          x: 14,
          y: -202
        }
      },
      back: {
        rotate: 90,
        flipX: true,
        flipY, true
      }
    }
  }
});
```

For each part in the `parts` attribute of our layout object, there are 4 possible attributes:

 - move: Expects an object with an `x` and `y` property, and will move the part by `x` along the X-axis and by `y` along the Y-axis
 - rotate: Expects a number, and will rotate the part by number degrees around its center point
 - flipX: Will flip/mirror the part horizontally
 - flipY: Will flip/mirror the part vertically


> ###### Serious about custom layouts?
>
> Look at the [SVG object attributes](/en/docs/developer/api/svg) if you're serious about using
> a custom layout.
