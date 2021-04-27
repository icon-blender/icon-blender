
# Icon Blender

Create customized SVG icon collections from over 80,000 free and open-source icons

![Test Results](https://github.com/icon-blender/icon-blender/actions/workflows/tests.yaml/badge.svg)


## Features

- **Include only the icons you need** <br/>Custom icon bundles means smaller transfer sizes and faster page loading
- **Use icons from multiple packages** <br/>Adding icons from another icon package doesn't require including entire packages
- **SVG in CSS** <br/>Icons vectors are embedded directly in your CSS files eliminating the need for additional font files
- **No font files** <br/>Eliminating font files means one less server request before your pages load and solves the "Ensure text remains visible during webfont load" issue on [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
- **Seamless integration with SCSS/Less.js workflow** <br/>No additional software to install or configure


## Usage

### SCSS
example.scss
```scss
@import "icon-blender/scss/icon-blender.scss"; // import default variables, mixins and core styles
@import "icon-blender/scss/icons/fa.scss"; // import the FontAwesome4 collection ($icons-fa)
@include icon($icons-fa,'search'); // include the 'search' icon from the FontAwesome4 collection
```

example.html
```html
<i class="ib ib-fa-search"></i>
```

### Less.js
example.less
```less
@import "icon-blender/less/icon-blender.less"; // import default variables, mixins and core styles
@import "icon-blender/less/icons/fa.less"; // import the FontAwesome4 collection ($icons-fa)
#blender.icon(@icons-fa, search); // include the 'search' icon from the FontAwesome4 collection
```

example.html
```html
<i class="ib ib-fa-search"></i>
```

### CSS
Not using SCSS? You can still use IconBlender by selecting icons and generating CSS on <a href="https://icon-blender.com">icon-blender.com</a>

### Styling

Normally, you can't apply custom styles to embedded SVG images.
Icon Blender gets around this limitation by embedding SVG images with <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image">mask-image</a>.
With this approach, you can apply color, color gradients and other custom styling to CSV images via the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background">background</a> property.


By default icons inherit the current text color
```html
<i class="ib ib-fa-search" style="color:red"></i>
```

Icons can be customized further with the background property
```html
<i class="ib ib-fa-search" style="background: linear-gradient(#e66465, #9198e5);"></i>
```

### Custom Class Names

When using the ```icon()``` mixin, generated class names will take the form ```.#{$blender_prefix}-#{$collection_prefix}-#{$icon_name}```.
If you'd prefer alternate class names, you can use the ```iconUrl()``` mixin instead.

example.scss
```scss
@import "icon-blender/scss/icon-blender.scss"; // import default variables, mixins and core styles
@import "icon-blender/scss/icons/fa.scss"; // import the FontAwesome4 collection ($icons-fa)

.my-class-name{
	@include iconUrl($icons-fa,'search');
}
```

example.less
```less
@import "icon-blender/less/icon-blender.less"; // import default variables, mixins and core styles
@import "icon-blender/less/icons/fa.less"; // import the FontAwesome4 collection ($icons-fa)

.my-class-name{
	#blender.iconUrl(@icons-fa,search);
}
```


## Available Icon Packages

Icon definitions from [Iconfy](https://github.com/iconify/collections-json)

<table><tr><th>Package Name</th><th>Prefix</th><th>Icons</th></tr>
<tr><td><a href="https://github.com/artcoholic/akar-icons">Akar Icons</a></td><td>akar-icons</td><td>242</td></tr>
<tr><td><a href="https://github.com/ant-design/ant-design-icons">Ant Design Icons</a></td><td>ant-design</td><td>1828</td></tr>
<tr><td><a href="https://github.com/twbs/icons">Bootstrap Icons</a></td><td>bi</td><td>1333</td></tr>
<tr><td><a href="https://github.com/bpmn-io/bpmn-font">BPMN</a></td><td>bpmn</td><td>112</td></tr>
<tr><td><a href="https://github.com/fontello/brandico.font">Brandico Font</a></td><td>brandico</td><td>45</td></tr>
<tr><td><a href="https://github.com/atisawd/boxicons">BoxIcons</a></td><td>bx</td><td>1500</td></tr>
<tr><td><a href="https://github.com/danklammer/bytesize-icons">Bytesize Icons</a></td><td>bytesize</td><td>102</td></tr>
<tr><td><a href="https://github.com/carbon-design-system/carbon/tree/main/packages/icons">Carbon</a></td><td>carbon</td><td>1584</td></tr>
<tr><td><a href="https://github.com/coreui/coreui-icons">CoreUI Brands</a></td><td>cib</td><td>831</td></tr>
<tr><td><a href="https://github.com/coreui/coreui-icons">CoreUI Flags</a></td><td>cif</td><td>199</td></tr>
<tr><td><a href="https://github.com/coreui/coreui-icons">CoreUI Free</a></td><td>cil</td><td>562</td></tr>
<tr><td><a href="https://github.com/vmware/clarity">Clarity</a></td><td>clarity</td><td>1085</td></tr>
<tr><td><a href="https://github.com/microsoft/vscode-codicons">Codicons</a></td><td>codicon</td><td>349</td></tr>
<tr><td><a href="https://github.com/atomiclabs/cryptocurrency-icons">Cryptocurrency Icons</a></td><td>cryptocurrency</td><td>452</td></tr>
<tr><td><a href="https://github.com/WordPress/dashicons">Dashicons</a></td><td>dashicons</td><td>347</td></tr>
<tr><td><a href="https://github.com/outpunk/evil-icons">Evil Icons</a></td><td>ei</td><td>70</td></tr>
<tr><td><a href="http://elusiveicons.com/">Elusive Icons</a></td><td>el</td><td>304</td></tr>
<tr><td><a href="https://github.com/emojione/emojione">Emoji One (Colored)</a></td><td>emojione</td><td>2159</td></tr>
<tr><td><a href="https://github.com/emojione/emojione">Emoji One (Monotone)</a></td><td>emojione-monotone</td><td>1713</td></tr>
<tr><td><a href="https://github.com/emojione/emojione-legacy">Emoji One (v1)</a></td><td>emojione-v1</td><td>1529</td></tr>
<tr><td><a href="http://www.entypo.com/">Entypo+</a></td><td>entypo</td><td>321</td></tr>
<tr><td><a href="http://www.entypo.com/">Entypo+ Social</a></td><td>entypo-social</td><td>76</td></tr>
<tr><td><a href="https://github.com/pprince/etlinefont-bower">Elegant</a></td><td>et</td><td>100</td></tr>
<tr><td><a href="https://github.com/akveo/eva-icons/">Eva Icons</a></td><td>eva</td><td>490</td></tr>
<tr><td><a href="http://fontawesome.io/">Font Awesome 4</a></td><td>fa</td><td>786</td></tr>
<tr><td><a href="http://fontawesome.io/">Font Awesome 5 Brands</a></td><td>fa-brands</td><td>461</td></tr>
<tr><td><a href="http://fontawesome.io/">Font Awesome 5 Regular</a></td><td>fa-regular</td><td>151</td></tr>
<tr><td><a href="http://fontawesome.io/">Font Awesome 5 Solid</a></td><td>fa-solid</td><td>1024</td></tr>
<tr><td><a href="https://github.com/feathericon/feathericon">Feather Icon</a></td><td>fe</td><td>255</td></tr>
<tr><td><a href="https://github.com/feathericons/feather">Feather Icons</a></td><td>feather</td><td>286</td></tr>
<tr><td><a href="https://github.com/file-icons/icons">File Icons</a></td><td>file-icons</td><td>918</td></tr>
<tr><td><a href="https://github.com/icons8/flat-Color-icons">Flat Color Icons</a></td><td>flat-color-icons</td><td>329</td></tr>
<tr><td><a href="https://github.com/designmodo/Flat-UI">Flat UI Icons</a></td><td>flat-ui</td><td>100</td></tr>
<tr><td><a href="https://github.com/microsoft/fluentui-system-icons">Fluent UI System Icons</a></td><td>fluent</td><td>6994</td></tr>
<tr><td><a href="https://github.com/fontello/fontelico.font">Fontelico</a></td><td>fontelico</td><td>34</td></tr>
<tr><td><a href="https://github.com/zurb/foundation-icon-fonts">Foundation</a></td><td>foundation</td><td>283</td></tr>
<tr><td><a href="https://github.com/mozilla/fxemoji">Firefox OS Emoji</a></td><td>fxemoji</td><td>1034</td></tr>
<tr><td><a href="https://github.com/cugos/geoglyphs">GeoGlyphs</a></td><td>geo</td><td>30</td></tr>
<tr><td><a href="https://github.com/astrit/css.gg">css.gg</a></td><td>gg</td><td>704</td></tr>
<tr><td><a href="https://github.com/Automattic/gridicons">Gridicons</a></td><td>gridicons</td><td>201</td></tr>
<tr><td><a href="https://github.com/grommet/grommet-icons">Grommet Icons</a></td><td>grommet-icons</td><td>611</td></tr>
<tr><td><a href="https://github.com/refactoringui/heroicons">HeroIcons Outline</a></td><td>heroicons-outline</td><td>226</td></tr>
<tr><td><a href="https://github.com/refactoringui/heroicons">HeroIcons Solid</a></td><td>heroicons-solid</td><td>226</td></tr>
<tr><td><a href="https://github.com/cyberalien/google-material-design-icons-updated">Google Material Icons</a></td><td>ic</td><td>10009</td></tr>
<tr><td><a href="https://github.com/Keyamoon/IcoMoon-Free">IcoMoon Free</a></td><td>icomoon-free</td><td>491</td></tr>
<tr><td><a href="https://github.com/icons8/windows-10-icons">Icons8 Windows 10 Icons</a></td><td>icons8</td><td>234</td></tr>
<tr><td><a href="https://github.com/IcaliaLabs/icalicons">Icalicons</a></td><td>il</td><td>84</td></tr>
<tr><td><a href="https://github.com/ionic-team/ionicons">IonIcons</a></td><td>ion</td><td>2582</td></tr>
<tr><td><a href="https://github.com/innowatio/iwwa-icons">Innowatio Font</a></td><td>iwwa</td><td>105</td></tr>
<tr><td><a href="https://github.com/michaelampr/jam">Jam Icons</a></td><td>jam</td><td>940</td></tr>
<tr><td><a href="https://github.com/icons8/line-awesome">Line Awesome</a></td><td>la</td><td>2353</td></tr>
<tr><td><a href="https://github.com/cyberalien/line-md">Material Line Icons</a></td><td>line-md</td><td>250</td></tr>
<tr><td><a href="https://github.com/gilbarbara/logos">SVG Logos</a></td><td>logos</td><td>1397</td></tr>
<tr><td><a href="https://github.com/kudakurage/LigatureSymbols">Ligature Symbols</a></td><td>ls</td><td>348</td></tr>
<tr><td><a href="https://github.com/halfmage/majesticons">Majesticons</a></td><td>majesticons</td><td>420</td></tr>
<tr><td><a href="https://github.com/mapbox/maki">Maki</a></td><td>maki</td><td>388</td></tr>
<tr><td><a href="https://github.com/scottdejonge/map-icons">Map Icons</a></td><td>map</td><td>167</td></tr>
<tr><td><a href="https://github.com/Templarian/MaterialDesign">Material Design Icons</a></td><td>mdi</td><td>10639</td></tr>
<tr><td><a href="https://github.com/Templarian/MaterialDesignLight">Material Design Light</a></td><td>mdi-light</td><td>267</td></tr>
<tr><td><a href="https://github.com/samcome/webfont-medical-icons">Medical Icons</a></td><td>medical-icon</td><td>144</td></tr>
<tr><td><a href="https://github.com/mono-company/mono-icons">Mono Icons</a></td><td>mi</td><td>147</td></tr>
<tr><td><a href="https://github.com/googlei18n/noto-emoji">Noto Emoji</a></td><td>noto</td><td>3678</td></tr>
<tr><td><a href="https://github.com/googlei18n/noto-emoji">Noto Emoji (v1)</a></td><td>noto-v1</td><td>2320</td></tr>
<tr><td><a href="https://github.com/primer/octicons/">Octicons</a></td><td>octicon</td><td>604</td></tr>
<tr><td><a href="https://github.com/iconic/open-iconic">Open Iconic</a></td><td>oi</td><td>223</td></tr>
<tr><td><a href="https://github.com/hfg-gmuend/openmoji">OpenMoji</a></td><td>openmoji</td><td>3954</td></tr>
<tr><td><a href="https://github.com/phosphor-icons/phosphor-icons">Phosphor</a></td><td>ph</td><td>4668</td></tr>
<tr><td><a href="https://github.com/halfmage/pixelarticons">Pixelarticons</a></td><td>pixelarticons</td><td>460</td></tr>
<tr><td><a href="https://github.com/PrestaShop/prestashop-icon-font">PrestaShop Icons</a></td><td>ps</td><td>479</td></tr>
<tr><td><a href="https://github.com/modulz/radix-icons">Radix Icons</a></td><td>radix-icons</td><td>310</td></tr>
<tr><td><a href="http://dmitrybaranovskiy.github.io/raphael/">Raphael</a></td><td>raphael</td><td>266</td></tr>
<tr><td><a href="https://github.com/Remix-Design/RemixIcon">Remix Icon</a></td><td>ri</td><td>2271</td></tr>
<tr><td><a href="http://glyph.smarticons.co">SmartIcons Glyph</a></td><td>si-glyph</td><td>800</td></tr>
<tr><td><a href="https://github.com/simple-icons/simple-icons">Simple Icons</a></td><td>simple-icons</td><td>1914</td></tr>
<tr><td><a href="https://github.com/thesabbir/simple-line-icons">Simple line icons</a></td><td>simple-line-icons</td><td>189</td></tr>
<tr><td><a href="https://github.com/mariuszostrowski/subway">Subway Icon Set</a></td><td>subway</td><td>308</td></tr>
<tr><td><a href="https://github.com/CoreyGinnivan/system-uicons">System UIcons</a></td><td>system-uicons</td><td>422</td></tr>
<tr><td><a href="https://github.com/tabler/tabler-icons">Tabler Icons</a></td><td>tabler</td><td>1276</td></tr>
<tr><td><a href="https://github.com/teenyicons/teenyicons">Teenyicons</a></td><td>teenyicons</td><td>1200</td></tr>
<tr><td><a href="https://github.com/topcoat/icons">TopCoat Icons</a></td><td>topcoat</td><td>89</td></tr>
<tr><td><a href="https://github.com/twitter/twemoji">Twitter Emoji</a></td><td>twemoji</td><td>3823</td></tr>
<tr><td><a href="https://github.com/stephenhutchings/typicons.font">Typicons</a></td><td>typcn</td><td>336</td></tr>
<tr><td><a href="https://github.com/Iconscout/unicons">Unicons</a></td><td>uil</td><td>1236</td></tr>
<tr><td><a href="https://github.com/Iconscout/unicons">Unicons Monochrome</a></td><td>uim</td><td>296</td></tr>
<tr><td><a href="https://vaadin.com/elements/vaadin-icons">Vaadin Icons</a></td><td>vaadin</td><td>636</td></tr>
<tr><td><a href="https://github.com/kkvesper/vesper-icons">Vesper Icons</a></td><td>vs</td><td>172</td></tr>
<tr><td><a href="https://github.com/vscode-icons/vscode-icons">VSCode Icons</a></td><td>vscode-icons</td><td>1070</td></tr>
<tr><td><a href="http://www.justbenice.ru/studio/websymbols/">Web Symbols Liga</a></td><td>websymbol</td><td>85</td></tr>
<tr><td><a href="http://www.webhostinghub.com/glyphs/">WebHostingHub Glyphs</a></td><td>whh</td><td>2125</td></tr>
<tr><td><a href="https://github.com/erikflowers/weather-icons">Weather Icons</a></td><td>wi</td><td>599</td></tr>
<tr><td><a href="https://github.com/icons8/WPF-UI-Framework">Icons8 Windows 8 Icons</a></td><td>wpf</td><td>294</td></tr>
<tr><td><a href="https://github.com/zavoloklom/material-design-iconic-font">Material Design Iconic Font</a></td><td>zmdi</td><td>886</td></tr>
<tr><td><a href="https://github.com/dukestreetstudio/zondicons">Zondicons</a></td><td>zondicons</td><td>297</td></tr>
</table>


## Contributing

Install the dependencies that are required to build and test:

```sh
$ npm install
```

Run tests
```sh
$ npm test
```

Create scss/icon/*.scss and less/icon/*.less files from json
```sh
$ npm run build
```

Build css/icon-blender.css
```sh
$ npm run build:css
```
