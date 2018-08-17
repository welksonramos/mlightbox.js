# mlightbox.js
> Micro lightbox gallery without dependencies.

[![Build Status](https://travis-ci.org/welksonramos/mlightbox.js.svg?branch=master)](https://travis-ci.org/welksonramos/mlightbox.js) [![npm version](https://img.shields.io/npm/v/mlightbox-js.svg)](https://www.npmjs.com/package/mlightbox-js) [![install size](https://packagephobia.now.sh/badge?p=mlightbox-js@0.1.0)](https://packagephobia.now.sh/result?p=mlightbox-js@0.1.0) [![GitHub license](https://img.shields.io/github/license/welksonramos/mlightbox.js.svg)](https://github.com/welksonramos/mlightbox.js/blob/master/LICENSE)

View a [Demo](https://welksonramos.github.io/mlightbox.js/)

## How to use?

### Installation

Using npm:
```bash
npm install mlightbox-js
```
Or download the [latest release](https://github.com/welksonramos/mlightbox.js/releases)

### Usage: 

1. Include the CSS at the top of your page in ``<head>`` tag:

```html
<link rel="stylesheet" href="path/to/mlightbox.min.css">
```

2. Include the Javascript at the bottom of your page before the closing ``</body>`` tag:

```html
<script src="path/to/mlightbox.min.js"></script>
```
### The markup

Add a ``mlightbox`` attribute in each image link to enable the gallery. For example:

```html
<div>
<a href="path/to/image-1.jpg" mlightbox></a>
<a href="path/to/image-2.jpg" mlightbox></a>
<a href="path/to/image-3.jpg" mlightbox></a>
<a href="path/to/image-4.jpg" mlightbox></a>
</div>
```
## License
[MIT License](LICENSE) &copy; [Welkson Ramos](https://github.com/welksonramos)
