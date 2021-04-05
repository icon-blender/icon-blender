
## CSVG Icons

Mix and match SVG icons from among 87,534 icons and 93 icon packages.


### Features

***Include only the icons you need***
* Faster Page Loading
* Custom icon bundles mean smaller transfer sizes

***Use icons from multiple packages***
* Adding icons from another icon package doesn't require including entire packages

***SVG in CSS***
* Eliminating font files means fewer server requests
* Seamless integration with SCSS workflow

***No font files***
* Fewer server requests
* Eliminates "Ensure text remains visible during webfont load" warning on [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)


### Usage

```scss
@import "csvg-icons/_variables.scss";
@import "csvg-icons/_mixins.scss";
@import "csvg-icons/icons/fa.scss";		// import the FontAwesome4 collection
@include csvgIcon($icons-fa,'search');	// include the 'search' icon from the FontAwesome4 collection
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

<ul>
<li><a href="https://github.com/artcoholic/akar-icons">Akar Icons</a></li>
<li><a href="https://github.com/ant-design/ant-design-icons">Ant Design Icons</a></li>
<li><a href="https://github.com/twbs/icons">Bootstrap Icons</a></li>
<li><a href="https://github.com/bpmn-io/bpmn-font">BPMN</a></li>
<li><a href="https://github.com/fontello/brandico.font">Brandico Font</a></li>
<li><a href="https://github.com/atisawd/boxicons">BoxIcons</a></li>
<li><a href="https://github.com/danklammer/bytesize-icons">Bytesize Icons</a></li>
<li><a href="https://github.com/carbon-design-system/carbon/tree/main/packages/icons">Carbon</a></li>
<li><a href="https://github.com/coreui/coreui-icons">CoreUI Brands</a></li>
<li><a href="https://github.com/coreui/coreui-icons">CoreUI Flags</a></li>
<li><a href="https://github.com/coreui/coreui-icons">CoreUI Free</a></li>
<li><a href="https://github.com/vmware/clarity">Clarity</a></li>
<li><a href="https://github.com/microsoft/vscode-codicons">Codicons</a></li>
<li><a href="https://github.com/atomiclabs/cryptocurrency-icons">Cryptocurrency Icons</a></li>
<li><a href="https://github.com/WordPress/dashicons">Dashicons</a></li>
<li><a href="https://github.com/outpunk/evil-icons">Evil Icons</a></li>
<li><a href="http://elusiveicons.com/">Elusive Icons</a></li>
<li><a href="https://github.com/emojione/emojione">Emoji One (Colored)</a></li>
<li><a href="https://github.com/emojione/emojione">Emoji One (Monotone)</a></li>
<li><a href="https://github.com/emojione/emojione-legacy">Emoji One (v1)</a></li>
<li><a href="http://www.entypo.com/">Entypo+</a></li>
<li><a href="http://www.entypo.com/">Entypo+ Social</a></li>
<li><a href="https://github.com/pprince/etlinefont-bower">Elegant</a></li>
<li><a href="https://github.com/akveo/eva-icons/">Eva Icons</a></li>
<li><a href="http://fontawesome.io/">Font Awesome 4</a></li>
<li><a href="http://fontawesome.io/">Font Awesome 5 Brands</a></li>
<li><a href="http://fontawesome.io/">Font Awesome 5 Regular</a></li>
<li><a href="http://fontawesome.io/">Font Awesome 5 Solid</a></li>
<li><a href="https://github.com/feathericon/feathericon">Feather Icon</a></li>
<li><a href="https://github.com/feathericons/feather">Feather Icons</a></li>
<li><a href="https://github.com/file-icons/icons">File Icons</a></li>
<li><a href="https://github.com/icons8/flat-Color-icons">Flat Color Icons</a></li>
<li><a href="https://github.com/designmodo/Flat-UI">Flat UI Icons</a></li>
<li><a href="https://github.com/microsoft/fluentui-system-icons">Fluent UI System Icons</a></li>
<li><a href="https://github.com/fontello/fontelico.font">Fontelico</a></li>
<li><a href="https://github.com/zurb/foundation-icon-fonts">Foundation</a></li>
<li><a href="https://github.com/mozilla/fxemoji">Firefox OS Emoji</a></li>
<li><a href="https://github.com/cugos/geoglyphs">GeoGlyphs</a></li>
<li><a href="https://github.com/astrit/css.gg">css.gg</a></li>
<li><a href="https://github.com/Automattic/gridicons">Gridicons</a></li>
<li><a href="https://github.com/grommet/grommet-icons">Grommet Icons</a></li>
<li><a href="https://github.com/refactoringui/heroicons">HeroIcons Outline</a></li>
<li><a href="https://github.com/refactoringui/heroicons">HeroIcons Solid</a></li>
<li><a href="https://github.com/cyberalien/google-material-design-icons-updated">Google Material Icons</a></li>
<li><a href="https://github.com/Keyamoon/IcoMoon-Free">IcoMoon Free</a></li>
<li><a href="https://github.com/icons8/windows-10-icons">Icons8 Windows 10 Icons</a></li>
<li><a href="https://github.com/IcaliaLabs/icalicons">Icalicons</a></li>
<li><a href="https://github.com/ionic-team/ionicons">IonIcons</a></li>
<li><a href="https://github.com/innowatio/iwwa-icons">Innowatio Font</a></li>
<li><a href="https://github.com/michaelampr/jam">Jam Icons</a></li>
<li><a href="https://github.com/icons8/line-awesome">Line Awesome</a></li>
<li><a href="https://github.com/cyberalien/line-md">Material Line Icons</a></li>
<li><a href="https://github.com/gilbarbara/logos">SVG Logos</a></li>
<li><a href="https://github.com/kudakurage/LigatureSymbols">Ligature Symbols</a></li>
<li><a href="https://github.com/halfmage/majesticons">Majesticons</a></li>
<li><a href="https://github.com/mapbox/maki">Maki</a></li>
<li><a href="https://github.com/scottdejonge/map-icons">Map Icons</a></li>
<li><a href="https://github.com/Templarian/MaterialDesign">Material Design Icons</a></li>
<li><a href="https://github.com/Templarian/MaterialDesignLight">Material Design Light</a></li>
<li><a href="https://github.com/samcome/webfont-medical-icons">Medical Icons</a></li>
<li><a href="https://github.com/mono-company/mono-icons">Mono Icons</a></li>
<li><a href="https://github.com/googlei18n/noto-emoji">Noto Emoji</a></li>
<li><a href="https://github.com/googlei18n/noto-emoji">Noto Emoji (v1)</a></li>
<li><a href="https://github.com/primer/octicons/">Octicons</a></li>
<li><a href="https://github.com/iconic/open-iconic">Open Iconic</a></li>
<li><a href="https://github.com/hfg-gmuend/openmoji">OpenMoji</a></li>
<li><a href="https://github.com/phosphor-icons/phosphor-icons">Phosphor</a></li>
<li><a href="https://github.com/halfmage/pixelarticons">Pixelarticons</a></li>
<li><a href="https://github.com/PrestaShop/prestashop-icon-font">PrestaShop Icons</a></li>
<li><a href="https://github.com/modulz/radix-icons">Radix Icons</a></li>
<li><a href="http://dmitrybaranovskiy.github.io/raphael/">Raphael</a></li>
<li><a href="https://github.com/Remix-Design/RemixIcon">Remix Icon</a></li>
<li><a href="http://glyph.smarticons.co">SmartIcons Glyph</a></li>
<li><a href="https://github.com/simple-icons/simple-icons">Simple Icons</a></li>
<li><a href="https://github.com/thesabbir/simple-line-icons">Simple line icons</a></li>
<li><a href="https://github.com/mariuszostrowski/subway">Subway Icon Set</a></li>
<li><a href="https://github.com/CoreyGinnivan/system-uicons">System UIcons</a></li>
<li><a href="https://github.com/tabler/tabler-icons">Tabler Icons</a></li>
<li><a href="https://github.com/teenyicons/teenyicons">Teenyicons</a></li>
<li><a href="https://github.com/topcoat/icons">TopCoat Icons</a></li>
<li><a href="https://github.com/twitter/twemoji">Twitter Emoji</a></li>
<li><a href="https://github.com/stephenhutchings/typicons.font">Typicons</a></li>
<li><a href="https://github.com/Iconscout/unicons">Unicons</a></li>
<li><a href="https://github.com/Iconscout/unicons">Unicons Monochrome</a></li>
<li><a href="https://vaadin.com/elements/vaadin-icons">Vaadin Icons</a></li>
<li><a href="https://github.com/kkvesper/vesper-icons">Vesper Icons</a></li>
<li><a href="https://github.com/vscode-icons/vscode-icons">VSCode Icons</a></li>
<li><a href="http://www.justbenice.ru/studio/websymbols/">Web Symbols Liga</a></li>
<li><a href="http://www.webhostinghub.com/glyphs/">WebHostingHub Glyphs</a></li>
<li><a href="https://github.com/erikflowers/weather-icons">Weather Icons</a></li>
<li><a href="https://github.com/icons8/WPF-UI-Framework">Icons8 Windows 8 Icons</a></li>
<li><a href="https://github.com/zavoloklom/material-design-iconic-font">Material Design Iconic Font</a></li>
<li><a href="https://github.com/dukestreetstudio/zondicons">Zondicons</a></li>
</ul>
