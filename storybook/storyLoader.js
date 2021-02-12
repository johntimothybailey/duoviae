// TODO use https://github.com/elderfo/react-native-storybook-loader.git

function loadStories () {
  require('../app/components/Container/stories')
  require('../app/components/Questions/stories')
  require('../app/components/AppBar/stories')
}

module.exports = {
  loadStories
}
