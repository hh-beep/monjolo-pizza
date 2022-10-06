import WebFont from "webfontloader";

function LoadFont() {
  WebFont.load({
    google: {
      families: [  "MuseoModerno", "Inter"  ]
    }
  })
}

export default LoadFont;