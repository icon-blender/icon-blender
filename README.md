
## CSVG Icons

Mix and match SVG icons from among 87,534 icons and 93 icon packages.


### Features

**Include only the icons you need**
* Faster Page Loading
* Custom icon bundles mean smaller transfer sizes

**Use icons from multiple packages**
* Adding icons from another icon package doesn't require including entire packages

**SVG in CSS**
* Eliminating font files means fewer server requests
* Seamless integration with SCSS workflow

**No font files**
* Fewer server requests
* Eliminates "Ensure text remains visible during webfont load" warning on [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)


### Usage

```scss
// optionally define the class prefix. defaults to 'cs'
$cssvg_prefix: 'cs';
// import default variables, mixins and core styles
@import "csvg-icons/csvg.scss";
// import the FontAwesome4 collection
@import "csvg-icons/icons/fa.scss";
// include the 'search' icon from the FontAwesome4 collection
@include csvgIcon($icons-fa,'search');
```

```html
<i class="cs-search"></i>
```

### Styling

Normally, you can't apply custom styles to embedded SVG images.
CSVG gets around this limitation by embedding SVG images with <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image">mask-image</a>.
With this approach, you can apply color, color gradients and other custom styling to CSV images via the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background">background</a> property.

```html
<i class="cs-search" style="background:blue"></i>
```

### Available Icon Packages

Icon definitions from [Iconfy](https://github.com/iconify/collections-json)

<ul>
<li><a href="https://github.com/artcoholic/akar-icons">Akar Icons</a> (akar-icons)</li>
<li><a href="https://github.com/ant-design/ant-design-icons">Ant Design Icons</a> (ant-design)</li>
<li><a href="https://github.com/twbs/icons">Bootstrap Icons</a> (bi)</li>
<li><a href="https://github.com/bpmn-io/bpmn-font">BPMN</a> (bpmn)</li>
<li><a href="https://github.com/fontello/brandico.font">Brandico Font</a> (brandico)</li>
<li><a href="https://github.com/atisawd/boxicons">BoxIcons</a> (bx)</li>
<li><a href="https://github.com/danklammer/bytesize-icons">Bytesize Icons</a> (bytesize)</li>
<li><a href="https://github.com/carbon-design-system/carbon/tree/main/packages/icons">Carbon</a> (carbon)</li>
<li><a href="https://github.com/coreui/coreui-icons">CoreUI Brands</a> (cib)</li>
<li><a href="https://github.com/coreui/coreui-icons">CoreUI Flags</a> (cif)</li>
<li><a href="https://github.com/coreui/coreui-icons">CoreUI Free</a> (cil)</li>
<li><a href="https://github.com/vmware/clarity">Clarity</a> (clarity)</li>
<li><a href="https://github.com/microsoft/vscode-codicons">Codicons</a> (codicon)</li>
<li><a href="https://github.com/atomiclabs/cryptocurrency-icons">Cryptocurrency Icons</a> (cryptocurrency)</li>
<li><a href="https://github.com/WordPress/dashicons">Dashicons</a> (dashicons)</li>
<li><a href="https://github.com/outpunk/evil-icons">Evil Icons</a> (ei)</li>
<li><a href="http://elusiveicons.com/">Elusive Icons</a> (el)</li>
<li><a href="https://github.com/emojione/emojione">Emoji One (Colored)</a> (emojione)</li>
<li><a href="https://github.com/emojione/emojione">Emoji One (Monotone)</a> (emojione-monotone)</li>
<li><a href="https://github.com/emojione/emojione-legacy">Emoji One (v1)</a> (emojione-v1)</li>
<li><a href="http://www.entypo.com/">Entypo+</a> (entypo)</li>
<li><a href="http://www.entypo.com/">Entypo+ Social</a> (entypo-social)</li>
<li><a href="https://github.com/pprince/etlinefont-bower">Elegant</a> (et)</li>
<li><a href="https://github.com/akveo/eva-icons/">Eva Icons</a> (eva)</li>
<li><a href="http://fontawesome.io/">Font Awesome 4</a> (fa)</li>
<li><a href="http://fontawesome.io/">Font Awesome 5 Brands</a> (fa-brands)</li>
<li><a href="http://fontawesome.io/">Font Awesome 5 Regular</a> (fa-regular)</li>
<li><a href="http://fontawesome.io/">Font Awesome 5 Solid</a> (fa-solid)</li>
<li><a href="https://github.com/feathericon/feathericon">Feather Icon</a> (fe)</li>
<li><a href="https://github.com/feathericons/feather">Feather Icons</a> (feather)</li>
<li><a href="https://github.com/file-icons/icons">File Icons</a> (file-icons)</li>
<li><a href="https://github.com/icons8/flat-Color-icons">Flat Color Icons</a> (flat-color-icons)</li>
<li><a href="https://github.com/designmodo/Flat-UI">Flat UI Icons</a> (flat-ui)</li>
<li><a href="https://github.com/microsoft/fluentui-system-icons">Fluent UI System Icons</a> (fluent)</li>
<li><a href="https://github.com/fontello/fontelico.font">Fontelico</a> (fontelico)</li>
<li><a href="https://github.com/zurb/foundation-icon-fonts">Foundation</a> (foundation)</li>
<li><a href="https://github.com/mozilla/fxemoji">Firefox OS Emoji</a> (fxemoji)</li>
<li><a href="https://github.com/cugos/geoglyphs">GeoGlyphs</a> (geo)</li>
<li><a href="https://github.com/astrit/css.gg">css.gg</a> (gg)</li>
<li><a href="https://github.com/Automattic/gridicons">Gridicons</a> (gridicons)</li>
<li><a href="https://github.com/grommet/grommet-icons">Grommet Icons</a> (grommet-icons)</li>
<li><a href="https://github.com/refactoringui/heroicons">HeroIcons Outline</a> (heroicons-outline)</li>
<li><a href="https://github.com/refactoringui/heroicons">HeroIcons Solid</a> (heroicons-solid)</li>
<li><a href="https://github.com/cyberalien/google-material-design-icons-updated">Google Material Icons</a> (ic)</li>
<li><a href="https://github.com/Keyamoon/IcoMoon-Free">IcoMoon Free</a> (icomoon-free)</li>
<li><a href="https://github.com/icons8/windows-10-icons">Icons8 Windows 10 Icons</a> (icons8)</li>
<li><a href="https://github.com/IcaliaLabs/icalicons">Icalicons</a> (il)</li>
<li><a href="https://github.com/ionic-team/ionicons">IonIcons</a> (ion)</li>
<li><a href="https://github.com/innowatio/iwwa-icons">Innowatio Font</a> (iwwa)</li>
<li><a href="https://github.com/michaelampr/jam">Jam Icons</a> (jam)</li>
<li><a href="https://github.com/icons8/line-awesome">Line Awesome</a> (la)</li>
<li><a href="https://github.com/cyberalien/line-md">Material Line Icons</a> (line-md)</li>
<li><a href="https://github.com/gilbarbara/logos">SVG Logos</a> (logos)</li>
<li><a href="https://github.com/kudakurage/LigatureSymbols">Ligature Symbols</a> (ls)</li>
<li><a href="https://github.com/halfmage/majesticons">Majesticons</a> (majesticons)</li>
<li><a href="https://github.com/mapbox/maki">Maki</a> (maki)</li>
<li><a href="https://github.com/scottdejonge/map-icons">Map Icons</a> (map)</li>
<li><a href="https://github.com/Templarian/MaterialDesign">Material Design Icons</a> (mdi)</li>
<li><a href="https://github.com/Templarian/MaterialDesignLight">Material Design Light</a> (mdi-light)</li>
<li><a href="https://github.com/samcome/webfont-medical-icons">Medical Icons</a> (medical-icon)</li>
<li><a href="https://github.com/mono-company/mono-icons">Mono Icons</a> (mi)</li>
<li><a href="https://github.com/googlei18n/noto-emoji">Noto Emoji</a> (noto)</li>
<li><a href="https://github.com/googlei18n/noto-emoji">Noto Emoji (v1)</a> (noto-v1)</li>
<li><a href="https://github.com/primer/octicons/">Octicons</a> (octicon)</li>
<li><a href="https://github.com/iconic/open-iconic">Open Iconic</a> (oi)</li>
<li><a href="https://github.com/hfg-gmuend/openmoji">OpenMoji</a> (openmoji)</li>
<li><a href="https://github.com/phosphor-icons/phosphor-icons">Phosphor</a> (ph)</li>
<li><a href="https://github.com/halfmage/pixelarticons">Pixelarticons</a> (pixelarticons)</li>
<li><a href="https://github.com/PrestaShop/prestashop-icon-font">PrestaShop Icons</a> (ps)</li>
<li><a href="https://github.com/modulz/radix-icons">Radix Icons</a> (radix-icons)</li>
<li><a href="http://dmitrybaranovskiy.github.io/raphael/">Raphael</a> (raphael)</li>
<li><a href="https://github.com/Remix-Design/RemixIcon">Remix Icon</a> (ri)</li>
<li><a href="http://glyph.smarticons.co">SmartIcons Glyph</a> (si-glyph)</li>
<li><a href="https://github.com/simple-icons/simple-icons">Simple Icons</a> (simple-icons)</li>
<li><a href="https://github.com/thesabbir/simple-line-icons">Simple line icons</a> (simple-line-icons)</li>
<li><a href="https://github.com/mariuszostrowski/subway">Subway Icon Set</a> (subway)</li>
<li><a href="https://github.com/CoreyGinnivan/system-uicons">System UIcons</a> (system-uicons)</li>
<li><a href="https://github.com/tabler/tabler-icons">Tabler Icons</a> (tabler)</li>
<li><a href="https://github.com/teenyicons/teenyicons">Teenyicons</a> (teenyicons)</li>
<li><a href="https://github.com/topcoat/icons">TopCoat Icons</a> (topcoat)</li>
<li><a href="https://github.com/twitter/twemoji">Twitter Emoji</a> (twemoji)</li>
<li><a href="https://github.com/stephenhutchings/typicons.font">Typicons</a> (typcn)</li>
<li><a href="https://github.com/Iconscout/unicons">Unicons</a> (uil)</li>
<li><a href="https://github.com/Iconscout/unicons">Unicons Monochrome</a> (uim)</li>
<li><a href="https://vaadin.com/elements/vaadin-icons">Vaadin Icons</a> (vaadin)</li>
<li><a href="https://github.com/kkvesper/vesper-icons">Vesper Icons</a> (vs)</li>
<li><a href="https://github.com/vscode-icons/vscode-icons">VSCode Icons</a> (vscode-icons)</li>
<li><a href="http://www.justbenice.ru/studio/websymbols/">Web Symbols Liga</a> (websymbol)</li>
<li><a href="http://www.webhostinghub.com/glyphs/">WebHostingHub Glyphs</a> (whh)</li>
<li><a href="https://github.com/erikflowers/weather-icons">Weather Icons</a> (wi)</li>
<li><a href="https://github.com/icons8/WPF-UI-Framework">Icons8 Windows 8 Icons</a> (wpf)</li>
<li><a href="https://github.com/zavoloklom/material-design-iconic-font">Material Design Iconic Font</a> (zmdi)</li>
<li><a href="https://github.com/dukestreetstudio/zondicons">Zondicons</a> (zondicons)</li>
</ul>
