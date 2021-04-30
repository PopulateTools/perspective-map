<h1 align="center">Perspective Map</h1>

<div align="center">
  🗺
</div>
<div align="center">
  Includes a map of Leaflet in <a href="https://github.com/finos/perspective/">Perspective</a> by [Populate](https://populate.tools)
</div>
<br />

<div align="center">
  <img src="https://img.shields.io/npm/l/:perspective-map"/>
    <img src="https://img.shields.io/bundlephobia/minzip/perspective-map"/>
    <img src="https://img.shields.io/npm/v/perspective-map"/>
</div>

## Table of Contents
- [Installation](#Installation)
- [Requeriments](#requeriments)
- [Dependencies](#Dependencies)
- [How to use](#use)
- [Examples](#examples)
- [Development](#Development)

## Installation

You can also load directly from UNPKG as a standalone library.

```html
<script src="https://unpkg.com/@finos/perspective@0.6.0/dist/umd/perspective.js"></script>
<script src="https://unpkg.com/@finos/perspective-viewer@0.6.0/dist/umd/perspective-viewer.js"></script>
<script src="https://unpkg.com/@finos/perspective-viewer-datagrid@0.6.0/dist/umd/perspective-viewer-datagrid.js"></script>
<script src="https://unpkg.com/@finos/perspective-viewer-d3fc@0.6.0/dist/umd/perspective-viewer-d3fc.js"></script>
<script src="https://unpkg.com/perspective-map@1.0.1/dist/index.js"></script>
```

As a module with NPM or YARN

```bash
npm i perspective-leaflet --save-dev
yarn perspective-leaflet
```

And then import it:

```javascript
import perspective from "@finos/perspective";
import "@finos/perspective-viewer";
import "@finos/perspective-viewer-datagrid";
import "@finos/perspective-viewer-d3fc";
import "@finos/perspective-viewer/themes/all-themes.css";
import "perspective-map";
```


## Requeriments

The plugin has been tested with the latest versions of Perspective, 0.8.0, which was released on 28.04.2021.

You will also need to include the Leaflet CSS

```html
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
```


Or

```javascript
import "leaflet/dist/leaflet.css";
```

## How to use

The usage is simple, and there is only one requirement. The plugin expects to receive the data as CSV. It should have a column called geometry, which will have the geospatial data.

An example:

```csv
population,city,geometry
785123,"Zaragoza","{""type"":""Point"",""coordinates"":[-0.8850860595703125,41.64828831259533]}"
125123,"Teruel","{""type"":""Point"",""coordinates"":[-1.1061859130859375,40.345497469392406]}"
785123,"Huesca","{""type"":""Point"",""coordinates"":[-0.41473388671875,42.14202329789122]}"
```


## CSS

If you don't like the color scale, you can override it using custom properties. To create color scales for maps, we recommend using [ColorBrewer](https://colorbrewer2.org/#type=sequential&scheme=BuGn&n=3)

In your CSS, you should override the custom properties that we have created.

```css
:root {
  --perspective-map-range-1: #fef0d9;
  --perspective-map-range-2: #fdcc8a;
  --perspective-map-range-3: #fc8d59;
  --perspective-map-range-4: #e34a33;
  --perspective-map-range-5: #b30000;
  --perspective-map-category-1: #feebe2;
  --perspective-map-category-2: #fbb4b9;
  --perspective-map-category-3: #f768a1;
  --perspective-map-category-4: #c51b8a;
  --perspective-map-category-5: #7a0177;
}
```

## Examples

<div>
<h3>Choroplet spanish regions</h3>
<a href="https://bl.ocks.org/jorgeatgu/0ec3f662231e1222b24d1a62a58780fb">
  <img src="https://raw.githubusercontent.com/PopulateTools/perspective-map/main/images/chroloplet.png"/>
</a>
</div>
<div>
<h3>Choroplet spanish regions override scale color</h3>
<a href="https://bl.ocks.org/jorgeatgu/bd2a217bec9297a81f07d32fe7c24f2a">
  <img src="https://raw.githubusercontent.com/PopulateTools/perspective-map/main/images/chroloplet-scale.png"/>
</a>
</div>
<div>
<h3>Map marker</h3>
<a href="https://bl.ocks.org/jorgeatgu/b9555928ff49ddbdceccda73c5ca248b">
  <img src="https://raw.githubusercontent.com/PopulateTools/perspective-map/main/images/map-marker.png"/>
</a>
</div>
<div>
<h3>Chroloplet map with Vue</h3>
<a href="https://codesandbox.io/s/j1hk0">
  <img src="https://raw.githubusercontent.com/PopulateTools/perspective-map/main/images/chroloplet.png"/>
</a>
</div>


## Development

- clone the repo
- ```npm i or yarn```

Start coding! 
