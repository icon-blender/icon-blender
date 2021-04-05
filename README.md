
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

example.scss
```scss
// $cssvg_prefix: 'cs'; // optionally define the class prefix. defaults to 'cs'
@import "csvg-icons/csvg.scss"; // import default variables, mixins and core styles
@import "csvg-icons/icons/fa.scss"; // import the FontAwesome4 collection
@include csvgIcon($icons-fa,'search'); // include the 'search' icon from the FontAwesome4 collection
```

example.html
```html
<i class="cs cs-search"></i>
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
<li><a href="https://github.com/artcoholic/akar-icons">Akar Icons</a> (akar-icons.scss)</li>
<li><a href="https://github.com/ant-design/ant-design-icons">Ant Design Icons</a> (ant-design.scss)</li>
<li><a href="https://github.com/twbs/icons">Bootstrap Icons</a> (bi.scss)</li>
<li><a href="https://github.com/bpmn-io/bpmn-font">BPMN</a> (bpmn.scss)</li>
<li><a href="https://github.com/fontello/brandico.font">Brandico Font</a> (brandico.scss)</li>
<li><a href="https://github.com/atisawd/boxicons">BoxIcons</a> (bx.scss)</li>
<li><a href="https://github.com/danklammer/bytesize-icons">Bytesize Icons</a> (bytesize.scss)</li>
<li><a href="https://github.com/carbon-design-system/carbon/tree/main/packages/icons">Carbon</a> (carbon.scss)</li>
<li><a href="https://github.com/coreui/coreui-icons">CoreUI Brands</a> (cib.scss)</li>
<li><a href="https://github.com/coreui/coreui-icons">CoreUI Flags</a> (cif.scss)</li>
<li><a href="https://github.com/coreui/coreui-icons">CoreUI Free</a> (cil.scss)</li>
<li><a href="https://github.com/vmware/clarity">Clarity</a> (clarity.scss)</li>
<li><a href="https://github.com/microsoft/vscode-codicons">Codicons</a> (codicon.scss)</li>
<li><a href="https://github.com/atomiclabs/cryptocurrency-icons">Cryptocurrency Icons</a> (cryptocurrency.scss)</li>
<li><a href="https://github.com/WordPress/dashicons">Dashicons</a> (dashicons.scss)</li>
<li><a href="https://github.com/outpunk/evil-icons">Evil Icons</a> (ei.scss)</li>
<li><a href="http://elusiveicons.com/">Elusive Icons</a> (el.scss)</li>
<li><a href="https://github.com/emojione/emojione">Emoji One (Colored.scss)</a> (emojione.scss)</li>
<li><a href="https://github.com/emojione/emojione">Emoji One (Monotone.scss)</a> (emojione-monotone.scss)</li>
<li><a href="https://github.com/emojione/emojione-legacy">Emoji One (v1.scss)</a> (emojione-v1.scss)</li>
<li><a href="http://www.entypo.com/">Entypo+</a> (entypo.scss)</li>
<li><a href="http://www.entypo.com/">Entypo+ Social</a> (entypo-social.scss)</li>
<li><a href="https://github.com/pprince/etlinefont-bower">Elegant</a> (et.scss)</li>
<li><a href="https://github.com/akveo/eva-icons/">Eva Icons</a> (eva.scss)</li>
<li><a href="http://fontawesome.io/">Font Awesome 4</a> (fa.scss)</li>
<li><a href="http://fontawesome.io/">Font Awesome 5 Brands</a> (fa-brands.scss)</li>
<li><a href="http://fontawesome.io/">Font Awesome 5 Regular</a> (fa-regular.scss)</li>
<li><a href="http://fontawesome.io/">Font Awesome 5 Solid</a> (fa-solid.scss)</li>
<li><a href="https://github.com/feathericon/feathericon">Feather Icon</a> (fe.scss)</li>
<li><a href="https://github.com/feathericons/feather">Feather Icons</a> (feather.scss)</li>
<li><a href="https://github.com/file-icons/icons">File Icons</a> (file-icons.scss)</li>
<li><a href="https://github.com/icons8/flat-Color-icons">Flat Color Icons</a> (flat-color-icons.scss)</li>
<li><a href="https://github.com/designmodo/Flat-UI">Flat UI Icons</a> (flat-ui.scss)</li>
<li><a href="https://github.com/microsoft/fluentui-system-icons">Fluent UI System Icons</a> (fluent.scss)</li>
<li><a href="https://github.com/fontello/fontelico.font">Fontelico</a> (fontelico.scss)</li>
<li><a href="https://github.com/zurb/foundation-icon-fonts">Foundation</a> (foundation.scss)</li>
<li><a href="https://github.com/mozilla/fxemoji">Firefox OS Emoji</a> (fxemoji.scss)</li>
<li><a href="https://github.com/cugos/geoglyphs">GeoGlyphs</a> (geo.scss)</li>
<li><a href="https://github.com/astrit/css.gg">css.gg</a> (gg.scss)</li>
<li><a href="https://github.com/Automattic/gridicons">Gridicons</a> (gridicons.scss)</li>
<li><a href="https://github.com/grommet/grommet-icons">Grommet Icons</a> (grommet-icons.scss)</li>
<li><a href="https://github.com/refactoringui/heroicons">HeroIcons Outline</a> (heroicons-outline.scss)</li>
<li><a href="https://github.com/refactoringui/heroicons">HeroIcons Solid</a> (heroicons-solid.scss)</li>
<li><a href="https://github.com/cyberalien/google-material-design-icons-updated">Google Material Icons</a> (ic.scss)</li>
<li><a href="https://github.com/Keyamoon/IcoMoon-Free">IcoMoon Free</a> (icomoon-free.scss)</li>
<li><a href="https://github.com/icons8/windows-10-icons">Icons8 Windows 10 Icons</a> (icons8.scss)</li>
<li><a href="https://github.com/IcaliaLabs/icalicons">Icalicons</a> (il.scss)</li>
<li><a href="https://github.com/ionic-team/ionicons">IonIcons</a> (ion.scss)</li>
<li><a href="https://github.com/innowatio/iwwa-icons">Innowatio Font</a> (iwwa.scss)</li>
<li><a href="https://github.com/michaelampr/jam">Jam Icons</a> (jam.scss)</li>
<li><a href="https://github.com/icons8/line-awesome">Line Awesome</a> (la.scss)</li>
<li><a href="https://github.com/cyberalien/line-md">Material Line Icons</a> (line-md.scss)</li>
<li><a href="https://github.com/gilbarbara/logos">SVG Logos</a> (logos.scss)</li>
<li><a href="https://github.com/kudakurage/LigatureSymbols">Ligature Symbols</a> (ls.scss)</li>
<li><a href="https://github.com/halfmage/majesticons">Majesticons</a> (majesticons.scss)</li>
<li><a href="https://github.com/mapbox/maki">Maki</a> (maki.scss)</li>
<li><a href="https://github.com/scottdejonge/map-icons">Map Icons</a> (map.scss)</li>
<li><a href="https://github.com/Templarian/MaterialDesign">Material Design Icons</a> (mdi.scss)</li>
<li><a href="https://github.com/Templarian/MaterialDesignLight">Material Design Light</a> (mdi-light.scss)</li>
<li><a href="https://github.com/samcome/webfont-medical-icons">Medical Icons</a> (medical-icon.scss)</li>
<li><a href="https://github.com/mono-company/mono-icons">Mono Icons</a> (mi.scss)</li>
<li><a href="https://github.com/googlei18n/noto-emoji">Noto Emoji</a> (noto.scss)</li>
<li><a href="https://github.com/googlei18n/noto-emoji">Noto Emoji (v1)</a> (noto-v1.scss)</li>
<li><a href="https://github.com/primer/octicons/">Octicons</a> (octicon.scss)</li>
<li><a href="https://github.com/iconic/open-iconic">Open Iconic</a> (oi.scss)</li>
<li><a href="https://github.com/hfg-gmuend/openmoji">OpenMoji</a> (openmoji.scss)</li>
<li><a href="https://github.com/phosphor-icons/phosphor-icons">Phosphor</a> (ph.scss)</li>
<li><a href="https://github.com/halfmage/pixelarticons">Pixelarticons</a> (pixelarticons.scss)</li>
<li><a href="https://github.com/PrestaShop/prestashop-icon-font">PrestaShop Icons</a> (ps.scss)</li>
<li><a href="https://github.com/modulz/radix-icons">Radix Icons</a> (radix-icons.scss)</li>
<li><a href="http://dmitrybaranovskiy.github.io/raphael/">Raphael</a> (raphael.scss)</li>
<li><a href="https://github.com/Remix-Design/RemixIcon">Remix Icon</a> (ri.scss)</li>
<li><a href="http://glyph.smarticons.co">SmartIcons Glyph</a> (si-glyph.scss)</li>
<li><a href="https://github.com/simple-icons/simple-icons">Simple Icons</a> (simple-icons.scss)</li>
<li><a href="https://github.com/thesabbir/simple-line-icons">Simple line icons</a> (simple-line-icons.scss)</li>
<li><a href="https://github.com/mariuszostrowski/subway">Subway Icon Set</a> (subway.scss)</li>
<li><a href="https://github.com/CoreyGinnivan/system-uicons">System UIcons</a> (system-uicons.scss)</li>
<li><a href="https://github.com/tabler/tabler-icons">Tabler Icons</a> (tabler.scss)</li>
<li><a href="https://github.com/teenyicons/teenyicons">Teenyicons</a> (teenyicons.scss)</li>
<li><a href="https://github.com/topcoat/icons">TopCoat Icons</a> (topcoat.scss)</li>
<li><a href="https://github.com/twitter/twemoji">Twitter Emoji</a> (twemoji.scss)</li>
<li><a href="https://github.com/stephenhutchings/typicons.font">Typicons</a> (typcn.scss)</li>
<li><a href="https://github.com/Iconscout/unicons">Unicons</a> (uil.scss)</li>
<li><a href="https://github.com/Iconscout/unicons">Unicons Monochrome</a> (uim.scss)</li>
<li><a href="https://vaadin.com/elements/vaadin-icons">Vaadin Icons</a> (vaadin.scss)</li>
<li><a href="https://github.com/kkvesper/vesper-icons">Vesper Icons</a> (vs.scss)</li>
<li><a href="https://github.com/vscode-icons/vscode-icons">VSCode Icons</a> (vscode-icons.scss)</li>
<li><a href="http://www.justbenice.ru/studio/websymbols/">Web Symbols Liga</a> (websymbol.scss)</li>
<li><a href="http://www.webhostinghub.com/glyphs/">WebHostingHub Glyphs</a> (whh.scss)</li>
<li><a href="https://github.com/erikflowers/weather-icons">Weather Icons</a> (wi.scss)</li>
<li><a href="https://github.com/icons8/WPF-UI-Framework">Icons8 Windows 8 Icons</a> (wpf.scss)</li>
<li><a href="https://github.com/zavoloklom/material-design-iconic-font">Material Design Iconic Font</a> (zmdi.scss)</li>
<li><a href="https://github.com/dukestreetstudio/zondicons">Zondicons</a> (zondicons.scss)</li>
</ul>
